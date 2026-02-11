# DotNet 技术整理

[TOC]

---

本文用于记录 .NET 整理，归纳，总结性文章。

- [C# 枚举器（enumerator） - 小林野夫 - 博客园 (cnblogs.com)](https://www.cnblogs.com/cdaniu/p/15856321.html)
- [一文讲清 C#的委托有什么实质性用途? (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505241&idx=3&sn=e6a2425c905c09fd4d8f832691f01ec3&chksm=96ee351c279f2ba661b0169fd583dfc1e120de32dc8a87758dc674f56f35bd1245e3f9b9ebb1&scene=126&sessionid=1726414371#rd)
- [C# Assembly (qq.com)](https://mp.weixin.qq.com/s/HXNDLrAbleMXdam8lvRbMg)
- [你可能不知道的C#几种对象初始化方式 (qq.com)](https://mp.weixin.qq.com/s/oBYbcRRevZdiVEhkd5i6Uw)



## A. AOT

- **[好消息：NET 9 X86 AOT的突破 - 支持老旧Win7与XP环境](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503181&idx=3&sn=102e2675b0ceb557c671e3d1e22bba63&chksm=96052420047bd104e5578c1ee641b0d42d4b160d0ffb7ef7be9705e3b0220d3fa2004801aeda&scene=126&sessionid=1721264675#rd)**

- [AOT使用经验总结 - 沙漠尽头的狼-Dotnet9 - 博客园](https://www.cnblogs.com/Dotnet9-com/p/18529239)

- [.NET9 Linux AOT Json序列化](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507960&idx=2&sn=63273b74059112b39a7e6b217f5c717d&chksm=96d77c460f32dd5159df25b41f8de7b74b0619db38c3c73c379d4a8b69cbbbb59d79064d0470&scene=126&sessionid=1733275028#rd)

- [跨平台交叉编译 Native AOT - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18618066)

- [AOT编译Avalonia应用：StarBlog Publisher项目实践与挑战 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18797316)

  > AOT编译Avalonia应用 StarBlog Publisher 项目实践与挑战
  
- [WPF 引用 ASP.NET Core 的 AOT 版本！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247516218&idx=2&sn=54e7f9a72a08306a626e8e3fc3ca9f5c&scene=21&poc_token=HLOkr2ijR-CwlkZXxJvcvjMPy0yhWqH8j_K-DY_Q)

  > 现在 ASP.NET Core 早已支持 AOT 发布了，只是绝大部分教程都是教大家将其作为应用发布。在本文里面，咱将尝试进行类库发布，发布之后是一个 DLL 文件。通过 UnmanagedCallersOnly 导出函数被其他应用程序所使用混合 WPF 和 ASP.NET Core 两个框架到一个进程里面是比较舒服的事情，让 WPF 负责界面显示逻辑和一些交互控制，让 ASP.NET Core 负责提供 HTTP 服务，各干各的，各自发挥优势。
  
- [.NET 10的AOT 让你的 API 秒开](https://mp.weixin.qq.com/s/-kmvykXZUtn_U1iIWXMRUg)

- [C# 单文件 AOT 打包前后端分离项目](https://mp.weixin.qq.com/s/LjCDRGfpsuNpQ7bcrtc8ig)



## A. ASP.NET Core

- [ASP.NET Core 中的 .NET 通用主机详解](https://mp.weixin.qq.com/s/FiKq7T_H4z56c8eBHq29IA?scene=0&subscene=90)

- [.NET Core：架构、特性和优势详解 - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18662074)

- **[简化ASP.NET Core API神器：用Gridify轻松实现过滤、排序和分页【Gridify】](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504469&idx=3&sn=381d436f87fe97084416e4c3918d76ae&chksm=967a9718d247b340a425bd227b6cda31edd04025914d0cfe648abb7336b59f1fb5690182a68a&scene=126&sessionid=1724806111#rd)**

- [ASP.NET Core OData 9的发布，放弃 .NET Framework (qq.com)](https://mp.weixin.qq.com/s/sKilIxCmP8OG7EccwXFTNA)

- [ASP.NET Core Filter与IOC的羁绊 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506322&idx=5&sn=0401e32e7e6e105b260f40745b948170&chksm=963084f5de0ffec3942c8176b20af6cfc4bb1d91b919bd912ab4d87ce55e90108bde0ada21eb&scene=126&sessionid=1729213064#rd)

- [将ASP.NET Core Web API和Blazor Wasm发布到 IIS](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508114&idx=1&sn=f387e548a304d88696475d6bba74fd56&chksm=96ffc2c0355bdcce1a9064e70be405a5fb23992abede404f50f5a7d5fe2925c4598962f0a18f&scene=126&sessionid=1733706081#rd)

- [Difference Between Minimal API and Controller API .NET Core](https://www.c-sharpcorner.com/article/different-between-minimal-api-and-controller-api-net-core/)

  > 将讨论.NET 9 Core Minimal API 与 Controller API 的区别。Minimal API 是在 .NET 6.0 中引入的一种快速轻量级 API 开发方式，并在 .NET 9 中得到增强。它也非常适合轻量级服务、微服务和小型 API。Minimal API 中没有路由和 [HttpGet] 属性。更简单，所有逻辑都在 Program.cs 中定义。基于 Controller 的 API 是基于 MVC（模型-视图-控制器）模式的，结构化且可扩展。它适合大型和复杂的应用程序。逻辑组织在单独的控制器类中。

- [在Asp.netCore中使用Attribute来描述限流 - jiulang - 博客园](https://www.cnblogs.com/kewei/p/18630545)

- [【ASP.NET Core】调用 Web API 备份数据库 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/18907380)

  > 今天咱们聊一个很单的主题，写一个 Web API，客户端可以调用它来备份 SQL Server 数据库。不知道大伙伴们有没有做过这活。相信做过的人会比老周更明白，毕竟，老熟人都知道，老周有两大弱项：SQL、汇编。汇编呢，是学生时代没好好学，想当年很轻松地就拿下了二级C++，偏就没学会汇编；而 SQL 呢，本来就学得一般，再加上用得少，忘得差不多了，所以别人给老周安排的项目基本不包括写 SQL 的，最终导致 SQL 方面越来越弱。


- [深入了解 ASP.NET Core 中的 IWebHostEnvironment 接口](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247515015&idx=3&sn=67418aa87c2b0ad740fc2106c1218ed4&chksm=96a61be3bcf87c09b0b50c7433cf008cc49cff40769697f37cef01b44808beb548c94ffd9062&scene=126&sessionid=1752022453#rd)

- [深入了解 ASP.NET Core 中的 IWebHostEnvironment 接口](https://mp.weixin.qq.com/s/aZ9FMyw0nkGmQfHUaV4PdQ?scene=0&subscene=90)

- **身份鉴权/身份认证**
  
  - [ASP.NET Core 中基于 Cookie 的身份鉴权实现](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509300&idx=3&sn=435086131053de1e1e57d5800f4b3c26&chksm=966dd908d5f29a93b287606a92c47e4a79f265c6dd419e917db94c8fce2cc5da900af34c9001&scene=126&sessionid=1737334659#rd)
  
- [在 .NET Core中如何使用 Redis 创建分布式锁 - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18655619)

- **StarBlog**
  - [基于.NetCore开发 StarBlog 番外篇 (1) 全新的访问统计功能，异步队列，分库存储 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18731660)

- **中间件**
  - [在 ASP.NET Core 中创建中间件的 4 种方式](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511807&idx=1&sn=0d392060580de92b75e59487ffb9bc7e&chksm=96807d03c28a19a42f62ac100fda1872845dc5247cec235b4e9a5a3662b31d74d05ee7f6b5a8&scene=126&sessionid=1742951008#rd)
  - [ASP.NET Core 中的速率限制中间件的使用](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509131&idx=2&sn=a9d7828a444f8b9c7006089043fe422e&chksm=96eaf02cbd9142560d75a45acfc2c58c71d2a1322d45049ecb2b44eee7baf01050ebb968c809&scene=126&sessionid=1736604622#rd)

- **下载与上传**
  - [AspNetCore中的文件上传与下载优化](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513637&idx=3&sn=a4a5e2573999609c93a282e3902697ea&chksm=961267cc3504ee5a38726f13c148ac3c05889af26111f2a9f879192ba7488c5757d21e3af000&scene=126&sessionid=1747097371#rd)
  - [从零开始:c#如何优雅的操作临时文件/数据？以ASP文件下载为例 - LdotJdot - 博客园](https://www.cnblogs.com/luojin765/p/19109217)
  
- **微服务**

  - [用 Sidecar 容器为 .NET Core 应用做诊断和性能分析 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18886607)

    > 用 Sidecar 容器为 .NET Core 应用做诊断和性能分析。

### Blazor

- [ASP.NET Core Blazor 核心功能二：Blazor表单和验证 - 码农刚子 - 博客园](https://www.cnblogs.com/shenchuanchao/p/19189573)
- [ASP.NET Core Blazor 核心功能三：Blazor与JavaScript互操作——让Web开发更灵活 - 码农刚子 - 博客园](https://www.cnblogs.com/shenchuanchao/p/19194651)

### 健康监控

- [ASP.NET Core 健康监控：从入门到实战](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514763&idx=3&sn=4df1afbc99606256e2f183ca589b60d2&chksm=962f18130523e4ea306e6688ba35382ddac4c34d085a472ea553cb9039432f0942451c44569a&scene=126&sessionid=1750903306#rd)

### 部署

- [ASP.NET Core 部署进化史：从 Windows IIS 到 Docker，再到国产 Linux 容器化实践](https://mp.weixin.qq.com/s/qxBAzom3He-Lk7hQr7T7bQ)



## A. ASP.NET Core MVC

- [模拟ASP.NET Core MVC设计与实现 (qq.com)](https://mp.weixin.qq.com/s/zd56b19MQg5PHF8Nf-T1eg)



## A. AI/AIGC

- [Introducing Microsoft.Extensions.AI Preview - Unified AI Building Blocks for .NET - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-microsoft-extensions-ai-preview/)

- [适用于 .NET 稳定的官方OpenAI库](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506376&idx=1&sn=7016d47686d100aab997bfb11a62563c&chksm=9623badd164d3ad0665805fdcb55009d09871c6cac03bfb010d6aaa53ae6a5f4e57cf3571203&scene=126&sessionid=1729426307#rd)

- [C#深度学习：如何使用C#实现ResNet算法的训练和推理](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506415&idx=3&sn=003b7271953b9a387229eb6341a29ef3&chksm=96193f3f03169dadb8f693283d7ff8c2e6f7ca2b07c2ec206a3d68c14394d65ca25512e6ca2a&scene=126&sessionid=1729559254#rd)

- [使用Microsoft.Extensions.AI简化.NET中的AI集成](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507305&idx=1&sn=d4d7a11a9a310f195beb445a18c7637c&chksm=96c25d9e38701da2295f38de7ab28db742d09c1591a365d5438bee3cad6d998419fe961bbd3e&scene=126&sessionid=1731890970#rd)

  - [.NET+AI | MEAI | 自定义中间件（8） - 「圣杰」 - 博客园](https://www.cnblogs.com/sheng-jie/p/19258476)

- [Evaluating content safety in your .NET AI applications - .NET Blog](https://devblogs.microsoft.com/dotnet/evaluating-ai-content-safety/)

  > 我们很高兴地宣布，Microsoft.Extensions.AI.Evaluation.Safety 包已添加到 Microsoft.Extensions.AI.Evaluation 库中！这个新包提供了评估器，帮助您检测 AI 生成内容中的有害或敏感内容——例如仇恨言论、暴力、版权材料、不安全代码等。这些安全评估器由 Azure AI Foundry 评估服务提供支持，并设计为可以无缝集成到您现有的工作流程中，无论您是在本地运行单元测试中的评估，还是在 CI/CD 管道中自动执行离线评估检查。

- [Exploring new Agent Quality and NLP evaluators for .NET AI applications - .NET Blog](https://devblogs.microsoft.com/dotnet/exploring-agent-quality-and-nlp-evaluators/)

  > 在构建 AI 应用时，全面的评估对于确保您的系统能够提供准确、可靠且符合上下文的响应至关重要。我们很高兴宣布 Microsoft.Extensions.AI.Evaluation 库的关键增强，新增的评估器在两个关键领域扩展了评估能力：代理质量评估和自然语言处理（NLP）指标。


- [.NET AI 基座双核引擎正式版发布：深度拆解 AI / Vector Extensions 如何重构企业级 AI 架构 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18899291)

  > 关注.NET AI和.NET Vector原生开发已有半年之久了，其核心组件在历经这半年预发布期的持续迭代后，这两大基座终于在5月16日和5月20日逐步发布了。在此之前，基于预发布版本撰写的文章和调试工作常常受限于功能的缺失，许多特性无法正常调用，只能通过下载源代码进行调试。如今，随着正式版的发布，这些库为 .NET 原生 AI 开发提供了强大的基础，支持开发者构建可扩展、可维护且具备互作性的 AI 驱动型应用程序。

- [在C#中基于Semantic Kernel的检索增强生成（RAG）实践 - dax.net - 博客园](https://www.cnblogs.com/daxnet/p/18475095)

- [.NET + AI | Semantic Kernel vs Microsoft.Extensions.AI - 「圣杰」 - 博客园](https://www.cnblogs.com/sheng-jie/p/18863626/semantic-kernel-vs-microsoft-extensions-ai)

- [微软 AI Agent三剑客：AutoGen、Semantic Kernel与MEAI的协同演进 - 「圣杰」 - 博客园](https://www.cnblogs.com/sheng-jie/p/18924852)

  > 微软正在积极构建其人工智能（AI）开发者生态系统，旨在为开发者提供从实验研究到生产部署的全方位支持。在这一宏大蓝图中，AutoGen、Semantic Kernel (SK) 和 Microsoft.Extensions.AI (MEAI) 是三个关键的框架组件，各自扮演着独特且相互关联的角色。

- [Semantic Kernel + AutoGen = 开源 Microsoft Agent Framework](https://mp.weixin.qq.com/s/o1Er8BAAIbbW0oSU4UmLxw)

- [微软开源 Microsoft Agent Framework = Semantic Kernel + AutoGen - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19130347)

- [十分钟搞定 .NET Semantic Kernel 调用 Qwen 3？](https://mp.weixin.qq.com/s/2AkjeeZS8sco3_9fn8aYsw)

- [从零构建工业网络AI监控系统：Semantic Kernel实战指南](https://mp.weixin.qq.com/s/jYRQ082Il0P9YMfNL3rhgA)

- [PaperAssistant：使用Microsoft.Extensions.AI实现 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18651932)

- [.NET AI 模板 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18970200)

  > 随着人工智能技术的快速发展，AI应用开发已成为开发者必备的技能之一。然而，对于许多.NET开发者来说，如何快速上手AI开发仍然是一个挑战。微软推出的.NET AI模板预览版正是为了解决这一问题而生，为开发者提供了构建智能聊天应用的脚手架和最佳实践指南。本文将详细介绍如何安装和使用这个模板，探索其核心功能，并通过实际案例展示如何扩展其能力，帮助.NET开发者快速进入AI开发领域。

- [.NET AI 核心构建块：重塑智能应用开发的架构范式与生态深度分析](https://mp.weixin.qq.com/s/ljMuQ3mouJfw2xpT5H_hnA)

- [【译】轻松评估 AI 应用程序的质量](https://mp.weixin.qq.com/s?__biz=MzAwNTMxMzg1MA==&mid=2654101082&idx=1&sn=35d033a9105e6620c3d3ce6a0d9edd36&scene=21#wechat_redirect)

- [腾讯元宝接入 DeepSeek R1 模型，支持深度思考 + 联网搜索，好用不卡机！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510356&idx=2&sn=ac1c8629a560967670627c75693568b7&chksm=96e98f5ab4ca6a83130d4db5fbbfed117fb661defed7353669c46d584abb4df585839b538517&scene=126&sessionid=1739495349#rd)

- [全面系统的AI学习路径，帮助普通人也能玩转AI](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510404&idx=2&sn=cb91d06f4e46fef27d1a7aa82e8d2eaf&chksm=96f4dde43bee3e36189e94539013917595a9a1bd62bdc8b809b3e8ee52dc77dc967e26fb39da&scene=126&sessionid=1739617181#rd)

- [WaytoAGI-通往AGI之路，最好的 AI 知识库和工具站](https://www.waytoagi.com/zh)

- [宣布推出面向初学者的生成式 AI – .NET - .NET 博客](https://devblogs.microsoft.com/dotnet/announcing-generative-ai-for-beginners-dotnet/)

  > 今天，我们很高兴地推出一门新的动手实践课程，该课程专为想要探索生成式 AI 世界的 .NET 开发人员而设计。

- [基于Microsoft.Extensions.VectorData实现语义搜索 - EdisonZhou - 博客园](https://www.cnblogs.com/edisonchou/p/-/introduction-to-vector-query-demo)

- [AI与.NET技术实操系列 - 开篇 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18744841)

- [技术速递｜立即使用 .NET 和 DeepSeek R1 构建智能应用程序！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511324&idx=2&sn=41fe0a26767a18490741068833571dc8&chksm=9606ef28956ef6510adf0941cb787af8c0a6b06e8676fad1dcd87f2c46ede382f665b3a3802f&scene=126&sessionid=1742038870#rd)

- [Introducing the AI Dev Gallery: Your Gateway to Local AI Development with .NET - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-ai-dev-gallery-gateway-to-local-ai-development/)

  > AI Dev Gallery是一个 Windows 应用程序，它是一个使用.NET 进行 AI 开发的综合游乐场。它提供了您探索、实验和实现应用程序中 AI 功能所需的一切，而无需连接到云服务。


- [使用C#构建一个同时问多个LLM并总结的小工具 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18866486)

- [C#学习：构建一个更真实的基于LLM的简历评估系统 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18902739)

- [Local AI + .NET = AltText Magic in One C# Script - .NET Blog](https://devblogs.microsoft.com/dotnet/alttext-generator-csharp-local-models/)

  > 需要快速生成图片说明？在本篇文章中，我们将展示如何将 .NET 10 的新功能与本地 AI 模型相结合，创建智能 AltText - 所有这一切只需一个简单的 C# 文件即可完成。这是一种探索人工智能在聊天之外的功能的有趣方式。
  
- **使用技巧**


  - [5 Copilot Chat Prompts .NET Devs Should Steal Today - .NET Blog](https://devblogs.microsoft.com/dotnet/5-copilot-chat-prompts-dotnet-devs-should-steal-today/)

    > 人工智能正迅速成为现代.NET 开发者工具箱中的关键部分。通过 GitHub Copilot Chat，只需提出正确的问题，你就能节省无数小时、消除障碍，并解锁新的创造力水平。但具体应该问些什么呢？以下是每个.NET 开发者现在都应该使用的五个 GitHub Copilot Chat 提示！


### Agent Skills

- [告别“小作文”式 Prompt：详解 Agent Skills 构建指南](https://mp.weixin.qq.com/s/1ZCuv6SX57_l0sMHAwcfQw)
- [shareAI-lab/shareAI-skills: shareAI Lab's skills for agent to build agent & other custom software system](https://github.com/shareAI-lab/shareAI-skills)
  - [如何创建好的 Agent Skill](https://mp.weixin.qq.com/s/k_-u3IK20TUPMW5Hoq2y7g)
- [shareAI-lab/learn-claude-code: Bash is all You need - Write a nano Claude Code 0 - 1](https://github.com/shareAI-lab/learn-claude-code)
  - [C# 实现简版 Claude Code | Bash 就是一切（1）](https://mp.weixin.qq.com/s/f3-3SP_UEadwo507K86wSQ)
  - [C# 实现简版 Claude Code | 4 个工具覆盖 90% 场景（2）](https://mp.weixin.qq.com/s/jUnxqiXyOutwPwAsTlRGrw)
  - [C# 实现简版 Claude Code | 用 Todo 对抗遗忘（3）](https://mp.weixin.qq.com/s/hFGgtoizTBnBSooq1Fnyeg)
  - [C# 实现简版 Claude Code | 子代理与上下文隔离（4）](https://mp.weixin.qq.com/s/e21aSY7qaxh0WR0tsIGmyg)
  - [C# 实现简版 Claude Code | Skills机制与知识热插拔（5）](https://mp.weixin.qq.com/s/PgxBqwXw0AQU2pTNJgbu7Q)



### **.NET Aspire（Aspire）**

- [微软将.NET Aspire 改名成了Aspire](https://mp.weixin.qq.com/s/kjAceE5Xw6ZT8ppzrXcdwg)

- [将 .NET Aspire 添加到您现有的 .NET 应用程序中](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507122&idx=2&sn=27e7af6744daf6d91dd82613e2d7bf3b&chksm=96cc11a5f95519fbbb385369a1766da516095d1c8f049c663d27d718cd16dd26ac40f15d8d5a&scene=126&sessionid=1731206998#rd)

- [将本地 AI 模型与 .NET Aspire 结合使用](https://devblogs.microsoft.com/dotnet/local-ai-models-with-dotnet-aspire/)

  > 使用本地 AI 模型是在您自己的计算机上进行实验的好方法，而无需将资源部署到云中。在本文中，我们将了解如何将 .NET Aspire 与 Ollama 结合使用在本地运行 AI 模型，同时使用 Microsoft.Extensions.AI 抽象使其在部署时过渡到云托管模型。

- [.NET Aspire Quick Tip - Managing Container & Data Lifetime - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-aspire-container-lifetime/)

  > .NET Aspire 通过其强大的应用程序组合编排功能增强了本地开发过程。在 .NET Aspire App Host 中，您可以在一个集中位置为应用程序指定所有项目、可执行文件、云资源和容器。当您运行 App Host 项目时，.NET Aspire 将自动运行您的项目和可执行文件，根据需要提供云资源，并下载和运行作为应用程序依赖项的容器。.NET Aspire 9 添加了新功能，让您可以更好地控制在本地计算机上管理容器生命周期的方式，从而在使用容器时加快开发速度。

- [.NET Aspire 9.1 is here with six great new dashboard features, and more! - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-aspire-9-1/?hide_banner=true)

  > 我们很高兴地宣布 .NET Aspire 9.1 的发布！此版本包括几项新功能和生活质量改进，这些改进基于开发人员在生产应用程序中使用 .NET Aspire 的反馈。在本文中，我们将重点介绍 .NET Aspire 仪表板中的新功能，以及此版本中添加的其他一些很酷的功能。

- [在 Aspire 项目下使用 AgileConfig - Agile.Zhou - 博客园](https://www.cnblogs.com/kklldog/p/18747156/aspire-agileconfig)

- [Preview 2 of the .NET AI Template Now Available - .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-dotnet-ai-template-preview2/)

  > 我们非常高兴地宣布，.NET AI Chat Web App 模板的第二个预览版现已推出！这次更新带来了令人兴奋的新功能，包括对.NET Aspire 的支持以及在使用.NET Aspire 时与 Qdrant 向量数据库的集成，这使得创建云原生 AI 聊天应用变得更加容易。我们的.NET AI 模板继续作为我们简化.NET AI 开发的持续努力的一部分，通过在 Visual Studio、Visual Studio Code 和.NET CLI 中提供脚手架和指导。

- [.NET Aspire 9.3 is here and enhanced with GitHub Copilot! - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-dotnet-aspire-93/)

  > 今天，我们非常激动地宣布 .NET Aspire 9.3 的发布！这次更新带来了许多质量改进、集成增强和 API 更新。我们最兴奋的是将 GitHub Copilot 的强大功能带到您的 .NET Aspire 仪表板中，帮助您在仪表板内分析应用程序、调试并改进它们。

- [通过 .NET Aspire 使用本地 AI 模型 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18976279)

  > 在当今快速发展的 AI 领域，开发人员经常需要在本地环境中实验和测试 AI 模型，然后再将其部署到云端。使用本地 AI 模型不仅能够节省云资源成本，还能提供更快的迭代速度和更好的隐私保护。本文将介绍如何利用 .NET Aspire 框架结合 Ollama 在本地运行 AI 模型，并通过 Microsoft.Extensions.AI 抽象层实现从本地开发到云部署的无缝过渡。

- [Getting Started with the Aspire CLI - .NET Blog](https://devblogs.microsoft.com/dotnet/getting-started-with-the-aspire-cli/)

  > Aspire CLI 是一款强大的跨平台工具，旨在简化应用系统的开发、管理和部署。无论您是在构建一个简单的网站，还是企业级的分布式微服务应用（包含队列和数据库），Aspire CLI 都提供以交互为先的体验，帮助您轻松创建、运行和发布项目。

- [.NET Aspire到底牛在哪？一站式搞定服务发现、配置、可观测](https://mp.weixin.qq.com/s/K2I-whlKljDkmE4qX3rOyw)

### Microsoft Agent Framework

- [在 .NET AI 聊天应用中升级到 Microsoft 代理框架](https://mp.weixin.qq.com/s/bTeY_1B6nYtkryYCMnW-Ag)
- [.NET+AI | 基于 Microsoft Agent Framework 一步步集成 Agent Skills，让你的 AI Agent 更智能](https://mp.weixin.qq.com/s/wSABdzzsQ6sISiPrxGIhRg)
- [谁说.NET没有智能体？使用 Microsoft Agent Framework 构建 AI 智能体](https://mp.weixin.qq.com/s/yMyTiwbkzgsQoNucNa_nAg)
- [.NET AI 生态系统的重构与演进：Microsoft Agent Framework 对 Semantic Kernel 的继承、超越与战略整合](https://mp.weixin.qq.com/s/gPJEtxaiyW4T7V67BRrINA)

### **Ollama**

- [GitHub - ollama/ollama: Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 2, and other large language models.](https://github.com/ollama/ollama)
  - [Ollama API](https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-completion)
  - [Ollama OpenAI API](https://github.com/ollama/ollama/blob/main/docs/openai.md)
- [GitHub - awaescher/OllamaSharp: The easiest way to use the Ollama API in .NET](https://github.com/awaescher/OllamaSharp)
- [Ollama API Reference - Ollama English Documentation](https://ollama.readthedocs.io/en/api/#generate-a-completion)
- [ollama+deepseek本地部署，安装卸载模型及使用方法](https://baijiahao.baidu.com/s?id=1823397045890181844)

### **OpenAI**

- [快速入门 Quickstart – OpenAI接口文档中文版](https://www.openaidoc.com.cn/docs/quickstart)
  - [对话Chat – OpenAI接口文档中文版](https://www.openaidoc.com.cn/api-reference/chat)
- [API Platform | OpenAI](https://openai.com/api/)
- [OpenAI 与 Anthropic 的.NET SDK 对比](https://mp.weixin.qq.com/s/LXC0LYSbIdyjb4T3bcMWtA)
- [从 OpenAI 兼容到 Anthropic 崛起：大模型“交错思考”协议的演进与变局](https://mp.weixin.qq.com/s/L_ehz4tEjUvprk0LaaurRA)

### 小型语言模型 (SLM)


- [2024 年 5 种领先的小语言模型：Phi 3、Llama 3 等-CSDN博客](https://blog.csdn.net/weixin_47567401/article/details/139176010)
- [Phi小模型开发教程：用C#开发本地部署AI聊天工具，只需CPU，不需要GPU，3G内存就可以运行，不输GPT-3.5 - chingho - 博客园](https://www.cnblogs.com/chingho/p/18681020)

### DeepSeek

- [GitHub - deepseek-ai/DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1?tab=readme-ov-file#usage-recommendations)

- [首次调用 API | DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/)

- [对话补全 | DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/api/create-chat-completion)

- [在 VSCode 中使用 - AI 智算产品文档](https://docs.coreshub.cn/console/big_model_server/call_scenario/vscode/)

- [清华大学推出的 DeepSeek 从入门到精通（104页）免费教程！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510076&idx=2&sn=aeebf5e150abb989e1c273d5bf5e0f82&chksm=9635785c46b25950b2025bd97092ad8f194f6090edbe2fabc157a2d5b154e80f5c2a982f625a&scene=126&sessionid=1739149606#rd)

- [告别 DeepSeek 系统繁忙，七个 DeepSeek 曲线救国平替入口，官网崩溃也能用！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510105&idx=1&sn=eb1cbbe9a4e0446a26d35111da93f6b8&chksm=96922070776c46623a722150f29f718b73e0dc2843c6e2ce7436b1c57fe9047183cb41b120b9&scene=126&sessionid=1739234801#rd)

- [清华大学推出第二讲 DeepSeek 如何赋能职场应用？从提示语技巧到多场景应用！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510482&idx=1&sn=38779c751a3d66d40b9159b03af4ea40&chksm=96fda3eb315e8f7386ab2c709051ac023a5857f25193a2b9fb5dcadd137c0e987fc6834c4b40&scene=126&sessionid=1739703172#rd)

- [20个很强的DeepSeek提问公式](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510143&idx=3&sn=28531e11714e91ea60be4971c327bdbf&chksm=9683470283891d5f6ea6b4034850da1aec6ecd9cf2ad5c8c62ec16411757d887b3c9d55f2528&scene=126&sessionid=1739322503#rd)

- [DeepSeek缝合Claude，比单用R1/o1效果都好！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510701&idx=2&sn=34491ba1926d823264d59d553e9ad46a&chksm=96c004cc7b7e58429fedc38317a6ead8249d946c282feecfadda794e110419d0aebadc5ecd35&scene=126&sessionid=1740099959#rd)

- [清华大学推出第四讲使用 DeepSeek + DeepResearch 让科研像聊天一样简单！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510760&idx=2&sn=cea35f9b31c939b41697bf7756fca61d&chksm=96395a1abed2163eae2cd2594875cabdca12985aa8bbf761f96e39ced28b2e6fb72262d34619&scene=126&sessionid=1740209460#rd)

- [DeepSeek 官方推出的提示词库，AI内容生成的精准导航仪！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510880&idx=1&sn=50fa193ece9f8aaf5bf9e064dc152f7f&chksm=965c9e6eca80865ae15eeb606308abd71423850997952dfa5c2cad7cf03dd40d051aa853aff9&scene=126&sessionid=1740824346#rd)

- [清华大学《AIGC发展研究报告3.0版》](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510865&idx=2&sn=e121e13c5c31bbc1f9e86a56b7974076&chksm=96950d5d4039fb7cb616798ca5f5e24716ab9c572e3b899409724e25bd67cdf5163bca1f9aef&scene=126&sessionid=1740703118#rd)

- [清华大学推出第六讲：使用DeepSeek赋能家庭教育，开启智能育儿新时代！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511134&idx=2&sn=eae717595c9a2f16f7fdd35bb5c880a3&chksm=965526788ca2138a445bd4ef7e7b04bb9b91a757861bac6b23661c14a2d0e5f04716c8204ac9&scene=126&sessionid=1741568037#rd)

- [一文掌握DeepSeek本地部署+Page Assist浏览器插件+C#接口调用+局域网访问！全攻略来了！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510781&idx=2&sn=f9317dc2cd672310c65287892e944929&chksm=96661614534efbe1a680c851306c46ad98a5fb6cb645321b90ed4855627fce2042f157be63fa&scene=126&sessionid=1740314463#rd)

- [DeepSeek 官方推出的实用集成工具百宝箱，建议收藏！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511726&idx=2&sn=a280b731e442b822822d1ea551048af2&chksm=9695c182df2033b231da2e5e4e0f62690c517295858493c16e2abbb723245fdab095eb1060ad&scene=126&sessionid=1742777745#rd)

- [【.NET】调用本地 Deepseek 模型 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/18731997)

  > 本篇咱们来聊一聊怎么在 .NET 代码中使用本地部署的 Deepseek 语言模型。大伙伴们不必要紧张，很简单的，你不需要学习新知识，只要你知道 .NET 如何访问 HTTP 和 JSON 的序列化相关就够了。

- [.NET 使用 DeepSeek R1 开发智能 AI 客户端 - 小码编匠 - 博客园](https://www.cnblogs.com/1312mn/p/18715438)

  > deepseek-dotnet 项目不仅包含了如何在 .NET 中集成和使用 DeepSeek 模型的详细示例，还展示了如何通过 Microsoft.Extensions.AI (MEAI) 库来简化与 DeepSeek R1 模型的交互。

- [C# 集成 DeepSeek 模型实现 AI 私有化（本地部署与 API 调用教程） - 小码编匠 - 博客园](https://www.cnblogs.com/1312mn/p/18729302)

  > 自从 DeepSeek 大模型火了以来，网络上出现了许多关于本地部署的教程和方法。然而，要真正深入了解其功能和应用，还是需要自己动手进行一次本地部署。
  >
  > DeepSeek 作为一个高效的自然语言处理模型，其本地部署能力为大家提供了灵活的应用场景。不管是开发私有化的 AI 应用，还是集成到现有的系统中，DeepSeek 都能提供强大的支持。
  >
  > 本文将详细介绍如何快速部署 DeepSeek 模型，并通过 C# 调用其 API 接口，从而搭建高效的私有 AI 服务。我们将从环境准备、本地部署、API 客户端配置到实际调用接口，完成整个过程。

- [DeepSeek V3.2 正式版：强化 Agent 能力，融入思考推理](https://mp.weixin.qq.com/s/y0syscUtyK7PwGG7Jnw8mw)

- [DeepSeek-V3.2系列开源，性能直接对标Gemini-3.0-Pro](https://mp.weixin.qq.com/s/glM6LMbsUXwT1DnkBUXjxA)

- **DeepSeek 平替版本**

  - [分享一个免费、快速、无限量使用的满血 DeepSeek R1 模型，支持深度思考和联网搜索！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511324&idx=1&sn=518b6da23bf7b78197fb53fa1effddcf&chksm=96e1a2bc746d323cb875a8477a95428bc22108de8ce1b174165677244388b347d3a57cae83d3&scene=126&sessionid=1742038870#rd)

### AI编程助手


  - **ChatGPT CodeX**


    - [ChatGPT Codex试用心得，码农的可靠助手or失业号角？ - a1010 - 博客园](https://www.cnblogs.com/gmmy/p/18912354)
    
    - [教你如何用GPT-5来分析你的dump文件定位内存泄漏问题——避免无效加班必备神器 - a1010 - 博客园](https://www.cnblogs.com/gmmy/p/19075444)
    
      > 最近这半年，智能体很火，vibe coding也很火，相信很多园子里的小伙伴也都用上了各种AI智能体辅助编程。之前的文章《ChatGPT Codex试用心得，码农的可靠助手or失业号角？》中我也介绍过openai推出的沙盒Codex，恰逢前段时间codex-cli推出了cli版本（实际上很早就有了，但是之前的版本只能用烧api token而不是像claude code那样可以用plus账号授权使用所以一直没下载）新版本可以集成gpt-5。所以进行了尝试，有plus账号的小伙伴可以移步https://developers.openai.com/codex/cli下载安装，过程很简单，不再赘述。


- **GitHub Copilot**

  - [Visual Studio使用GitHub Copilot提高.NET开发工作效率](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509901&idx=1&sn=dbe05f2b4bdae0b03c20e45de3340412&scene=21#wechat_redirect)

  - [询问模式与代理模式 - 为 .NET 选择正确的 Copilot 体验 - .NET 博客](https://devblogs.microsoft.com/dotnet/ask-mode-vs-agent-mode/)

    > 作为 .NET 开发人员，生产力和解决问题是工作流的核心。GitHub Copilot Chat 提供两种强大的模式，即询问模式和代理模式，可以显着加速您的开发，但知道何时使用每种模式对于充分利用此工具至关重要。在这篇文章中，我们将分解差异，帮助您了解每种模式的优势，并提供针对常见 .NET 场景量身定制的具体示例。

  - [Let Copilot Coding Agent handle the busy work - .NET Blog](https://devblogs.microsoft.com/dotnet/copilot-coding-agent-dotnet/)

    > GitHub Copilot Coding Agent 改变了.NET 开发人员的工作方式。除了内联建议外，它还可以分析您的仓库，规划多步骤任务，创建问题和拉取请求，并在云中跨项目传输更改。在本文中，我们将使用 eShopLite 示例展示两个具体场景：自动创建缺失的单元测试以及从 PRD 开始实现新功能。

### AI 程序数据库

- [Building .NET AI apps with Chroma - .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-chroma-db-csharp-sdk/)

  > 无论您是构建 AI 解决方案还是使用高级搜索功能增强现有项目，您现在都可以选择将 Chroma 用作 .NET 应用程序中的数据库提供程序。

  - [Chroma](https://trychroma.com/)
  - [GitHub - chroma-core/chroma: the AI-native open-source embedding database](https://github.com/chroma-core/chroma)

### 向量存储

- [AI与.NET技术实操系列（五）：向量存储与相似性搜索在 .NET 中的实现 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18761132)

- [AI与.NET技术实操系列（五）：向量存储与相似性搜索在 .NET 中的实现](https://mp.weixin.qq.com/s?__biz=MzkyMDcyMTE5NQ==&mid=2247484593&idx=1&sn=ebb7bf005dd089153f8847d46ebe7c8c&chksm=c0ae4290ab4b3a12f73a0432ec5062f8ae13dcb8d87f8c3c525c8c02004120e4001b57eb6c5a&poc_token=HMNu5mejeS4k7FoLPLOTNuUEueifqD2M8mCjC1Ri)

- [向量数据库](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMDcyMTE5NQ==&action=getalbum&album_id=3910189492887502849&scene=173&subscene=&sessionid=svr_ad01a313016&enterid=1747811866&from_msgid=2247486853&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

- [.NET 原生驾驭 AI 新基建实战系列（一）：向量数据库的应用与畅想](https://mp.weixin.qq.com/s?__biz=MzkyMDcyMTE5NQ==&mid=2247486387&idx=1&sn=11fd72121467154776fc11fa79346d71&chksm=c05fb5a25b2996dd8a64a84ba541986676295308a1ed6c685515401b3f99b900f88d7e9c8718#rd)

- [.NET 原生驾驭 AI 新基建实战系列（一）：向量数据库的应用与畅想 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18784938)

- [.NET 原生驾驭 AI 新基建实战系列（二）：Semantic Kernel 整合对向量数据库的统一支持 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18814133)

  > 在人工智能（AI）应用开发迅猛发展的今天，向量数据库作为存储和检索高维数据的重要工具，已经成为许多场景（如自然语言处理、推荐系统和语义搜索）的核心组件。对于.NET生态系统的开发者而言，如何高效地整合和管理不同的向量数据库，并以统一的方式使用它们，是一个亟待解决的问题。

- [.NET 原生驾驭 AI 新基建实战系列（三）：Chroma ── 轻松构建智能应用的向量数据库 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18826233)

- [.NET 原生驾驭 AI 新基建实战系列（四）：Qdrant ── 实时高效的向量搜索利器 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18840212)

- [.NET 原生驾驭 AI 新基建实战系列（五）：Milvus ── 大规模 AI 应用的向量数据库首选 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18851097)

- [.NET 原生驾驭 AI 新基建实战系列（六）：Pinecone ── 托管向量数据库的向量数据库的云原生先锋 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18860998)

- [在 .NET 中使用 Milvus 向量数据库 - .NET 博客 - 漫思 - 博客园](https://www.cnblogs.com/sexintercourse/p/18146242)

### 智能体

- [DeepSeek+Coze实战：10分钟快速打造一个“虚拟女友”智能体](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511831&idx=2&sn=ee411dc3b4d702a55ca946b31017652a&chksm=96c16792aa5fcc102d8b6de1e4316b441ff0e1a5476f8b91cb91e0a52b8c8dd7404e6159a873&scene=126&sessionid=1743251663#rd)

- [打造DeepSeek最强外挂！一篇文章教会你搭建「个人知识库」（喂饭版）](https://mp.weixin.qq.com/s?__biz=MzU3OTc2OTA4OA==&mid=2247487052&idx=1&sn=403878435ef7291f8ee39e3fe99dcad4&chksm=fca988e59d4b924b6c3844ede4de0e9b3edc04823c348c31239781d3fbb30784704cd68fa46e#rd)

- [利用ollama + RAGFlow部署千问大模型构建个人知识库AI智能体应用](https://mp.weixin.qq.com/s?__biz=MzAwMjY4NTUwNw==&mid=2247483916&idx=1&sn=7841fbe2037513c1c252b8dca33fec6b&chksm=9b95bca66564d9f0f6376c84ca6a0a69b24880a7eb473250ffa8ac6707815a33c9b67253296a#rd)

- [关于智能体（AI Agent），不得不看的一篇总结（建议收藏）](https://mp.weixin.qq.com/s/ADnoPK7-4J1AgxRIHVZGcw?scene=0&subscene=90&poc_token=HKEwgGijVkQgkkaGEyjsh6Bv-K9cOlwGtDrQBrQ_)

- [AI 时代，.NET 开发者向左还是向右？](https://mp.weixin.qq.com/s/XBYYsjkmhuDEq3gyTvSmmQ)

  > AI 时代，.NET 开发者向左还是向右？ MAF vs LangChain 1.0 一场关乎未来的技术选择。
  
- [.NET 搞 AI 不行？ - 「圣杰」 - 博客园](https://www.cnblogs.com/sheng-jie/p/19200934)

  > 今天，我要告诉你一个被严重低估的事实：.NET开发者不仅能做AI，而且可能是最适合把AI落地到生产环境的那群人。
  
- **Microsoft Copilot Studio**

  - [How Copilot Studio uses .NET and WebAssembly for performance and innovation - .NET Blog](https://devblogs.microsoft.com/dotnet/copilot-studio-dotnet-wasm/)

    > Microsoft Copilot Studio 处于对话式 AI 和自动化的最前沿，使组织能够为各种企业场景构建、自定义和管理智能助手和机器人。随着平台的发展，支撑它的技术也在不断发展。Copilot Studio 创新的核心是它与 .NET 的深度集成，包括在 WebAssembly （WASM） 上使用 .NET。这篇文章探讨了 Copilot Studio 如何利用 .NET、平台升级带来的好处，以及由此带来的性能、成本和生产力改进。

### **MCP**

- [使用 MCP C# SDK 实现 MCP Tool](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247519381&idx=3&sn=b13b4e26bbd4a2e23f411096eb5958d2&chksm=96eecec79002d0a8f33f735351a86d3ede65eccc31a21037c76f3c15fa49616c71e81ff593b0&scene=126&sessionid=1768988916&subscene=91&clicktime=1768988955&enterid=1768988955&key=daf9bdc5abc4e8d08fc5cc12a99e9742412b49e21d57cd020acd7e936b4455232c2ab778c6a2cbc624efc11fa169fb89497ddb37c25b78e6155d781ff411c12e831b429a896be6770c786ec76a661ab3cccef59fd1e8b97c08ebf223d80df287eb9c919739070c5c732f88a02ed3d35cad11b777481df5b90eaed09a8d771c0c&ascene=0&uin=MTA5MzA0NTc4MA%3D%3D&devicetype=UnifiedPCWindows&version=f2541211&lang=zh_CN&countrycode=CN&exportkey=n_ChQIAhIQTsezYWruxJWP4MF8QzPHhRLdAQIE97dBBAEAAAAAAKeJFuilP9EAAAAOpnltbLcz9gKNyK89dVj0C8qPxqanSNByNwkTB%2BOTiw0DnG0zOSCzFg5uZk%2F6wwTA4EWH14AxfqCdWnutNLmhFly5XD4J52X6wEVrgnfGZQ8%2F0JSofeMipSaXXBSuvQfF2H08fMU2zc25jdUUyUVpybY5D0lTdLeG8XvEsw9qZhZ9BAWawDiJF47wIy0Jk3JvBRlm4%2B6U%2BeCSz6r%2B0GEM7dVYH%2BQDc8Weap7bg1Sk0snsqhszXVfsP5fEY54jgp6YaNBp6v5e&acctmode=0&pass_ticket=iuGsujZF4%2FpBzPuzh2CPRrrFdacMdKM8mS%2Fa1KB%2BYVxGHhaEZtmIlxkSzmug5YFI&wx_header=0)

- [使用C#创建一个MCP客户端 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18772576)

- [由 MCP 官方推出的 C# SDK，使 .NET 应用程序、服务和库能够快速实现与 MCP 客户端和服务器交互！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512074&idx=1&sn=0b788c4855c36cb4888b29798a13d460&chksm=96dc285ee2c3002e486e4baef9ca7a7bc28809944d3884612fea76a385f4137333ac1326efeb&scene=126&sessionid=1743943335#rd)

  > MCP C# SDK 是由 Model Context Protocol（MCP）官方推出的 C# 软件开发工具包（SDK），它使 .NET 应用程序、服务和库能够快速实现与 MCP 客户端和服务器进行交互。MCP是一个开放协议，它标准化了应用程序如何为大型语言模型（LLMs）提供上下文，并实现了 LLMs 与各种数据源和工具之间的安全集成。

- [使用MCP C# SDK开发MCP Server + Client - EdisonZhou - 博客园](https://www.cnblogs.com/edisonchou/p/-/introduction-to-mcp-csharp-sdk)

  > 近日被MCP刷屏了，刚好看到张队发了一篇文章提到MCP的官方C# SDK发布了预览版，于是手痒痒尝了一下鲜，写了一个DEMO分享给大家。

- [BotSharp 5.0 MCP：迈向更开放的AI Agent框架 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18809988)

  > 在人工智能快速发展的时代，AI Agent（人工智能代理）作为一种能够自主感知环境、决策并执行动作的实体，在众多领域展现出了巨大的潜力。BotSharp 是一个功能强大的开源项目，由 SciSharp[1] 社区开发和维护，旨在实现.NET技术栈下高度可定制的多智能体解决方案。为开发高效的对话式 AI 系统提供了极大的灵活性。通过其模块化的设计和多模型的支持，它更适合需要定制化需求的大型企业或组织。BotSharp作为一款专注于AI Agent开发的框架，一直致力于为开发者提供强大而灵活的工具来构建各种类型的智能代理。BotSharp 5.0 的 MCP（Model Context Protocol）支持是该版本的核心升级之一，BotSharp 5.0 MCP版本的推出，标志着该框架向着更开放的方向迈出了重要的一步，为开发者和使用者带来了更多的可能性和机遇。

  - [GitHub:BotSharp](https://github.com/SciSharp/BotSharp)

  - [BotSharp开源应用框架——连接LLMs到您的.NET应用-CSDN博客](https://blog.csdn.net/pepure/article/details/144931163)
  - [Get Started — BotSharp 1.1.0 documentation](https://botsharp.readthedocs.io/en/latest/quick-start/get-started.html#get-started-with-pizza-bot)

- [斩获 3W 星！最近爆火的 MCP 一网打尽。](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247523288&idx=1&sn=a6909090d2b728cb1c429973f36ac5e8&chksm=f8d2f037813277dd39bb8cb5bc91b80370947d2deb692a874e7302dd7dfef843bee57c3500a9&scene=126&sessionid=1744089396#rd)

- [如何把ASP.NET Core WebApi打造成Mcp Server](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513520&idx=2&sn=f81e208225c9849c2c674424c30e279e&chksm=9667cea97a397f023d6fdc183dce468df8df9fbfca0ee94bb08c0bcb247e6cfbcf8b0d752fb3&scene=126&sessionid=1746879575#rd)

- [Model Context Protocol C# SDK v0.3.0-preview.1 版本发布 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18942263)

- [探索 MCP C# SDK：实现大语言模型与应用的无缝对接 - 朱利戈 - 博客园](https://www.cnblogs.com/zhulige/p/18990558)

  > 想扩展 AI 助手的自定义功能吗？在这篇文章中，我们将向你展示如何使用.NET 10 构建一个模型上下文协议（MCP）服务器，并将其发布到 NuGet——使你的 AI 工具能够被整个.NET 社区发现和重用。我们还将向你展示.NET 10 和 NuGet 为支持这一功能添加的新特性，以及一个新的 MCP 服务器项目模板，它将帮助你更轻松地开始！

- [Building Your First MCP Server with .NET and Publishing to NuGet - .NET Blog](https://devblogs.microsoft.com/dotnet/mcp-server-dotnet-nuget-quickstart/)

  > 想扩展 AI 助手的自定义功能吗？在这篇文章中，我们将向你展示如何使用.NET 10 构建一个模型上下文协议（MCP）服务器，并将其发布到 NuGet——使你的 AI 工具能够被整个.NET 社区发现和重用。我们还将向你展示.NET 10 和 NuGet 为支持这一功能添加的新特性，以及一个新的 MCP 服务器项目模板，它将帮助你更轻松地开始！
  
- [【译】10 款微软 MCP 服务器，加速您的开发工作流程 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19002849)

  > 最近，我们一直在大量讨论模型上下文协议（MCP），包括近期的博客文章以及在微软 Build 大会上。在这篇文章中，我想分享一些重要技巧，告诉您如何使用我们一直在构建的 MCP 服务器来提高开发人员的工作效率。
  
- [Announcing the NuGet MCP Server Preview - .NET Blog](https://devblogs.microsoft.com/dotnet/nuget-mcp-server-preview/)

  > 上个月，我们宣布支持使用.NET 构建自定义 MCP 服务器，并将其发布到 NuGet。在此基础上，今天我们正式宣布 NuGet MCP 服务器，它使您能够将实时 NuGet 包信息和管理工具直接集成到您的 AI 驱动开发工作流程中。
  
- [Model Context Protocol (MCP) is Now Generally Available in Visual Studio 🎉 - Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/mcp-is-now-generally-available-in-visual-studio/)

  - [【译】模型上下文协议（MCP）现已在 Visual Studio 中正式发布 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19057008)

    > 模型上下文协议（MCP）是一种开放标准，它能让人工智能 Agent 轻松连接外部工具和服务 —— 可以把它想象成 HTTP，但适用于支持人工智能的开发者工作流。无需为每个工具构建自定义集成，MCP 让您能够通过一种一致、安全的协议，接入数据库、代码搜索、部署流水线等强大的服务器端点。随着 Visual Studio 中正式发布的支持，您将找到连接、配置和控制 MCP 服务器的新方法，此外还有一系列不断增加的功能，让设置过程更加无缝且具备企业级可用性。

- [构建你的 MCP 能力层：.NET 9 + SK 的系统方案 - 239573049 - 博客园](https://www.cnblogs.com/token-ai/p/19107551)

- [深度解析 Microsoft MCP 仓库中的.NET Native AOT 架构与工程实践](https://mp.weixin.qq.com/s/78gdNkQ-g0mD8UElMLQ6Kw)

- [深度解析 Microsoft MCP 仓库中的.NET Native AOT 架构与工程实践](https://mp.weixin.qq.com/s/GXa78Bbxinie_B2s8qZQiA)

### A2A（Agent-to-Agent）

- [多Agent协作入门：基于A2A协议的Agent通信（上）](https://mp.weixin.qq.com/s/Usi6t_Oc5QsDvCyH9W1gRg?poc_token=HB6C2GijhfD_InTXJGNReVaP-1f9aGwHXWbPkNM8)

### 大模型项目

- [为大模型 MCP Code Interpreter 而生：C# Runner 开源发布 - .NET骚操作 - 博客园](https://www.cnblogs.com/sdcb/p/19003720/csharp-runner-mcp)

### AI创作


  - **图像生成**

    - [Doubao Seedream 4.0 爆火：多图融合 + 多样玩法，解锁 AI 图像创作新境界！](https://mp.weixin.qq.com/s/FWOLXAgeWfiwD6-KRpNO4A)
    - **Microsoft Agent Framework**
      - [Microsoft Agent Framework：让每位开发者都能轻松构建 AI 智能体](https://mp.weixin.qq.com/s/fGvZ_hxtPNJdO5D-jF67GA)
    - [Nano Banana Pro生图使用指南：让AI绘画触手可及](https://mp.weixin.qq.com/s/FHsePixLy4QEv40GSB3a2A)

### AI 编程

- [编程账单 2600 让人崩溃？通过国产模型把100块花出2000块的效果](https://mp.weixin.qq.com/s/siZ13cyLYZzl_R12HgfUtg)

### 模型训练

- [C# 从零开始训练轻量级语言模型-MiniLLM](https://mp.weixin.qq.com/s/RU2-wOevYq3RPPaOqPTPXA)

### 学习

- [微软官方出品的 AI 初学者入门精品课程，21节课程教你构建生成式人工智能应用所需掌握的知识！](https://mp.weixin.qq.com/s/zy16qmxDPbxovRwHvKae6g)
  - [面向初学者的生成式 AI | Microsoft Learn](https://learn.microsoft.com/zh-cn/shows/generative-ai-for-beginners/)
  - [microsoft/Generative-AI-for-beginners-dotnet: Five lessons, learn how to really apply AI to your .NET Applications](https://github.com/microsoft/Generative-AI-for-beginners-dotnet)



## A. ABP

- [Abp vNext -动态 C# API 实现原理解析 - yuyuyui - 博客园](https://www.cnblogs.com/yuxl01/p/18092437)

  > 作为铺垫后续阅读源码的一些帮助，开始想直接开始尝试读源码，但是发现上下文连接不紧密，很突兀，所以还是简单介绍下如何使用。最起码从0-1。然后发现他解决的问题, 其实官方文档是有介绍如何使用的，只是比较浅显，想深入理解和发掘它的一些扩展性，还是需要自己多下功夫的，不过经过总结出的经验来说，只要你想学习某一项技术，但凡认真的看过它的官方文档，你就已经超过了60%的人了.
  
- [如何做一个纯净版的ABP vNext 脚手架 - 张飞洪[厦门] - 博客园](https://www.cnblogs.com/jackyfei/p/19047483)



## B. 表达式树

- **[.NET 中的表达式树（Expression Trees）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504372&idx=2&sn=bc243418b04091f4179baf1fe7cfe04a&chksm=965212cf8e05ea9ef9f7a49bdb165c34ce05247f0e2c458a99146cd9752aff4b913dca9000c9&scene=126&sessionid=1724373028#rd)**
- [微软.net表达式编译居然有bug? - xiangji - 博客园](https://www.cnblogs.com/xiangji/p/19077209)
- 



## B. 并发迁移

- [EntityFramework Core并发迁移解决方案 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505562&idx=3&sn=9f6d974d52cf51600cd41fecda0e3d2d&chksm=968b84946255e140d2f3dea7d7c90f7364dbae537c37ff5beb8c448cbeb5dc09ad2d204b22fa&scene=126&sessionid=1727052024#rd)



## B. 并行编程

- [PLINQ vs LINQ：C#中的使用场景与性能洞察](https://mp.weixin.qq.com/s/JiJjzigo73LT96zpJ_xKSg)



## B. Blazor

- [在 Blazor 中使用 Chart.js 快速创建数据可视化图表](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511983&idx=1&sn=a7e610ae2489ae9f38033289fef4019a&chksm=969aa8c071cd786d6498c80ed7064e43fec569806947face768229c52bfcebc9b675da4606bf&scene=126&sessionid=1743556275#rd)

- [基于 Spread，在 Blazor 框架中导入 / 导出 Excel - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18944095)

  > 在现代 Web 应用开发中，处理 Excel 文件的导入和导出是一项常见且重要的需求。Blazor 框架是微软推出的用于构建具有 .NET 强大功能的交互式客户端 Web UI 的相对较新的框架。而 Spread.net（是一个非常强大且可扩展的 JavaScript 电子表格组件，它能使在 Blazor 框架中进行 Excel 文件的导入和导出变得更加简单。本文将详细介绍如何基于 SpreadJS，在 Blazor 框架中实现 Excel 文件的导入和导出功能。
  
- [Blazor全栈是个陷阱 - StarBlog](https://blog.deali.cn/p/blazor-fullstack-is-a-trap)

  - [Blazor 全栈是个陷阱](https://mp.weixin.qq.com/s/5z9pxJn67YI9MvDpleeK_g)



## B. 编辑器

- [AI 的回复怎么完美转 Word？只要看懂这个格式 Markdown，效率翻倍](https://mp.weixin.qq.com/s/epeNcFFx7kLruFkQFan9VQ)
- [出事了！卸载Notepad++](https://mp.weixin.qq.com/s/zgsAbJVjlv8QRz_NOhgA1Q)




## C. 处理器

- [盘点.NET支持的 处理器架构 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18471374)



## C. Cache

- [.NET8 使用缓存的几种方法，你都用过吗？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507108&idx=2&sn=c941bddf0487e2a907ab74905ecfe985&chksm=965a2b444962e5e9176ebd898c2295ddae9f3feda792725b7f0edb98b04f1a26851a7bd41829&scene=126&sessionid=1730941884#rd)

- [Hello HybridCache! Streamlining Cache Management for ASP.NET Core Applications - .NET Blog](https://devblogs.microsoft.com/dotnet/hybrid-cache-is-now-ga/)

  > HybridCache 是一个新的 .NET 9 库，可通过Microsoft.Extensions.Caching.Hybrid包获取，现已普遍可用！HybridCache 因其能够利用内存和分布式缓存（如 Redis）而得名，无论应用程序的规模或复杂性如何，它都能确保数据存储和检索针对性能和安全性进行优化。
  
- [Lightning.NET：让你的C#应用飞起来的高性能键值存储方案](https://mp.weixin.qq.com/s/XAzLClQgidI90pKVKKD7ZA)

- [C#开发者必看：ScottPlot 5.0 + Lightning.NET打造现代化数据可视化系统](https://mp.weixin.qq.com/s/yQrEjCuO3GQ9bdrEmNGO1w)

- [C# MemoryPool完全指南：告别内存分配性能瓶颈](https://mp.weixin.qq.com/s/Ue5awqA-k-KSgpSREtRnwg)

- **内存映射**

  - [C#大容量内存管理实战：手把手教你构建大内存内存映射系统](https://mp.weixin.qq.com/s/cfFlAk427FupHbtePYZJ4A)
  
- **Redis**

  - [C#开发必看：单例ConnectionMultiplexer模式Redis提升应用性能](https://mp.weixin.qq.com/s/hUthQy5WrJ0X-CJNG598_w)





## C. 操作系统

- [.NET Bios相关数据读写 - 唐宋元明清2188 - 博客园](https://www.cnblogs.com/kybs0/p/18613343)



## C. 程序处理

- [.NET 单文件执行程序拆解器 SingleFileExtractor - 冠军 - 博客园](https://www.cnblogs.com/haogj/p/18618295)
- [C# 使用Costura.Fody插件将自己写的程序打包成一个可以独立运行的EXE文件 - 多见多闻 - 博客园](https://www.cnblogs.com/guangzhiruijie/p/17143563.html)



## C. 程序集

- [聊一聊 .NET 的 AssemblyLoadContext 可插拔程序集](https://mp.weixin.qq.com/s/rjwsTg31s_dq7dw3HiJR6w)

  > 最近在分析一个崩溃dump时，发现祸首和AssemblyLoadContext有关，说实话这东西我也比较陌生，后来查了下大模型，它主要奔着替代 .NetFrameWork 时代的 AppDomain 的，都是用来做晚期加卸载，实现对宿主程序的可插拔，AppDomain.Create 是在AppDomain级别上，后者是在 Assembly 级别上。



## C. 程序交互

- [C# WinForms 中嵌入 EXE 程序 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506243&idx=2&sn=2a5fdec6674999242b6444217f4b2e96&chksm=965e96053f14e7b05ddc9eb08c9c20a323da4ad934ee096f98ab77e9cfa2ba229efd81a3d3e1&scene=126&sessionid=1728867433#rd)

- [在网页上调起本机C#程序 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18546412)

- [在 .NET 中使用内存映射文件构建高性能的进程间通信队列 - 黑洞视界 - 博客园](https://www.cnblogs.com/eventhorizon/p/18994830)

  > 本文会先介绍内存映射文件（Memory-Mapped File）的基本概念，如何在 .NET 中使用，然后再介绍如何使用这两种实现来构建高性能的进程间通信队列。

- **.NET & Python**
  
  - [C#调用Python脚本的方式（一），以PaddleOCR-GUI为例 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18605737)
  
  - [.NET Core奇技淫巧之WinForm使用Python.NET并打包 - GuZhenYin - 博客园](https://www.cnblogs.com/GuZhenYin/p/18781724)
  
  - [MVP 聚技站｜用 CSnakes 把 MarkItDown 嵌入到 .NET 应用程序中](https://mp.weixin.qq.com/s/LDJoSyYVv8XsySqjjfuZ3g)
  
    > 本文将演示我如何使用 CSnakes 将一个调用了 MarkItDown 的 Python 函数脚本嵌入到我的 .NET 应用程序中，让 C# 代码间接完成文档转换。




## C. CDN

- [CDN 是怎么工作的？](https://mp.weixin.qq.com/s/AljFWnZZP6P7HDP1B1mSlQ)



## C. 测试

- [Microsoft.Testing.Platform: Now Supported by All Major .NET Test Frameworks - .NET Blog](https://devblogs.microsoft.com/dotnet/mtp-adoption-frameworks/)

  > 一年前，我们推出了 Microsoft.Testing.Platform，作为 MSTest Runner 公告的一部分。我们的目标是为 .NET 项目创建一个可靠的测试平台，专注于可扩展性和模块化。

- [MSTest 3.8: Top 10 features to supercharge your .NET tests! - .NET Blog](https://devblogs.microsoft.com/dotnet/mstest-3-8-highlights/)

  > MSTest，也称为微软测试框架，简化了.NET 应用程序的测试体验。此测试框架允许用户编写和执行测试，同时提供集成到 Visual Studio 和 Visual Studio Code 测试资源管理器的测试套件，以及许多 CI 管道。MSTest 完全支持、开源且跨平台，与所有支持的.NET 目标一起工作，同时保持对 VSTest 的支持，并增加了对 Microsoft.Testing.Platform（MTP）改进体验的支持。

- [Use BrowserStack App Automate with Appium UI Tests for .NET MAUI Apps - .NET Blog](https://devblogs.microsoft.com/dotnet/browserstack-appium-dotnet-maui/)

  > 使用 BrowserStack App Automate 与 Appium UI 测试自动化 .NET MAUI 应用程序。

- **性能测试与对比**
  
  - [C#集合数据去重的5种方式及其性能对比测试分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507797&idx=1&sn=dae1b96e3b9c0a675ecb8739da389183&chksm=96331b1022ed6028ddbc564f9d8810d7cdb80080ad7f4be39206042c3edb40769bb3c3392a64&scene=126&sessionid=1732840859#rd)

- **单元测试**

  - [分析C#项目的单元测试覆盖率，提高代码质量 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/19026074/csharp-unit-test-coverage-analysis)



## D. DotNet学习

- **[C#中的可放弃变量（弃元）是个什么玩意？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503213&idx=3&sn=3ad3f0570e470c791e160072736d879b&chksm=96ea03f1654fe61f1c113e686f7b94755780bd50dbf2c0075b9fd259649bf5ac37bf18e3eacd&scene=126&sessionid=1721608423#rd)**

- **[C#筑基之解密委托与事件](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503963&idx=2&sn=4a44d7d209a84030ae68d83521d2741e&chksm=9641c13569cd48d5c6e4299307865ff5ac6f0f42d69a6849ff62f4535bc7a48b148c7f9e8dc1&scene=126&sessionid=1723383964#rd)**

- [.NET Core 特性(Attribute)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18551715)

- [什么是.NET的强类型字符串(Strongly typed string)？ - czwy - 博客园](https://www.cnblogs.com/czwy/p/18576931)

- [dotnet scaffold – .NET 的下一代内容创建](https://mp.weixin.qq.com/s/fXVEINNyCio7rAsTTy3OdA)

- [【译】.NET 升级助手现在支持升级到集中式包管理](https://mp.weixin.qq.com/s?__biz=MzAwNTMxMzg1MA==&mid=2654101088&idx=3&sn=478ef086a896019c0bef3f5897ca9b29&scene=21#wechat_redirect)

- [.NET 中编译错误与运行时错误的区别](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512178&idx=2&sn=f8c474eddf79422a0bccf44ba4406e7f&chksm=96956d68653e74eb036f22337e3a8bf3f68b112b684aa55bb5ef9d911963b7d4e626cab3aa57&scene=126&sessionid=1744331895#rd)

- [C#高性能开发之类型系统：从 C# 7.0 到 C# 14 的类型系统演进全景 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18844112)

- [理解 C# 中的各类指针](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513668&idx=3&sn=5c22bd42bed9a5fe898c1febab80746e&chksm=962dc5f34aea2361700f57cb0d55175174f0b56629e1b2c384f5a3068a9803772a9327439aa5&scene=126&sessionid=1747493051#rd)

- [C# 模式匹配全解：原理、用法与易错点](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514184&idx=3&sn=d76471ef00437a9ea3eca1312aaceb52&chksm=961631197bfaf5e20172d9fc24e2d238a76d45c7764281d8667ce9b883b7f0ebb11a0877196f&scene=126&sessionid=1749302045#rd)

- [C# 中的 Debug 与 Release 构建详解](https://mp.weixin.qq.com/s?__biz=MzUxMjI3OTQzMQ==&mid=2247495997&idx=1&sn=90104d3bbd2f4c26f597b72437a8ae32&chksm=f96467d5ce13eec337f7a956f0beaff6b1042b50646865a7dcf28345923daa789f2077b2abe5#rd)

- [What Can C# Do For You](https://www.c-sharpcorner.com/UploadFile/mahesh/what-can-C-Sharp-do-for-you/)

  > 1999 年，微软将 C#（读作 C sharp）作为一门新的未来派编程语言介绍给世界，我有幸成为早期采用该语言的人之一。1999 年 12 月，C#编译器以 alpha 版本发布时，我就接触到了它。是的，当时确实有 alpha 版本。微软花了 3 年时间才推出该语言的首个稳定可用版本。从那时起，我见证了这门新生儿成长为完全成熟的强大语言。

- [C# DiagnosticSource](https://mp.weixin.qq.com/s/-LukllvJjZTJK-5lq8J5LA?scene=0&subscene=90)

  - [DiagnosticSource 类 (System.Diagnostics) | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.diagnostics.diagnosticsource?view=net-9.0)

- [使用c#强大的SourceGenerator现对象的深克隆 - a1010 - 博客园](https://www.cnblogs.com/gmmy/p/19064599)

  > 去年的时候写了一篇用使用c#强大的表达式树实现对象的深克隆. 最近又看到园子里的另外一篇吐槽automapper性能的文章。正好闲来无事，就想着看如果用Source Generator来实现深克隆，性能上会不会比表达式树更强劲呢，于是有了这篇文章。

- [使用c#强大的表达式树实现对象的深克隆 - a1010 - 博客园](https://www.cnblogs.com/gmmy/p/18186750)

- [【拾遗补漏】.NET 常见术语集](https://mp.weixin.qq.com/s/AhcZp_UTjGS9Mbi53uB1hw)

- [Span<T> 和 Memory<T> 到底该用哪个？一句话讲清楚](https://mp.weixin.qq.com/s/cFZS-yRoGxjyCgJQfOH3Fw)

- **构造函数**

  - [C#继承链中的构造函数调用顺序：从混乱到清晰](https://mp.weixin.qq.com/s/6mHBElm_IAa6XkSYCxgTGA)
  - [C#中的7种构造函数，你都用过吗？](https://mp.weixin.qq.com/s/C9UazT3ytk-VbGy3qzSYPw)


### 功能使用

- [这13个C# 特性你可能一直在用错](https://mp.weixin.qq.com/s/a7N8-Z7DM4REa4UHMkDpHQ)

- **Channels**
  - [深入探索C# Channels：高级模式与实战指南](https://mp.weixin.qq.com/s/jhu0IEk_4D1n-cJocPLMbA)

- **开发经验/技巧**

  - [代码 vs. 经验：真正优秀的.NET开发者必须懂的16条关键实践](https://mp.weixin.qq.com/s/ST4gjQ_pWu8ju5dPrPpbYA)
  - [C# 开发必备的 10 个实用小技巧](https://mp.weixin.qq.com/s/gaa2wD-JnUheH0w9E7b3PQ)
  - [C# Record和File修饰符：提升代码质量的两大利器](https://mp.weixin.qq.com/s/G5RIFKWorjHZPqzcZ7swPw)
  - [C# 开发必知：IQueryable vs IEnumerable 的性能陷阱与最佳实践](https://mp.weixin.qq.com/s/iFqUlaKtgUUHoCN7trLIKQ)

- **关键字**

  - [C# 关键字 | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/)
  - [C# 中比较实用的关键字，基础高频面试题！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511601&idx=1&sn=974ec95cb0f1b247b3ecdefefb98cafb&chksm=9622bb281f2819596c3c6a359f1e0d5e5514db2f4be74afff720cc9769f94715fcb0fa43ec00&scene=126&sessionid=1742433141#rd)
  - [C#关键字：in、out、ref、in T、out T、[In\]、[Out]这些你都知道多少？ - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18821383)
  - [面试官最爱问的 C# 细节：ref、out、in 到底有啥区别？](https://mp.weixin.qq.com/s/p9IWHQWqHsthXRLWiKWEHQ)
  - [C# 中 ?、??、??=、?: 、?. 、?[] 各种问号的用法和说明](https://mp.weixin.qq.com/s/yyMf1__eCeWpX7Co2yXwyw)
  - [你知道C#独创的语法糖吗？](https://mp.weixin.qq.com/s/8sh-pHSN5cXILPOijnG5ZQ)
  - **Dictionary**
    - [.NET 8新特性解析：FrozenDictionary让你的应用性能起飞！](https://mp.weixin.qq.com/s/zfJGd5O6tOap97_t3b7neA)
  - **yield**
    - [yield 语句 - 在迭代器中提供下一个元素 - C# reference | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/statements/yield)
    - [C#使用yield关键字提升迭代性能与效率](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509674&idx=1&sn=a8937987adadf6542a1397ac0839dfc2&chksm=96921ecd6c8e491b48bc41d5650fa34aee43d05535e81d8a77a1b59b71ddb4d709e568c3fbce&scene=126&sessionid=1737511894#rd)
    - [深入解析C#中的yield return：为什么它比return更高效？](https://mp.weixin.qq.com/s/of3Xd4nStdWQ4DJZZtmFkQ)
  - **as/is**
    - [C# as 和 is 运算符区别和用法](https://mp.weixin.qq.com/s/s880U7ea-N2Xl_3krgyjxA)
    - [c# is 和 as 浅看重制版 - 敖毛毛 - 博客园](https://www.cnblogs.com/aoximin/p/18572890)
  - **const/readonly**
    - [C# 中 const 和 readonly 关键字的区别和用法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247515028&idx=1&sn=16230b3dad3b878d2119df2eb6381751&chksm=96516d6df73b2edf6d48aaab881a2b88f639bdc0cdf99e747e5bb077859443404dd3e9e263d8&scene=126&sessionid=1752022453#rd)
  - **volatile**
    - [别再乱用 lock 了！理解 C# 中的 volatile 关键字](https://mp.weixin.qq.com/s/-UDLtcfzKtc4LoQ-e_UmtQ)
  - **stackalloc**
    - [stackalloc 表达式 - 在堆栈而不是堆上分配变量存储 - C# reference | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/operators/stackalloc)
    - [.NET性能优化实战：用 Span<T> 和 stackalloc 给 GC“减负”](https://mp.weixin.qq.com/s/VBnIif8zmBcGtuGT0n6_mA)
  - **dynamic**
    - [告别反射地狱！C#动态编程让你的代码优雅起飞](https://mp.weixin.qq.com/s/bcLHewcPFtGIFmMFiIfjkA)

- **值类型**
  
  - **值类型 ToString**
    - [Int32.ToString 方法 (System) | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.int32.tostring?view=net-9.0#system-int32-tostring(system-string))
    - [标准数字格式字符串 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/standard-numeric-format-strings)
    - [自定义数字格式字符串 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/custom-numeric-format-strings)
    - [概述：如何在 .NET 中设置数字、日期、枚举和其他类型的格式 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/formatting-types)
  
- **委托**
  - [C# 委托与 Lambda 表达式转换机制及弱事件模式下的生命周期分析 - 陈百川 - 博客园](https://www.cnblogs.com/buachuan/p/18385701)
  - [C#委托的前世今生 - 付工上位机 - 博客园](https://www.cnblogs.com/xiketangedu/p/18594690)

- **Linq**
  - [C# LINQ 快速入门实战指南，建议收藏学习！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512214&idx=1&sn=beceb45fd88d4bea8ee12e15d57631ce&chksm=9635e76b13b7c94d85ba09304c2da95b7a4c3b4564ae5e885c1fbdcac63bf4f95ebb7b8e7054&scene=126&sessionid=1744331895#rd)

  - [C#中LINQ基础：101个常用LINQ操作](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513171&idx=2&sn=03d1f2ff59b46e7b53793a0fffd208bf&chksm=9600a2b413806c038768e810e237e110abeb0a48f0902ffcfc16711a43ab38ac2ad9cae60df5&scene=126&sessionid=1745974502#rd)

  - [.NET 开发者最容易踩坑的 5 个 LINQ 使用误区](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514706&idx=2&sn=741057a3b743a69c629bbf1e6e79e9ea&chksm=963696429c50df4b129f7e048e818213afb2b898711c923ba107b48977efd87ccfb7e961bbd4&scene=126&sessionid=1750727222#rd)

  - [C#.Net筑基-优雅LINQ的查询艺术 - 安木夕 - 博客园](https://www.cnblogs.com/anding/p/18942909)

    - > Linq（Language Integrated Query，集成查询语言），顾名思义就是用来查询数据的一种语言（可以看作是一组功能、框架特性的集合）。在.NETFramework3.5（大概2007年）引入C#，用统一的C#语言快速查询各种数据，如数据库、XML文档、对象集合等等。Linq的诞生对 C# 编程领域产生了深远而持久的影响，改变了开发人员对查询的思考方式。
    
    - [抽象与性能：从 LINQ 看现代 .NET 的优化之道](https://mp.weixin.qq.com/s/0ItkYjhQ2LXUK9B7Hh_3OQ?scene=0&subscene=90)
    
    - [抽象与性能：从 LINQ 看现代 .NET 的优化之道](https://mp.weixin.qq.com/s/_uqdbzt4MF9uQrIi8368kg)
    
  - [.NET 9震撼来袭！三大LINQ新方法让你的代码效率翻倍](https://mp.weixin.qq.com/s/nojKzRM0wnQV_axtyZAbPw)
  
- **集合**
  
  - [深入理解 C# 集合接口：IEnumerable、IEnumerator、ICollection 与 IList 的层次与实战](https://mp.weixin.qq.com/s/fZCEFRy7YN7hAn-jWjy4AA)
  
- **字典**

  - [.NET(C#)遍历字典Dictionary的几种方法对比](https://mp.weixin.qq.com/s/y7shVptLVbjRjM4KomvE7A)

- **配置文件**

  - [理解.NET Core中的配置Configuration - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18831900)
  - [.NET Core中的配置Configuration实战 - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18842001)

- **跨平台（.NET Core&.NET 5及以上）**

  - [dotnet 9 通过 AppHostRelativeDotNet 指定自定义的运行时路径 - lindexi - 博客园](https://www.cnblogs.com/lindexi/p/18847625)

- **线程/多线程**

  - [C# 线程安全集合 Concurrent](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513473&idx=2&sn=19ee186ca47c34bea86e660d0e18e1aa&chksm=96f868e8dcfc79ac8778e48643d518a75485039b6208d31251f19a9aa20a9701ac8490b63c72&scene=126&sessionid=1746665735#rd)

- **泛型**

  - [C#.Net筑基-泛型T & 协变逆变 - 安木夕 - 博客园](https://www.cnblogs.com/anding/p/18940828)
  - [C# 为什么不推荐用非泛型集合？泛型集合到底强在哪？](https://mp.weixin.qq.com/s/tBj1nwlbYL7ZDZJOzVQwGQ?scene=0&subscene=90)

- **扩展方法**

  - [C#中不依赖任何映射框架的对象映射实现](https://mp.weixin.qq.com/s/d4fuhSM6U37XIVLXLhq-2Q)

- **调试**

  - [dotnet 代码调试方法 - lindexi - 博客园](https://www.cnblogs.com/lindexi/p/18960345)

- **脚本化**

  - [C#脚本化（Roslyn）：如何在C#脚本中引入nuget包 - 昏睡红猹 - 博客园](https://www.cnblogs.com/yangtb/p/18881071)

    > 假设我们开发了一个C#脚本编辑器，利用Roslyn去执行用户所编写的脚本。这时候，如果用户想要引用一个nuget包，应该如何实现呢？我们想要引用nuget包的话，只要能得到nuget包及其依赖包的所有程序集和资源文件就可以了。

- **开发实战**

  - [C#开发实战：BlockingCollection停止重启失效？一文解决所有坑点！](https://mp.weixin.qq.com/s/AsyFcsl_9kZ3dCfthUh58A)

- **.NET 和 .NET Framework 更新**

  - [.NET and .NET Framework July 2025 servicing releases updates - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-and-dotnet-framework-july-2025-servicing-updates/)

    > 欢迎来到我们 2025 年 7 月的 .NET 服务更新，本文让我们深入了解 .NET 和 .NET Framework 的最新版本新增内容的简要概述。

  - [.NET and .NET Framework August 2025 servicing releases updates - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-and-dotnet-framework-august-2025-servicing-updates/)

    > 欢迎来到我们 2025 年 8 月的.NET 服务更新。让我们深入了解.NET 和.NET Framework 的最新版本，以下是我们的服务更新中新增内容的简要概述。

  - [.NET and .NET Framework September 2025 servicing releases updates - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-and-dotnet-framework-september-2025-servicing-updates/)

    > .NET 和 .NET Framework 2025 年 9 月服务更新。

### .NET/C#更新

- [从 .NET Core1.0 到 .NET 10：.NET + C# 演进全景](https://mp.weixin.qq.com/s/Fg2YDJG1CY1NWhxPHJd7qw)

  > 本文回顾微软 .NET 与 C# 语言从跨平台起步到统一平台、再到现代化性能优化的全过程。每个版本都配有简明 Demo 代码，便于开发者快速掌握特性变化与实践。

- **C# 7.0**

  - [C# 的小惊喜：ValueTuple，让多返回值更优雅，性能更强](https://mp.weixin.qq.com/s/6MkIGETc4Wm2nHTYCyoebw)
  - [C# 弃元模式：从语法糖到性能利器的深度解析 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19131402)

- **.NET5/C#9**

- **.NET 9/C#13**

  - [.NET 9 的免费午餐：GZip 性能提升38.3%](https://mp.weixin.qq.com/s/nbXW89ZzXnr4SggBvDrJ2w?scene=0&subscene=90)

  - [.NET 9 的免费午餐：GZip 性能提升38.3%](https://mp.weixin.qq.com/s/nbXW89ZzXnr4SggBvDrJ2w?scene=0&subscene=90)

  - [.NET 9 的免费午餐：GZip 性能提升38.3%](https://mp.weixin.qq.com/s/nbXW89ZzXnr4SggBvDrJ2w?scene=0&subscene=90)

    > .NET 9 迎来了一项备受期待的功能更新：对JSON Schema的原生支持。这一新增功能极大地简化了JSON Schema的生成与使用。JSON Schema作为一种描述JSON数据结构的标准格式，能够帮助我们有效地验证数据结构和类型。尤其在与大语言模型（LLM）进行交互的场景中，它扮演着至关重要的角色，可以精确定义模型输入与输出的数据格式，从而确保通信的准确性和可靠性。

  - [换成.NET 9，你的LINQ代码还能快上7倍](https://mp.weixin.qq.com/s/cERgQHkLHugj3cF3URtvQw?scene=0&subscene=90)

  - **问题处理**

    - [关于.net9发布单体exe程序无法打开问题详解 - 辛丑知此名 - 博客园](https://www.cnblogs.com/sc-Free-Die/p/19075260)

      > 某天，开开心心的使用了最新的.net9开发了一个winform程序，在发布成x64架构的单文件exe后，在电脑上面竟然打不开，经过多次尝试后发现x86版本的在本地电脑上测试没有问题，但是一发布成x64模式则会进行报错。

- **.NET 10/C# 14**

  - [.NET 10 Preview 6 is now available! - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-10-preview-6/)

    > 今天，我们很高兴宣布 .NET 10 的第六个预览版本发布，涵盖了 .NET 运行时、SDK、库、C#、ASP.NET Core、Blazor、.NET MAUI 等方面的改进。请查看下方链接的完整发布说明，并立即开始使用。
    
  - [.NET 10 Preview 7 is now available! - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-10-preview-7/)

    > 今天，我们很高兴宣布 .NET 10 的第七个预览版本发布，涵盖了 .NET 运行时、SDK、库、C#、ASP.NET Core、Blazor、.NET MAUI 等方面的改进。请查看下方链接的完整发布说明，并立即开始使用。
    
  - [.NET 10 中的 dnx](https://mp.weixin.qq.com/s/9eIHTWF_bJQpLxEehCz-WA?scene=0&subscene=90)
  
  
    - [.NET 10 Preview 7 Delivers ASP.NET Core, Blazor, and MAUI Enhancements, with C# 14 Feature Complete - InfoQ](https://www.infoq.com/news/2025/08/dotnet-10-preview-7/)
      - [.NET 10 预览版 7 增强 ASP.NET Core、Blazor 和 MAUI，并实现 C# 14 的全部功能\_科技新闻\_博客园](https://news.cnblogs.com/n/799586/)
      
  
  
    - [Performance Improvements in .NET 10 - .NET Blog](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-10/)
  
      > .NET 10 性能改进一览。
  
  
    - [C# 14 新增功能实操！](https://mp.weixin.qq.com/s/jrp8MFRmgApV-dFSfh9MAQ?scene=0&subscene=90)
  
  
    - [那些被推迟的 C# 14 特性及其背后的故事](https://mp.weixin.qq.com/s/Cgmi8wLzPmHb2cnUHtwauQ?scene=0&subscene=90)
  
  
    - [那些被推迟的 C# 14 特性及其背后的故事 - .NET骚操作 - 博客园](https://www.cnblogs.com/sdcb/p/19026035/unimplemented-csharp-14-features)
  
  
    - [Microsoft 推出 .NET 10 RC 1](https://mp.weixin.qq.com/s/mjlFbd1uT4ETRmGN-WI-jA)
      - [Microsoft 推出 .NET 10 RC 1 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19084372)
      - [Announcing .NET 10 Release Candidate 1 - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-10-rc-1/)
      
  
  
    - [.NET 10 Release Candidate 2（RC2）发布](https://mp.weixin.qq.com/s/kAgadEnl4PHbcVBVBzngcA)
  
  
    - [.NET 10 是微软 AI 战略的技术承重墙](https://mp.weixin.qq.com/s/cQ88wtns2fiZMtjy4WxAgQ)
      - [.NET 10 是微软 AI 战略的技术承重墙 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19096157)
      
  
  
    - [.NET10 新版本前瞻：C# 扩展成员、空条件赋值等重磅特性解析](https://mp.weixin.qq.com/s/5kGceaQN0RWvxoEY4DSpWA)
  
  
    - [好消息，.NET 10 正式发布，更智能、更安全、更高性能的统一开发平台！](https://mp.weixin.qq.com/s/FkjY6oyDkEma3OQ0yuqXng)
  
  
    - [.NET 10性能突破：持续优化才是质变关键](https://mp.weixin.qq.com/s/hPnXsIQaze7tyYI927ympQ)
  
      > 2025年11月12日，微软在.NET Conf 2025正式发布了.NET 10。 作为一个长期支持（LTS）版本，它将获得为期三年的官方安全补丁与服务支持，直至 2028 年 11 月 10 日， 官方称其为“迄今为止最高效、最现代、最安全、最智能、性能最高的 .NET 版本”。让我们一起来看看.NET 10 的性能相对于上一代版本 .NET 9 有哪些地方的提高吧。
  
  
    - [宇宙神器.NET 10 发布！C# 14 新特性全解析](https://mp.weixin.qq.com/s/SKnLajdrusVrIad8tP9CtA)
    - [.NET10 新版本前瞻：C# 扩展成员、空条件赋值等重磅特性解析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247518018&idx=2&sn=73117af0b6c79ebc8cf38cfacca41b0f&scene=21&poc_token=HAvtJmmjFeiQnMkUf7B1Z1W3g-4FbA2hgW89GCmD)
  
  
    - [C# 14 新功能全面解析：提升生产力与性能的革命性更新](https://mp.weixin.qq.com/s/iBrKRcjILuFKxv1jn8_3QA)
    - [C# 14 终于把 Span<T>当“自己人”了](https://mp.weixin.qq.com/s/O-hzu37_3gk8nw0wIuPsHA)
    - [Introducing C# 14 - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-csharp-14/)
    - [.NET 10 网络改进：HTTP、安全与网络原语的全面升级](https://mp.weixin.qq.com/s/PmK3o64KaSMQFvbZnyMN2g)
    - [C# 14 field keyword 让属性更简单](https://mp.weixin.qq.com/s/mRwxYsEftJBwIX_ERMrV1Q)
  

### 发布与部署

- [.NET 项目发布中常见的文件及其作用](https://mp.weixin.qq.com/s/CChDcv2NQkRsaUVqyBecRg?scene=0&subscene=90)

### 序列化/反序列化

- [2025年：是时候重新认识System.Text.Json了](https://mp.weixin.qq.com/s/bymE3eQTjvwtA-qyGXqkCA?scene=0&subscene=90)

### GitHub Copilot

- [Improving Codebase Awareness in Visual Studio Chat - Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/improving-codebase-awareness-in-visual-studio-chat/)
  - [【译】增强 Visual Studio 聊天中的代码库感知能力 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19054437)

### 桌面应用

 - **WinForm**
   - [WinForms开发必备！MessageBox消息框的5个实战技巧](https://mp.weixin.qq.com/s/znX7mP-Cv8_tVyN7F6vbNg)
   
   - [C#批量图片处理神器：一键缩放千张图片，效率提升100倍！](https://mp.weixin.qq.com/s/3oPJVYVWjmAvtJRrlUl_hQ)
   
   - [C#开发必备：如何优雅地监控其他应用程序的生命周期](https://mp.weixin.qq.com/s/n_7TcawmqVHgTD-9mQ231g)
   
   - [.NET 阻止Windows关机以及阻止失败的一些原因 - 唐宋元明清2188 - 博客园](https://www.cnblogs.com/kybs0/p/18822799)
   
     > 本文主要介绍Windows在关闭时，如何正确、可靠的阻止系统关机以及关机前执行相应业务Windows关机，默认会给应用几s的关闭时间，但有一些场景需要在关机/重启前执行更长时间的业务逻辑，确保下次开机时数据的一致性以及可靠性。
   
   - [C# WinForms开发必备：文件操作对话框的5个实战技巧](https://mp.weixin.qq.com/s/pL_uIihvpdLm7wu9CCZkNQ)
   
   - [C#桌面自动化开发必看！掌握核心概念，告别"盲人摸象"式编程](https://mp.weixin.qq.com/s/rsgj1l7xv8sJi653--qHBQ)
   
   - [C#自动化神器：10分钟教你用UI Automation控制任意Windows应用](https://mp.weixin.qq.com/s/THTZjf_rzVLmsyBqHZ0AGA)
 - **WPF**
   
   - [C#资源管理新利器：ActionDisposable模式让你告别内存泄漏](https://mp.weixin.qq.com/s/cAf1mpfW9i6EUUb_kNl9lw)
   - 

### 服务

- [告别传统开发模式！WolverineFx让你的C#应用性能飙升10倍](https://mp.weixin.qq.com/s/tHw2rK8ldcj-Yk13xxS81g)

### 动态

- [C# 2025年6-9月TIOBE排名增长及未来展望](https://mp.weixin.qq.com/s/iNgAt4Ia1ppeyxvhstCeAg)
  - [2025 年 11 月编程语言排行榜｜C# 暴涨，有望成为 2025 “年度编程语言”！](https://mp.weixin.qq.com/s/2AyGyRF0Hg0eyWs0G2V2vw)
- [Why Everyone Says .NET Can’t Handle High Concurrency (And Why That’s Outdated) - DEV Community](https://dev.to/lamri_abdellahramdane_15/why-everyone-says-net-cant-handle-high-concurrency-and-why-thats-outdated-14m7)
  - [为什么总有人说 .NET 扛不住高并发](https://mp.weixin.qq.com/s/yvyUB2Oe-6ZavRJEukqSTQ)
- [从3亿到48亿：NuGet周下载量跃迁背后的.NET生态演进与未来挑战（2019-2025）](https://mp.weixin.qq.com/s/tCNHjI2AP2Pla5pNLLyD2Q)
- [从3亿到48亿：NuGet周下载量跃迁背后的.NET生态演进与未来挑战（2019-2025） - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19108161)
- [.NET Conf 2025](https://www.dotnetconf.net/)
  - [.NET Conf 2025即将开始](https://mp.weixin.qq.com/s?__biz=MzAwNTMxMzg1MA==&mid=2654102215&idx=1&sn=bd313cb352134543dc09f35d83457476&chksm=80d84692b7afcf840999145f04bb37d3a676da23f13fe97f718277233740437d35942f4d53b4&cur_album_id=1966263652198465539&scene=189#wechat_redirect)
- [.NET Conf China 2025](https://dotnetconf.cn/2025)
  - [大会第一波议题超前剧透｜.NET Conf China 2025 更多精彩等你现场解锁！](https://mp.weixin.qq.com/s/HPz7IQohy5faG8OR3TC1bw)
- [边界突围：中国.NET技术的七年认知演进与社区化生态重构 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19288286)
- [2026：让 .NET 再次伟大](https://mp.weixin.qq.com/s/w4YHpFa4qbKuI3-4eWc9kA)




## D. DotNet相关书籍

- **[C#/.NET/.NET Core推荐学习书籍](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503703&idx=1&sn=4edf28a7e525e77ff6f785ede7e25fc0&chksm=96ca7c9e4e99ef9d52acf599be40c5f36bbba002536879f01a1dc8204f2152d4424877093c03&scene=126&sessionid=1722818981#rd)**
- [C#/.NET/.NET Core推荐学习书籍（25年1月更新）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509208&idx=1&sn=f9ae4917a366f00cf56f93e46b138285&chksm=96aca5713a19e1a1f73830bdf44fba275d9ee3c2eea8ea3f7245d5488a714866a17a24fe5f2b&scene=126&sessionid=1736902610#rd)



## D. DotNet深入理解/一探究竟

- [提升.NET性能：深入理解.NET中的Span与Substring (qq.com)](https://mp.weixin.qq.com/s/zufKoMoo-Z41W6wAR9nklw)

- [.NET掌握 LINQ 神器：揭秘 AsEnumerable、DefaultIfEmpty 和 Empty 的真正用法 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504940&idx=3&sn=9d80e7ac52959dddd3ff8d9620a7bb48&chksm=9621db62ce5d56498e0eabb91db24dcfe25baf9bafdb80d602c1a3fd1ecd115942f7ec6a69e3&scene=126&sessionid=1725930428#rd)

- [2024年各编程语言运行100万个并发任务需要多少内存？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507837&idx=3&sn=f4ea3d7d4896ca06c11996116c9cdd88&chksm=96a3c34dedb89d53b0df04751dc66a39e65d0f7e6f5c5cba2734ca4ff5fb7f5e14c633b8e7f9&scene=126&sessionid=1733100642#rd)

- [一次 .NET 性能优化之旅：将 GC 压力降低 99% - 智汇IOT - 博客园](https://www.cnblogs.com/Cookies-Tang/p/18956241)

  > 最近，我使用 ScottPlot 库开发一个频谱分析应用。应用的核心功能之一是实时显示频谱图，这可以看作是一个高频刷新热力图（Heatmap）。然而，在程序运行一段时间后，我注意到整体性能开始逐渐下降，界面也出现了卡顿。直觉告诉我，这背后一定隐藏着性能瓶颈。
  
- [换成.NET 9，你的LINQ代码还能快上7倍](https://mp.weixin.qq.com/s/cERgQHkLHugj3cF3URtvQw?scene=0&subscene=90)

- [一个被BCL遗忘的高性能集合：C# CircularBuffer<T>深度解析](https://mp.weixin.qq.com/s/YEU5VrfSuo4KU38rvAZ2LA?scene=0&subscene=90)

- [一个被BCL遗忘的高性能集合：C# CircularBuffer<T>深度解析](https://mp.weixin.qq.com/s/ZzgaiAUsjpHRGTpiwlVBrg?scene=0&subscene=90)

- [一个被BCL遗忘的高性能集合：C# CircularBuffer<T>深度解析 - .NET骚操作 - 博客园](https://www.cnblogs.com/sdcb/p/19019424/csharp-circular-buffer)

- [CircularBuffer<T> 类 (Microsoft.VisualStudio.Utilities) | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.visualstudio.utilities.circularbuffer-1?view=visualstudiosdk-2022)

- [CircularBuffer-CSharp/CircularBuffer/CircularBuffer.cs at master · joaoportela/CircularBuffer-CSharp](https://github.com/joaoportela/CircularBuffer-CSharp/blob/master/CircularBuffer/CircularBuffer.cs)

- [不要再用循环了：用 Dictionary<Guid, T> 高效访问实体对象！让查找飞起来](https://mp.weixin.qq.com/s/JPHDUqz86unzofqdpkc2zg?scene=0&subscene=90)

- [抽象与性能：从 LINQ 看现代 .NET 的优化之道 - .NET骚操作 - 博客园](https://www.cnblogs.com/sdcb/p/19013541/linq-abstraction-and-perf-modern-programming-language)

- [聊一聊 .NET 中的 CancellationTokenSource](https://mp.weixin.qq.com/s/aroutUAWHooxlXpiDmW4Iw)

- **数据处理**

  - [C# SIMD编程实践：工业数据处理性能优化案例 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/19062068)

    > 想象一下这样的场景：一台精密的工业扫描设备每次检测都会产生200万个浮点数据，需要我们计算出最大值、最小值、平均值和方差来判断工件是否合格。使用传统的C#循环处理，每次计算需要几秒钟时间，严重影响生产线效率。但是，通过SIMD优化后，同样的计算只需要几十毫秒！这不是魔法，这是现代CPU并行计算能力的体现。今天，我们就来揭秘这个性能奇迹背后的技术原理。
    
  - [C#性能提升神器：据说SimdLinq让LINQ聚合操作快10倍?](https://mp.weixin.qq.com/s/yfF7NM_ZxFcEfvbtHBagaA)
  
  - [C# 数值解析性能提升9倍！csFastFloat让你的程序飞起来](https://mp.weixin.qq.com/s/ffj140Zyg0k-Qo7tSq0SaQ)
  
  - [C#性能优化神器！Faster.Map：比Dictionary快数倍的高性能HashMap](https://mp.weixin.qq.com/s/7kGZg66L6qvlUrSiVb8vuA)
  
  - [不服跑个分？.NET 10 大整数计算对阵 Java，结果令人意外](https://mp.weixin.qq.com/s/eUxZ8ukVmqH0QRCXvvCoRQ)
  
- [一行特性，让C#方法快10%](https://mp.weixin.qq.com/s/UDGcAc9rp7cBF-hYOGq9kw)

- [C# 字符串拼接演进全解析 : 让你的代码更优化](https://mp.weixin.qq.com/s/ttlLu-tAh5sajnp6FzDyLA)

- [你可能忽视的 C# 性能优化细节](https://mp.weixin.qq.com/s/5Nz17n4zEl05mJSus7stZQ)

- [.NET开发必知的5个隐藏技巧：依赖注入与运行时控制的进阶指南](https://mp.weixin.qq.com/s/05A2KGvu_EQAnVXWqGqvqA)

- [高效.NET编程实战：5个提升性能与可维护性的核心技巧](https://mp.weixin.qq.com/s/e9HptlxdZQPkCBlDC7hnCQ)

- [进阶C#开发：10个被低估但能提升代码质量的关键字](https://mp.weixin.qq.com/s/WG-mvOmKwqmEG5hoDg9FOg)

- **ASP.NET Core**

  - [提高 ASP.NET API 应用性能的 24 种方法和技巧](https://mp.weixin.qq.com/s/C3fPRTnmchYW8dicklavfg)





## D. DotNet 新特性

- **.NET 9/C# 13**
  - -[.NET 9 的关键功能](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511000&idx=3&sn=582f6f1d479b2891835085b383bd7c1f&chksm=961401619ad4576ecdef66081c93323e4abff730cb44af87109b93fcc015c8604bdfca3b8abe&scene=126&sessionid=1741260725#rd)

- **.NET 10/C# 14**
  - [.NET 10首个预览版发布：重大改进与新特性概览！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510975&idx=1&sn=5c369c5afa39966c6bccbb975d6972b0&chksm=96135e0ae4bf9b6200d5ec16fd2926513bb16dedf836e27fbb12eb3ae0364ff53a5068280bb9&scene=126&sessionid=1741049507#rd)



## D. .NET 线程安全

- [.NET 中的线程安全数据结构 - 贾光辉 - 博客园](https://www.cnblogs.com/Tangtang1997/p/18629960)



## D. 堆栈

  - [C# StackTrace & StackFrame (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505324&idx=3&sn=544a97d85ff3faaf7e3d573f17857fda&chksm=966995f2b66c273d692ffea36fd48b2824541025967e894bdfef63f5b208b099b22ed2021283&scene=126&sessionid=1726621538#rd)
  - [.NET 中有多少种定时器？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503703&idx=2&sn=fd00632b7fc64ae982c74990b4c4a438&chksm=969ff1f636d9f542d499971c43f22c9cad937a2331b178d8dcfd235e4d8064dcc2bf583104c1&scene=126&sessionid=1722818981#rd)



## D. 电子白板

- [.NET 白板书写延迟-触摸屏报点率 - 唐宋元明清2188 - 博客园 (cnblogs.com)](https://www.cnblogs.com/kybs0/p/18453947)
- [.NET 白板书写加速-曲线拟合预测 - 唐宋元明清2188 - 博客园 (cnblogs.com)](https://www.cnblogs.com/kybs0/p/18442316)



## D. 定时器

- [PeriodicTimer](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506539&idx=3&sn=16a6cb3b9320982aacced43fb08115c8&chksm=967cdea0a8c27347dded6ca5255d719f375691dbbe32b41bc6ff7c95e932851394717d06f1e6&scene=126&sessionid=1730033816#rd)
- [如何正确实现一个后台（定时）任务](https://mp.weixin.qq.com/s/sm4HE8bTSLQnxrso7OWDBg?scene=0&subscene=90)

 

## D. Docker

- [制作一个龙芯旧世界的 dotnet sdk docker 镜像](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507032&idx=2&sn=e9328e342ac2ec008ea487e0121f230e&chksm=964cb28543e36b499e93f23379aa75ccf0d0ec015c5cd71de75e42ff715337c99238ca44acde&scene=126&sessionid=1730854499#rd)
- [为什么不建议在 Docker 中跑 MySQL？](https://mp.weixin.qq.com/s/l_TPbUwO3tt9mxEsRPtZgA)



## D. .NET Roslyn

- [.NET Roslyn快速上手指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507619&idx=2&sn=eb2891f7a532af40b54a3b490d2a6ec5&chksm=96cbde3ca6f9e7ec67723537a20e9724151fb43cf98224d2e67c09ea63a8f2480b80e16a2e82&scene=126&sessionid=1731977097#rd)



## D. .NET 源代码生成器

- [.NET 源代码生成器分析器入门](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511778&idx=2&sn=3276f2cbc07d5445a165890c32c768e0&chksm=966607fd2fd49ad4992c225ea1691b9ca518df93ad4c83fb6acfdadcdb5178d7b21ea81d180c&scene=126&sessionid=1742863576#rd)

- [C# - 获取枚举描述 - 使用增量源生成器 - Broadm - 博客园](https://www.cnblogs.com/broadm/p/18786843)

  > C# 获取枚举描述的方法有很多, 常用的有通过 DescriptionAttribute 反射获取, 进阶的可以加上缓存机制, 减少反射的开销。今天我们还提供一种更加高效的方法,通过增量源生成器生成获取枚举描述的代码。这是在编译层面实现的, 无需反射, 性能更高。

- [C#源生成器：让你的代码飞起来的黑科技 - 239573049 - 博客园](https://www.cnblogs.com/token-ai/p/18979978)

  > 说起源生成器，可能很多同学会想：又是什么新的轮子？我反射用得好好的，为什么要学这个？别急，看完这篇文章，你就会发现源生成器简直是性能优化的救命稻草，能让你的应用快到飞起。



## D. 动态方法及热执行

- [.NET 创建动态方法方案及 Natasha V9 - AzulX - 博客园](https://www.cnblogs.com/NMSLanX/p/18299481)



## D. 代码重构

- [C#重构代码的8种基本方法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511652&idx=2&sn=9ef9a8afa9cd9d35d178176c30bdaa87&chksm=96cc09e69028b00979375344262f3e55da4f1e042d4bb03f8bb0c4ba4b00a2b37d64bc700a5d&scene=126&sessionid=1742648517#rd)



## D. 打印

- [C# WinForms 实现打印监听组件 - 码农刚子 - 博客园](https://www.cnblogs.com/shenchuanchao/p/18928583)

  > [PrintApp](https://github.com/shenchuanchao/PrintApp)



## D. 代码审查

- [Developer and AI Code Reviewer: Reviewing AI-Generated Code in .NET - .NET Blog](https://devblogs.microsoft.com/dotnet/developer-and-ai-code-reviewer-reviewing-ai-generated-code-in-dotnet/)

  > 通过承担审查 AI 生成代码的责任，开发者的角色得到了转变。你成为高级 AI 工具（如 GitHub Copilot）生成代码的质量、可靠性和可维护性的关键把关人。虽然代码审查量可能会增加，但同时也提供了提升团队产出标准的机会。本文探讨了如何通过审查 AI 生成代码来提高生产力和效率，并提供了应对常见审查挑战的实用建议。



## D. 代码管理器/代码托管平台

### GitHub

- [GitHub 快速入门指南，新手必备的高效使用手册！](https://mp.weixin.qq.com/s/Ixh8oEVj39bP4Vm0XrFUGg)



## E. 二维码

- [.NET 挪车二维码生成工具开发实战](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514964&idx=2&sn=8bbe3a228162a364334db9cd3048a0f5&chksm=96e6f9e08b1ddb73648d3c356c4eedfca08745eb14a5392939cafd90c79eaf7f9ff0245a07e9&scene=126&sessionid=1751590889#rd)




## F. 反射

- **[.NET中特性＋反射 实现数据校验](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504376&idx=2&sn=2fd96b56646f763d3c23e634762f78e9&chksm=961d2d935c66a4f7a753d320a71bf38450dd8c6141983cf7d7cb6775d4effbe49ec942cd7419&scene=126&sessionid=1724562956#rd)**
- **[在.NET Core中灵活使用反射 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504595&idx=1&sn=7eaa644bfb9320ddcc13898c7eb3eabb&chksm=965956bbbe49a0254597c018d36abf0d307cc5bd11951cc9bfd80d682e314976ddfca337a31d&scene=126&sessionid=1725237952#rd)**
- [.NET Core 反射(Reflection)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18545334)



## F. 分布式系统

  - [如何系统性地学习分布式系统(上)? (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505977&idx=2&sn=1fa124908491abd7a54607639c69d46b&chksm=96285dcb7f6da0309b18469ad22e8a3f7ef34e529fcb3feb8df2adaeadaa19cbcb4a93c31a3e&scene=126&sessionid=1728350900#rd)
  - [如何系统性地学习分布式系统(下)? (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505977&idx=3&sn=d62412a7485665cde4f178ef5a9ff40a&chksm=968f1e07000ed633cf9f45d1b6c8f52e9f46aad76357c6b8d1ec4300ec33d63dcc8a0aa541b5&scene=126&sessionid=1728350900#rd)



## G. GC(垃圾回收)

- [一幅漫画解释 .NET 垃圾收集（GC）原理 | Kit Lau's Blog](https://blog.kitlau.dev/posts/cartoon-dotnet-garbage-collection/)
- [.NET 性能技巧：为什么你应该避免使用终结器 Finalizer？ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506312&idx=2&sn=c8cb88c8d9969e665fe3c5cfb78836a2&chksm=96e8c6c1d830a2a0b5b182b05659c7f2e6dab2844ab52b0a4caf8533bdace259bd0e04970687&scene=126&sessionid=1728867433#rd)
- [一张图带你了解.NET终结(Finalize)流程 - 叫我安不理 - 博客园 (cnblogs.com)](https://www.cnblogs.com/lmy5215006/p/18456380)
- [.NET Core GC计划阶段(plan_phase)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18668721)
- [C#中CLR核心机制解析：垃圾回收与标准Dispose模式_c# clr-CSDN博客](https://blog.csdn.net/2301_79251107/article/details/132113846)
- [C#开发必备：IDisposable接口的完整实战指南](https://mp.weixin.qq.com/s/fSZ0RelzdFL_bLO2MDLxKA)
- [.NET 的全新低延时高吞吐自适应 GC - Satori GC](https://mp.weixin.qq.com/s/Wu0QUjUkLTRY_J1NV7a54g)
- [GC不是垃圾桶，.NET 内存管理你真的懂吗？](https://mp.weixin.qq.com/s/UnQ_TIeypAxdGZ-nipeLcw)
- [为 .NET 10 GC（DATAS）做准备](https://mp.weixin.qq.com/s/5Tb-tF4081vs1bcNYF9P5w)
  - [Preparing for the .NET 10 GC (DATAS) - .NET Blog](https://devblogs.microsoft.com/dotnet/preparing-for-dotnet-10-gc/)
- **资源释放**
  - [Dispose这个坑，90%的C#程序员都踩过](https://mp.weixin.qq.com/s/grE-pw1KijLoFKJkRjdcRw)





## G. Graphql

- [.NET使用Graphql的演示——新一代的API交互 - WeskyNet - 博客园](https://www.cnblogs.com/weskynet/p/18471829)



## G. 公众号

- [利用腾讯元器，将公众号变身为强大的.NET AI智能体](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507304&idx=1&sn=3bf84be622317afa9aa6dd46939ff3af&chksm=967cd2d285573937abccf1871bdc731f5bf75cf5061e330f58d14fd03b8ecc4c721d685c3ed6&scene=126&sessionid=1731633519#rd)
- [分享一个免费且强大的.NET AI智能体](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508803&idx=1&sn=0f6b1f85a8c337d28ea837c50461f7f6&chksm=96664b9cc699716e137428be496eb9a699e2f96254bc8276ed31761420581c95c7b258c387cb&scene=126&sessionid=1735088201#rd)



## G. 故障处理

- [在 .NET 8中使用 Polly 处理瞬态故障](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507674&idx=2&sn=0471a81431a65b626e1c2018daf7f543&chksm=96c8bb05262a12956b3179b37968e12c57882070448d4d76f7e63da20872a923b0f96e39b733&scene=126&sessionid=1732495973#rd)



## G. 国际化

- [Avalonia 国际化之路：Resx 资源文件的深度应用与探索](https://mp.weixin.qq.com/s/BW3UfTcjsUi3Sj55pFrGyw)



## G. 国产化适配

- [.NET适配HarmonyOS进展](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510105&idx=2&sn=41ef49228c1f5dc9063c5037792f8b8f&chksm=96da2fba6247cedfeccad475ef29164a979a9e14ed93b0e3cc56eb8bf3a0f146ffd8e83a46ed&scene=126&sessionid=1739234801#rd)



## G. 感悟与总结

- [10年+ .NET Coder 心语 ── 封装的思维：从隐藏、稳定开始理解其本质意义 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18769455)

  > 小编是一名10年+的.NET Coder，期间也写过Java、Python，从中深刻的认识到了软件开发与语言的无关性。现在小编已经脱离了一线开发岗位，在带领团队的过程中，发现了很多的问题，究其原因，更多的是开发思维的问题。所以小编通过总结自己过去十多年的软件开发经验，为年轻一辈的软件开发者从思维角度提供一些建议，希望能对大家有所帮助。



## G. 工业视觉

- [C# 工业视觉开发必刷20道 Halcon 面试题 - 小码编匠 - 博客园](https://www.cnblogs.com/1312mn/p/18755838)

  > 随着工业4.0的深入推进，越来越多的企业开始重视智能制造和自动化生产。在这个背景下，对具备C#和Halcon开发经验的专业人才需求也日益增长。为了帮助广大 C#工业视觉开发的朋友更好地备战面试，掌握Halcon的核心技能，小编精心整理了20道高频Halcon面试题。



## G. 工作流

- [.net core workflow流程定义 - WikeSoft - 博客园](https://www.cnblogs.com/wikeflow/p/18868313)



## G. Git

- [实际工作中 Git Commit 代码提交规范是什么样的？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513692&idx=1&sn=97566d8f98cf823e2e6aec7859ef1db7&chksm=966de0c7d61d267f778645055c9445bba1dcf27584cc21866adfbc5553e92339150bbd5a4f42&scene=126&sessionid=1747493051#rd)



## G. 工具

### Dependabot

- [The new Dependabot NuGet updater: 65% faster with native .NET - .NET Blog](https://devblogs.microsoft.com/dotnet/the-new-dependabot-nuget-updater/)

  > 如果你曾经不耐烦地等待 Dependabot 更新你的.NET 依赖项，或者更糟，目睹它因神秘的错误而失败，我们有一些好消息。在过去的一年里，Dependabot 团队对 NuGet 更新器进行了重构，结果令人印象深刻。



## H. Http/Https

- [字节校招一面：聊聊https 原理 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505852&idx=4&sn=4079b24a04b49f05ab531febe96f3836&chksm=965a2837b724b7e95a6d62614dee9823029798dd7abbb276e1dbd48b84dfc97d10fee610eafe&scene=126&sessionid=1727311494#rd)
- [C# 网络请求大比拼：HttpClient、WebClient 和 RestSharp 哪个最适合你的项目？](https://mp.weixin.qq.com/s/kUs--Tlryz-63U4l6rGcxw)



## H. 绘图

- [不可不知的WPF转换（Transform） (qq.com)](https://mp.weixin.qq.com/s/JnO75kpoPwpWuDmTtYQWCg)
- **GDI+**
  - [[原创\]《C#高级GDI+实战：从零开发一个流程图》第03章：画一个线，连接两个矩形！ - leslie_xin - 博客园](https://www.cnblogs.com/lesliexin/p/18923105)
  - [[原创]《C#高级GDI+实战：从零开发一个流程图》第06章：繁琐？没扩展性？抽象！抽象！ - leslie\_xin - 博客园](https://www.cnblogs.com/lesliexin/p/18972184)




## H. 缓存

- [如何用 Redis 构建一个简单的聊天应用？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509096&idx=2&sn=c134137263824c9f648815b76c51768e&chksm=965cc2c30db1505be25e0a0fb1e6d5f5ff49c26b0f31524898ed07dcca9a79c2354a9bfef48e&scene=126&sessionid=1736503976#rd)

- [.NET Core 中如何实现缓存的预热？ - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18737994)

- [C# 使用StackExchange.Redis实现分布式锁的两种方式 - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/18849019)

- [C#中的多级缓存架构设计与实现深度解析 - 239573049 - 博客园](https://www.cnblogs.com/token-ai/p/19034487)

  > 在现代分布式应用架构中，缓存已成为提升系统性能和用户体验的关键技术组件。随着业务规模的不断扩大和并发量的持续增长，单一级别的缓存往往无法满足复杂的性能需求。多级缓存架构通过在不同层次构建缓存体系，能够显著提升数据访问效率，降低数据库负载，并提供更好的系统可扩展性。

- **Redis**
  - [腾讯二面：王者荣耀亿级排行榜，如何设计？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513382&idx=2&sn=cf2370734d904f85da8f0187f878e90b&chksm=9671d9396129297e85689a9f587d3a0953d3db8a9d1aa83ec93a5d24b4dcc5cddcc3d9dfcef3&scene=126&sessionid=1746578976#rd)
  - [缓存穿透、缓存击穿、缓存雪崩，这样回答要满分呀！](https://mp.weixin.qq.com/s/WKM4FPwhgsC_GhuRAQcZWA?scene=0&subscene=90)




## I. IDE

- [2024 年开发人员 13 款常用 IDE 合集 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505978&idx=3&sn=5594c32e615e9bc6857ff44b28247de1&chksm=9619cf51152401be6ae00b3b8dd4d65de75bdb905ab398e0b4b43a43fc1db5d64df2c3b4b0ab&scene=126&sessionid=1728350900#rd)

- [.NET开发者福音：JetBrains官方宣布 Rider 非商用免费开放！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506917&idx=1&sn=ffed439630d58f7313433659beb98851&chksm=965e8c15b0953e31d36f4daa5dd0ead5c76646c20b817a83315087f21f50a2dd93574c8a7c58&scene=126&sessionid=1730641491#rd)

- [WebStorm：一款专为Web应用程序开发而设计功能强大的IDE](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507021&idx=3&sn=dcaede3cd92887e36223274f028b1a9e&chksm=969390cc0b79c67b078347b62fce76ed0d7524e11d8d9ac6dd9c47cf3d9923c6e46f2b78d5d4&scene=126&sessionid=1730681837#rd)

- **Visual Studio**

  - [Visual Studio 2022：一个功能全面且强大的IDE](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506943&idx=2&sn=afbcf31b8a2b7226331f01325d5ae50f&chksm=96df3bff7167bddc1ce2c85987b3d6f7f7f7a58c04b40e8b77f0e25f690013e5a22522327664&scene=126&sessionid=1730641491#rd)

  - [事半功倍：.NET 开发者的 Visual Studio 效率技巧！](https://mp.weixin.qq.com/s/yHAK0VvcOR8bqZVqOBizXQ)

  - [【译】Visual Studio 扩展管理器更新 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18912257)

  - [提高 .NET 编程效率的 Visual Studio 使用技巧和建议！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514588&idx=1&sn=08b8b2ea9c042a42888900a8ba1d2580&chksm=96d0039fb1bd99048cfcdb4a9f496baa09842bb203eadea5c0e066780577b69fbd5bae379fdf&scene=126&sessionid=1750209389#rd)

  - [C#-Visual Studio工具使用实践 - 安木夕 - 博客园](https://www.cnblogs.com/anding/p/18919985)

  - [Visual Studio 现已支持新的、更简洁的解决方案文件（slnx）格式](https://mp.weixin.qq.com/s/ysq58eg3Eiyie_0wY_k_Gg)

    - [.sln 时代落幕，.slnx成为 .NET 新标准?](https://mp.weixin.qq.com/s/m5-_4VZ78_J-9M5sufG3sg)

  - [微软宣布 Visual Studio 重大变更](https://mp.weixin.qq.com/s/HdGbheLgXV1uXsShHVp8aA)

  - **Visual Studio 2026**

    - [Visual Studio 2026 现已正式发布，更快、更智能！](https://mp.weixin.qq.com/s/8TjLcw4RExpCohGJYgmBOA)
    - [Visual Studio 2026 正式版下载与安装详细教程（附带产品密钥）！](https://mp.weixin.qq.com/s/wbZiTPjhKlFOeU3MgIbq0A)
    - [使用 Visual Studio 2026 简化您的 Git 工作流程](https://mp.weixin.qq.com/s/dkeR_tfors8Suj6kSGwujw)
    - [使用了两个月VS2026，是什么体验？](https://mp.weixin.qq.com/s/kqm3KnXfo8HI9glsCMgV7A)

  - **插件/扩展**

    - [基于 C# 编写的 Visual Studio 文件编码显示与修改扩展插件](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508023&idx=1&sn=2b93845e99c0943b6e9451dfde463bb1&chksm=9693ad2f6af9208cdcdf45422fe56fdd1242cf6929cb726801a729c2651067512ae95a04df16&scene=126&sessionid=1733445770#rd)
    - [Visual Studio 2022 中的 EF Core 反向工程和模型可视化扩展插件](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514422&idx=1&sn=32135c7a1bb6279c52e32d6d0c3933dc&scene=21#wechat_redirect)
    - [一个致力于为 C# 程序员提供更佳的编码体验和效率的 Visual Studio 扩展插件【Codist】](https://mp.weixin.qq.com/s/UWuCIY4Q5PJeNClrQWPGEw)

  - **推荐扩展**

    - CodeRush

      > CodeRush是用于Visual Studio 2022的功能强大且快速的代码创建、调试、导航、重构、分析和可视化工具（一个完全免费的能和ReSharper匹敌插件）。

    - HTML Snippet Pack

      > 它提供了一组预定义的 HTML 代码段（snippets），以帮助开发者更快速地编写 HTML 代码。这些代码段是预先定义的代码模板，可以通过简单的代码缩写触发，然后自动生成相应的 HTML 代码块，从而提高编写 HTML 的效率和准确性。

    - XAML Styler for Visual Studio 2022

      > XAML Styler 是一个 Visual Studio 扩展，它根据一组样式规则格式化 XAML 源代码。此工具可以帮助您/您的团队保持更好的 XAML 编码风格以及更好的 XAML 可读性。

    - File Icons

      > File Icons 此扩展程序为Visual Studio中未提供图标的文件在“解决方案资源管理器”中添加文件图标。

    - [JSON Viewer](https://marketplace.visualstudio.com/items?itemName=MykolaTarasyuk.JSONViewer)

      > 用于显示和处理JSON数据。安装后，可以在主菜单中找到它：工具-> JSON Viewer。

    - [C# Var Type CodeLens](https://marketplace.visualstudio.com/items?itemName=AlexanderGayko.VarAdorner)

      > 显示 var 变量的类型。

    - [CI CodeLens Info 2022](https://marketplace.visualstudio.com/items?itemName=LuizFernandoDINATO.CICodeLensInfo2022)

      > 显示变量引用次数

    - 4

    - 5

    - 6

    - 7

    - 8

  - **Visual Studio 2026**

    - [Visual Studio 2026 预览体验版现已发布，一起来看看带来哪些新功能！](https://mp.weixin.qq.com/s/b5QWP8Bj9YJMRx2adyjDRg)
    - [Visual Studio 2026 Insiders - Faster, smarter IDE](https://visualstudio.microsoft.com/insiders/?rwnlp=zh-hans)

- **VSCode**

  - [2025 最顺眼的 VSCode 主题推荐，码字效率++！谁用谁上头～](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514778&idx=2&sn=032f2a1f2fc097e5649ed491b62c8b7a&chksm=96c418c831080858f3fca3471ed117712658c043214cee1cdd51bdff2511ea52095f1d56b778&scene=126&sessionid=1751112758&poc_token=HDzcX2ijsMQZZyVPkiD0dimw6FxCGm4UVlb0KQNX)

  - [.NET程序员的多语言笔记本：Polyglot Notebook - EdisonZhou - 博客园](https://www.cnblogs.com/edisontalk/p/-/quick-start-on-polyglot-notebook)

    > 之前在学习机器学习的时候，使用了Jupyter Notebook这个笔记本工具，我就在想.NET这边有没有类似的，今天就跟你介绍下Polyglot Notebook这个工具。
    
  - [VS Code 推出全新 JS/TS 工具，AI 驱动，面向未来！](https://mp.weixin.qq.com/s/_qL18udGs66SqhU5b2Qn0A)

  - [VsCode推出 “橙色版” “绿色版” ！一个像御姐一个像萝莉](https://mp.weixin.qq.com/s/W-vyZGBjBOYPWtvXxYQbQw)

  - [Claude Code 正式发布 VS Code 扩展！](https://mp.weixin.qq.com/s/Ts80YnZLvvZTW2oM30vBTg)

- **Rider**

  - [Rider 2025.2 EAP 5: Reimagined Monitoring Tool Window and New OpenTelemetry Plugin | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2025/06/16/rider-eap-5-new-monitoring-tool-opentelemetry-plugin/#)

    > Rider 2025.2 EAP 5 版本刚刚发布，这次带来了两项针对 .NET 开发者的主要生产力提升。



## I. IoT

- [用纯.NET开发并制作一个智能桌面机器人（一）：从.NET IoT入门开始](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509201&idx=2&sn=13350fb3111413fb74075085d5f30baf&chksm=96c64a7ad436070bc9e93592318df9b4d6ea561e100f28b1659ac08554a7a250f592212796d3&scene=126&sessionid=1736817137#rd)
- [用纯.NET开发并制作一个智能桌面机器人（二）：用.NET IoT库编写驱动控制两个屏幕](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509238&idx=2&sn=1cf2374ba0ff0888a5c142f42d910bd2&chksm=96edee3537b01043660d600fa22a38ddf847ae3f61ea0d98ead82f03ebeb2726956dbc561997&scene=126&sessionid=1736991133#rd)
- [用.NET IoT库控制舵机并多方法播放表情](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510211&idx=3&sn=8426bea5d858d360612a2b8e637cb17a&chksm=9665939efc81c9282e061f50614860298651c4c7c227a406078c1a117fa1f0c2028bfdf36604&scene=126&sessionid=1739414680#rd)
- [互联网不景气了那就玩玩嵌入式吧，用纯.NET开发并制作一个智能桌面机器人（四）：结合BotSharp智能体框架开发语音交互 - 绿荫阿广 - 博客园](https://www.cnblogs.com/GreenShade/p/18771608)
- [用纯.NET开发并制作一个智能桌面机器人（五）：使用.NET为树莓派开发Wifi配网功能 - 绿荫阿广 - 博客园](https://www.cnblogs.com/GreenShade/p/18913382)
- [用纯.NET开发并制作一个智能桌面机器人（六）：使用.NET开发一个跨平台功能完善的AI语音对话客户端 - 绿荫阿广 - 博客园](https://www.cnblogs.com/GreenShade/p/19125465)
- [使用.NET开发并上线一个小智AI对话机器人的MCP服务转接平台](https://mp.weixin.qq.com/s/qVnmzLiqF75v56cVreZFcA)
- [将 SignalR 移植到 Esp32 让小智设备无缝连接 .NET 功能拓展 MCP 服务](https://mp.weixin.qq.com/s/B60oObjrGY21i2pmBHBtgg)



## L. 漏洞修复

- [史诗级警报：ASP.NET Core 被曝 CVSS 9.9 分漏洞，几乎所有.NET 版本无一幸免！](https://mp.weixin.qq.com/s/BWcti472hjnD4R3xJyJ_9A)



## J. 集成JavaScript

.NET 应用集成 JavaScript

- [在 .NET 应用程序中运行 JavaScript (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504786&idx=3&sn=2df895dc80f29ccc174eb198a8d58c77&chksm=960753bf29a448d2cb287ddd6cf6accded7a47b645ffc58db129ddf0fcd74a01b8d8d5cb1410&scene=126&sessionid=1725842446#rd)



## J. JavaScript

- [2024年前端明星项目出炉，又是它！](https://mp.weixin.qq.com/s?__biz=MzU2MTIyNDUwMA==&mid=2247531750&idx=1&sn=b33a1833b38bb4667d8033a1ecd65f46&chksm=fc7e32bdcb09bbab4e50565de898002ea1c982fbc2d3da4a0ca03b2d45adba444092047d7615#rd)



## J. Java

- [从C#到Java：类与对象声明的"踩坑"指南](https://mp.weixin.qq.com/s/Uhi19ppAB-kSDc-z8NjUmQ)



## J. 机器学习

1. **[使用ML.NET训练一个属于自己的图像分类模型，对图像进行分类就这么简单！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503114&idx=1&sn=61133b4414fcb2bbf1349b884488c0e4&chksm=9679abbfef387fccf486eef4027c954532e32d4668252cf05e94e0046c44910c5a7b7bb489d2&scene=126&sessionid=1721004385#rd)**

2. **[使用 Ollama 集成 GraphRag.Net：一步步教你如何实现](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504129&idx=3&sn=30cb0101adf77376a81b60ca9a29c1a9&chksm=96ef34a9d7fd0758efd717e5eb448bff93005d5422ab9965a719e628e4643acbaef9bc2ef898&scene=126&sessionid=1723682105#rd)**

   > 在当今的技术世界，人工智能 (AI) 正在以惊人的速度发展。对于开发者来说，使用最新的工具和框架来提升工作效率至关重要。而在 AI 领域，GraphRag.Net 作为一个强大的图算法框架，允许我们以高效的方式进行数据处理。同样，Ollama 作为一个开源的、简单易用的 AI 模型部署平台，正逐渐受到开发者的青睐。今天，我们就来聊聊如何使用 Ollama 将 GraphRag.Net 进行集成。

3. **[ML.NET：一个.NET开源、免费、跨平台的机器学习框架](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504230&idx=1&sn=dc79a5de6b85b152dc95f634382213e5&chksm=96b2713680ab05d86caafcc4755c83dbee2c8a642956c3c1c4bfe153f0d82a9708891e462fff&scene=126&sessionid=1723899633#rd)**

4. 待补充

5. 待补充



## J. 架构模式

  - [.NET常见的几种项目架构模式，你知道几种？（附带使用情况投票） (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505359&idx=1&sn=14c45604af61d7960342e2fedb5044fc&chksm=9653d018e868192eb310860b8f85d9ce5a4aa0e9bed723bcd02ba36336bc443b21d4c1b1c8b3&scene=126&sessionid=1726793679#rd)
  - [6种流行的 API 架构风格，你知道几种？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512506&idx=1&sn=2b58d1dd533ba77beba7781b102cf2ea&chksm=96edc30c8252cf6c8c6c11a1d747b588abb703f51fd6e63d9b49330b240fb7faa9e3bf8692e0&scene=126&sessionid=1744851117#rd)



## J. 集合

- [C#集合也能比较？C#集合比较的两种方式 (qq.com)](https://mp.weixin.qq.com/s/rXuomLayg9Qa3XTtp3uTSQ)



## J. 简历

- [互联网寒冬下，如何写好一份.NET求职简历？附带简洁简历模板和简历优化服务来了！！！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511000&idx=1&sn=95a590f63dc27f714c1d6748c2c70dc0&chksm=964d905a546116fab93836e4342c577b0608c8b60ed2f74db4a874aed8298ca87bbda1e4419d&scene=126&sessionid=1741260725#rd)



## J. 解析器

- [拥有自己的解析器（C#实现LALR(1)语法解析器和miniDFA词法分析器的生成器） - BIT祝威 - 博客园](https://www.cnblogs.com/bitzhuwei/p/18683262/my-own-parsers)
  - [C#实现自己的Json解析器(LALR(1)+miniDFA) - BIT祝威 - 博客园](https://www.cnblogs.com/bitzhuwei/p/18779851#_label0)



## J. 检测

- [C# OnnxRuntime部署DAMO-YOLO香烟检测](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512500&idx=3&sn=5dc444e49e0d1ed0cb65cf240d3b4806&chksm=9693647d2d2eb8287cef9bbb8bd7d210bc649ba83d8ee93104e9099a042052b7113b2132ab52&scene=126&sessionid=1745063119#rd)
- [C# OnnxRuntime Yolov8 纸箱检测](https://mp.weixin.qq.com/s/ZllA1eX7eB2ltVZCOLyveg?scene=0&subscene=90)
- [免费GPU版OCR推理库来了！不挑卡的OnnxRuntime DML方案来了](https://mp.weixin.qq.com/s/-ra0Bg3sO05KwpZ9VG4qQQ)
- [C#AI系列(3):31mb单文件exe实现姿态检测-将Yolo装进口袋](https://mp.weixin.qq.com/s/VV1bDDQcNYD1uDG7CWzB5w)



## J. 集群

- [轻量级 Kubernetes 解析：K0s、K3s 与传统 K8s 的抉择](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514145&idx=2&sn=fa551c1ec279bcc376cd0865bda04f4f&chksm=960fbe2f2130f0b3ee9dce0a816235593fee33c834a7221744593422aa5d86f12bbd8aae03b0&scene=126&sessionid=1749085186#rd)



## K. 对象拷贝

  - [C# WPF中实现深拷贝的五种方式 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505156&idx=4&sn=cbd80bc959054e10d6d6ee6cd829df2b&chksm=96b04c00fe153aa7f033a61862aaaf1674e679a24ef1053bf56c400baaa4080405af70054752&scene=126&sessionid=1726188991#rd)



## K. 跨平台

- [基于XAML框架和跨平台项目架构设计的深入技术分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507161&idx=2&sn=7c9f9999d90464daeb54a5b278cc7bb4&chksm=966085546f6c6421766cbe5ce0d8b45840e1a66cafdbe11553ee10f88b3110400f292d6a0944&scene=126&sessionid=1731206998#rd)


### Avalonia

- [Avalonia Docs | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/)
  - [Canvas 画布控件 | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/docs/reference/controls/canvas)
  - [Flyout 弹出层 | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/docs/reference/controls/flyouts)
- [Avalonia使用XML文件实现国际化](https://mp.weixin.qq.com/s/LYO3YQNocsEUbQFsGglEVw)
- [Lang.Avalonia：Avalonia多语言解决方案，无缝支持Resx/XML/JSON三种格式](https://mp.weixin.qq.com/s/UN74HZJcHELPeIDPIPnJlg?scene=0&subscene=90)
- [基于C#+avalonia ui实现的跨平台点胶机灌胶监控控制上位机软件 - 狼性法则 - 博客园](https://www.cnblogs.com/flykai/p/19027992)
- [【译】Avalonia UI与谷歌Flutter团队合作将Impeller渲染引擎引入.NET](https://mp.weixin.qq.com/s/BQz1GrnknYqlAMujSJQ55A)
- [Avalonia UI的演进逻辑与Qt生态深度对比](https://mp.weixin.qq.com/s/Q0uI6NIGKqHA26nZTITZxA)
  - [Avalonia UI的演进逻辑与Qt生态深度对比 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19329439)
- [跨平台 UI 工程的 Agentic 转型：MCP 在 Avalonia 生态中的深度应用与架构演进](https://mp.weixin.qq.com/s/TYfy1-W5PXRdw5UYvrEFpw)
- **打印相关**
  - [GitHub - Oaz/AvaloniaUI.PrintToPDF: Create PDF documents from Avalonia UI visuals](https://github.com/Oaz/AvaloniaUI.PrintToPDF)
  - [Printing and printing dialog · AvaloniaUI/Avalonia · Discussion #7454 · GitHub](https://github.com/AvaloniaUI/Avalonia/discussions/7454)
- **控件相关**
  - [Avalonia小窍门之DataGrid添加取消排序](https://mp.weixin.qq.com/s/ME-KQfote0VJ3CVgGm94kQ?scene=0&subscene=90)

### MAUI

- [.NET MAUI Performance Features in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-9-performance-improvements-in-dotnet-maui/)

  > .NET 多平台应用 UI （.NET MAUI） 随着每个版本的发展而不断发展，.NET 9 将重点放在剪裁和新的受支持运行时上：NativeAOT。这些功能可以帮助您减小应用程序大小、缩短启动时间，并确保您的应用程序在各种平台上平稳运行。希望优化其 .NET MAUI 应用程序的开发人员和 NuGet 包作者都能够在 .NET 9 中利用这些功能。

- [Multimodal Vision Intelligence with .NET MAUI - .NET Blog](https://devblogs.microsoft.com/dotnet/multimodal-vision-intelligence-with-dotnet-maui/)

  > 扩展用户与我们的应用交互的多种方式，是使用现代 AI 模型和设备功能时最令人兴奋的部分之一。借助.NET MAUI，您可以轻松地将应用从基于文本的体验升级为支持语音、视觉及其他功能的应用。

- [Simpler XAML in .NET MAUI 10 - .NET Blog](https://devblogs.microsoft.com/dotnet/simpler-xaml-in-dotnet-maui-10/)

  > 在 .NET MAUI 中使用 XAML 构建 UI 仍然是最受欢迎的方法。您可以轻松查看 UI 的嵌套结构，支持热重载，适用于大多数用例，并支持强大的状态流和数据绑定。缺点之一是它可能变得冗长。每个页面都需要您声明所使用类型的命名空间，提供前缀，当然还要使用它们。您可能比我更擅长开发，但我经常在不同的文件中使用不同的前缀来表示相同的命名空间，这造成了很大的混乱。.NET 6 引入了 C# 的全局和隐式 using 语句，大大减少了 C# 文件开头的 using 语句。现在在 .NET 10 的 Preview 5 版本中，我们为 XAML 引入了相同的功能，这样您可以在单个文件中声明命名空间和前缀，并在整个项目中使用它们。事实上，现在您可以完全省略前缀的使用！

-  [How the .NET MAUI Team uses GitHub Copilot for Productivity - .NET Blog](https://devblogs.microsoft.com/dotnet/maui-team-copilot-tips/)

  > 本文主要概述 .NET MAUI 团队如何使用 GitHub Copilot 提高生产力。
  
- [MauiReactor: An MVU Approach for .NET MAUI - .NET Blog](https://devblogs.microsoft.com/dotnet/mauireactor-mvu-for-dotnet-maui/)

  > 我是一名来自意大利的全栈开发者，主要专注于微软技术栈，涵盖从基于.NET MAUI的跨平台应用到部署在Azure上的ASP.NET Core后端服务。我是MauiReactor的创建者——这款面向.NET MAUI的UI库将模型-视图-更新（MVU）模式引入跨平台开发领域。
  
- [【译】Visual Studio 中针对 .NET MAUI 的 XAML 实时预览功能的增强 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19113078)

  - https://devblogs.microsoft.com/visualstudio/enhancements-to-xaml-live-preview-in-visual-studio-for-net-maui/

  > Visual Studio 2022 17.14 中的 XAML 实时预览功能为 .NET MAUI 项目带来了显著的可用性提升：XAML 实时预览窗口现在在设计时即可使用，无需启动调试会话。这一变化简化了 .NET MAUI 应用程序的 UI 开发工作流程。
  
- [喜大普奔，MAUI成功在鸿蒙系统上运行](https://mp.weixin.qq.com/s/GlvU4f4xhESVwwK57Mk4rw)



## K. 开发者社区

- [推荐一些程序员常逛的开发者社区](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509965&idx=1&sn=8189e0b4581d8688ac75742ec6ea8c31&chksm=9652f402587252860fb0aabb8ffdef0b247935928505796eb5d22a3b072e50b1414d2407bc85&scene=126&sessionid=1738974305#rd)



## K. 自然科学

- [美丽而脆弱的天体运动：当C#遇见宇宙混沌](https://mp.weixin.qq.com/s/YFThO1Zq_8RMrMZK0q7xPQ?scene=0&subscene=90)




## L. 领域驱动设计

- **[关于领域驱动设计，大家都理解错了](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504335&idx=2&sn=89582397a7fbe2899f5bd0d4501a3880&chksm=962fbd6a2ce8ed32d03b850efd2123b6282fcaeb1a2c22594ec07ef6111200e302733fa15846&scene=126&sessionid=1724028274#rd)**
- **[学习真DDD的最佳路径 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504456&idx=2&sn=6d623fc83132a7d34ce6b7fc1f1de5f4&chksm=96433cbda9cb8470732b85b8bd3462969a930bd136cc6297780421f443fb78cee3c592255121&scene=126&sessionid=1724720195#rd)**
- **[这是DDD建模最难的部分（其实很简单） (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504581&idx=3&sn=14550521de2a00877f4cfdce0c211fca&chksm=96453ff6e7d6c9e810d660126abd0b1b878b8aca18a57be7ff9988f461a81489f3e175c8f75e&scene=126&sessionid=1725109614#rd)**
- [.NET面试一上来就问DDD相关问题?直接崩溃 (qq.com)](https://mp.weixin.qq.com/s/oJ_xBW-ezEJGqm1nEnXAHw)



## L. 类库推荐

- [精选10款C#/.NET开发必备类库（含使用教程），工作效率提升利器！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507960&idx=1&sn=58aad693c96948548681175bcb06064f&chksm=96bc77fc24687ebde647aa9ec32b0f6ae52e6c26534751cbc0d26df0f0ba1a9af481c91634e4&scene=126&sessionid=1733275028#rd)



## L. Linux/Unix

- [.NET 10 支持Linux/Unix 的Shebang（Hashbang） - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18930500)

  > .NET 10 Preview 5 带来的C# 文件脚本化运行，在 Linux/Unix 系统中通过 #!/usr/bin/dotnet run 支持 Shebang（Hashbang）



## M. MAC工具

- [一个免费开发者工具箱 100+ 实用小工具合集 (Mac / 离线使用)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507837&idx=4&sn=7a9d3559adc2cb50ab47e721e8666ac3&chksm=965fe6fc5123a49e501dd9e5f4545a3f39bb8988ff1c4b23bea6e0295f22bcc8d94f56c76d68&scene=126&sessionid=1733100642#rd)



## M. MQ

- [基于.NET8.0实现RabbitMQ的Publish/Subscribe发布订阅以及死信队列 - sq1201 - 博客园](https://www.cnblogs.com/sq1201/p/18661294)



## M. Modbus

- [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18411953)
- [RS485与ModbusRTU - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18406808)
- [ModbusRTU通信协议报文剖析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18430033)
- [ModbusTCP通信协议分析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18442108)
- [C#上位机基于Modbus读取仪器波形](https://mp.weixin.qq.com/s/_7Rf09L6njZlzMV63tmixw)
- [C#工业自动化神器：10分钟搭建完整Modbus插件系统](https://mp.weixin.qq.com/s/Im1qIAtl7Gv6WoRMp0m3OA)
- **工具**
  - [MTing(modbus调试工具的使用） - 杰瑞鼠 - 博客园](https://www.cnblogs.com/jieruishu/p/13998997.html)



## M. Markdown编辑器

- [NanUI for Winform 使用示例【第二集】——做一个所见即所得的Markdown编辑器 - 林选臣 - 博客园](https://www.cnblogs.com/linxuanchen/p/5579053.html)



## M. MS Build

- [Join the .NET & C# Teams at Microsoft Build 2025 - .NET Blog](https://devblogs.microsoft.com/dotnet/join-us-at-build-2025/)

  > 微软 Build 2025 的倒计时已经开始！呼吁所有.NET 开发者：准备好享受令人兴奋的.NET 和 C#内容。无论你是经验丰富的老手还是初学者，这里都有适合每个人的内容可以深入探索和享受。不要错过这次学习并与.NET 和微软社区其他成员建立联系的机会。



## M. 密码与安全

- [.NET 10 引入 后量子密码学 （PQC）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514634&idx=2&sn=54ce5c072b3120a229905855695366ca&chksm=96f37e23c2902333f71fd655558f0ba3839ed0159aa1a7d53fba916d63e1ce6481af74d56158&scene=126&sessionid=1750474128#rd)

- [AES 加密模式演进：从 ECB、CBC 到 GCM 的 C# 深度实践 - .NET骚操作 - 博客园](https://www.cnblogs.com/sdcb/p/19032244/aes-encryption-modes-evolution-ecb-cbc-gcm-csharp)

  > 在当今这个数字化的世界里，数据安全至关重要。无论是网上银行、即时通讯还是云存储，我们都依赖于强大的加密技术来保护我们的信息不被窃取或篡改。在这众多加密技术中，高级加密标准（AES）无疑是现代对称加密的基石。



## M. 面试题

- [某外企.NET全栈二面问到吐的面试题](https://mp.weixin.qq.com/s/6uazAM7zT8DgqUEBIjzjow)



## N. NuGet

- [Dramatically faster package restores with .NET 9's new NuGet resolver - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-9-nuget-resolver/)
- [GitHub - NMSAzulX/Jester.Tools.Nuget: NUGET 发布工具](https://github.com/NMSAzulX/Jester.Tools.Nuget)
  - [基于 .NET 的 Nuget 发版工具 - AzulX - 博客园](https://www.cnblogs.com/NMSLanX/p/18596061)
- [开发一个现代化的.NetCore控制台程序，包含依赖注入/配置/日志等要素](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488504&idx=1&sn=2950fd0d825959979bdf87885ee6092d&chksm=eb30f9f9dc4770efe6319e59b6971c131845a8181eb2a1d24de85e49eee836f29e3cfe7d84fc&cur_album_id=3187591423672598541&scene=189#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(2)创建一个C#项目模板](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488517&idx=1&sn=6daf6e2a2fba72fba54cb85992165984&chksm=eb30fe04dc477712b594c4684ae6dc3bb02ac4beb543b1158f81f53f7394afbe8d8134e53187&cur_album_id=3187591423672598541&scene=189#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(3)将nuget包发布到GitHubPackages](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488524&idx=1&sn=5486ad3fa938a957ddbfbbe26c85fb71&scene=21#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(4)使用GithubAction自动构建以及发布nuget包](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488535&idx=1&sn=6cf5ed7adc41bf1b51f06f56aac7b795&scene=21#wechat_redirect)
- [使用 Visual Studio 快速创建 NuGet 程序包并发布到 NuGet 官网](https://mp.weixin.qq.com/s/bvTwu8aiKq2U3WoJ0zMkjw)
- **NuGet包下载**
  - [.NET 生态洞察：NuGet 下载量 Top 100 包深度解析](https://mp.weixin.qq.com/s/7yjsKsnkm7bqY2LnBiM9gw)



## N. NativeAOT

- [用 .NET NativeAOT 构建完全 distroless 的静态链接应用](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512129&idx=2&sn=d0cc25cdec53990780efe80e044cd57b&chksm=9613f1c3b83bde7b7b0d4f1c7728a37100780399a00dc5d9fee311438113178be617324b8c8d&scene=126&sessionid=1744074032#rd)
- [.NET 10 Native AOT 最新进展：架构演进、性能范式与生态系统重塑](https://mp.weixin.qq.com/s/Y2eJGrPNL_Df1KtdE5DDpg)



## N. 内存布局

- [理解 .NET 结构体字段的内存布局 - 黑洞视界 - 博客园](https://www.cnblogs.com/eventhorizon/p/18913041)

  > 本文将介绍 .NET 中结构体字段的内存布局，包括字段的对齐（Alignment）、填充（Padding）以及如何使用 StructLayoutAttribute 来控制字段的内存布局。



## O. ORM

- [企业应用开发中.NET ORM EF常用哪种模式？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511234&idx=1&sn=0d31d806101a3394b2547a2800000a95&chksm=963cde7e775d584ebdbca94779608ba5592a5dae952fcf5e3c9f0f6d24debf0ea4a43a892255&scene=126&sessionid=1741828329#rd)

- [16个值得推荐的.NET ORM框架](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247493672&idx=1&sn=5105ef0a229e3fbc9caf0f8fae0d99bb&scene=21#wechat_redirect)

- [.NET使用EF批量插入数据，一行代码性能飙升！ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504974&idx=4&sn=0cab188b357b4b8128001df03fcc7ebc&chksm=965f9b55822ce4318fd4b1cbcf0ef2085c56866f6aa2c12c25587dd4c8c665f835e4c5651b2b&scene=126&sessionid=1726016076#rd)

- **SQLSugar**
  - [SQLSugar 支持 TDengine 超级表的使用指南 - 阿妮亚 - 博客园](https://www.cnblogs.com/sunkaixuan/p/18740748)
  - [C# Winform使用SqlSugar操作数据库?](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506447&idx=3&sn=0753b2089b4ffcea93748bcea8a56ddf&chksm=9688e655f6fc8c7449c2478f15226ea8a18f8065671fe8315197484b03b41e9db938aadd6dac&scene=126&sessionid=1729645767#rd)
  - [在SqlSugar的开发框架中增加对低代码EAV模型（实体-属性-值）的WebAPI实现支持 - 伍华聪 - 博客园](https://www.cnblogs.com/wuhuacong/p/18842471)
  - [关于SqlSugar并发情况下的问题（排坑） - BearHan - 博客园](https://www.cnblogs.com/lvpp13/p/19007377)
  
- **EF**
  - [排查 EF 保存数据时提示：Validation failed for one or more entities 的问题](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512130&idx=2&sn=0ac825298ffb340ea57c09659909990c&chksm=964373b1d118b0b799a45b822e3f6231e3af693f1fa9d73debcd3a7cbc43d6cf43b53979a290&scene=126&sessionid=1744159839#rd)

  - [EF Core性能优化技巧 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505738&idx=2&sn=dc50a02eaf3ee079e36fcd0695f45967&chksm=96f1ea970730513276167a853948d633d7df39f1e58b62e006453a01f17e5096d071dc0e4c68&scene=126&sessionid=1727138667#rd)
  
  - [分享几个实用且高效的EF Core扩展类库，提高开发效率！ (qq.com)](https://mp.weixin.qq.com/s/ld_eQYPa7kitTak93QOjKA)
  
  - [EF Core 10 现已支持 LeftJoin 和 RightJoin 运算符查询了！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513157&idx=1&sn=789d87d82f284ea7be16c31a811c2be6&chksm=96c73758787eabee7dc19ae6252b3f4d9b20a1514cabc10ea5e24e9875b94cd701640db20d85&scene=126&sessionid=1745886966#rd)
  
  - [【EF Core】DbContext是如何识别出实体集合的 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/18956032)
  
    > 咱们都知道，在派生 DbContext 类时，集体类的集合用 `DbSet<TEntity>` 表示，而咱们最常用的方法是在 DbContext 的派生类中公开 `DbSet<TEntity>` 属性。但在实例化 DbContext 后，我们并未给这些属性赋值，就能查询数据了，那么，DbContext 类（包括其子类）是如何识别出这些公共属性并填充数据的？好，主题已经打开，接下来老周就开始表演了。有大伙伴会说了：切，这个看看源码不就知道了。是的，但有些人天生懒啊，不想看，那老周帮你看。
  
  
  - [【EF Core】带主键实体与无主键实体 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/18993171)
  
    > 上一次老周已介绍了 EF Core 框架自动发现实体和实体成员的原理。涉及到对源码的分析，可能大伙伴们都看得气压升高了。故这一次老周不带各位去分析源码了，咱们聊一聊熟悉又陌生的关键词——主键。说它熟悉，是因为只要咱们创建数据表，99%会用到；说它陌生，是指在 EF Core 中与主键相关的细节。
    
  - [【EF Core】为 DatabaseFacade 扩展“创建”与“删除”数据表功能 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19007218)
  
    > 对于玩 EF 的大伙伴来说，对 DatabaseFacade 类的 EnsureCreated 和 EnsureDeleted 方法应该很熟悉。这对方法可在运行阶段创建或删除数据库。创建数据库时，会连同数据表一起创建；至于说删除数据库时嘛……库都没了，哪还有表呢。不过，有些时候，不，不是有些时候，很多时候我们其实只想删除数据表。比如要初始化应用程序；或者数据库已存在的情况下，咱们只考虑判断数据表是否存在，不存在的话就创建表。最简单的方法是直接发送 SQL 语句——如 DROP TABLE、DROP DATABASE 等。这个不在本文的讨论范围内。老周这次讨论的是运用 EF Core 自身的功能去实现。
    
  - [【EF Core】使用外部 Model - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19054696)
  
  - [【EF Core】优化后的模型 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19067778)
  
    > 本文所讲述内容，大伙伴们不必要完全掌握，毕竟，dotnet ef 工具会帮助咱们生成相关代码。不过，为了让各位能够真正了解它，老周会做一次纯手搓代码。
  
  - [EFCore.Visualizer - View Entity Framework Core query plan inside Visual Studio - .NET Blog](https://devblogs.microsoft.com/dotnet/ef-core-visualizer-view-entity-framework-core-query-plan-inside-visual-studio/)
  
    > Entity Framework Core 是一个功能强大、特性丰富的 ORM，为当今许多应用程序提供支持。通过 EF Core，开发者编写强类型 LINQ 查询，该框架将其转换为针对目标数据库的 SQL 查询。凭借包括嵌套集合和懒加载等高级功能，Entity Framework Core 使开发者摆脱了编写样板数据访问代码的负担。
    
  - [【EF Core】实体类的依赖注入 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19077173)
  
  - [【EF Core】再谈普通实体关系与 Owned 关系的区别 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19089005)
  
    > 在很多个世纪前，老周曾写过实体之间普通关系（一对一，一对多，多对多）与 Owned 关系的区别。不过，那次写得比较粗浅，逼格不够高，于是，老周厚着脸皮地决定重新写一下。
    
  - [【EF Core】通过 DbContext 选项扩展框架 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19127370)
  
  - [【EF Core】框架底层的数据库连接管理 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19108838)
  
  - [【EF Core】“多对多”关系与跳跃导航 - 东邪独孤 - 博客园](https://www.cnblogs.com/tcjiaan/p/19184567)
  
  - [不一样的 EF Interceptor 注入](https://mp.weixin.qq.com/s/BG3fr0cJq354ExV1BKvQdw)
  
  - **EF Core 优化与建议**
  
  
      - [从性能瓶颈到提速40%：EF Core编译查询优化实战](https://mp.weixin.qq.com/s/k67erlDgrbBix302VGtrpQ)
  
  
  
  
  - **MySQL**
  
    - [在 .NET 中将 EF Core 升级到 9.0.5 MySQL 连接提示 get_LockReleaseBehavior](https://mp.weixin.qq.com/s/QjztDCuuy49xsi6GpyE1wA)
  
- **ShadowSql**
  - [ShadowSql之.net sql拼写神器 - xiangji - 博客园](https://www.cnblogs.com/xiangji/p/18806891)



## O. OpenAPI 文档

- [OpenAPI document generation in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet9-openapi/)
- [.NET9 - Swagger平替Scalar详解（四） - IT规划师 - 博客园](https://www.cnblogs.com/hugogoos/p/18571088)
- [在 .NET 9 中使用 Scalar 替代 Swagger](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509096&idx=1&sn=0c8a8a84fe1c1e6bb81f4965f89b5561&chksm=9658299e4b41db48949c3406c88ec364cfb3366fad437401718182f0ef07b6a4b91d8a162558&scene=126&sessionid=1736503976#rd)



## O. OCR

- [PP-OCRv5 C++封装DLL C#调用源码分享](https://mp.weixin.qq.com/s/WpBpIA3klxHsRO5WTdq-6g)



## O. Office

- [开源一套.NET平台的Excel COM 组件二次封装库 - 玩泥巴的 - 博客园](https://www.cnblogs.com/mudtools/p/19060706)
- [.NET驾驭Word之力：理解Word对象模型核心 (Application, Document, Range) - 玩泥巴的 - 博客园](https://www.cnblogs.com/mudtools/p/19094912)
- [.NET驾驭Word之力：COM组件二次开发全攻略之连接Word与创建你的第一个自动化文档 - 玩泥巴的 - 博客园](https://www.cnblogs.com/mudtools/p/19092776)
- [.NET操作Word实现智能文档处理 - 内容查找替换与书签操作 - 玩泥巴的|mudtools.cn - 博客园](https://www.cnblogs.com/mudtools/p/19115746)
- **Excel**
  - [告别Excel痛苦！这个C#神器让数据映射变得超简单](https://mp.weixin.qq.com/s/XfauCWqFQl9HOooxJw6htA)

- **开源项目推荐**
  - [MudTools.OfficeInterop: 一套针对 Microsoft Office/WPS Office 应用程序（包括 Excel/ET、Word/WPS、PowerPoint/WPP ）的 .NET 封装库。通过提供简洁、统一的 API 接口，大大降低直接使用 Office COM 组件的复杂度，能够轻松地在 .NET 应用程序中集成和操作 Office文档。](https://gitee.com/mudtools/OfficeInterop)
  - [.NET操作Word/WPS打造专业文档 - 页面设置与打印控制完全指南 - 玩泥巴的|mudtools.cn - 博客园](https://www.cnblogs.com/mudtools/p/19111217)



## P. PDF处理

- [用C#写个PDF批量合并工具简化日常工作 (qq.com)](https://mp.weixin.qq.com/s/MW5HFdu3jJTJ6TMpa36tXw)
- [WinForm中实现Adobe PDF Reader实现旋转PDF功能 - 我本梁人 - 博客园](https://www.cnblogs.com/wofeiliangren/p/18923487)



## P. P/Invoke

- [用 .NET NativeAOT 构建完全 distroless 的静态链接应用](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512129&idx=2&sn=d0cc25cdec53990780efe80e044cd57b&chksm=9613f1c3b83bde7b7b0d4f1c7728a37100780399a00dc5d9fee311438113178be617324b8c8d&scene=126&sessionid=1744074032#rd)
- [从零开始:C#与C++函数传参——调包侠秘籍 - LdotJdot - 博客园](https://www.cnblogs.com/luojin765/p/19199730)



## P. 配置/配置文件

- [告别脆弱配置：.NET配置模式实战指南](https://mp.weixin.qq.com/s/FuA19zmlYS9W-bAODZ5qnw)



## Q. 启动程序

- [基于DPAPI+RDP技术实现本地打开远程程序，并映射到本地机器桌面上 - WeskyNet - 博客园 (cnblogs.com)](https://www.cnblogs.com/weskynet/p/18445584)
- [在网页上调起本机C#程序](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507622&idx=2&sn=6e931e94367b8fdfeb735197540a433b&chksm=9670ab38a1658f4faea387452f12871c27c5d73a956a97e60241c54a98b3bfd8529fb1040ca2&scene=126&sessionid=1732151313#rd)



## Q. 权限

- [一文搞懂4种用户权限模型](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507108&idx=3&sn=938c243e7eda860125dcdfcb65d795d6&chksm=9690f46d3e88d271b8be36b779dc1cdd6144c631ac560f9ea55413469dcf8db9eb99d43f5d4d&scene=126&sessionid=1730941884&poc_token=HNITLGej3yrEkoK4xFi6Fd0Aaf6XFpgcz-6X_-Cb)



## Q. 前端开发

### C/S

### B/S

- [10s 搭建一个前端新项目，就这么简单！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508023&idx=2&sn=b73a20aa72a813139b86b287cce83462&chksm=9617240011f23aa02d361a27bbdb325ba71d75643e61d1ffb6fc19bc3d7d62b450a02b87472d&scene=126&sessionid=1733445770#rd)
- [10s 搭建一个前端新项目，就这么简单！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509904&idx=2&sn=689ff7d808cabb792739701b95c2d52f&chksm=96263fbd0eb4bef55594518c5da54872f90f07525d69fae4b4d265bac1a36c7c1e7b29e81ca2&scene=126&sessionid=1738804025#rd)

#### R. Razor

- [New Features for Enhanced Razor Productivity! - .NET Blog](https://devblogs.microsoft.com/dotnet/enhancing-razor-productivity-with-new-features/)

  > 如果您正在使用 Razor 构建 Web 应用程序，我们有一些很棒的新功能，您会喜欢 Visual Studio 和 Visual Studio Code！提取到组件重构和基于 Roslyn 的新 C# 分词器现已推出，旨在提高 Razor 文件的工作效率，让我们来看看。

#### V. Vue

- [在SqlSugar的开发框架的Vue3+ElementPlus前端中增加对报表模块的封装处理，实现常规报表的快速处理 - 伍华聪 - 博客园](https://www.cnblogs.com/wuhuacong/p/19004341)

  > 在我们开发业务系统的时候，往往都需要一些数据报表进行统计查看，本篇内容介绍如何在实际的前端中对报表内容进行的一些封装操作，以便提高报表模块开发的效率，报表模块的展示主要是结合Vue3中比较广泛使用的echarts图表组件进行展示。



## R. Restful API

- **[Restful API 设计的8个诀窍 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504688&idx=3&sn=8ac908dc117a962988252c66df995229&chksm=9638090e53a772c45b4f22ba2a17787beef8a0d660774e2023271d548934d009fa409bc190ea&scene=126&sessionid=1725497837#rd)**



## R. Rpc/gRpc

- [.NET8中gRPC的使用 - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18691064)

- [使用 StreamJsonRpc 在 ASP.NET Core 中启用 JSON-RPC - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18822452)

  > StreamJsonRpc 是微软开发的一个开源库，用于在 .NET 平台中实现基于 JSON-RPC 2.0 规范 的远程过程调用（RPC）。它通过流（如管道、网络流等）实现高效的跨进程或跨网络通信，特别适用于需要轻量级、灵活通信的场景。



## R. [容器](https://link.zhihu.com/?target=https%3A//www.redhat.com/en/containers/whats-a-linux-container)自动化运维平台

- [C#使用Kubernetes (k8s) - Flamesky - 博客园](https://www.cnblogs.com/flamesky/p/18472463)
- [虚拟化和容器化有哪些区别？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506447&idx=4&sn=3d867ee1bcfee36707f6898263b63171&chksm=96902cea3dadffd63cb3a29356dc79127de808028a9a9816394479faf53f1dde5eefb0b574e5&scene=126&sessionid=1729645767#rd)



## R. 日志

- [.NET 中 Logger 常被忽视的方法 BeginScope - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18682492)



## R. 任务计划

- [Hangfire Redis 实现秒级定时任务、使用 CQRS 实现动态执行代码 - 痴者工良 - 博客园](https://www.cnblogs.com/whuanle/p/18832422)

  > 在微服务架构中中，定时任务是最常用的基础设施组件之一，社区中有很多定时任务类库或平台，例如 Quartz.NET、xxx-job，使用方法差异很大，比如 xxx-job 的核心是 http 请求，配置定时任务实现 http 请求具体的接口，不过用起来还是比较复杂的。



## R. 软件工程

- [C#代码如何影响CPU缓存速度？](https://mp.weixin.qq.com/s/Mjv7KyWan-oVJt-nlPR_PA)



## R. React

- [ASP.NET Core WebApi+React UI开发入门详解](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514765&idx=3&sn=85ecfef9387936374885dc699b995569&chksm=963fef45833dc5ab4e5eab3b1ddd4551cc04d401ee00f7631a421abe169c41afdfaa461b399b&scene=126&sessionid=1750985256#rd)



## R. 软件工具

- [c#造个轮子--GIF录制工具 - 何以解忧唯有\*码 - 博客园](https://www.cnblogs.com/axing/p/19128750)



## S. 设计模式

- **[C#设计模式入门实战教程 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504631&idx=1&sn=b3863c36fb24a122ff940c29fbadef3f&chksm=96cda7694782eb203a0c8106c853382ce18bd4a278f0cab9f783b43de86e881cab0a03e75194&scene=126&sessionid=1725325808#rd)**
- **[Design-Pattern](https://github.com/sheng-jie/Design-Pattern)**
- [C# 常用设计模式](https://refactoringguru.cn/design-patterns/csharp)
  - [创建型设计模式](https://refactoringguru.cn/design-patterns/creational-patterns)
    - **单例模式**
      - [C# 单例模式的多种实现](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507055&idx=1&sn=1d41b78f1a1fd2fba366b431f5bf7554&chksm=964eed429a18bfa8d4c1448a7f1e732ce9fe18d19cb6775c8ce289fc308e5703f15444961c33&scene=126&sessionid=1730854499#rd)
  - [结构型设计模式](https://refactoringguru.cn/design-patterns/structural-patterns)
  - [行为型设计模式](https://refactoringguru.cn/design-patterns/behavioral-patterns)
    - **观察者设计模式**
      - [观察者模式在C#工业监控中的最佳实践：从理论到实战](https://mp.weixin.qq.com/s/TgnfUS7m1VMupnHXwR7i6Q)
    - **命令模式**
      - [C# Winform下命令模式实战：打造工业控制系统的优雅架构](https://mp.weixin.qq.com/s/ORWpjTdjqY0qqMghlZ5Drw)
- [面试官问：你知道 C# 单例模式有哪几种常用的实现方式？(https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511924&idx=1&sn=b4d53d7459088905774f7d439b0b90cd&chksm=96d9a5e2142aadcf153be09f879697f9b8406c20741466db47f8f1b2d6e86ae78b93902732bf&scene=126&sessionid=1743383083#rd)



## S. 算法

- **[C#数据结构与算法实战入门指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504120&idx=1&sn=f6ec4f6aed0384c7e3c579055b03e373&chksm=96f5f8948099076cba2ad627440c18d8cd6edad150141489ce539824976feba23f79c3356e42&scene=126&sessionid=1723594895#rd)**
- **[一个开源免费的数据结构与算法入门教程（支持C#，Python，Java,，C++，C，JS等多门语言）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504230&idx=2&sn=7914bc447cd6ebd2d3cf94cdfa38b677&chksm=96a2cdaad48264c3e99514304831b9c7718d7ef714849659664d4b0e76ad66612b9423dd52dc&scene=126&sessionid=1723899633#rd)**
- **[C#二叉搜索树算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504335&idx=1&sn=1858eca8bbdcedfab5f79afaf97f3a23&chksm=96e823146a881baa312a1c7a9f319a78e6a23ab59fd5f60ceff451892ca1ec949fd8f051fc16&scene=126&sessionid=1724028274#rd)**
- [C#二分查找算法 (qq.com)](https://mp.weixin.qq.com/s/uCuqv0zOI0ZsF48Q1LoCsQ)
- [C#线性查找算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506400&idx=1&sn=86b6d62d8a5e5dd7d471c9fed09f4ec7&chksm=966f80281d1a62e91fa852b80f9a5d19da12b4c2ae8e90200f6900bb25ed03e252bb5ff8ed52&scene=126&sessionid=1729472376#rd)
- [C#常见的四种经典查找算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506487&idx=1&sn=1634458d183be227654041955650f589&chksm=963e5ef24916873fe3c280b7d0d2ebfcfb2a9eee677477d3370a2b8b6685376053cf5625372c&scene=126&sessionid=1729731769#rd)
- [C# 入门深度学习：万字长文讲解微积分和梯度下降 - 痴者工良 - 博客园](https://www.cnblogs.com/whuanle/p/18551532)
- [C#数据结构与算法入门实战指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509250&idx=1&sn=cb8731ebdaa58bd8c4f806f98f54095e&chksm=963084919c7a803862e1742186164f928784b339fdd0fd75a23ccc9cc3a634240c4052cab510&scene=126&sessionid=1737075474#rd)
- [数据结构与算法 --- 链表反转](https://mp.weixin.qq.com/s/eU6Ylq_qm6mP3Nb_UbiheQ?scene=0&subscene=90)



## S. 数据库

- [SQL 语句是怎么执行的？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509250&idx=2&sn=ce8452644560fe8cb6e06d37ec0fa542&chksm=9696f9c5eae9ef7808109b08ec747104a11e4db6994893c38ad5d8e48de5d76b5833ff467c2b&scene=126&sessionid=1737075474#rd)
- [面试官：数据库的隔离是什么意思？ (qq.com)](https://mp.weixin.qq.com/s/lGCBVqLrn1gsih9PEOYbgg)
- [.NET NoSQL 嵌入式数据库 LiteDB 使用教程 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505978&idx=1&sn=552db3bbf80f7840188518b5f1ee947b&scene=21#wechat_redirect)
- [工作面试必备：SQL 中的各种连接 JOIN 的区别总结！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511537&idx=1&sn=9acaa59e433339ca24c159ef452d5825&chksm=96a05a9380059117e5ccd4ab46999ea33c07ca29119a68b96ca747abe84dc84f051449672360&scene=126&sessionid=1742173108#rd)
- [SQL常见100面试题解析](https://mp.weixin.qq.com/s/39VVuwQcWYWSmaCAUssQ5w)
- [ADO.NET中SQL绑定变量方式总结 - Eric zhou - 博客园](https://www.cnblogs.com/tianqing/p/18774515)
- **关系型数据库**
  - **SQL Server**
    - [微软正式发布 SQL Server 2025 公开预览版，深度集成AI功能](https://mp.weixin.qq.com/s/eS6CR6X1TMy5H6YAnT1zxA)
    - [C#开发者福音！手把手教你打造企业级SQL Server数据库同步工具](https://mp.weixin.qq.com/s/GmXP8hLmeWpnhOJPUbOvZg)
  - **SQLite**
    - [sqlite-vec：谁说SQLite不是向量数据库？](https://mp.weixin.qq.com/s/vgnhoVJQcaYXsSguJ9m2Jw)
- **MySQL**
  - [后端程序员必备：15个MySQL表设计的经验准则](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507055&idx=3&sn=c23ad53890f8f008e86d02a8e2747c0c&chksm=96ef2fb68f2a59a311f61f4b44d32392db93b1e98cb53f6b7f92c2ec8e2bfcc5de83a1939d3a&scene=126&sessionid=1730854499#rd)
  - [MySQL高性能体系结构](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511983&idx=2&sn=d94c4441a43a6906007bec03a65249db&chksm=9629334dedd69fb3765672ebf47c77692bb22c5c99dcb9381fbeeddfd3a2535ac5e4387b2eb2&scene=126&sessionid=1743556275#rd)
  - [MySQL优化器知多少？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513464&idx=2&sn=4831ce8c17ba880be52d07fd75ece4ba&chksm=96ceee3f9508ad37ce0ae4bf10aa4490c82f4e4348aed8851b90cbd29ee241cacc9daa24acf5&scene=126&sessionid=1746578976#rd)
  - [MySQL推出全新Hypergraph优化器，正式进军OLAP领域！](https://mp.weixin.qq.com/s/cHiu9QjMS2Qu8X89RKxlmg)
  - **数据监控**
    - [MySQL 可观测性最佳实践](https://mp.weixin.qq.com/s/b1qt4pjHY1AiI6r4vA_Cwg)
- **MongoDB**
  - [MongoDB从入门到实战之MongoDB简介](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512583&idx=1&sn=782107b618a5c8584a3f3ae441cea845&chksm=962a2240e65042f844b39e73072dd804a1fd8108c45bcd619bbf6c3d14580f3a2962f3d17d5a&scene=126&sessionid=1745282663#rd)
  - [.NET MongoDB数据仓储和工作单元模式封装](https://mp.weixin.qq.com/s/XPX1J28M1ewDJZYwQNpDHw)
  - [MongoDB从入门到实战之MongoDB快速入门（附带学习路线图）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512596&idx=1&sn=e63e40cb5eed67798806d6cd65c140b8&chksm=96175be3f8ee08a7811d2545911269caf420f677e3937e571710b43968a5acf9bb2d00d05481&scene=126&sessionid=1745371401#rd)
  - [MongoDB从入门到实战之Docker快速安装MongoDB](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513052&idx=1&sn=92119c9d284dacd7a1dc376f99df099b&chksm=96ecd4e09571263cda93e219310a5214d65e178927514ea1b179e00193e2a2b86cb0fb7492eb&scene=126&sessionid=1745665776#rd)
  - [MongoDB从入门到实战之Windows快速安装MongoDB](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513511&idx=1&sn=79de0bc626aa3e03e48ed16206af88a2&chksm=968d2cfe45eaba24a6054043a2fd6ceb7bf4a46f8074b8f260bfdf7013d8f44a72a88ef2f6fa&scene=126&sessionid=1746965044#rd)
  - [MongoDB从入门到实战之MongoDB工作常用操作命令](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513637&idx=1&sn=5cf3f924af727fa1b6ae7d9c05674b75&chksm=96dd74b8dd2144f8d7e49ff1e4433394ff0e7051b3ad439413e64bf002f95c013b5303d165ae&scene=126&sessionid=1747097371#rd)
- **查询优化**
  - [SQL优化极简法则，还有谁不会？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512009&idx=3&sn=828d2dcc050b544a137d83ac148ee10f&chksm=96f073c97b0c8ad0be31d297e6c9227be8ec6e07cdefbd31d30a1df6d3fb8057b219fc4c1e2d&scene=126&sessionid=1743642645#rd)
  - [26个SQL优化小技巧，收藏学习！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507728&idx=3&sn=be334a902ac8c786e8c29be082d44f16&chksm=969acb15bee7a2cc50852ddd241418c5f154e8a6d406ad8b078e81f517cbe1beda880988d4d4&scene=126&sessionid=1732668891#rd)
- **国产化**
  - [墨天轮数据库社区 - 乐知乐享，同心共济](https://www.modb.pro/)
    - [中国数据库排行 - 墨天轮](https://www.modb.pro/dbRank)
  - [2025年9月国产数据库流行度排行榜：达梦跃升第二，崖山挺进前十](https://mp.weixin.qq.com/s/TXEsbYArkuummbpKO59J-w)
- **选型建议**
  - [高性能场景为什么推荐使用PostgreSQL，而非MySQL?](https://mp.weixin.qq.com/s/BM9l1dTZ4TF-l3RQhMjrMg)





## S. 设计方案/架构

- [全网最全商品模型设计方案，不接受反驳！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507620&idx=3&sn=86a9c83d099bd355882d3e80e1e5d70b&chksm=96bcb2981364f77c12df105317adbb4cbf4f96b181169476c0e964145a0137627697d166e1d9&scene=126&sessionid=1732063903#rd)
- [如何设计一个可扩展的系统](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507622&idx=3&sn=981e9058437854420dccd62bc913f04d&chksm=96476e1a50363e91aee88876337b832fcb918d8fcd1f895cdad616438378315b2fef9948fb95&scene=126&sessionid=1732151313#rd)



## S. 上位机开发

- [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xiketangedu/p/18411953)
- [C#运动控制系统开发：从零打造专业级单轴控制器](https://mp.weixin.qq.com/s/FpBWRcpsWbuSS-WMs038rw)
- [终于有人把上位机说清楚了](https://mp.weixin.qq.com/s/6YcqQWdGt2qglXHZHNgeBw)



## S. 深度学习

- [C# 深度学习：对抗生成网络(GAN)训练头像生成模型 - 痴者工良 - 博客园](https://www.cnblogs.com/whuanle/p/18708861)

  > 本教程将通过一个示例介绍生成对抗网络(DCGAN)，在教程中，我们将训练一个生成对抗网络 (GAN) 模型来生成新的名人头像。这里的大部分代码来自 pytorch/examples 中的 DCGAN 实现，然后笔者通过 C# 移植了代码实现，本文档将对该实现进行详尽的解释，并阐明该模型的工作原理和原因，阅读本文不需要 GAN 的基础知识，原理部分比较难理解，不用将精力放在这上面，主要是根据代码思路走一遍即可。



## S. 数据处理

- [一次小而美的重构：使用 C# 在 Avalonia 中生成真正好看的词云 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18848662)
- [一次小而美的重构：使用 C# 在 Avalonia 中生成真正好看的词云](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513659&idx=2&sn=a3e9f2e198520ecf1cedb117f455b0f0&chksm=9630c704003ece007595bf21309b3ed32513be0ca0f1878665a4c5cf3b153f91e5fef9918f9d&scene=126&sessionid=1747273204#rd)
- [C#实时数据可视化：轻松处理10万级数据点的高性能解决方案](https://mp.weixin.qq.com/s/s9JkgVmFYOpPpewD2GfDkw)
- [C#开发实战：打造高效OPC UA客户端，让工业数据采集变得简单！](https://mp.weixin.qq.com/s/P1hXV1C4kHNBABnvVaD0og)



## S. 书籍推荐

- [C#/.NET/.NET Core推荐学习书籍（25年9月更新）](https://mp.weixin.qq.com/s/Kj8i9RPNol-KqPo5vZU1RA)
- 



## S. 索引

- [C# SIMD向量索引实战：从理论到高性能实现 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/19132692)



## T. TCP/IP

- **[上位机面试必备：TCP通信，这25题不可不知 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504376&idx=3&sn=3212da98c6028bd08bbffbfcd144885d&chksm=96d34db37079beb9dd094eafeab4c1b866a777b4cae4456f03a8cd3fc7226271bd688d3d85aa&scene=126&sessionid=1724562956#rd)**



## T. 调试

- [Windows 调试工具课程 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505465&idx=2&sn=623112d14fa55535d033780f825df4a2&chksm=96b041599f818e794d1ac575c137593e0c4826bfbd0f63f69dfce511d56d3f592f5f69de897a&scene=126&sessionid=1727052024#rd)

- [如何用 PerfView 洞察 C# 中的慢速方法 (qq.com)](https://mp.weixin.qq.com/s/JiMclqMOT6IrVRwKqkMyVQ)

- [PerfView 洞察那些 C# 代码中的短命线程 (qq.com)](https://mp.weixin.qq.com/s/iN4dnc2rGzbBtrJEwYNVSw)

- [AOT漫谈(第一篇): 如何调试C# AOT程序 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506243&idx=3&sn=7b4fef01fe328fbda5104608c84a8888&chksm=962b99541e9050d124f4d6853c6814db36ab567ee0a926fc3d94968670b89e38e6afa96a3a8c&scene=126&sessionid=1728867433#rd)

- [AOT漫谈专题(第二篇): 如何对C# AOT轻量级APM监控 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506243&idx=4&sn=81ad39fd848873be0d79636568cad429&chksm=962c985c2804a6b46483a0ddddf745776135bc9ee1cd01df9a619eaa91a885e1acc4145f7fda&scene=126&sessionid=1728867433#rd)

- [如何反向绘制出 .NET程序 异步方法调用栈 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18871528)

- [记一次ASP.NET CORE线上内存溢出问题与dotnet-dump的排查方法 - GuZhenYin - 博客园](https://www.cnblogs.com/GuZhenYin/p/18879790)

- [记一次 .NET 某智能视觉软件 句柄爆高分析](https://mp.weixin.qq.com/s/XHNRdQduO7C7UU0-13wtGg?scene=0&subscene=90)

- [推荐一种 .NET 程序崩溃闪退或卡死的分析方法](https://mp.weixin.qq.com/s/GHmDj5RySkEsf2ExEXx97A?scene=0&subscene=90)

- **Visual Studio 程序调试**

  - [高效调试指南：用 Visual Studio 提升代码排错效率的 N 个技巧（上）](https://mp.weixin.qq.com/s/kFWnNfalz0gQAQDGEGOGFg)

- **日志**

  - [C# Trace实践AOT、跨平台](https://mp.weixin.qq.com/s/cqD1AMmUcZkyT_9NQFzNSg)

- **Linux**

  - [Linux系列：如何用perf跟踪.NET程序的mmap泄露](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513637&idx=2&sn=704192970b9ecf59cbf98f0f522abf60&chksm=96e503a4f971e4b62a9b42caff6ad2f083a0e7598357da3e9a513b362b90b85cfc50799c5e33&scene=126&sessionid=1747097371#rd)
  - [聊一聊 .NET Dump 中的 Linux信号机制](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514141&idx=3&sn=ba928a20f392b3214093c864ec1a1a80&chksm=966bf906b469cc48faeeff2b7d7b75844288b3ac07e4704b4cdf7c5801866b160a608264de1d&scene=126&sessionid=1748998358#rd)

- **WinDbg**
  
  - [WinDbg 分析 .NET Dump 线程锁问题](https://mp.weixin.qq.com/s/sGQSjL9lh6PclV3LX64NGw)
  
  - [聊一聊坑人的 C# MySql.Data SDK](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508735&idx=2&sn=e6ee65ae3cfd5047e13de82921893864&chksm=96ca138cf796af2d74368f9c76b2d4f1643f32bce38be8869604dfe9dc3167a16778c88ae1ee&scene=126&sessionid=1734914402#rd)
  
  - [聊一聊 C#前台线程 如何阻塞程序退出 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18622015)
  
  - [对 .NET FileSystemWatcher引发内存碎片化的 反思](https://mp.weixin.qq.com/s/CnhkAoz-dFGUBrmzynUNlg)
  
  - **内存暴涨问题分析**
    - [使用Visual Studio分析.NET Dump，快速排查内存泄漏问题！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507622&idx=1&sn=4e1ea321ea7bb0625df3b4096bdfa5f0&chksm=96d1669d120b169df8689bd1148063e2769206a4b539cd97b054002d2b2b27d04647013368fc&scene=126&sessionid=1732151313#rd)
    - [聊一聊 .NET超高内存故障分析方法 的反思 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19098323)
    - [.NET开发必备技巧：使用Visual Studio分析.NET Dump，快速查找程序内存泄漏问题！ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504555&idx=1&sn=aa0780c9fd33e8d32601db2781cd4225&chksm=965ce7cf5f928550647ab8488e6f3dc088fea8d36ce935ed08d410bb49e0b6c77b86b2729275&scene=126&sessionid=1724978463#rd)
    - [记一次 .NET某数字化协同管理系统 内存暴涨分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18681199)
    - [.NET Core 内存泄漏排查实战指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514939&idx=2&sn=a3859998c5e021a9df739582c060bc4b&chksm=968929ba473d2d6c1401bb697d9417ee5d0973a15bbfa45cece50377fc53bb8590c1bd5e0488&scene=126&sessionid=1751590889#rd)
    - [记一次 .NET 某跨境物流系统 内存暴涨分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19083547)
      - [聊一聊 .NET 中的 CancellationTokenSource](https://mp.weixin.qq.com/s/aroutUAWHooxlXpiDmW4Iw)
    - [记一次 .NET 某企业ECM内容管理系统 内存暴涨分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19085403)
      - [聊一聊 .NET 中的 CompositeChangeToken - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19079389)
  
  - **程序卡死问题分析**
  
    - [一个超经典WinForm,WPF卡死问题的终极反思](https://mp.weixin.qq.com/s/OFhf0rtbo9XdbcesD67j_Q)
  
    - [记一次 .NET 某汽车控制焊接软件 卡死分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19033409)
  
      > 前些天有位朋友找到我，说他们开发的在客户工厂里的窗体程序出现了卡死情况，并且 Ctrl+C 也退不出来，自己分析了下也没找出是什么原因，后来在网络上就找到了我，让我帮忙看下怎么回事？ 毕竟我在这一块是专业的。。。 哈哈，既然有dump，那就拿出来分析一下。
      
    - [记一次 .NET 某光谱检测软件 内存暴涨分析](https://mp.weixin.qq.com/s/hYldmySeP-m5F1yU_OJskA)
  
    - [记一次 .NET 某放射治疗光学定位软件 卡死分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19061454)
  
      > 前段时间微信上有位非调试训练营学员找到我，说他们的医疗软件有点问题，有时候卡了一会就好了，有时候卡了很久，让我帮忙看下怎么回事，我让这位朋友在卡的时候抓一个dump给我，我分析看看。
      
    - [记一次 .NET某上位机视觉程序 卡死分析](https://mp.weixin.qq.com/s/kBvYQdV3tHnDurtwNmQaeg)
  
  - **CPU爆高分析（程序卡慢）**
  
    - [记一次 .NET某云HIS系统 CPU爆高分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512298&idx=2&sn=e1ccdce6d06717d42e84943d265fe24e&chksm=9696f438e862718e435d26950927b18e821e71e4eb36131a076404bd9c4416647375f68755b7&scene=126&sessionid=1744506245#rd)
  
    - [记一次 .NET某固高运动卡测试 卡慢分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512493&idx=2&sn=36fcace87427e4ee263c0b808f522caa&chksm=9626507cb3c9cd47ec6cc470ff8358295bf92fdca02ee03e34fc235036b6ebbcbe6ef5b7af8e&scene=126&sessionid=1745155285#rd)
  
    - [WinDbg 分析 .NET Dump 线程锁问题 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18894206)
  
      > 在定位 .NET 应用程序中的高 CPU 占用问题时，WinDbg 是非常强大的工具之一，尤其配合 SOS 扩展使用可以快速锁定“忙线程”或死锁等问题。本文将基于一次实际的分析流程，演示如何一步步定位由线程锁引起的 CPU 高占用。
      
    - [记一次 .NET 某无语的电商采集系统 CPU爆高分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514604&idx=3&sn=c29c1069b4cd69695afbbf8f38ac3b20&chksm=9668f60ccb222faef33bbd1cc537e8b0d0d168383aed6a942f1b06d8487484208c1e57a330c9&scene=126&sessionid=1750330396#rd)
  
  - **程序奔溃**
  
    - [记一次 .NET 某发证机系统 崩溃分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18932886)
    - [记一次 .NET 某CRM物流行业管理系统 崩溃分析](https://mp.weixin.qq.com/s/0GP0a2gxNIuJEDS5I40rag)
      - [聊一聊 .NET 的 AssemblyLoadContext 可插拔程序集](https://mp.weixin.qq.com/s/rjwsTg31s_dq7dw3HiJR6w)
  
  - **GC**
  
    - [MinHook 如何对 .NET 母体 CoreCLR 进行拦截](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514939&idx=3&sn=6f5705bddb3c5a0fcede2d62aeb35c8f&chksm=96493774034f775137c6d044c1624187a22d615ca9e498a1fb0e31aa224a37dbf9be077ace0d&scene=126&sessionid=1751590889#rd)
  



## T. Thread(线程)

- [C# ThreadLocal (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505970&idx=4&sn=ae7c25e55789bdc044588cc03c5b7f87&chksm=969c42e7ecd48edbd9697dc707cb35552edfb9a8ae7d1a471ef2e4d0ac1d0d6878a2a31cb791&scene=126&sessionid=1728380451#rd)

- [.NET Core 线程(Thread)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18556052)

- [.NET Core 线程池(ThreadPool)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18566995)

- [C#线程池核心技术：从原理到高效调优的实用指南 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18886677)

  > 在现代软件开发中，多线程编程是提升应用程序性能的关键手段。随着多核处理器的普及，合理利用并发能力已成为开发者的重要课题。然而，线程的创建和销毁是一个昂贵的过程，涉及系统资源的分配与回收，频繁操作会导致性能瓶颈。线程池应运而生，通过预先创建并重用线程，线程池不仅降低了线程管理的开销，还能有效控制并发线程数量，避免资源耗尽。线程池（Thread Pool）作为多线程编程中的核心技术之一，它通过管理一组预创建的线程来执行任务，有效减少线程创建和销毁的开销，提升应用程序的性能和响应能力。在 .NET 中，System.Threading.ThreadPool 类为开发者提供了一个托管线程池，内置于 CLR（公共语言运行时）之中。它支持任务的异步执行、线程数量的动态调整以及状态监控，成为多线程编程的基础设施。无论是处理 Web 请求、执行后台任务，还是进行并行计算，线程池都能显著提升效率。

- [从 Redis 客户端超时到 .NET 线程池挑战：饥饿、窃取与阻塞的全景解析 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18985234)

  > 在开发 .NET 应用时，我偶然遇到使用 StackExchange.Redis 作为 Redis 客户端时出现的超时问题。经查验，这些问题往往不是 Redis 服务器本身出了故障，而是客户端侧的配置和资源管理不当所致。尤其是当应用运行在高并发环境下，比如 ASP.NET Core 服务中使用 Kestrel 服务器时，超时异常如 RedisTimeoutException 或 Timeout performing GET 会频繁出现，让人头疼不已。

- **多线程**
  - [C#实现多线程的几种方式 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247500224&idx=1&sn=a5d21a0b42e61f317fc8eaa4168a0ac2&scene=21#wechat_redirect)

  - [【译】让多线程调试更有意义 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18846145)

    > 调试复杂的程序常常感觉像是在迷宫般的线程和堆栈跟踪中跳转。理解线程行为和跟踪问题的挑战可能令人生畏，这会导致更长的开发时间和更大的挫败感。但是现在，有一个解决方案可以简化这个过程——在 Visual Studio 的并行堆栈窗口中引入 AI 驱动的线程摘要。

- **线程锁**

  - **[探索C#中的多线程神器Monitor和Lock](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504171&idx=2&sn=49befd777d9818ff124db42ebe7e1fac&chksm=96338dd7700e9bf2c00c4baee847b07f9855d33dd075bf1b49f64463396ac472940d5a014fac&scene=126&sessionid=1723768329#rd)**

- **线程同步**
  - [C# Barrier进行多线程同步](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504737&idx=3&sn=d33d01d45e30fae85a0b4d6cf1b65b0e&chksm=9699f872d98ed7d09a6c2b0c7bd87bc64180cdf54950e6f0ca1a9b851a7d9c15ae4fd1ea2a8b&scene=126&sessionid=1725718515#rd)

- **异步**

  - [揭秘C#异步编程核心机制：从状态机到线程池的全面拆解 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18909634)

    > C#中的异步编程是一个强大且复杂的特性，它允许开发者编写非阻塞的代码，从而显著提升应用程序的响应性和吞吐量。本文将深入剖析异步编程的底层原理，从async和await关键字的工作机制，到状态机、任务调度、线程管理和异常处理等核心概念。

  - [别再被 async/await 骗了！一文看透 C# 编译器生成的状态机](https://mp.weixin.qq.com/s/rZ4mDCUBn31behEqwFeq4A)

  - [聊一聊 C#异步 任务延续的三种底层玩法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509099&idx=2&sn=64514f54589397a27a9c95a9e78cde16&chksm=9644e747e4c46599bad92880716fbf8b6f15809c94000de722730b42fdaa210398d06bd028b7&scene=126&sessionid=1736503976#rd)

  - [探索C#中的ValueTask，高性能异步编程新宠？](https://mp.weixin.qq.com/s/njPHOXSDEamXJIlbZvbdHA)

  - [C#实现异步编程的常用的5种方式总结 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505725&idx=4&sn=97da5b2d1c1a69e1aed42490510a99c0&chksm=96cb132a1d25fd1faf8c9ab5dd073c425b8f95daf6920ca94030480c25d12a2b76d7dee34bf1&scene=126&sessionid=1727052024#rd)

  - [.NET异步有多少种实现方式？（异步编程提高系统性能、改善用户体验） (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247500438&idx=1&sn=7295d2cdb1e68ce8abaf182058d3e61e&scene=21#wechat_redirect)

  - [C#中 Task 结合 CancellationTokenSource的妙用 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18620273)

  - [Invoking Async Power: What Awaits WinForms in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-winforms-async-apis/)

  - [聊一聊 .NET在Linux下的IO多路复用select和epoll - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18911996)

    > 在windows平台上，相信很多人都知道.NET异步机制是借助了Windows自带的 IO完成端口 实现的异步交互，那在 Linux 下.NET 又是怎么玩的呢？主要还是传统的 select，poll，epoll 的IO多路复用，在 coreclr源代码中我们都能找到它们的影子。

  - [一个高频问题：异步操作会创建线程吗？ - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/16085461.html)

  - [C# 异步编程：从 async/await 到 Task 并行库的全面解析 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18932383)

  - [.NET 开发者最容易踩坑的6个async/await 使用错误](https://mp.weixin.qq.com/s/tdIX8uF8DYjrKcGMMzsmZQ)

  - [深入理解 C# 异步编程：同步、Task.Wait () 与 await 的本质区别及实践指南 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/19048634)

  - [聊一聊 .NET 中的 CancellationTokenSource](https://mp.weixin.qq.com/s/aroutUAWHooxlXpiDmW4Iw)

  - [聊一聊 .NET 中的 CompositeChangeToken - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/19079389)

    > 上一篇跟大家聊到了 CancellationTokenSource，今天跟大家聊到的是另一个话题叫组合变更令牌 CompositeChangeToken，当前我所有的研究都是基于dump分析之用，所以偏重的点自然就不一样，如果纯纯的研究源码那可能就是入门到放弃。。。接下来说下 CompositeChangeToken是干什么用的，你可以理解成观察者模式，举例：如果一个房子里面有几颗炸弹，只要任何一颗炸弹爆炸，房子都会塌掉，任何关注这个房子的人都会有所变化（跑，叫，哭）... ，其中 CompositeChangeToken 就是观察者集合，有了这个概念之后写一段简单的代码。

  - [Runtime Async - 步入高性能异步时代](https://mp.weixin.qq.com/s/NOYLRvPvd7cCNL_wSCO2SA)

  - [Rx.NET：用几行代码驯服异步编程的"野马"](https://mp.weixin.qq.com/s/8shHO4ifCveaV7i0X81rcw)

- **并发**
  - [后端思维之高并发处理方案](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511947&idx=2&sn=b78f6ed86f43a99b792a6b009afdac50&chksm=96a5e705d99f22190c90847642318a11162db99581a0d38133834303d5e19297533b48cec601&scene=126&sessionid=1743469108#rd)

- **线程安全**

  - [C# 锁机制全景与高效实践：从 Monitor 到 .NET 9 全新 Lock - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18924622)



## T. 通信

- [C#网络编程实战：从零构建专业级数据包监控工具](https://mp.weixin.qq.com/s/8M2GeS8mGeOCiU3Bm4P_Qw)

- [.NET 10了，HttpClient还是不能用using吗？我做了一个实验](https://mp.weixin.qq.com/s/tB8J9dgibbeggStaK2lYEQ)

- **ModBus**
  
  - [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18411953)
  
  - [C#轻松实现Modbus通信 - 付工上位机 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiketangedu/p/18461727)
  
  - [ModbusRTU通信协议报文剖析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18430033)
  
  - [上位机开发之假装有设备，使用 C# 模拟串口设备](https://mp.weixin.qq.com/s/_b-ge-sIvpsKGxneqaR2lA)
  
    > 这次的需求很简单，用 C# 模拟一个设备协议，实现不用去现场对接设备，也能先开发和调试上位机程序。实际设备是用 RS-485 标准进行通信，模拟跑通之后，到现场只需要把RS-485 总线（A/B 差分线）插到 USB-RS485 转换器上就可以实现数据读取和指令下发了。
  
- **Socket**
  - [c#构建具有用户认证与管理的socks5代理服务端 - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/17410319.html)
  - [c#开发完整的Socks5代理客户端与服务端——客户端（已完结） - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/18867762)
  - [SuperSocket 2.0 的发布标志着.NET Socket 服务器框架迈入了一个全新的时代 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18894166)
    - [Home - SuperSocket](https://www.supersocket.net/)
    - [SuperSocket 2.0 中文文档](https://docs.supersocket.net/v2-0/zh-CN)
    - [SuperSocket: SuperSocket 是一个用于 .NET 的高性能、可扩展的套接字服务器应用程序框架。它为构建自定义网络通信应用程序提供了强大的架构，支持包括 TCP、UDP 和 WebSocket 在内的多种协议。](https://gitee.com/kerryjiang/SuperSocket)
    - [GitHub - kerryjiang/SuperSocket: SuperSocket is a high-performance, extensible socket server application framework for .NET. It provides a robust architecture for building custom network communication applications with support for multiple protocols including TCP, UDP, and WebSocket.](https://github.com/kerryjiang/SuperSocket)
  - [WPF下TCP服务器监听应用：从入门到生产级实战](https://mp.weixin.qq.com/s/47wtLfqncSFth-ZputLvzQ)
  
- **通讯软件**

  - [.NET 行不行？客服系统双11扛住 300+ 并发会话，21人在线稳如磐石](https://mp.weixin.qq.com/s/g10-UWICqNSChIEsTUxZsA)
  - [.net 行不行？在线客服系统成功支持客户双11大促，21客服在线，高峰超300会话并发 - 升讯威在线客服系统 - 博客园](https://www.cnblogs.com/sheng_chao/p/19242279)





## T. 图像识别

- [C#使用PaddleOCR进行图片文字识别](https://mp.weixin.qq.com/s/ULf3ZY6x8KgaOFkd2oBYKA)



## T. 图形/图像/图表

- **SkiaSharp**
  - [【SkiaSharp绘图14】SKCanvas方法详解(三)URL注释、按顶点绘制、 是否裁切区域之外、旋转、缩放、倾斜、平移、保存/恢复画布_skiasharp 缩放-CSDN博客](https://blog.csdn.net/TyroneKing/article/details/140084044)
  - [SkiaSharp库在NetCore下跨平台图片操作基础使用方法 - pccai - 博客园](https://www.cnblogs.com/pccai/p/17858065.html)
  - [SkiaSharp实现精灵旋转动画：Windows Forms应用程序详解](https://mp.weixin.qq.com/s/xk1qExXv2MU_qcFYbK3-Sw)
  - [C#下使用SkiaSharp打造自定义时钟控件](https://mp.weixin.qq.com/s/HKokTzTQJzm-GTlCo2Vp-A)
  - [用C#打造炫酷波浪动画：从零基础到视觉特效大师](https://mp.weixin.qq.com/s/fg2nXmUUzBKWcK2Bq3xO-g)
  - [从零打造专业级绘图应用：SkiaSharp + WinForms 实战指南](https://mp.weixin.qq.com/s/DiIqz4QFqo6_Tv51lp85Lg)
  - [C# 用SkiaSharp打造现代化WinForms游戏引擎](https://mp.weixin.qq.com/s/sYqntrZh_darYUSfh1UkfA)
  - [C#工业级2D动画系统实战：从传送带到机械臂的完整解决方案](https://mp.weixin.qq.com/s/M59x4JPaO4SN_937OwuLTA)
- **图表**
  - [C#工业监控界面开发：从零到完美的LiveCharts实战](https://mp.weixin.qq.com/s/03yiLmPx-hSLGGknaYr30A)
  - [C# WPF 下 ScottPlot 5.0 基础：常用工业图表类型之折线图](https://mp.weixin.qq.com/s/rDNReG8f1qhgP6CzCJEpOw)



## V. Vue

- [尤雨溪：Vite 和 JavaScript 工具的未来！ (qq.com)](https://mp.weixin.qq.com/s/n8qUCSt0Q9Y7rfdOafYtrA)



## V. IValueConverter

- [使用ValueConverters扩展实现枚举控制页面的显示 - 芝麻科技 - 博客园 (cnblogs.com)](https://www.cnblogs.com/sesametech-dotnet/p/18447676)



## V. VS Code

- [C# Dev Kit Updates: .NET Aspire, Hot Reload, and More! - .NET Blog](https://devblogs.microsoft.com/dotnet/csharp-on-visual-studio-code-just-got-better-with-enhancements-to-csharp-dev-kit/)

  > 为了响应您的反馈，该团队推出了一系列更新，旨在增强用户体验并提高性能和可靠性。这些更新旨在使使用 VS Code 的开发人员能够更高效、更愉快、更高效地使用 C# 进行编码。

- [重磅消息，微软宣布 VS Code Copilot 开源，剑指 Cursor！](https://mp.weixin.qq.com/s/kzMB-x9BJydLjjCObbrriQ)

- [VS Code: Open Source AI Editor](https://code.visualstudio.com/blogs/2025/05/19/openSourceAIEditor)

- [用 VS Code 编写、运行与调试 .NET 应用全攻略（macOS 跨平台支持）,非常的简单](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513658&idx=2&sn=03eacab58be332a3f7f9cb276f0d43b6&chksm=965a2ba5a5aaca5ac99f87d71fc7c7da4326f3b7775524f8a9053721a537a7ed1e415bc28e12&scene=126&sessionid=1747184142#rd)



**V. Visual Studio Hub**

- [【译】Visual Studio Hub 介绍 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18864220)
- [Introducing Visual Studio Hub - Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/visual-studio-hub/)
- [Visual Studio Hub: Your one-stop destination for latest news, updates, and insights](https://visualstudio.microsoft.com/hub/?rwnlp=zh-hans)




## W. WebAPI

- [细聊ASP.NET Core WebAPI格式化程序 (qq.com)](https://mp.weixin.qq.com/s/_fGnrUd-fNGdU6CUbj4uVQ)

- [C# WebAPI 插件热插拔 - 黄金程序员 - 博客园](https://www.cnblogs.com/BFMC/p/18687474)

- [MySurvey 问卷调查, 一个简单的Biwen.QuickApi示例项目 - 万雅虎 - 博客园](https://www.cnblogs.com/vipwan/p/18808244)

- [C# 与低代码平台的融合：以活字格为例的 Web API 开发实践 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18924171)

  > 在当今软件开发领域，低代码平台凭借其高效、便捷的特性逐渐成为开发的主流趋势。而 C# 作为一种功能强大的编程语言，在服务端开发中有着广泛的应用。将 C# 与低代码平台相结合，能够充分发挥两者的优势，快速开发出高质量的应用程序。本文将以葡萄城公司的企业级低代码平台 —— 活字格为例，详细介绍如何使用 C# 进行接口扩展，创建服务端 Web API。
  
- [.NET 也能“智能搜索”？用 Sieve 让你的 API 查询飞起来！](https://mp.weixin.qq.com/s/Yr_cZp1rj856B-FmXvPJ0Q?scene=0&subscene=90)

  - [Filtering, Sorting & Pagination Made Easy in .NET with Sieve](https://www.c-sharpcorner.com/article/filtering-sorting-pagination-made-easy-in-net-with-sieve/)




## W. Windows 实用工具

- [有哪些让你「 爽到爆炸 」的 Windows 软件？ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504737&idx=1&sn=b09a7952ec56c9f3dbad888c120696fb&chksm=96fd374d973b7110c1f62e73d3a60733e9633639e34e5b9f8d331c27e0601607bb9b51e149ed&scene=126&sessionid=1725718515#rd)



## W. 微服务

- [微服务如何相互协作？ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506318&idx=5&sn=2312e0b9a6916a98cf4b71a0eeac387c&chksm=96ca23870c132d9e5794ad9be2511294617a56836d219231b51161142953c2ba60787f30c3eb&scene=126&sessionid=1729127563#rd)
- [能涨薪水30%的.NET 微服务面试题 35 道（带答案）](https://mp.weixin.qq.com/s/qoCYAfBh-inQmcHwrNDkUA)



## W. 委托

- [C#委托的前世今生 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18594690)
- [C# 中委托和事件的深度剖析与应用场景 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18926505)



## W. 物联网

- [surging 集成SuperSocket预发布版本2.0 - fanly11 - 博客园](https://www.cnblogs.com/fanliang11/p/18824796)



## W. 微信小程序

- [换个方式用C#开发微信小程序](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513710&idx=2&sn=3c4637bba4043ccb0050a6a6aee90cf0&chksm=9642fce376bda512ea1763823dc7ab67e709852a0993326b3e13c2135c07079d43ae4ae2e930&scene=126&sessionid=1747576822#rd)
- [.NET微信网页开发之使用微信JS-SDK自定义微信分享内容](https://mp.weixin.qq.com/s/_E6TXunEPt9j6U-5836rZQ)



## W. WPF

- [在 Windows 11 上为 WD 窗口启用 Snap 功能](https://mp.weixin.qq.com/s/LVcPToqTQZUMPJ-nU6uuEQ)

- [WPF 在 Windows 实现任务栏缩略图](https://mp.weixin.qq.com/s/bggT2J5qLXT8QvsVG-akLQ)

- [WPF 在 Windows 实现任务栏缩略图](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247515338&idx=2&sn=691eb917f55b6339733483949e754cbb&chksm=9696958ad400d0416bd98c1f2c5f17c2228203d1ed1948d7382cfccdeccdd7ab1476b8828a1a&scene=126&sessionid=1752454864#rd)

- [WPF 使用GDI+提取图片主色调并生成Mica材质特效背景](https://mp.weixin.qq.com/s/8hF85IoP1LiBSk0QKLGiAQ)

- [C#：wpf ui 4.0 是如何实现页面导航的？ - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18965841)

- [C# WPF 内置解码器实现 GIF 动图控件 - 蓝点lilac - 博客园](https://www.cnblogs.com/BluePointLilac/p/19029227)

  > C# WPF 内置解码器实现 GIF 动图控件。
  
- [WPF依赖属性学习 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/19074134)

- **控件使用**

  -  [WPF应用最小化到系统托盘 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/19130874)
  -  [WPF 为 ContextMenu 使用 Fluent 风格的亚克力材质特效](https://mp.weixin.qq.com/s/CO7jEuXA4U2e7F1I9SMshw)
  -  [WPF 使用 HLSL + Clip 实现高亮歌词光照效果](https://mp.weixin.qq.com/s/Ou8kChiZlmGOd5YLEEXCYA)
  -  [CropImage 支持等比例裁剪](https://mp.weixin.qq.com/s/1nIxMvyCNkRlrF-FY_xboQ)



## W. WinForm

- [C#右键菜单的"魔法"：从简陋到惊艳的完美蜕变](https://mp.weixin.qq.com/s/7QcQ-VW12dgoqpQCktSmPQ)
- [WinForm布局神器：Anchor与Dock属性让你的界面完美自适应](https://mp.weixin.qq.com/s/pVmPubwCI0l_rgOblxCFGQ)
- [WinForm控件基本属性与常用方法：从入门到实战精通](https://mp.weixin.qq.com/s/drRkK93TOMMzRFQ_pfN3yA)
- [拒绝“面条代码”！C# 开发工业上位机（HMI）的架构救赎之路](https://mp.weixin.qq.com/s/ICNwJczdVLbQ-_nXhYnrQg)
- [C# Winform之事件驱动编程模式在WinForm中的应用](https://mp.weixin.qq.com/s/Q2iCCn7Qo3zqg6oGFuDROA)



## W. 文件处理

- **电子表格**

  - [基于 C# 和 .NET 的 Spread.NET 数据处理实战 - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18930958)

    > Spread.NET 是一款全面的 .NET 表格控件，它支持多种数据绑定方式，能够与各种数据源（如数据库、XML 文件等）进行无缝集成。同时，它提供了丰富的单元格样式设置、公式计算、数据验证、排序和筛选等功能，可满足不同场景下的数据处理需求。其界面友好，易于使用，无论是简单的数据展示还是复杂的数据分析，Spread.NET 都能提供出色的解决方案。

  - [C# 将 CSV 转化为 Excel - 葡萄城技术团队 - 博客园](https://www.cnblogs.com/powertoolsteam/p/18934279)

    > 在数据处理和交换的过程中，CSV（逗号分隔值）格式和 Excel 文件格式都是非常常见的。CSV 文件以纯文本形式存储表格数据，易于生成和处理；而 Excel 文件则提供了更丰富的功能，如数据可视化、公式计算等。在实际应用中，我们经常需要将 CSV 文件转化为 Excel 文件，以利用 Excel 的强大功能进行数据分析和展示。本文将介绍如何使用合适的技术手段在 C# 中实现将 CSV 文件转化为 Excel 文件的功能。



## W. WMI

- [记录.Net 8 发布增加 PublishTrimmed 裁剪选项，调用WMI 的ManagementObject 异常 - wuty007 - 博客园](https://www.cnblogs.com/wuty/p/18931865)



## W. Web

- [C#开发必看：Stubble模板引擎让HTML生成效率提升300%](https://mp.weixin.qq.com/s/zuEzDH-ZwwtzvGduGLgdPg)
- [尤雨溪又又又赢麻了](https://mp.weixin.qq.com/s/t1KjNEZrcsS-368UAPb1Sg)
- **Vue**
  - [如何在 Vue3 中更好地使用 Typescript](https://mp.weixin.qq.com/s/nwJ3MZMAMsie4ej2dw8b-A)
  - [Vue 全家桶 Skills 来了，Vue 团队出品！](https://mp.weixin.qq.com/s/OAMgzoftqG-SvIOqsZSsQw)




## X. 系统扩展

1. **[一图看懂 8 大扩展系统的方法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503181&idx=4&sn=3dc031b174f493ffce4abf1bffecfc52&chksm=96c4c8e5cc7e1f2e2cdc4a4ed7972d36d7ebe8f6a70c2735f284061dc3c07db1c91265303147&scene=126&sessionid=1721264675#rd)**
1. [10 个系统设计中的取舍 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505925&idx=4&sn=2713fcd470d2bc1ec22b46bdfa17aec0&chksm=969f00ce7390cf1aaae46a13c0df2b7f9474a25ea13ed249a85cddf3156ff76949ce962b2ab2&scene=126&sessionid=1727398833#rd)



## X. 消息队列

- [系统设计中的消息队列 (qq.com)](https://mp.weixin.qq.com/s/rP3tbXFzSvLL92--Fo2_pw)

- [C# 窗口过程消息处理 WndProc - 蓝点lilac - 博客园](https://www.cnblogs.com/BluePointLilac/p/18802906)

  > C# 窗口过程消息处理 WndProc。



## X. 消息/事件

- [告别传统事件！Easy.MessageHub让C#消息传递变得优雅简单](https://mp.weixin.qq.com/s/l-AS4O7l4PIkuVXN-DUrNw)



## X. 虚拟打印机

- [如何添加Microsoft Print To PDF 打印机 - 知乎](https://zhuanlan.zhihu.com/p/105366547)
- [Spire.Pdf 的各种操作总结 - E-iceblue - 博客园](https://www.cnblogs.com/Yesi/p/4289981.html)
- [CutePDF :: Product :: CutePDF Writer](https://cutepdf.com/Products/CutePDF/writer.asp)
- [ps2pdf: PostScript-to-PDF converter](https://web.mit.edu/ghostscript/www/Ps2pdf.htm)



## X. 序列化/反序列化

- [.NET 9 New features-JSON序列化 - Eric zhou - 博客园](https://www.cnblogs.com/tianqing/p/18622226)
- [dotnet 10 新的 JsonIgnoreCondition](https://mp.weixin.qq.com/s/AmxwyBwWFn18JVDet6lhHA)



## X. 选型建议

- [Why we built our startup in C# - .NET Blog](https://devblogs.microsoft.com/dotnet/why-we-built-our-startup-in-csharp/)

  > 当我们开始构建 Tracebit——一款面向 B2B SaaS 安全产品时，我早期做出的一个关键决定是选择一种编程语言。虽然许多初创公司倾向于选择 Python、TypeScript、Golang 或 Rust，但我选择了不同的道路：C#。我之前已经相当多地写过关于这个决定的内容，我想在这里分享一些亮点。



## X. 性能分析与优化

- [dotnet-trace 分析.net程序性能 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18881181)
- [.NET 10 进展之 CoreCLR Interpreter](https://mp.weixin.qq.com/s/XUaLHK3K_H_Hk3u4f8CnoA)



## Y. 音频/视频

- [【音视频通话】使用asp.net core 8+vue3 实现高效音视频通话 - 四处观察 - 博客园 (cnblogs.com)](https://www.cnblogs.com/1996-Chinese-Chen/p/18384394)

- [.NET 摄像头采集 - 唐宋元明清2188 - 博客园 (cnblogs.com)](https://www.cnblogs.com/kybs0/p/18385599)

- [C#实现屏幕墙：同时监控多个电脑桌面（支持Windows、信创Linux、银河麒麟、统信UOS） - zhuweisky - 博客园](https://www.cnblogs.com/zhuweisky/p/19046370)

- [海康相机通过透明通道控制串口收发数据](https://mp.weixin.qq.com/s/agm3FnyRx86JgwHIRLSnVw)

- **音频**

  - [C#实现语音预处理：降噪、静音检测、自动增益（附Demo源码） - zhuweisky - 博客园](https://www.cnblogs.com/zhuweisky/p/18936492)

    > 无论是在音视频录制系统，还是音视频通话系统、或视频会议系统中，对从麦克风采集到的说话的声音数据进行预处理，都是是非常必要的。语音数据预处理主要包括：降噪（Noise Reduction）、静音检测（Silence Detection/VAD）、自动增益（Automatic Gain Control, AGC）。




## Y. 压缩/解压

- [.NET 压缩/解压文件 - 唐宋元明清2188 - 博客园 (cnblogs.com)](https://www.cnblogs.com/kybs0/p/18398891)
- [.NET使用原生方法实现文件压缩和解压 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247501949&idx=1&sn=19c07f1b11e880898bd9457df492b618&scene=21#wechat_redirect)



## Y. 远程控制

- [推荐6款好用、免费的远程控制软件，收藏使用！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506714&idx=2&sn=d8c9c51b659164c8591fd9dc2a8f4770&chksm=9634011131754750eda640494559a1e88005ffdd2283dad303cb02e838f83ada45a169ab72fb&scene=126&sessionid=1730335988#rd)



## Y. 依赖注入

- [理解和使用 .NET Core中依赖注入的作用域](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507121&idx=3&sn=5f3c95b74a4cef7dbc4ffb386de431f0&chksm=963ec5ce8ccb80cecd3353b2d2bb9a5dae130e85a5a020b9670cd4649670bb993e08233bab3c&scene=126&sessionid=1731206998#rd)

- [.NET 依赖注入中的 Captive Dependency - Agile.Zhou - 博客园](https://www.cnblogs.com/kklldog/p/18663148/captive-dependency)

- [.NET中 泛型 + 依赖注入 的实现与应用 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18714657)

  > .NET中 泛型 + 依赖注入 的实现与应用。

- 



## Y. 源代码生成器

- [dotnet 源代码生成器分析器入门 - lindexi - 博客园](https://www.cnblogs.com/lindexi/p/18786647)



## Y. 云原生应用

- [.NET云原生应用实践（一）：从搭建项目框架结构开始 - dax.net - 博客园](https://www.cnblogs.com/daxnet/p/18172088)



## Y. 异常

- [.NET 9中的异常处理性能提升分析：为什么过去慢，未来快](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247514145&idx=1&sn=dd0dddb8035d49ee586bf80b98fbd0ea&chksm=96388178d56dbef5e29908602dea202bcd3d1c1cb140df4e9a36d26cb9584bfd4f3177115f0c&scene=126&sessionid=1749085186#rd)



## Y. 游戏

- [Github Copilot 实战: 使用 Copilot AI + Blazor 编一个五子棋游戏 - AlexChow - 博客园](https://www.cnblogs.com/densen2014/p/19124794)



## Z. 字符串处理

- [C#|.net core 基础 - 删除字符串最后一个字符的七大类N种实现方式 - IT规划师 - 博客园 (cnblogs.com)](https://www.cnblogs.com/hugogoos/p/18453906)
- [C#字符串拼接的6种方式及其性能分析对比](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510211&idx=1&sn=7a74eccdac26ddfe5b2d6730982097b6&chksm=96d566ef30cf03b40df87189e17e0905e9863a271ca8bbdd78e00f7aecdce5057de485dd84bb&scene=126&sessionid=1739414680#rd)
- [C# 字符串拼接的 7 种方式及性能对比 - 唐青枫 - SegmentFault 思否](https://segmentfault.com/a/1190000045650291)
- [用 C# 插值字符串处理器写一个 sscanf](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510505&idx=2&sn=cba9ba32d24070d1fc71028db1473b85&chksm=96214cf9b6fbca195ba0b031bc35df9cf25df8581fe25c17674505bd40557d70965d62b18774&scene=126&sessionid=1739753079#rd)
- [高效管理内存的利器：彻底理解 Span 和 Memory：](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512073&idx=2&sn=7eadab22fa2365d77f43dbe722fb7934&chksm=9602b997629f2142d356901d8d8ae5ba84fb63c2b8ae222ee4921e089ed478597c9b56f29db1&scene=126&sessionid=1743819410#rd)
- [从零开始: c#纯代码实现完整Json解析器的全过程及注释与自定义格式的支持实现](https://mp.weixin.qq.com/s/biQK9mv10oK-vFw1N01bcg)



## Z. 正则表达式

- [C#正则表达式快速入门](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508453&idx=1&sn=20bc9b8c80a0ffa746e3a768372fbf4f&chksm=9628e8fef5db0afacb3a3ac03fdbfafc3654e013e2b216ec33b41fec5b9bb97d8fcb621a0c64&scene=126&sessionid=1734311217#rd)



## Z. 在线工具

- [2款简洁好用的在线代码变量命名利器，让命名不再烦恼！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512493&idx=1&sn=f35ee6434bcbe546ff4ad6a02842acfe&chksm=966e0050b7b1e2fa11dad29071cb6fc73684b1d32cb26e2d5a0678b450845e0ee68f407b7582&scene=126&sessionid=1745155285#rd)
  - [CHTML代码变量命名工具_变量命名规则库](https://www.chtml.cn/)
  - [程序员变量名助手 | 菜鸟工具](https://www.jyshare.com/front-end/9443/)



## Z. 组件使用

- [Circuit Breaker Policy Fine-tuning Best Practice - .NET Blog](https://devblogs.microsoft.com/dotnet/circuit-breaker-policy-finetuning-best-practice/)

  > 本文介绍了 Polly 中断路器弹性策略的概念，特别关注使用.NET 扩展和 Polly 的 HTTP 客户端请求，但这一理念也适用于更通用的 CB 调优。它提供了一个实用的指南，用于集成中断路器策略并微调其配置，以增强服务弹性和容错能力。

- [Fine-tune the volume of logs your app produces - .NET Blog](https://devblogs.microsoft.com/dotnet/finetune-the-volume-of-logs-your-app-produces/)

  > 如果你正在运行一个生产应用程序，你知道管理日志的挑战。日志太少会让你在黑暗中摸索；日志太多会让你被数据淹没并支付过高的存储成本。这是一个经典的可观察性困境——当事情出错时，你想要全面的信息，但你又不想存储所有从快乐路径中获取的细节。现在，让我们来看看.NET 中的日志采样——一种强大的功能，它允许你策略性地减少日志量，同时保持可观察性。与简单的日志过滤（它使用二元决策，即发送或发送日志）不同，采样为你提供了细粒度的控制，让你能够从应用程序的不同部分发送精确百分比的日志。



## Z. 自动化

- [FlaUI核心架构揭秘：Application、Window、Element三层体系从入门到实战](https://mp.weixin.qq.com/s/D-TW92nrmevchv3QM85YVA)



## Z. 杂谈

- [程序员的护城河是什么 ？](https://mp.weixin.qq.com/s/ZkjAXSK1UOykQWLpzZ6hjA?scene=0&subscene=90)
- [.NET 何以成为制造业数字化转型的基石：效率、生态与跨平台的制胜之道](https://mp.weixin.qq.com/s/8E9IOH8rMsoECZrkbdmrLA)
- [.NET 何以成为制造业数字化转型的基石：效率、生态与跨平台的制胜之道 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/19110427)
- [程序员副业避坑指南，别一上来就写代码，不然大概率要烂尾～](https://mp.weixin.qq.com/s/LLSGH6thsdmLFflSvoL2-Q)
