# Skill invocation

Every skill must declare whether it is user-invoked or model-invoked. User-invoked skills set `disable-model-invocation: true` in `SKILL.md` and `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. Model-invoked skills may be invoked by the model or the user. Each skill has `agents/openai.yaml` for Codex metadata. Keep the invocation settings consistent across harnesses.

Do not instruct a skill to invoke a user-invoked skill. When a user action is needed, ask the user to invoke it.
