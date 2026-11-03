# 项目指令

技能存放在 `skills/` 下的两个分类中：`engineering/` 用于工程工作，`productivity/` 用于通用效率工作。当前没有技能。

每个技能都必须在根目录 `README.md` 中有引用，并在 `.claude-plugin/plugin.json` 的 `skills` 数组中有条目。插件发布的技能集合必须与这两个分类完全一致。

安装说明见 [.agents/install-block.md](./.agents/install-block.md)。`.claude-plugin/marketplace.json` 是本仓库的插件市场。修改任一清单后，运行 `claude plugin validate . --strict`。

根目录 `README.md` 中的每个技能条目，都必须将技能名称链接到其 `SKILL.md`。

每个分类目录都有一个 `README.md`，列出该分类中的每个技能及一句话说明，并将技能名称链接到其 `SKILL.md`。分类的 `README.md` 和根目录 `README.md` 按 **User-invoked** 和 **Model-invoked** 分组。

`engineering/` 和 `productivity/` 中的技能还须有面向读者的文档页面 `docs/<bucket>/<skill-name>.md`。新增、重命名或更改技能的行为时，须按照 [.agents/writing-docs.md](./.agents/writing-docs.md) 创建或同步其文档页面。移除技能时删除其文档页面。

每个 `SKILL.md` 都属于以下两类之一：用户调用型（设置 `disable-model-invocation: true`，并在 `agents/openai.yaml` 中设置 `policy.allow_implicit_invocation: false`，仅能由人调用）；或模型调用型（模型和用户均可调用）。详见 [.agents/invocation.md](./.agents/invocation.md)。

如需将技能链接到本地运行环境的技能目录（`~/.claude/skills`、`~/.agents/skills`），运行 `scripts/link-skills.sh`。每个条目都是指向本仓库的符号链接；新增、移除或重命名技能后需重新运行该脚本。该脚本不会删除过去安装的失效链接。

本仓库的文字内容中不得使用破折号 em dash，包括 `SKILL.md`、文档、`README.md`、`CHANGELOG.md`、ADR、changeset 和代码注释。遇到需要使用该符号的句子时，应根据语义改写，使用逗号、冒号、句号、括号或连词，不得机械地替换字符。

每个派发子代理的技能都要求以全新的上下文窗口启动子代理。有些运行环境（例如 Codex）默认会派生父会话，而派生会继承父级上下文，这与子代理需要摆脱原有上下文的目的相悖。

## Agent 技能

### 问题分拣标签

使用规范名称，不作更改。详见 `docs/agents/triage-labels.md`。Issue 按照 [`SCOPE.md`](./SCOPE.md) 评估。
