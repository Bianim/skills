# 插件清单与图标

插件同时维护两份清单：

- `.claude-plugin/plugin.json`：Claude Code 读取，`icon` 指向 `assets/icon-512.png`。
- `.codex-plugin/plugin.json`：Codex 读取，`interface` 提供 `displayName`、`composerIcon`、`logo`、`brandColor` 等展示字段。

两份清单的 `name`、`version`、`description` 和 `skills` 必须一致。`npm run version` 会同步版本号，`npm run check-plugin-version` 会同时校验版本号和技能集合。

## 图标

`assets/icon.svg` 是矢量源文件，图案是大括号包围星芒：大括号代表 C 代码块，星芒代表可复用的技能和效率工具。修改后需使用 SVG 导出工具重新生成 `assets/icon-512.png`、`icon-256.png`、`icon-128.png`、`icon-32.png` 和 `assets/social-preview.png`，并保持两份清单中的路径不变。

Claude Code 的插件目录要求正方形的 PNG 或 JPEG，边长 512 到 2048 像素且小于 2 MB，因此 `icon` 使用 `icon-512.png`。Codex 的 `interface.composerIcon` 使用 `icon.svg`，`interface.logo` 使用同一张 512px PNG。

`assets/social-preview.png` 用于 GitHub 仓库的社交预览，需要在仓库设置中手动上传。
