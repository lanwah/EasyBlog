# DotNet单元测试

*单元测试* 是一种测试，用于练习各个软件组件或方法，也称为“工作单元”。单元测试应仅测试开发人员控件中的代码。 它们不测试基础结构问题。 基础结构问题包括与数据库、文件系统和网络资源交互。

有关创建单元测试的详细信息，请参阅 [测试工具](https://learn.microsoft.com/zh-cn/dotnet/core/testing/#testing-tools)。

- [.NET 中的测试 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/testing/)
  - [MSTest 概述 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-mstest-intro)
  - [使用代码覆盖率来进行单元测试 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-code-coverage?tabs=windows)

- [单元测试基础知识 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/test/unit-test-basics?view=vs-2022)

  - [确定代码测试覆盖率 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/test/using-code-coverage-to-determine-how-much-code-is-being-tested?view=vs-2022&tabs=csharp)

    > ==代码覆盖率仅适用于 Visual Studio Enterprise==

  - [Microsoft.CodeCoverage.Console 工具 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/test/microsoft-code-coverage-console-tool?view=vs-2022)

    - [dotnet-coverage 代码覆盖率工具 - .NET CLI - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/additional-tools/dotnet-coverage)

      > ```.NET CLI
      > # 安装最新版 dotnet-coverage 工具
      > dotnet tool install --global dotnet-coverage
      > ```



## 相关参考

- [分析C#项目的单元测试覆盖率，提高代码质量 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/19026074/csharp-unit-test-coverage-analysis)
- [使用MSTest进行单元测试入门 - jack\_Meng - 博客园](https://www.cnblogs.com/mq0036/p/13261499.html)
- [使用 coverlet 查看.NET Core应用的测试覆盖率 - yangxu-pro - 博客园](https://www.cnblogs.com/yangxu-pro/p/9326127.html)