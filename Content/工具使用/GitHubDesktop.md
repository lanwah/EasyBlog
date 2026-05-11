# GitHub Desktop 使用手册

用于记录GitHub Desktop的使用技巧。

## 快捷键

| 快捷键           | 含义                                  | 前置条件 |
| ---------------- | ------------------------------------- | -------- |
| Ctrl + T         | 打开仓库列表                          |          |
| Ctrl + B         | 显示分支列表                          |          |
| Ctrl + 1         | 显示更改                              |          |
| Ctrl + 2         | 显示历史                              |          |
| Ctrl + Shift + G | 在浏览器中打开GitHub/Gitee仓库        |          |
| Ctrl + Shift + T | 获取仓库最新代码，不自动合并（Fetch） |          |
| Ctrl + P         | 推送（Push）                          |          |
| Ctrl + Shift + P | 拉取仓库最新代码并自动合并（Pull）    |          |



# GitHub

- [GitHub 汉化神器，2步快速解锁中文化 GitHub 界面！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514604&idx=1&sn=2caa86bad9e097d68f8bebd19f48444e&chksm=96b2e95a480575543192429714586c43ac19084f9d5f5c42dae0af91556b8236df9151dc7248&scene=126&sessionid=1750330396#rd)
- [GitHub Docs](https://docs.github.com/en)
  - [GitHub 文档 - GitHub 文档](https://githubdocs.cn/en)
    - [开始使用 GitHub 文档 - GitHub Docs - GitHub 文档](https://githubdocs.cn/en/get-started)
    - [GitHub Actions 快速入门 - GitHub 文档](https://docs.github.com/zh/actions/get-started/quickstart)
      - [GitHub Actions 快速入门 - GitHub 文档](https://docs.github.com/zh/actions/get-started/quickstart)
      - [上下文参考 - GitHub 文档](https://docs.github.com/zh/actions/reference/workflows-and-actions/contexts)
      - [starter-workflows/pages at main · actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/pages)
      - [Marketplace](https://github.com/marketplace?type=actions)
        - [chuongvuvan/awesome-actions](https://github.com/chuongvuvan/awesome-actions)
      - [创建示例工作流 - GitHub 文档](https://docs.github.com/zh/actions/tutorials/create-an-example-workflow)

## [使用工作流模板](https://docs.github.com/zh/actions/get-started/quickstart#using-workflow-templates)

GitHub 提供预配置的工作流模板，可以按原样使用或自定义它来创建自己的工作流。 GitHub 分析代码并显示可能对仓库有用的工作流模板。 例如，如果仓库包含 Node.js 代码，您就会看到 Node.js 项目的建议。

这些工作流模板旨在帮助你快速启动和运行，提供了一系列配置，例如：

- CI：[持续集成工作流](https://github.com/actions/starter-workflows/tree/main/ci)
- 部署：[部署工作流](https://github.com/actions/starter-workflows/tree/main/deployments)
- 自动化：[自动化工作流](https://github.com/actions/starter-workflows/tree/main/automation)
- 代码扫描：[代码扫描工作流](https://github.com/actions/starter-workflows/tree/main/code-scanning)
- 页面：[页面工作流](https://github.com/actions/starter-workflows/tree/main/pages)

使用这些工作流作为构建自定义工作流的起点或按原样使用它们。 可以在 [actions/starter-workflows](https://github.com/actions/starter-workflows) 存储库中浏览工作流模板的完整列表。
