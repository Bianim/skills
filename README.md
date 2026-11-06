<p align="center">
  <img src="./assets/icon.svg" width="96" height="96" alt="Bianim Skills 图标">
</p>

# Bianim Skills

本仓库是 [Bianim 的技能库](https://github.com/Bianim/skills)，包含工程和效率技能。

- [工程技能](./skills/engineering/README.md)
- [效率技能](./skills/productivity/README.md)

## 模型可调用

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

其他支持 Agent Skills 的平台可使用以下命令安装本仓库的技能：

```bash
npx skills@latest add Bianim/skills
```

通过 `npx skills` 只能安装技能，不能安装插件钩子。插件钩子需要执行环境中的 `python` 命令可用。安装插件和单独安装技能任选其一，避免重复加载。
