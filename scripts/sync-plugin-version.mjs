#!/usr/bin/env node
// Copies package.json's version into the Claude and Codex plugin manifests.
// Runs as part of `npm run version`, immediately after `changeset version`.
// With --check it changes nothing and exits 1 if a version differs or the two
// manifests list different skills.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));

const manifests = [
  join(repo, ".claude-plugin", "plugin.json"),
  join(repo, ".codex-plugin", "plugin.json"),
].map((path) => {
  const source = readFileSync(path, "utf8");
  return { path, label: relative(repo, path), source, json: JSON.parse(source) };
});

const skillLists = manifests.map(({ json }) =>
  JSON.stringify([...(json.skills ?? [])].sort()),
);
if (new Set(skillLists).size > 1) {
  console.error(
    "The plugin manifests list different skills. Keep .claude-plugin/plugin.json and .codex-plugin/plugin.json in sync.",
  );
  process.exit(1);
}

let failed = false;

for (const manifest of manifests) {
  if (manifest.json.version === version) {
    console.log(`${manifest.label} version is ${version} (already in sync)`);
    continue;
  }

  if (check) {
    console.error(
      `${manifest.label} version is ${manifest.json.version}, package.json is ${version}. Run \`node scripts/sync-plugin-version.mjs\`.`,
    );
    failed = true;
    continue;
  }

  // Rewrite only the version line, to keep the key order and the formatting.
  const updated = manifest.source.replace(
    /("version"\s*:\s*")[^"]*(")/,
    `$1${version}$2`,
  );

  if (JSON.parse(updated).version !== version) {
    console.error(`Could not find a version field to replace in ${manifest.label}.`);
    process.exit(1);
  }

  writeFileSync(manifest.path, updated);
  console.log(`${manifest.label} version ${manifest.json.version} -> ${version}`);
}

if (failed) {
  process.exit(1);
}
