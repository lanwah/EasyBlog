# Markdig 使用说明



**Markdig** 是一款基于 .NET 平台的 Markdown 解析器，它具有以下特点：

-   **高性能**：Markdig 采用了优化的解析方式，在解析大文件时表现出色。
-   **扩展性强**：Markdig 支持多种扩展功能，能够满足不同 Markdown 渲染需求。
-   **完全兼容 CommonMark**：Markdig 完全兼容 CommonMark 规范，支持大多数标准 Markdown 语法，并且在此基础上提供了额外功能。
-   **易于自定义**：Markdig 允许开发者定制解析器和渲染器，甚至可以编写自己的扩展功能。



## 开源地址

- GitHub：[markdig](https://github.com/xoofx/markdig)



## 功能介绍



**基本用法**

```C#
using Markdig;

string markdown = "# Hello, World!\nThis is a Markdown text!";
string html = Markdown.ToHtml(markdown);

Console.WriteLine(html);
```



**启用表格扩展**

```C#
using Markdig;

var pipeline = new MarkdownPipelineBuilder()
    .UsePipeTables()  // 启用表格扩展
    .Build();

string markdown = "| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 Col 1 | Row 1 Col 2 |";
string html = Markdown.ToHtml(markdown, pipeline);

Console.WriteLine(html);
```



## 相关参考

- [Markdig：强大的 .NET Markdown 解析器详解 - 努力，努力再努力 - 博客园](https://www.cnblogs.com/forges/p/18774295)