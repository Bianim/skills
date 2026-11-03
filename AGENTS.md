# 项目指令

技能按以下分类存放在 `skills/` 下：

- `engineering/`：日常编程工作。
- `productivity/`：日常非编程工作流工具。
- `misc/`：保留但很少使用，不对外推广。
- `in-progress/`：公开测试，欢迎反馈，不随插件发布。
- `deprecated/`：不再使用。

`engineering/` 和 `productivity/` 中的每个技能（即**正式发布的技能**）都必须在根目录的 `README.md` 中有引用，并在 `.claude-plugin/plugin.json` 的 `skills` 数组中有条目。Claude Code 插件发布的技能集合必须与这两个分类完全一致。`misc/`、`in-progress/` 和 `deprecated/` 中的技能不得出现在这两处。

安装命令须从 [.agents/install-block.md](./.agents/install-block.md) 原样复制。`.claude-plugin/marketplace.json` 是本仓库自己的插件市场。除 Claude Code 外，所有 Agent 都从该市场安装以获得自动更新；Claude Code 使用 `claude-plugins-official`。修改任一清单后，运行 `claude plugin validate . --strict`。原因见 [ADR 0002](./.agents/adr/0002-ship-as-a-claude-code-plugin.md)。

根目录 `README.md` 中的每个技能条目，都必须将技能名称链接到其 `SKILL.md`。

每个分类目录都有一个 `README.md`，列出该分类中的每个技能及一句话说明，并将技能名称链接到其 `SKILL.md`。正式分类的 `README.md` 和根目录 `README.md` 按 **User-invoked** 和 **Model-invoked** 分组；非正式分类的 `README.md`（`misc/`、`in-progress/`）使用平铺列表。

`engineering/` 和 `productivity/` 中的技能还须有面向读者的文档页面 `docs/<bucket>/<skill-name>.md`，即 `docs` 目录镜像 `skills/` 下的这两个分类。不论分类为何，发布后的 URL 均为 `https://aihero.dev/skills-<skill-name>`；文档路径仅用于仓库组织。新增、重命名或更改 `engineering/` 或 `productivity/` 中技能的行为时，须按照 [.agents/writing-docs.md](./.agents/writing-docs.md) 创建或重新同步其文档页面。完成的页面须包含四个部分：**What it does**、**When to reach for it**、**Common questions** 和 **It's working if**。模板、章节顺序和寻找常见问题的来源均见 `writing-docs.md`。非正式分类（`misc/`、`in-progress/`、`deprecated/`）中的技能**不**创建文档页面。唯一的例外是正式技能被直接移除时，其页面保留并标记为已归档，详见 `writing-docs.md`。

每个 `SKILL.md` 都属于以下两类之一：用户调用型（设置 `disable-model-invocation: true`，并在 `agents/openai.yaml` 中设置 `policy.allow_implicit_invocation: false`，仅能由人调用）；或模型调用型（模型和用户均可调用）。详见 [.agents/invocation.md](./.agents/invocation.md)。

[`ask-matt`](./skills/engineering/ask-matt/SKILL.md) 是负责梳理所有用户可调用技能及其关系的路由器。触发文档页面重新同步的变更同样适用于它：每当新增、重命名、移除用户可调用技能，或改变其在工作流中的位置时，重新阅读 `ask-matt` 的 `SKILL.md` 并更新映射，确保它不会遗漏新技能或继续指向过时技能。

如需将 `deprecated/` 和 `misc/` 之外的所有技能重新链接到本地运行环境的技能目录（`~/.claude/skills`、`~/.agents/skills`），运行 `scripts/link-skills.sh`。每个条目都是指向本仓库的符号链接，因此执行 `git pull` 即可更新已安装的技能；新增、移除或重命名技能后需重新运行该脚本。

本仓库的文字内容中不得使用破折号 em dash，包括 `SKILL.md`、文档、`README.md`、`CHANGELOG.md`、ADR、changeset 和代码注释。遇到需要使用该符号的句子时，应根据语义改写，使用逗号、冒号、句号、括号或连词，不得机械地替换字符。

每个派发子代理的技能都要求以全新的上下文窗口启动子代理。有些运行环境（例如 Codex）默认会派生父会话，而派生会继承父级上下文，这与子代理需要摆脱原有上下文的目的相悖。

## Agent 技能

### 问题分拣标签

使用规范名称，不作更改。详见 `docs/agents/triage-labels.md`。Issue 按照 [`SCOPE.md`](./SCOPE.md) 评估。
