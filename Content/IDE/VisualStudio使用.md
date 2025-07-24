# Visual Studio 使用

[TOC]

记录Visual Studio的相关操作

## 常用快捷键

记录常用快捷键的使用

### 文件操作相关

新建，保存，关闭文件相关的快捷键。

| 快捷键             | 含义                          | 前置条件 |
| ------------------ | ----------------------------- | -------- |
| `Ctrl + Shift + A` | 在当前文件同目录下 ==新建项== |          |
| `Alt + Shift + A`  | 添加现有项                    |          |
| `Alt + Shift + C`  | 新建类                        |          |
| `Ctrl + S`         | 保存当前文件                  |          |
| `Ctrl + Shift + S` | 保存所有文件                  |          |
| `Ctrl + F4`        | 关闭当前文件（窗口）          |          |
| `Ctrl + F6`        | 打开下一个文件（窗口）        |          |



### 内容查找与替换相关

| 快捷键             | 含义                                                         | 前置条件 |
| ------------------ | ------------------------------------------------------------ | -------- |
| `Ctrl + F`         | 在当前文件/打开的文件/当前项目...中查找                      |          |
| `Ctrl + H`         | 在当前文件/打开的文件/当前项目...中替换                      |          |
| `Ctrl + Shift + F` | 在文件中查找，Alt + 按键可以相应本窗体内部的操作，比如Alt + U |          |
| `Ctrl + Shift + H` | 在文件中替换，Alt + 按键可以相应本窗体内部的操作，比如Alt + U |          |
| `Ctrl + T`         | 转到全部<br />输入f 空格，同 `CTRL + SHIFT + T`<br />输入m空格，同 `ALT + \` |          |
| `Ctrl + Shift + T` | 转到文件，VS2022                                             |          |
| `Ctrl + 1 + T`     | 根据类型检索，VS2022                                         |          |
| `Alt + \`          | 根据函数检索，VS2022                                         |          |
| `Alt + Shift + F`  | 根据文本检索，VS2022                                         |          |
| `Ctrl + K + R`     | 查找所有引用                                                 |          |
| `Shift + F12`      | 查找所有引用，弹出窗口方式                                   |          |



### 编码相关

| 快捷键                     | 含义                                                         | 前置条件 |
| -------------------------- | ------------------------------------------------------------ | -------- |
| `F12`                      | 转到定义                                                     |          |
| `Alt + F12`                | 速览定义，按 Esc 推出                                        |          |
| `Ctrl + F12`               | 转到接口实现                                                 |          |
| `Alt + 上/下方向键`        | 选中的内容或当前光标所在的内容上/下移动                      |          |
| `Shift + (`                | 插入一对（）                                                 |          |
| `Ctrl  + B + T`            | 设置/取消书签                                                |          |
| `Ctrl  + B + P`            | 跳转到设置的上一个标签                                       |          |
| `Ctrl  + B + N`            | 跳转到设置的下一个标签                                       |          |
| `Ctrl  + B + C`            | 清楚所有标签                                                 |          |
| `Ctrl + W + B`             | 显示标签窗口                                                 |          |
| `Ctrl  + SHIFT + U`        | 选中文本转大写                                               |          |
| `Ctrl  + U`                | 选中文本转小写                                               |          |
| `Ctrl  + G`                | 转到行                                                       |          |
| `Ctrl  + M + O`            | 折叠到定义                                                   |          |
| `Ctrl  + M + L`            | 切换所有大纲显示                                             |          |
| `Ctrl + K + C`             | 注释选中的内容                                               |          |
| `Ctrl + K + U`             | 取消注释选中的内容                                           |          |
| `Ctrl + K + D`             | 格式化当前文档                                               |          |
| `Ctrl + K + F`             | 格式化选中的内容                                             |          |
| `Ctrl + -（减号）`         | 后退                                                         |          |
| `Ctrl + Shift + -（减号）` | 前进                                                         |          |
| `F7`                       | 查看代码                                                     |          |
| `Shift + F7`               | 打开设计器                                                   |          |
| `Ctrl + W + S`             | 解决方案资源管理器                                           |          |
| `Ctrl + W + D`             | 代码定义窗口                                                 |          |
| `Ctrl + W + E`             | 错误列表                                                     |          |
| `Ctrl + W + O`             | 输出列表                                                     |          |
| `CTRL + W + T`             | 打开任务列表（TODO，HACK，UNDONE），用CodeRush的话会跟Ctrl+W快捷键冲突。<br />可以通过VS菜单的视图/任务列表打开（Alt+V,K） |          |
| `Ctrl + W + X`             | 工具箱                                                       |          |
| `Ctrl + W + U`             | 文档大纲                                                     |          |
| `Shift + Esc`              | 关闭相关视图窗口                                             |          |
| `F4`                       | 属性窗口                                                     |          |
| `Ctrl + W + P`             | 属性窗口                                                     |          |
| Ctrl + R + W               | 切换显示缩进符号                                             |          |
|                            |                                                              |          |



### 编译调试与运行相关

| 快捷键              | 含义                                         | 前置条件 |
| ------------------- | -------------------------------------------- | -------- |
| `F6`                | 生成解决方案                                 |          |
| `Shift + F6`        | 生成当前解决方案                             |          |
| `Ctrl + Break`      | 取消生成                                     |          |
| `ALT + F10`         | 热重载（加载当前修改代码，以便修改实时生效） |          |
| `Ctrl + Alt + P`    | 附加到进程                                   |          |
| `Alt + Shift + P`   | 重新附加到进程                               |          |
| `F5`                | 启动调试                                     |          |
| `Ctrl + F5`         | 启动（不进行调试）                           |          |
| `F10`               | 逐过程调试                                   |          |
| `F11`               | 逐句调试                                     |          |
| `F9`                | 设置/取消设置断点                            |          |
| `Ctrl + Shift + F9` | 删除所有断点                                 |          |
| `Ctrl + D + B`      | 显示断点窗口                                 |          |
| `Ctrl + Alt +E`     | 显示异常设置窗口                             |          |
| `Ctrl + Alt + F2`   | 显示诊断工具                                 |          |
| `Ctrl + D + A`      | 自动窗口                                     |          |
| `Ctrl + D + L`      | 局部变量窗口                                 |          |
| `Ctrl + D + I`      | 即时窗口                                     |          |
| `Ctrl + D + C`      | 调用堆栈窗口                                 |          |
| `Ctrl + D + T`      | 线程串口                                     |          |
| `Ctrl + D + M`      | 模块窗口                                     |          |
| `Ctrl + D + P`      | 进程窗口                                     |          |
| `Ctrl + Alt + D`    | 反汇编                                       |          |
| `Ctrl + D + R`      | 寄存器                                       |          |



## Visual Studio 插件

- [2024年最新最全Visual Studio实用插件推荐！ (qq.com)](https://mp.weixin.qq.com/s/A5mMJZkcUMdfkJFNG7sEWQ)
- [2025 年全面且实用的 Visual Studio 插件推荐，开发效率提升利器！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512882&idx=1&sn=ac6aa49f58a210e0397eef9853ff54a0&chksm=962c6ebc254cccce4f8e8c4654bf5410d2f6b5613d875e0887b3007440885e0ac4a0d25fa346&scene=126&sessionid=1745456006#rd)
- [开发效率提升利器：5款支持C#语言的AI辅助编程工具](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503495&idx=1&sn=53da5ec1a1dd8cf6c325d062ad4e7f3d&chksm=96faa2572620b58390a2279a909aa2a06771ad74194d998fbf3f6257523ec04b5f2531569c49&scene=126&sessionid=1722213176#rd)
- [6款支持C#语言的AI辅助编程工具，开发效率提升利器！ (qq.com)](https://mp.weixin.qq.com/s/09B6fKbGgQU90VNK74uPCg)
- [一个.NET开源的 Git 图形用户界面（GUI）工具 【Git Extensions】](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504786&idx=1&sn=2de96ff67d8ae52e321d8253dfc3313b&chksm=967394d5b92ba761cd9913eacf575433b0366eaeac410d959eae91cd59d45a50a35cde4d894a&scene=126&sessionid=1725842446#rd)
- [CodeMaid：一款基于.NET开发的Visual Studio代码简化和整理实用插件 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505738&idx=1&sn=0d56b52d12141ea48334d2236f59cbb8&chksm=965c6d42d76ffbe56cfc3c80c1ac84d21826f2fb159bf09db9721bcdcea8814d2ba47017226a&scene=126&sessionid=1727138667#rd)
- [好消息，在 Visual Studio 中可以免费使用 GitHub Copilot 了！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508650&idx=1&sn=94bf5d51db25746b0e7d34c20c6c66ad&chksm=968d71b48d47932cc6b36649de5e365f8dd15b65dbe14c05b02ee2b20d82203a931321f2587a&scene=126&sessionid=1734694164#rd)



## Visual Studio 调试

- [编程技巧 --- VS远程调试](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504050&idx=3&sn=b6faeeec08ba9125fd11d3f867601aac&chksm=96467c32caa9c460f5d03a7286c36d1943649345bf5e6245c35c0bb2c1e82c7f3e558e7f8ddb&scene=126&sessionid=1723511292#rd)



## Visual Studio 技巧

- [Visual Studio提高效率的三个小技巧? (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506312&idx=4&sn=133f42ea0405698f6512f7e2597365e6&chksm=96747c9c1a4963d451ddcf7bf38f5c371db01393b0b184da8dd0c5ca2ff281caaf589346b7a2&scene=126&sessionid=1728867433#rd)

- [.NET 在 Visual Studio 中的高效编程技巧集](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508804&idx=1&sn=ae9d4a9d9695be1a315a5d5809d43823&chksm=96683bee7eee064a02c90f3e7a39c8686b58fdf95571b2aeebfb781c067f5779fe830ed1c4b1&scene=126&sessionid=1735173789#rd)

- [【译】Visual Studio 中新的强大生产力特性 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18764506)

  > 有时候，生活中的小事才是最重要的。在最新版本的 Visual Studio 中，我们增加了一些功能和调整，目的是让您脸上带着微笑，让您更有效率。这里是其中的一些列表，如果您想要完整的列表，请查看发行说明。



## Visual Studio 更新日志

- **Visual Studio 2022**

  - [Visual Studio 2022 Release Notes | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes#17.12.3)

  - [【译】我们最喜欢的2024年的 Visual Studio 新功能 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18687409)

  - [Visual Studio 2022 v17.13新版发布：强化稳定性和安全，助力 .NET 开发提效！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512433&idx=1&sn=ac60ee990e9c379e3518bba462e2415e&scene=21#wechat_redirect)




## 功能与探索

- [Introducing support for SLNX, a new, simpler solution file format in the .NET CLI - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-slnx-support-dotnet-cli/)

  > 多年来，解决方案文件一直是 .NET 和 Visual Studio 体验的一部分，并且它们始终具有相同的自定义格式。最近，Visual Studio 解决方案团队已开始预览一种新的基于 XML 的解决方案文件格式，称为 SLNX。从 .NET SDK 9.0.200 开始，dotnetCLI 支持以与现有解决方案文件相同的方式构建和与这些文件交互。在本文的其余部分，我们将展示用户如何迁移到新格式，探索 CLI 中的新支持dotnet，并讨论迈向格式普遍可用版本的后续步骤。

- [技术速递｜SLNX 支持简介，.NET CLI 中一种更加简化的全新解决方案文件格式](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511825&idx=2&sn=d6c14f82a9bc5a880a3b35b362ce420e&chksm=96ce3cc463f7b6c12bec65b68da85568183fef5f918718bceae3b110971f08795329f8e5bbe7&scene=126&sessionid=1743036165#rd)
