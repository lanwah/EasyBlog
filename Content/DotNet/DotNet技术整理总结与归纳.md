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



## A. ASP.NET Core

- [.NET Core：架构、特性和优势详解 - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18662074)
- **[简化ASP.NET Core API神器：用Gridify轻松实现过滤、排序和分页【Gridify】](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504469&idx=3&sn=381d436f87fe97084416e4c3918d76ae&chksm=967a9718d247b340a425bd227b6cda31edd04025914d0cfe648abb7336b59f1fb5690182a68a&scene=126&sessionid=1724806111#rd)**
- [ASP.NET Core OData 9的发布，放弃 .NET Framework (qq.com)](https://mp.weixin.qq.com/s/sKilIxCmP8OG7EccwXFTNA)
- [ASP.NET Core Filter与IOC的羁绊 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506322&idx=5&sn=0401e32e7e6e105b260f40745b948170&chksm=963084f5de0ffec3942c8176b20af6cfc4bb1d91b919bd912ab4d87ce55e90108bde0ada21eb&scene=126&sessionid=1729213064#rd)
- [将ASP.NET Core Web API和Blazor Wasm发布到 IIS](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508114&idx=1&sn=f387e548a304d88696475d6bba74fd56&chksm=96ffc2c0355bdcce1a9064e70be405a5fb23992abede404f50f5a7d5fe2925c4598962f0a18f&scene=126&sessionid=1733706081#rd)
- [在Asp.netCore中使用Attribute来描述限流 - jiulang - 博客园](https://www.cnblogs.com/kewei/p/18630545)
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

- 微服务

  - [用 Sidecar 容器为 .NET Core 应用做诊断和性能分析 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18886607)

    > 用 Sidecar 容器为 .NET Core 应用做诊断和性能分析。




## A. ASP.NET Core MVC

- [模拟ASP.NET Core MVC设计与实现 (qq.com)](https://mp.weixin.qq.com/s/zd56b19MQg5PHF8Nf-T1eg)



## A. AI/AIGC

- [Introducing Microsoft.Extensions.AI Preview - Unified AI Building Blocks for .NET - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-microsoft-extensions-ai-preview/)

- [适用于 .NET 稳定的官方OpenAI库](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506376&idx=1&sn=7016d47686d100aab997bfb11a62563c&chksm=9623badd164d3ad0665805fdcb55009d09871c6cac03bfb010d6aaa53ae6a5f4e57cf3571203&scene=126&sessionid=1729426307#rd)

- [在C#中基于Semantic Kernel的检索增强生成（RAG）实践 - dax.net - 博客园](https://www.cnblogs.com/daxnet/p/18475095)

- [C#深度学习：如何使用C#实现ResNet算法的训练和推理](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506415&idx=3&sn=003b7271953b9a387229eb6341a29ef3&chksm=96193f3f03169dadb8f693283d7ff8c2e6f7ca2b07c2ec206a3d68c14394d65ca25512e6ca2a&scene=126&sessionid=1729559254#rd)

- [使用Microsoft.Extensions.AI简化.NET中的AI集成](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507305&idx=1&sn=d4d7a11a9a310f195beb445a18c7637c&chksm=96c25d9e38701da2295f38de7ab28db742d09c1591a365d5438bee3cad6d998419fe961bbd3e&scene=126&sessionid=1731890970#rd)

- [Evaluating content safety in your .NET AI applications - .NET Blog](https://devblogs.microsoft.com/dotnet/evaluating-ai-content-safety/)

  > 我们很高兴地宣布，Microsoft.Extensions.AI.Evaluation.Safety 包已添加到 Microsoft.Extensions.AI.Evaluation 库中！这个新包提供了评估器，帮助您检测 AI 生成内容中的有害或敏感内容——例如仇恨言论、暴力、版权材料、不安全代码等。这些安全评估器由 Azure AI Foundry 评估服务提供支持，并设计为可以无缝集成到您现有的工作流程中，无论您是在本地运行单元测试中的评估，还是在 CI/CD 管道中自动执行离线评估检查。

- [.NET + AI | Semantic Kernel vs Microsoft.Extensions.AI - 「圣杰」 - 博客园](https://www.cnblogs.com/sheng-jie/p/18863626/semantic-kernel-vs-microsoft-extensions-ai)

- [PaperAssistant：使用Microsoft.Extensions.AI实现 - mingupupup - 博客园](https://www.cnblogs.com/mingupupu/p/18651932)

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

- **Ollama**

  - [GitHub - ollama/ollama: Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 2, and other large language models.](https://github.com/ollama/ollama)
    - [Ollama API](https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-completion)
    - [Ollama OpenAI API](https://github.com/ollama/ollama/blob/main/docs/openai.md)
  - [GitHub - awaescher/OllamaSharp: The easiest way to use the Ollama API in .NET](https://github.com/awaescher/OllamaSharp)
  - [Ollama API Reference - Ollama English Documentation](https://ollama.readthedocs.io/en/api/#generate-a-completion)
  - [ollama+deepseek本地部署，安装卸载模型及使用方法](https://baijiahao.baidu.com/s?id=1823397045890181844)

- **OpenAI**

  - [快速入门 Quickstart – OpenAI接口文档中文版](https://www.openaidoc.com.cn/docs/quickstart)
    - [对话Chat – OpenAI接口文档中文版](https://www.openaidoc.com.cn/api-reference/chat)

  - [API Platform | OpenAI](https://openai.com/api/)

- **小型语言模型 (SLM)**

  - [2024 年 5 种领先的小语言模型：Phi 3、Llama 3 等-CSDN博客](https://blog.csdn.net/weixin_47567401/article/details/139176010)
  - [Phi小模型开发教程：用C#开发本地部署AI聊天工具，只需CPU，不需要GPU，3G内存就可以运行，不输GPT-3.5 - chingho - 博客园](https://www.cnblogs.com/chingho/p/18681020)

- **DeepSeek**

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

  - **DeepSeek 平替版本**

    - [分享一个免费、快速、无限量使用的满血 DeepSeek R1 模型，支持深度思考和联网搜索！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511324&idx=1&sn=518b6da23bf7b78197fb53fa1effddcf&chksm=96e1a2bc746d323cb875a8477a95428bc22108de8ce1b174165677244388b347d3a57cae83d3&scene=126&sessionid=1742038870#rd)

- **AI编程助手**

  - [Visual Studio使用GitHub Copilot提高.NET开发工作效率](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509901&idx=1&sn=dbe05f2b4bdae0b03c20e45de3340412&scene=21#wechat_redirect)

- **AI 程序数据库**

  - [Building .NET AI apps with Chroma - .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-chroma-db-csharp-sdk/)

    > 无论您是构建 AI 解决方案还是使用高级搜索功能增强现有项目，您现在都可以选择将 Chroma 用作 .NET 应用程序中的数据库提供程序。

    - [Chroma](https://trychroma.com/)
    - [GitHub - chroma-core/chroma: the AI-native open-source embedding database](https://github.com/chroma-core/chroma)

- **向量存储**

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

- **智能体**

  - [DeepSeek+Coze实战：10分钟快速打造一个“虚拟女友”智能体](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511831&idx=2&sn=ee411dc3b4d702a55ca946b31017652a&chksm=96c16792aa5fcc102d8b6de1e4316b441ff0e1a5476f8b91cb91e0a52b8c8dd7404e6159a873&scene=126&sessionid=1743251663#rd)
  - [打造DeepSeek最强外挂！一篇文章教会你搭建「个人知识库」（喂饭版）](https://mp.weixin.qq.com/s?__biz=MzU3OTc2OTA4OA==&mid=2247487052&idx=1&sn=403878435ef7291f8ee39e3fe99dcad4&chksm=fca988e59d4b924b6c3844ede4de0e9b3edc04823c348c31239781d3fbb30784704cd68fa46e#rd)
  - [利用ollama + RAGFlow部署千问大模型构建个人知识库AI智能体应用](https://mp.weixin.qq.com/s?__biz=MzAwMjY4NTUwNw==&mid=2247483916&idx=1&sn=7841fbe2037513c1c252b8dca33fec6b&chksm=9b95bca66564d9f0f6376c84ca6a0a69b24880a7eb473250ffa8ac6707815a33c9b67253296a#rd)

- **MCP**

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



## B. 表达式树

- **[.NET 中的表达式树（Expression Trees）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504372&idx=2&sn=bc243418b04091f4179baf1fe7cfe04a&chksm=965212cf8e05ea9ef9f7a49bdb165c34ce05247f0e2c458a99146cd9752aff4b913dca9000c9&scene=126&sessionid=1724373028#rd)**



## B. 并发迁移

- [EntityFramework Core并发迁移解决方案 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505562&idx=3&sn=9f6d974d52cf51600cd41fecda0e3d2d&chksm=968b84946255e140d2f3dea7d7c90f7364dbae537c37ff5beb8c448cbeb5dc09ad2d204b22fa&scene=126&sessionid=1727052024#rd)



## B. 并行编程

- [PLINQ vs LINQ：C#中的使用场景与性能洞察](https://mp.weixin.qq.com/s/JiJjzigo73LT96zpJ_xKSg)



## B. Blazor

- [在 Blazor 中使用 Chart.js 快速创建数据可视化图表](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511983&idx=1&sn=a7e610ae2489ae9f38033289fef4019a&chksm=969aa8c071cd786d6498c80ed7064e43fec569806947face768229c52bfcebc9b675da4606bf&scene=126&sessionid=1743556275#rd)



## C. 处理器

- [盘点.NET支持的 处理器架构 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18471374)



## C. Cache

- [.NET8 使用缓存的几种方法，你都用过吗？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507108&idx=2&sn=c941bddf0487e2a907ab74905ecfe985&chksm=965a2b444962e5e9176ebd898c2295ddae9f3feda792725b7f0edb98b04f1a26851a7bd41829&scene=126&sessionid=1730941884#rd)

- [Hello HybridCache! Streamlining Cache Management for ASP.NET Core Applications - .NET Blog](https://devblogs.microsoft.com/dotnet/hybrid-cache-is-now-ga/)

  > HybridCache 是一个新的 .NET 9 库，可通过Microsoft.Extensions.Caching.Hybrid包获取，现已普遍可用！HybridCache 因其能够利用内存和分布式缓存（如 Redis）而得名，无论应用程序的规模或复杂性如何，它都能确保数据存储和检索针对性能和安全性进行优化。



## C. 操作系统

- [.NET Bios相关数据读写 - 唐宋元明清2188 - 博客园](https://www.cnblogs.com/kybs0/p/18613343)



## C. 程序处理

- [.NET 单文件执行程序拆解器 SingleFileExtractor - 冠军 - 博客园](https://www.cnblogs.com/haogj/p/18618295)
- [C# 使用Costura.Fody插件将自己写的程序打包成一个可以独立运行的EXE文件 - 多见多闻 - 博客园](https://www.cnblogs.com/guangzhiruijie/p/17143563.html)



## C. 程序交互

- [C# WinForms 中嵌入 EXE 程序 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506243&idx=2&sn=2a5fdec6674999242b6444217f4b2e96&chksm=965e96053f14e7b05ddc9eb08c9c20a323da4ad934ee096f98ab77e9cfa2ba229efd81a3d3e1&scene=126&sessionid=1728867433#rd)

- [在网页上调起本机C#程序 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18546412)

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

- **关键字**
  - [C# 关键字 | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/)
  - [C# 中比较实用的关键字，基础高频面试题！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511601&idx=1&sn=974ec95cb0f1b247b3ecdefefb98cafb&chksm=9622bb281f2819596c3c6a359f1e0d5e5514db2f4be74afff720cc9769f94715fcb0fa43ec00&scene=126&sessionid=1742433141#rd)
  - [C#关键字：in、out、ref、in T、out T、[In\]、[Out]这些你都知道多少？ - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18821383)
  - **yield**
    - [yield 语句 - 在迭代器中提供下一个元素 - C# reference | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/statements/yield)
    - [C#使用yield关键字提升迭代性能与效率](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509674&idx=1&sn=a8937987adadf6542a1397ac0839dfc2&chksm=96921ecd6c8e491b48bc41d5650fa34aee43d05535e81d8a77a1b59b71ddb4d709e568c3fbce&scene=126&sessionid=1737511894#rd)
  - **as/is**
    - [C# as 和 is 运算符区别和用法](https://mp.weixin.qq.com/s/s880U7ea-N2Xl_3krgyjxA)
    - [c# is 和 as 浅看重制版 - 敖毛毛 - 博客园](https://www.cnblogs.com/aoximin/p/18572890)

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

- **WinForms**

  - [.NET 阻止Windows关机以及阻止失败的一些原因 - 唐宋元明清2188 - 博客园](https://www.cnblogs.com/kybs0/p/18822799)

    > 本文主要介绍Windows在关闭时，如何正确、可靠的阻止系统关机以及关机前执行相应业务Windows关机，默认会给应用几s的关闭时间，但有一些场景需要在关机/重启前执行更长时间的业务逻辑，确保下次开机时数据的一致性以及可靠性。

- **配置文件**
  - [理解.NET Core中的配置Configuration - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18831900)
  - [.NET Core中的配置Configuration实战 - caoruipeng - 博客园](https://www.cnblogs.com/caoruipeng/p/18842001)

- **跨平台（.NET Core&.NET 5及以上）**
  - [dotnet 9 通过 AppHostRelativeDotNet 指定自定义的运行时路径 - lindexi - 博客园](https://www.cnblogs.com/lindexi/p/18847625)

- **线程/多线程**

  - [C# 线程安全集合 Concurrent](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513473&idx=2&sn=19ee186ca47c34bea86e660d0e18e1aa&chksm=96f868e8dcfc79ac8778e48643d518a75485039b6208d31251f19a9aa20a9701ac8490b63c72&scene=126&sessionid=1746665735#rd)





## D. DotNet相关书籍

- **[C#/.NET/.NET Core推荐学习书籍](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503703&idx=1&sn=4edf28a7e525e77ff6f785ede7e25fc0&chksm=96ca7c9e4e99ef9d52acf599be40c5f36bbba002536879f01a1dc8204f2152d4424877093c03&scene=126&sessionid=1722818981#rd)**
- [C#/.NET/.NET Core推荐学习书籍（25年1月更新）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509208&idx=1&sn=f9ae4917a366f00cf56f93e46b138285&chksm=96aca5713a19e1a1f73830bdf44fba275d9ee3c2eea8ea3f7245d5488a714866a17a24fe5f2b&scene=126&sessionid=1736902610#rd)



## D. DotNet深入理解/一探究竟

- [提升.NET性能：深入理解.NET中的Span与Substring (qq.com)](https://mp.weixin.qq.com/s/zufKoMoo-Z41W6wAR9nklw)
- [.NET掌握 LINQ 神器：揭秘 AsEnumerable、DefaultIfEmpty 和 Empty 的真正用法 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504940&idx=3&sn=9d80e7ac52959dddd3ff8d9620a7bb48&chksm=9621db62ce5d56498e0eabb91db24dcfe25baf9bafdb80d602c1a3fd1ecd115942f7ec6a69e3&scene=126&sessionid=1725930428#rd)
- [2024年各编程语言运行100万个并发任务需要多少内存？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507837&idx=3&sn=f4ea3d7d4896ca06c11996116c9cdd88&chksm=96a3c34dedb89d53b0df04751dc66a39e65d0f7e6f5c5cba2734ca4ff5fb7f5e14c633b8e7f9&scene=126&sessionid=1733100642#rd)
- 



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
- 



## D. Docker

- [制作一个龙芯旧世界的 dotnet sdk docker 镜像](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507032&idx=2&sn=e9328e342ac2ec008ea487e0121f230e&chksm=964cb28543e36b499e93f23379aa75ccf0d0ec015c5cd71de75e42ff715337c99238ca44acde&scene=126&sessionid=1730854499#rd)



## D. .NET Aspire

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



## D. .NET Roslyn

- [.NET Roslyn快速上手指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507619&idx=2&sn=eb2891f7a532af40b54a3b490d2a6ec5&chksm=96cbde3ca6f9e7ec67723537a20e9724151fb43cf98224d2e67c09ea63a8f2480b80e16a2e82&scene=126&sessionid=1731977097#rd)



## D. .NET 源代码生成器

- [.NET 源代码生成器分析器入门](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511778&idx=2&sn=3276f2cbc07d5445a165890c32c768e0&chksm=966607fd2fd49ad4992c225ea1691b9ca518df93ad4c83fb6acfdadcdb5178d7b21ea81d180c&scene=126&sessionid=1742863576#rd)

- [C# - 获取枚举描述 - 使用增量源生成器 - Broadm - 博客园](https://www.cnblogs.com/broadm/p/18786843)

  > C# 获取枚举描述的方法有很多, 常用的有通过 DescriptionAttribute 反射获取, 进阶的可以加上缓存机制, 减少反射的开销。今天我们还提供一种更加高效的方法,通过增量源生成器生成获取枚举描述的代码。这是在编译层面实现的, 无需反射, 性能更高。



## D. 动态方法及热执行

- [.NET 创建动态方法方案及 Natasha V9 - AzulX - 博客园](https://www.cnblogs.com/NMSLanX/p/18299481)



## D. 代码重构

- [C#重构代码的8种基本方法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511652&idx=2&sn=9ef9a8afa9cd9d35d178176c30bdaa87&chksm=96cc09e69028b00979375344262f3e55da4f1e042d4bb03f8bb0c4ba4b00a2b37d64bc700a5d&scene=126&sessionid=1742648517#rd)



## E. EF Core

- [EF Core性能优化技巧 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505738&idx=2&sn=dc50a02eaf3ee079e36fcd0695f45967&chksm=96f1ea970730513276167a853948d633d7df39f1e58b62e006453a01f17e5096d071dc0e4c68&scene=126&sessionid=1727138667#rd)
- [分享几个实用且高效的EF Core扩展类库，提高开发效率！ (qq.com)](https://mp.weixin.qq.com/s/ld_eQYPa7kitTak93QOjKA)
- [EF Core 10 现已支持 LeftJoin 和 RightJoin 运算符查询了！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513157&idx=1&sn=789d87d82f284ea7be16c31a811c2be6&chksm=96c73758787eabee7dc19ae6252b3f4d9b20a1514cabc10ea5e24e9875b94cd701640db20d85&scene=126&sessionid=1745886966#rd)
- **MySQL**
  - [在 .NET 中将 EF Core 升级到 9.0.5 MySQL 连接提示 get_LockReleaseBehavior](https://mp.weixin.qq.com/s/QjztDCuuy49xsi6GpyE1wA)




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
- [.NET 的全新低延时高吞吐自适应 GC - Satori GC](https://mp.weixin.qq.com/s/Wu0QUjUkLTRY_J1NV7a54g)



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



## H. Http/Https

- [字节校招一面：聊聊https 原理 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505852&idx=4&sn=4079b24a04b49f05ab531febe96f3836&chksm=965a2837b724b7e95a6d62614dee9823029798dd7abbb276e1dbd48b84dfc97d10fee610eafe&scene=126&sessionid=1727311494#rd)



## H. 绘图

- [不可不知的WPF转换（Transform） (qq.com)](https://mp.weixin.qq.com/s/JnO75kpoPwpWuDmTtYQWCg)



## H. 缓存

- [如何用 Redis 构建一个简单的聊天应用？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509096&idx=2&sn=c134137263824c9f648815b76c51768e&chksm=965cc2c30db1505be25e0a0fb1e6d5f5ff49c26b0f31524898ed07dcca9a79c2354a9bfef48e&scene=126&sessionid=1736503976#rd)
- [.NET Core 中如何实现缓存的预热？ - 代码拾光 - 博客园](https://www.cnblogs.com/liyongqiang-cc/p/18737994)
- [C# 使用StackExchange.Redis实现分布式锁的两种方式 - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/18849019)
- **Redis**
  - [腾讯二面：王者荣耀亿级排行榜，如何设计？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513382&idx=2&sn=cf2370734d904f85da8f0187f878e90b&chksm=9671d9396129297e85689a9f587d3a0953d3db8a9d1aa83ec93a5d24b4dcc5cddcc3d9dfcef3&scene=126&sessionid=1746578976#rd)




## I. IDE

- [2024 年开发人员 13 款常用 IDE 合集 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505978&idx=3&sn=5594c32e615e9bc6857ff44b28247de1&chksm=9619cf51152401be6ae00b3b8dd4d65de75bdb905ab398e0b4b43a43fc1db5d64df2c3b4b0ab&scene=126&sessionid=1728350900#rd)
- [Visual Studio 2022：一个功能全面且强大的IDE](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506943&idx=2&sn=afbcf31b8a2b7226331f01325d5ae50f&chksm=96df3bff7167bddc1ce2c85987b3d6f7f7f7a58c04b40e8b77f0e25f690013e5a22522327664&scene=126&sessionid=1730641491#rd)
- [.NET开发者福音：JetBrains官方宣布 Rider 非商用免费开放！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506917&idx=1&sn=ffed439630d58f7313433659beb98851&chksm=965e8c15b0953e31d36f4daa5dd0ead5c76646c20b817a83315087f21f50a2dd93574c8a7c58&scene=126&sessionid=1730641491#rd)
- [WebStorm：一款专为Web应用程序开发而设计功能强大的IDE](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507021&idx=3&sn=dcaede3cd92887e36223274f028b1a9e&chksm=969390cc0b79c67b078347b62fce76ed0d7524e11d8d9ac6dd9c47cf3d9923c6e46f2b78d5d4&scene=126&sessionid=1730681837#rd)
- [基于 C# 编写的 Visual Studio 文件编码显示与修改扩展插件](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508023&idx=1&sn=2b93845e99c0943b6e9451dfde463bb1&chksm=9693ad2f6af9208cdcdf45422fe56fdd1242cf6929cb726801a729c2651067512ae95a04df16&scene=126&sessionid=1733445770#rd)




## I. IoT

- [用纯.NET开发并制作一个智能桌面机器人（一）：从.NET IoT入门开始](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509201&idx=2&sn=13350fb3111413fb74075085d5f30baf&chksm=96c64a7ad436070bc9e93592318df9b4d6ea561e100f28b1659ac08554a7a250f592212796d3&scene=126&sessionid=1736817137#rd)
- [用纯.NET开发并制作一个智能桌面机器人（二）：用.NET IoT库编写驱动控制两个屏幕](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509238&idx=2&sn=1cf2374ba0ff0888a5c142f42d910bd2&chksm=96edee3537b01043660d600fa22a38ddf847ae3f61ea0d98ead82f03ebeb2726956dbc561997&scene=126&sessionid=1736991133#rd)
- [用.NET IoT库控制舵机并多方法播放表情](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510211&idx=3&sn=8426bea5d858d360612a2b8e637cb17a&chksm=9665939efc81c9282e061f50614860298651c4c7c227a406078c1a117fa1f0c2028bfdf36604&scene=126&sessionid=1739414680#rd)
- [互联网不景气了那就玩玩嵌入式吧，用纯.NET开发并制作一个智能桌面机器人（四）：结合BotSharp智能体框架开发语音交互 - 绿荫阿广 - 博客园](https://www.cnblogs.com/GreenShade/p/18771608)



## J. 集成JavaScript

.NET 应用集成 JavaScript

- [在 .NET 应用程序中运行 JavaScript (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504786&idx=3&sn=2df895dc80f29ccc174eb198a8d58c77&chksm=960753bf29a448d2cb287ddd6cf6accded7a47b645ffc58db129ddf0fcd74a01b8d8d5cb1410&scene=126&sessionid=1725842446#rd)



## J. JavaScript

- [2024年前端明星项目出炉，又是它！](https://mp.weixin.qq.com/s?__biz=MzU2MTIyNDUwMA==&mid=2247531750&idx=1&sn=b33a1833b38bb4667d8033a1ecd65f46&chksm=fc7e32bdcb09bbab4e50565de898002ea1c982fbc2d3da4a0ca03b2d45adba444092047d7615#rd)



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



## K. 对象拷贝

  - [C# WPF中实现深拷贝的五种方式 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505156&idx=4&sn=cbd80bc959054e10d6d6ee6cd829df2b&chksm=96b04c00fe153aa7f033a61862aaaf1674e679a24ef1053bf56c400baaa4080405af70054752&scene=126&sessionid=1726188991#rd)



## K. 跨平台

- [基于XAML框架和跨平台项目架构设计的深入技术分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507161&idx=2&sn=7c9f9999d90464daeb54a5b278cc7bb4&chksm=966085546f6c6421766cbe5ce0d8b45840e1a66cafdbe11553ee10f88b3110400f292d6a0944&scene=126&sessionid=1731206998#rd)

- **Avalonia**
  
  - [Avalonia Docs | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/)
    - [Canvas 画布控件 | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/docs/reference/controls/canvas)
    - [Flyout 弹出层 | Avalonia Docs](https://docs.avaloniaui.net/zh-Hans/docs/reference/controls/flyouts)
  - [Avalonia使用XML文件实现国际化](https://mp.weixin.qq.com/s/LYO3YQNocsEUbQFsGglEVw)
  - **打印相关**
    - [GitHub - Oaz/AvaloniaUI.PrintToPDF: Create PDF documents from Avalonia UI visuals](https://github.com/Oaz/AvaloniaUI.PrintToPDF)
    - [Printing and printing dialog · AvaloniaUI/Avalonia · Discussion #7454 · GitHub](https://github.com/AvaloniaUI/Avalonia/discussions/7454)
  
- **MAUI**

  - [.NET MAUI Performance Features in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-9-performance-improvements-in-dotnet-maui/)

    > .NET 多平台应用 UI （.NET MAUI） 随着每个版本的发展而不断发展，.NET 9 将重点放在剪裁和新的受支持运行时上：NativeAOT。这些功能可以帮助您减小应用程序大小、缩短启动时间，并确保您的应用程序在各种平台上平稳运行。希望优化其 .NET MAUI 应用程序的开发人员和 NuGet 包作者都能够在 .NET 9 中利用这些功能。




## K. 开发者社区

- [推荐一些程序员常逛的开发者社区](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509965&idx=1&sn=8189e0b4581d8688ac75742ec6ea8c31&chksm=9652f402587252860fb0aabb8ffdef0b247935928505796eb5d22a3b072e50b1414d2407bc85&scene=126&sessionid=1738974305#rd)




## L. 领域驱动设计

- **[关于领域驱动设计，大家都理解错了](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504335&idx=2&sn=89582397a7fbe2899f5bd0d4501a3880&chksm=962fbd6a2ce8ed32d03b850efd2123b6282fcaeb1a2c22594ec07ef6111200e302733fa15846&scene=126&sessionid=1724028274#rd)**
- **[学习真DDD的最佳路径 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504456&idx=2&sn=6d623fc83132a7d34ce6b7fc1f1de5f4&chksm=96433cbda9cb8470732b85b8bd3462969a930bd136cc6297780421f443fb78cee3c592255121&scene=126&sessionid=1724720195#rd)**
- **[这是DDD建模最难的部分（其实很简单） (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504581&idx=3&sn=14550521de2a00877f4cfdce0c211fca&chksm=96453ff6e7d6c9e810d660126abd0b1b878b8aca18a57be7ff9988f461a81489f3e175c8f75e&scene=126&sessionid=1725109614#rd)**
- [.NET面试一上来就问DDD相关问题?直接崩溃 (qq.com)](https://mp.weixin.qq.com/s/oJ_xBW-ezEJGqm1nEnXAHw)



## L. 类库推荐

- [精选10款C#/.NET开发必备类库（含使用教程），工作效率提升利器！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507960&idx=1&sn=58aad693c96948548681175bcb06064f&chksm=96bc77fc24687ebde647aa9ec32b0f6ae52e6c26534751cbc0d26df0f0ba1a9af481c91634e4&scene=126&sessionid=1733275028#rd)



## M. MAC工具

- [一个免费开发者工具箱 100+ 实用小工具合集 (Mac / 离线使用)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507837&idx=4&sn=7a9d3559adc2cb50ab47e721e8666ac3&chksm=965fe6fc5123a49e501dd9e5f4545a3f39bb8988ff1c4b23bea6e0295f22bcc8d94f56c76d68&scene=126&sessionid=1733100642#rd)



## M. MQ

- [基于.NET8.0实现RabbitMQ的Publish/Subscribe发布订阅以及死信队列 - sq1201 - 博客园](https://www.cnblogs.com/sq1201/p/18661294)



## M. Modbus

- [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18411953)
- [RS485与ModbusRTU - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18406808)
- [ModbusRTU通信协议报文剖析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18430033)
- [ModbusTCP通信协议分析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18442108)
- **工具**
  - [MTing(modbus调试工具的使用） - 杰瑞鼠 - 博客园](https://www.cnblogs.com/jieruishu/p/13998997.html)



## M. Markdown编辑器

- [NanUI for Winform 使用示例【第二集】——做一个所见即所得的Markdown编辑器 - 林选臣 - 博客园](https://www.cnblogs.com/linxuanchen/p/5579053.html)



## M. MS Build

- [Join the .NET & C# Teams at Microsoft Build 2025 - .NET Blog](https://devblogs.microsoft.com/dotnet/join-us-at-build-2025/)

  > 微软 Build 2025 的倒计时已经开始！呼吁所有.NET 开发者：准备好享受令人兴奋的.NET 和 C#内容。无论你是经验丰富的老手还是初学者，这里都有适合每个人的内容可以深入探索和享受。不要错过这次学习并与.NET 和微软社区其他成员建立联系的机会。



## N. NuGet

- [Dramatically faster package restores with .NET 9's new NuGet resolver - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet-9-nuget-resolver/)
- [GitHub - NMSAzulX/Jester.Tools.Nuget: NUGET 发布工具](https://github.com/NMSAzulX/Jester.Tools.Nuget)
  - [基于 .NET 的 Nuget 发版工具 - AzulX - 博客园](https://www.cnblogs.com/NMSLanX/p/18596061)
- [开发一个现代化的.NetCore控制台程序，包含依赖注入/配置/日志等要素](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488504&idx=1&sn=2950fd0d825959979bdf87885ee6092d&chksm=eb30f9f9dc4770efe6319e59b6971c131845a8181eb2a1d24de85e49eee836f29e3cfe7d84fc&cur_album_id=3187591423672598541&scene=189#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(2)创建一个C#项目模板](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488517&idx=1&sn=6daf6e2a2fba72fba54cb85992165984&chksm=eb30fe04dc477712b594c4684ae6dc3bb02ac4beb543b1158f81f53f7394afbe8d8134e53187&cur_album_id=3187591423672598541&scene=189#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(3)将nuget包发布到GitHubPackages](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488524&idx=1&sn=5486ad3fa938a957ddbfbbe26c85fb71&scene=21#wechat_redirect)
- [开发现代化的.NetCore控制台程序：(4)使用GithubAction自动构建以及发布nuget包](https://mp.weixin.qq.com/s?__biz=MzI3MjQ5ODU0Mg==&mid=2247488535&idx=1&sn=6cf5ed7adc41bf1b51f06f56aac7b795&scene=21#wechat_redirect)



## N. NativeAOT

- [用 .NET NativeAOT 构建完全 distroless 的静态链接应用](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512129&idx=2&sn=d0cc25cdec53990780efe80e044cd57b&chksm=9613f1c3b83bde7b7b0d4f1c7728a37100780399a00dc5d9fee311438113178be617324b8c8d&scene=126&sessionid=1744074032#rd)



## O. ORM

- [企业应用开发中.NET ORM EF常用哪种模式？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511234&idx=1&sn=0d31d806101a3394b2547a2800000a95&chksm=963cde7e775d584ebdbca94779608ba5592a5dae952fcf5e3c9f0f6d24debf0ea4a43a892255&scene=126&sessionid=1741828329#rd)
- [16个值得推荐的.NET ORM框架](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247493672&idx=1&sn=5105ef0a229e3fbc9caf0f8fae0d99bb&scene=21#wechat_redirect)
- [.NET使用EF批量插入数据，一行代码性能飙升！ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504974&idx=4&sn=0cab188b357b4b8128001df03fcc7ebc&chksm=965f9b55822ce4318fd4b1cbcf0ef2085c56866f6aa2c12c25587dd4c8c665f835e4c5651b2b&scene=126&sessionid=1726016076#rd)
- **SQLSugar**
  - [SQLSugar 支持 TDengine 超级表的使用指南 - 阿妮亚 - 博客园](https://www.cnblogs.com/sunkaixuan/p/18740748)
  - [C# Winform使用SqlSugar操作数据库?](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506447&idx=3&sn=0753b2089b4ffcea93748bcea8a56ddf&chksm=9688e655f6fc8c7449c2478f15226ea8a18f8065671fe8315197484b03b41e9db938aadd6dac&scene=126&sessionid=1729645767#rd)
  - [在SqlSugar的开发框架中增加对低代码EAV模型（实体-属性-值）的WebAPI实现支持 - 伍华聪 - 博客园](https://www.cnblogs.com/wuhuacong/p/18842471)
- **EF**
  - [排查 EF 保存数据时提示：Validation failed for one or more entities 的问题](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512130&idx=2&sn=0ac825298ffb340ea57c09659909990c&chksm=964373b1d118b0b799a45b822e3f6231e3af693f1fa9d73debcd3a7cbc43d6cf43b53979a290&scene=126&sessionid=1744159839#rd)

- **ShadowSql**
  - [ShadowSql之.net sql拼写神器 - xiangji - 博客园](https://www.cnblogs.com/xiangji/p/18806891)




## O. OpenAPI 文档

- [OpenAPI document generation in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/dotnet9-openapi/)
- [.NET9 - Swagger平替Scalar详解（四） - IT规划师 - 博客园](https://www.cnblogs.com/hugogoos/p/18571088)
- [在 .NET 9 中使用 Scalar 替代 Swagger](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509096&idx=1&sn=0c8a8a84fe1c1e6bb81f4965f89b5561&chksm=9658299e4b41db48949c3406c88ec364cfb3366fad437401718182f0ef07b6a4b91d8a162558&scene=126&sessionid=1736503976#rd)



## O. OCR

- [PP-OCRv5 C++封装DLL C#调用源码分享](https://mp.weixin.qq.com/s/WpBpIA3klxHsRO5WTdq-6g)



## P. PDF处理

- [用C#写个PDF批量合并工具简化日常工作 (qq.com)](https://mp.weixin.qq.com/s/MW5HFdu3jJTJ6TMpa36tXw)



## P. P/Invoke

- [用 .NET NativeAOT 构建完全 distroless 的静态链接应用](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512129&idx=2&sn=d0cc25cdec53990780efe80e044cd57b&chksm=9613f1c3b83bde7b7b0d4f1c7728a37100780399a00dc5d9fee311438113178be617324b8c8d&scene=126&sessionid=1744074032#rd)



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



## S. 设计模式

- **[C#设计模式入门实战教程 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504631&idx=1&sn=b3863c36fb24a122ff940c29fbadef3f&chksm=96cda7694782eb203a0c8106c853382ce18bd4a278f0cab9f783b43de86e881cab0a03e75194&scene=126&sessionid=1725325808#rd)**
- **[Design-Pattern](https://github.com/sheng-jie/Design-Pattern)**
- [C# 单例模式的多种实现](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507055&idx=1&sn=1d41b78f1a1fd2fba366b431f5bf7554&chksm=964eed429a18bfa8d4c1448a7f1e732ce9fe18d19cb6775c8ce289fc308e5703f15444961c33&scene=126&sessionid=1730854499#rd)
- [C# 常用设计模式](https://refactoringguru.cn/design-patterns/csharp)
  - [创建型设计模式](https://refactoringguru.cn/design-patterns/creational-patterns)
  - [结构型设计模式](https://refactoringguru.cn/design-patterns/structural-patterns)
  - [行为型设计模式](https://refactoringguru.cn/design-patterns/behavioral-patterns)

- [面试官问：你知道 C# 单例模式有哪几种常用的实现方式？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511924&idx=1&sn=b4d53d7459088905774f7d439b0b90cd&chksm=96d9a5e2142aadcf153be09f879697f9b8406c20741466db47f8f1b2d6e86ae78b93902732bf&scene=126&sessionid=1743383083#rd)




## S. 算法

- **[C#数据结构与算法实战入门指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504120&idx=1&sn=f6ec4f6aed0384c7e3c579055b03e373&chksm=96f5f8948099076cba2ad627440c18d8cd6edad150141489ce539824976feba23f79c3356e42&scene=126&sessionid=1723594895#rd)**
- **[一个开源免费的数据结构与算法入门教程（支持C#，Python，Java,，C++，C，JS等多门语言）](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504230&idx=2&sn=7914bc447cd6ebd2d3cf94cdfa38b677&chksm=96a2cdaad48264c3e99514304831b9c7718d7ef714849659664d4b0e76ad66612b9423dd52dc&scene=126&sessionid=1723899633#rd)**
- **[C#二叉搜索树算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504335&idx=1&sn=1858eca8bbdcedfab5f79afaf97f3a23&chksm=96e823146a881baa312a1c7a9f319a78e6a23ab59fd5f60ceff451892ca1ec949fd8f051fc16&scene=126&sessionid=1724028274#rd)**
- [C#二分查找算法 (qq.com)](https://mp.weixin.qq.com/s/uCuqv0zOI0ZsF48Q1LoCsQ)
- [C#线性查找算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506400&idx=1&sn=86b6d62d8a5e5dd7d471c9fed09f4ec7&chksm=966f80281d1a62e91fa852b80f9a5d19da12b4c2ae8e90200f6900bb25ed03e252bb5ff8ed52&scene=126&sessionid=1729472376#rd)
- [C#常见的四种经典查找算法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506487&idx=1&sn=1634458d183be227654041955650f589&chksm=963e5ef24916873fe3c280b7d0d2ebfcfb2a9eee677477d3370a2b8b6685376053cf5625372c&scene=126&sessionid=1729731769#rd)
- [C# 入门深度学习：万字长文讲解微积分和梯度下降 - 痴者工良 - 博客园](https://www.cnblogs.com/whuanle/p/18551532)
- [C#数据结构与算法入门实战指南](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509250&idx=1&sn=cb8731ebdaa58bd8c4f806f98f54095e&chksm=963084919c7a803862e1742186164f928784b339fdd0fd75a23ccc9cc3a634240c4052cab510&scene=126&sessionid=1737075474#rd)



## S. 数据库

- [SQL 语句是怎么执行的？](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509250&idx=2&sn=ce8452644560fe8cb6e06d37ec0fa542&chksm=9696f9c5eae9ef7808109b08ec747104a11e4db6994893c38ad5d8e48de5d76b5833ff467c2b&scene=126&sessionid=1737075474#rd)
- [面试官：数据库的隔离是什么意思？ (qq.com)](https://mp.weixin.qq.com/s/lGCBVqLrn1gsih9PEOYbgg)
- [.NET NoSQL 嵌入式数据库 LiteDB 使用教程 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505978&idx=1&sn=552db3bbf80f7840188518b5f1ee947b&scene=21#wechat_redirect)
- [工作面试必备：SQL 中的各种连接 JOIN 的区别总结！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511537&idx=1&sn=9acaa59e433339ca24c159ef452d5825&chksm=96a05a9380059117e5ccd4ab46999ea33c07ca29119a68b96ca747abe84dc84f051449672360&scene=126&sessionid=1742173108#rd)
- [ADO.NET中SQL绑定变量方式总结 - Eric zhou - 博客园](https://www.cnblogs.com/tianqing/p/18774515)
- **关系型数据库**
  - **SQL Server**
    - [微软正式发布 SQL Server 2025 公开预览版，深度集成AI功能](https://mp.weixin.qq.com/s/eS6CR6X1TMy5H6YAnT1zxA)
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



## S. 设计方案/架构

- [全网最全商品模型设计方案，不接受反驳！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507620&idx=3&sn=86a9c83d099bd355882d3e80e1e5d70b&chksm=96bcb2981364f77c12df105317adbb4cbf4f96b181169476c0e964145a0137627697d166e1d9&scene=126&sessionid=1732063903#rd)
- [如何设计一个可扩展的系统](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507622&idx=3&sn=981e9058437854420dccd62bc913f04d&chksm=96476e1a50363e91aee88876337b832fcb918d8fcd1f895cdad616438378315b2fef9948fb95&scene=126&sessionid=1732151313#rd)



## S. 上位机开发

- [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xiketangedu/p/18411953)



## S. 深度学习

- [C# 深度学习：对抗生成网络(GAN)训练头像生成模型 - 痴者工良 - 博客园](https://www.cnblogs.com/whuanle/p/18708861)

  > 本教程将通过一个示例介绍生成对抗网络(DCGAN)，在教程中，我们将训练一个生成对抗网络 (GAN) 模型来生成新的名人头像。这里的大部分代码来自 pytorch/examples 中的 DCGAN 实现，然后笔者通过 C# 移植了代码实现，本文档将对该实现进行详尽的解释，并阐明该模型的工作原理和原因，阅读本文不需要 GAN 的基础知识，原理部分比较难理解，不用将精力放在这上面，主要是根据代码思路走一遍即可。



## S. 数据处理

- [一次小而美的重构：使用 C# 在 Avalonia 中生成真正好看的词云 - 程序设计实验室 - 博客园](https://www.cnblogs.com/deali/p/18848662)
- [一次小而美的重构：使用 C# 在 Avalonia 中生成真正好看的词云](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513659&idx=2&sn=a3e9f2e198520ecf1cedb117f455b0f0&chksm=9630c704003ece007595bf21309b3ed32513be0ca0f1878665a4c5cf3b153f91e5fef9918f9d&scene=126&sessionid=1747273204#rd)



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

- **Linux**
  - [Linux系列：如何用perf跟踪.NET程序的mmap泄露](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513637&idx=2&sn=704192970b9ecf59cbf98f0f522abf60&chksm=96e503a4f971e4b62a9b42caff6ad2f083a0e7598357da3e9a513b362b90b85cfc50799c5e33&scene=126&sessionid=1747097371#rd)
  
- **WinDbg**
  - https://mp.weixin.qq.com/s/kBvYQdV3tHnDurtwNmQaeg
  
  - [聊一聊坑人的 C# MySql.Data SDK](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508735&idx=2&sn=e6ee65ae3cfd5047e13de82921893864&chksm=96ca138cf796af2d74368f9c76b2d4f1643f32bce38be8869604dfe9dc3167a16778c88ae1ee&scene=126&sessionid=1734914402#rd)
  
  - [聊一聊 C#前台线程 如何阻塞程序退出 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18622015)
  
  - **内存暴涨问题分析**
    - [使用Visual Studio分析.NET Dump，快速排查内存泄漏问题！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247507622&idx=1&sn=4e1ea321ea7bb0625df3b4096bdfa5f0&chksm=96d1669d120b169df8689bd1148063e2769206a4b539cd97b054002d2b2b27d04647013368fc&scene=126&sessionid=1732151313#rd)
    - [.NET开发必备技巧：使用Visual Studio分析.NET Dump，快速查找程序内存泄漏问题！ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504555&idx=1&sn=aa0780c9fd33e8d32601db2781cd4225&chksm=965ce7cf5f928550647ab8488e6f3dc088fea8d36ce935ed08d410bb49e0b6c77b86b2729275&scene=126&sessionid=1724978463#rd)
    - [记一次 .NET某数字化协同管理系统 内存暴涨分析 - 一线码农 - 博客园](https://www.cnblogs.com/huangxincheng/p/18681199)
    
  - **程序卡死问题分析**
    - [一个超经典WinForm,WPF卡死问题的终极反思](https://mp.weixin.qq.com/s/OFhf0rtbo9XdbcesD67j_Q)
    
  - **CPU爆高分析（程序卡慢）**
    - [记一次 .NET某云HIS系统 CPU爆高分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512298&idx=2&sn=e1ccdce6d06717d42e84943d265fe24e&chksm=9696f438e862718e435d26950927b18e821e71e4eb36131a076404bd9c4416647375f68755b7&scene=126&sessionid=1744506245#rd)
    
    - [记一次 .NET某固高运动卡测试 卡慢分析](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512493&idx=2&sn=36fcace87427e4ee263c0b808f522caa&chksm=9626507cb3c9cd47ec6cc470ff8358295bf92fdca02ee03e34fc235036b6ebbcbe6ef5b7af8e&scene=126&sessionid=1745155285#rd)
    
    - [WinDbg 分析 .NET Dump 线程锁问题 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18894206)
    
      > 在定位 .NET 应用程序中的高 CPU 占用问题时，WinDbg 是非常强大的工具之一，尤其配合 SOS 扩展使用可以快速锁定“忙线程”或死锁等问题。本文将基于一次实际的分析流程，演示如何一步步定位由线程锁引起的 CPU 高占用。



## T. Thread(线程)

- [C# ThreadLocal (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505970&idx=4&sn=ae7c25e55789bdc044588cc03c5b7f87&chksm=969c42e7ecd48edbd9697dc707cb35552edfb9a8ae7d1a471ef2e4d0ac1d0d6878a2a31cb791&scene=126&sessionid=1728380451#rd)

- [.NET Core 线程(Thread)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18556052)

- [.NET Core 线程池(ThreadPool)底层原理浅谈 - 叫我安不理 - 博客园](https://www.cnblogs.com/lmy5215006/p/18566995)

- [C#线程池核心技术：从原理到高效调优的实用指南 - AI·NET极客圈 - 博客园](https://www.cnblogs.com/code-daily/p/18886677)

  > 在现代软件开发中，多线程编程是提升应用程序性能的关键手段。随着多核处理器的普及，合理利用并发能力已成为开发者的重要课题。然而，线程的创建和销毁是一个昂贵的过程，涉及系统资源的分配与回收，频繁操作会导致性能瓶颈。线程池应运而生，通过预先创建并重用线程，线程池不仅降低了线程管理的开销，还能有效控制并发线程数量，避免资源耗尽。线程池（Thread Pool）作为多线程编程中的核心技术之一，它通过管理一组预创建的线程来执行任务，有效减少线程创建和销毁的开销，提升应用程序的性能和响应能力。在 .NET 中，System.Threading.ThreadPool 类为开发者提供了一个托管线程池，内置于 CLR（公共语言运行时）之中。它支持任务的异步执行、线程数量的动态调整以及状态监控，成为多线程编程的基础设施。无论是处理 Web 请求、执行后台任务，还是进行并行计算，线程池都能显著提升效率。

- **多线程**
  - [C#实现多线程的几种方式 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247500224&idx=1&sn=a5d21a0b42e61f317fc8eaa4168a0ac2&scene=21#wechat_redirect)
  
  - [【译】让多线程调试更有意义 - MeteorSeed - 博客园](https://www.cnblogs.com/MeteorSeed/p/18846145)
  
    > 调试复杂的程序常常感觉像是在迷宫般的线程和堆栈跟踪中跳转。理解线程行为和跟踪问题的挑战可能令人生畏，这会导致更长的开发时间和更大的挫败感。但是现在，有一个解决方案可以简化这个过程——在 Visual Studio 的并行堆栈窗口中引入 AI 驱动的线程摘要。
  
- **线程锁**
  
  - **[探索C#中的多线程神器Monitor和Lock](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504171&idx=2&sn=49befd777d9818ff124db42ebe7e1fac&chksm=96338dd7700e9bf2c00c4baee847b07f9855d33dd075bf1b49f64463396ac472940d5a014fac&scene=126&sessionid=1723768329#rd)**
  
- **线程同步**
  - [C# Barrier进行多线程同步](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504737&idx=3&sn=d33d01d45e30fae85a0b4d6cf1b65b0e&chksm=9699f872d98ed7d09a6c2b0c7bd87bc64180cdf54950e6f0ca1a9b851a7d9c15ae4fd1ea2a8b&scene=126&sessionid=1725718515#rd)
  
- **异步**
  - [聊一聊 C#异步 任务延续的三种底层玩法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247509099&idx=2&sn=64514f54589397a27a9c95a9e78cde16&chksm=9644e747e4c46599bad92880716fbf8b6f15809c94000de722730b42fdaa210398d06bd028b7&scene=126&sessionid=1736503976#rd)
  - [探索C#中的ValueTask，高性能异步编程新宠？](https://mp.weixin.qq.com/s/njPHOXSDEamXJIlbZvbdHA)
  - [C#实现异步编程的常用的5种方式总结 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505725&idx=4&sn=97da5b2d1c1a69e1aed42490510a99c0&chksm=96cb132a1d25fd1faf8c9ab5dd073c425b8f95daf6920ca94030480c25d12a2b76d7dee34bf1&scene=126&sessionid=1727052024#rd)
  - [.NET异步有多少种实现方式？（异步编程提高系统性能、改善用户体验） (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247500438&idx=1&sn=7295d2cdb1e68ce8abaf182058d3e61e&scene=21#wechat_redirect)
  - [C#中 Task 结合 CancellationTokenSource的妙用 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18620273)
  - [Invoking Async Power: What Awaits WinForms in .NET 9 - .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-winforms-async-apis/)
  
- **并发**
  - [后端思维之高并发处理方案](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247511947&idx=2&sn=b78f6ed86f43a99b792a6b009afdac50&chksm=96a5e705d99f22190c90847642318a11162db99581a0d38133834303d5e19297533b48cec601&scene=126&sessionid=1743469108#rd)





## T. 通信

- **ModBus**
  - [零基础学习Modbus通信协议 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18411953)
  - [C#轻松实现Modbus通信 - 付工上位机 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xiketangedu/p/18461727)
  - [ModbusRTU通信协议报文剖析 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18430033)
- **Socket**
  - [c#构建具有用户认证与管理的socks5代理服务端 - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/17410319.html)
  - [c#开发完整的Socks5代理客户端与服务端——客户端（已完结） - BruceNeter - 博客园](https://www.cnblogs.com/qwqwQAQ/p/18867762)
  - [SuperSocket 2.0 的发布标志着.NET Socket 服务器框架迈入了一个全新的时代 - 张善友 - 博客园](https://www.cnblogs.com/shanyou/p/18894166)
    - [Home - SuperSocket](https://www.supersocket.net/)
    - [SuperSocket 2.0 中文文档](https://docs.supersocket.net/v2-0/zh-CN)
    - [SuperSocket: SuperSocket 是一个用于 .NET 的高性能、可扩展的套接字服务器应用程序框架。它为构建自定义网络通信应用程序提供了强大的架构，支持包括 TCP、UDP 和 WebSocket 在内的多种协议。](https://gitee.com/kerryjiang/SuperSocket)
    - [GitHub - kerryjiang/SuperSocket: SuperSocket is a high-performance, extensible socket server application framework for .NET. It provides a robust architecture for building custom network communication applications with support for multiple protocols including TCP, UDP, and WebSocket.](https://github.com/kerryjiang/SuperSocket)




## T. 图像识别

- [C#使用PaddleOCR进行图片文字识别](https://mp.weixin.qq.com/s/ULf3ZY6x8KgaOFkd2oBYKA)



## T. 图形/图像

- **SkiaSharp**
  - [【SkiaSharp绘图14】SKCanvas方法详解(三)URL注释、按顶点绘制、 是否裁切区域之外、旋转、缩放、倾斜、平移、保存/恢复画布_skiasharp 缩放-CSDN博客](https://blog.csdn.net/TyroneKing/article/details/140084044)
  - [SkiaSharp库在NetCore下跨平台图片操作基础使用方法 - pccai - 博客园](https://www.cnblogs.com/pccai/p/17858065.html)



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



## W. Windows 实用工具

- [有哪些让你「 爽到爆炸 」的 Windows 软件？ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247504737&idx=1&sn=b09a7952ec56c9f3dbad888c120696fb&chksm=96fd374d973b7110c1f62e73d3a60733e9633639e34e5b9f8d331c27e0601607bb9b51e149ed&scene=126&sessionid=1725718515#rd)



## W. 微服务

- [微服务如何相互协作？ (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247506318&idx=5&sn=2312e0b9a6916a98cf4b71a0eeac387c&chksm=96ca23870c132d9e5794ad9be2511294617a56836d219231b51161142953c2ba60787f30c3eb&scene=126&sessionid=1729127563#rd)



## W. 委托

- [C#委托的前世今生 - 付工上位机 - 博客园](https://www.cnblogs.com/xbdedu/p/18594690)



## W. 物联网

- [surging 集成SuperSocket预发布版本2.0 - fanly11 - 博客园](https://www.cnblogs.com/fanliang11/p/18824796)



## W. 微信小程序

- [换个方式用C#开发微信小程序](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247513710&idx=2&sn=3c4637bba4043ccb0050a6a6aee90cf0&chksm=9642fce376bda512ea1763823dc7ab67e709852a0993326b3e13c2135c07079d43ae4ae2e930&scene=126&sessionid=1747576822#rd)
- [.NET微信网页开发之使用微信JS-SDK自定义微信分享内容](https://mp.weixin.qq.com/s/_E6TXunEPt9j6U-5836rZQ)



## W. WPF

- [在 Windows 11 上为 WD 窗口启用 Snap 功能](https://mp.weixin.qq.com/s/LVcPToqTQZUMPJ-nU6uuEQ)
- [WPF 在 Windows 实现任务栏缩略图](https://mp.weixin.qq.com/s/bggT2J5qLXT8QvsVG-akLQ)
- [WPF 使用GDI+提取图片主色调并生成Mica材质特效背景](https://mp.weixin.qq.com/s/8hF85IoP1LiBSk0QKLGiAQ)



## X. 系统扩展

1. **[一图看懂 8 大扩展系统的方法](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247503181&idx=4&sn=3dc031b174f493ffce4abf1bffecfc52&chksm=96c4c8e5cc7e1f2e2cdc4a4ed7972d36d7ebe8f6a70c2735f284061dc3c07db1c91265303147&scene=126&sessionid=1721264675#rd)**
1. [10 个系统设计中的取舍 (qq.com)](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247505925&idx=4&sn=2713fcd470d2bc1ec22b46bdfa17aec0&chksm=969f00ce7390cf1aaae46a13c0df2b7f9474a25ea13ed249a85cddf3156ff76949ce962b2ab2&scene=126&sessionid=1727398833#rd)



## X. 消息队列

- [系统设计中的消息队列 (qq.com)](https://mp.weixin.qq.com/s/rP3tbXFzSvLL92--Fo2_pw)

- [C# 窗口过程消息处理 WndProc - 蓝点lilac - 博客园](https://www.cnblogs.com/BluePointLilac/p/18802906)

  > C# 窗口过程消息处理 WndProc。



## X. 虚拟打印机

- [如何添加Microsoft Print To PDF 打印机 - 知乎](https://zhuanlan.zhihu.com/p/105366547)
- [Spire.Pdf 的各种操作总结 - E-iceblue - 博客园](https://www.cnblogs.com/Yesi/p/4289981.html)
- [CutePDF :: Product :: CutePDF Writer](https://cutepdf.com/Products/CutePDF/writer.asp)
- [ps2pdf: PostScript-to-PDF converter](https://web.mit.edu/ghostscript/www/Ps2pdf.htm)



## X. 序列化/反序列化

- [.NET 9 New features-JSON序列化 - Eric zhou - 博客园](https://www.cnblogs.com/tianqing/p/18622226)



## X. 选型建议

- [Why we built our startup in C# - .NET Blog](https://devblogs.microsoft.com/dotnet/why-we-built-our-startup-in-csharp/)

  > 当我们开始构建 Tracebit——一款面向 B2B SaaS 安全产品时，我早期做出的一个关键决定是选择一种编程语言。虽然许多初创公司倾向于选择 Python、TypeScript、Golang 或 Rust，但我选择了不同的道路：C#。我之前已经相当多地写过关于这个决定的内容，我想在这里分享一些亮点。



## X. 性能分析与优化

- [dotnet-trace 分析.net程序性能 - chester·chen - 博客园](https://www.cnblogs.com/chenyishi/p/18881181)
- [.NET 10 进展之 CoreCLR Interpreter](https://mp.weixin.qq.com/s/XUaLHK3K_H_Hk3u4f8CnoA)



## Y. 音频/视频

- [【音视频通话】使用asp.net core 8+vue3 实现高效音视频通话 - 四处观察 - 博客园 (cnblogs.com)](https://www.cnblogs.com/1996-Chinese-Chen/p/18384394)
- [.NET 摄像头采集 - 唐宋元明清2188 - 博客园 (cnblogs.com)](https://www.cnblogs.com/kybs0/p/18385599)



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



## Z. 字符串处理

- [C#|.net core 基础 - 删除字符串最后一个字符的七大类N种实现方式 - IT规划师 - 博客园 (cnblogs.com)](https://www.cnblogs.com/hugogoos/p/18453906)
- [C#字符串拼接的6种方式及其性能分析对比](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510211&idx=1&sn=7a74eccdac26ddfe5b2d6730982097b6&chksm=96d566ef30cf03b40df87189e17e0905e9863a271ca8bbdd78e00f7aecdce5057de485dd84bb&scene=126&sessionid=1739414680#rd)
- [C# 字符串拼接的 7 种方式及性能对比 - 唐青枫 - SegmentFault 思否](https://segmentfault.com/a/1190000045650291)
- [用 C# 插值字符串处理器写一个 sscanf](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247510505&idx=2&sn=cba9ba32d24070d1fc71028db1473b85&chksm=96214cf9b6fbca195ba0b031bc35df9cf25df8581fe25c17674505bd40557d70965d62b18774&scene=126&sessionid=1739753079#rd)
- [高效管理内存的利器：彻底理解 Span 和 Memory：](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512073&idx=2&sn=7eadab22fa2365d77f43dbe722fb7934&chksm=9602b997629f2142d356901d8d8ae5ba84fb63c2b8ae222ee4921e089ed478597c9b56f29db1&scene=126&sessionid=1743819410#rd)



## Z. 正则表达式

- [C#正则表达式快速入门](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247508453&idx=1&sn=20bc9b8c80a0ffa746e3a768372fbf4f&chksm=9628e8fef5db0afacb3a3ac03fdbfafc3654e013e2b216ec33b41fec5b9bb97d8fcb621a0c64&scene=126&sessionid=1734311217#rd)



## Z. 在线工具

- [2款简洁好用的在线代码变量命名利器，让命名不再烦恼！](https://mp.weixin.qq.com/s?__biz=MzIxMTUzNzM5Ng==&mid=2247512493&idx=1&sn=f35ee6434bcbe546ff4ad6a02842acfe&chksm=966e0050b7b1e2fa11dad29071cb6fc73684b1d32cb26e2d5a0678b450845e0ee68f407b7582&scene=126&sessionid=1745155285#rd)
  - [CHTML代码变量命名工具_变量命名规则库](https://www.chtml.cn/)
  - [程序员变量名助手 | 菜鸟工具](https://www.jyshare.com/front-end/9443/)
