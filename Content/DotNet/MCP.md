# MCP

MCP is an open protocol that enables AI models to securely interact with local and remote resources through standardized server implementations.
MCP 是一种使 AI 模型能够通过标准化接口与本地和远程资源进行安全交互的开放协议。

- [小白一文搞懂MCP\_mcp文件-CSDN博客](https://blog.csdn.net/qq_42627388/article/details/147842700)
- [Nacos赋能企业级MCP服务实现多架构统一管理-开发者社区-阿里云](https://developer.aliyun.com/article/1665537)
- [MCP 架构设计：Local MCP Server 架构设计、Remote MCP Server 架构设计-CSDN博客](https://blog.csdn.net/star_nwe/article/details/147039338)
- [Model Context Protocol（MCP）简介以及简单示例代码测试（.net8） - 橙子家 - 博客园](https://www.cnblogs.com/hnzhengfy/p/19074152/mcp_dotnet8)



## MCP服务端类型

MCP服务端主要有两种核心类型：‌**本地MCP Server**‌和‌**远程MCP Server**‌，它们的核心区别在于部署位置和通信方式。

### 本地MCP Server

运行在用户本地设备上，通过标准输入输出（STDIO）与客户端通信。其优势在于‌**数据安全性高**‌（敏感信息不出本地）、‌**响应延迟极低**‌（进程间直接通信）且‌**支持离线使用**‌。但缺点是对本地计算资源要求高，且需在每个环境单独部署维护，适合对数据隐私和实时性要求极高的场景，如金融核心系统或工业现场系统。



- [C#实现Stdio通信方式的MCP Server - chingho - 博客园](https://www.cnblogs.com/chingho/p/18913876)
- [MCP stdio 传输机制深度解析与实战示例\_stdioservertransport-CSDN博客](https://blog.csdn.net/i042416/article/details/148478853)
- [.NET 创建MCP使用大模型对话-CSDN博客](https://blog.csdn.net/a123_z/article/details/146907261)



### 远程MCP Server

部署在云端服务器上，客户端通过HTTP协议（如SSE）远程访问。其优势在于‌**可扩展性强**‌（支持多用户、多租户）、‌**集中化管理**‌（便于监控和运维）且‌**部署灵活**‌（无需用户本地资源）。但缺点是‌**依赖网络稳定性**‌，且所有数据需传输至云端，存在一定的安全风险，适合SaaS应用、公共云服务等场景。



- [.NET 创建MCP使用大模型对话二：调用远程MCP服务\_大模型如何调用mcp server-CSDN博客](https://blog.csdn.net/a123_z/article/details/146981986)
- [.NET开发MCP服务教程以及接入Dify的演示-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2516780)



此外，根据企业级需求，还存在‌**MCP Client通过Proxy连接Remote Server**‌的架构，通过代理层实现安全防护、智能路由和流量调度，但架构复杂度更高。

## .NET MCP

- [快速入门 - 创建最小 MCP 服务器并发布到 NuGet - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/ai/quickstarts/build-mcp-server)
- [快速入门 - 使用 .NET 创建最小 MCP 客户端 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/ai/quickstarts/build-mcp-client)
- [NuGet Gallery | MCP Packages](https://www.nuget.org/packages/?q=&includeComputedFrameworks=true&packagetype=mcpserver&prerel=true&sortby=relevance)



## 调试MCP服务

- [MCP开发调试神器：MCP Inspector 安装与使用全指南MCP Inspector 是专为 MCP（Model - 掘金](https://juejin.cn/post/7512720970312171572)