# Bianim Skills

本仓库是 [Bianim 的技能库](https://github.com/Bianim/skills)，包含工程和效率技能。

- [工程技能](./skills/engineering/README.md)
- [效率技能](./skills/productivity/README.md)

## Model-invoked

- [c-code-standards](./skills/engineering/c-code-standards/SKILL.md)：编写或修改 C 代码时检查编码、排版和中文注释规范。

## 安装

Claude Code：添加本仓库为插件市场，然后安装插件：

```bash
claude plugin marketplace add Bianim/skills
claude plugin install bianim-skills@bianim
```

Codex：添加插件市场并安装插件，按提示审查和信任插件钩子，然后开启新会话：

```bash
codex plugin marketplace add Bianim/skills
codex plugin add bianim-skills@bianim
```

其他支持 Agent Skills 的平台可使用 `npx skills@latest add Bianim/skills --skill c-code-standards` 安装技能。该方式仅安装技能，不会注册插件钩子。其他平台的插件格式和钩子事件支持可能不同，不应假定三个钩子均可运行。

插件内的三个钩子分别在会话开始、用户发消息和子代理开始时加载技能正文。钩子需要执行环境中的 `python` 命令可用；技能本身不依赖 Python。安装插件和安装单独技能任选其一，避免重复加载。

安装命令获取远程仓库中的已发布内容，本地未提交的更改不会自动安装。插件管理器可能按版本缓存已安装的副本，发布变更时需运行项目的版本发布流程；用户若仍看到旧内容，应刷新插件市场或重新安装。
