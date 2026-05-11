# CommunityToolkit

CommunityToolkit（原名Windows Community Toolkit，现为.NET Community Toolkit）是微软官方支持的开源工具包集合，旨在为.NET开发者提供现代化、高性能的UI控件、开发工具和架构模式。其发展历程体现了微软对跨平台、现代化开发体验的战略布局。

## 一、CommunityToolkit 发展历程

### 1. **起源阶段（2016年）**

- **UWP Community Toolkit**：最初于2016年推出，专为UWP（Universal Windows Platform）开发者提供常用控件和辅助工具。
- **目标**：简化UWP应用开发，提供开发者常需的自定义控件和工具。

### 2. **扩展与更名（2018年）**

- **更名为Windows Community Toolkit**：2018年春季发布v3.0时，从“UWP Community Toolkit”更名为“Windows Community Toolkit”，标志着其服务范围从UWP扩展到所有Windows开发者。
- **跨平台萌芽**：开始支持WinUI 2、WinUI 3和Uno Platform。

### 3. **统一与跨平台演进（2021-2023年）**

- **组织重构**：GitHub组织从“WindowsCommunityToolkit”更名为“CommunityToolkit”，为多平台工具包共享代码和CI/CD工作流奠定基础。
- **子项目诞生**：
  - **CommunityToolkit.Maui**：为.NET MAUI提供控件和工具。
  - **CommunityToolkit.WinUI**：专注于WinUI 3开发。
  - **CommunityToolkit.Mvvm**（原名Microsoft.Toolkit.Mvvm）：成为官方MVVM框架，取代MVVM Light。
- **v8.0重大更新**（2023年）：将WinUI 3和WindowsAppSDK分支合并到统一命名空间，简化多平台开发。

### 4. **当前状态（2025-2026年）**

- **活跃维护**：由微软和.NET基金会共同维护，持续更新。
- **跨平台支持**：覆盖WPF、WinUI、UWP、.NET MAUI、Xamarin、Avalonia、Uno等几乎所有.NET UI框架。
- **最新版本**：CommunityToolkit.Mvvm 8.3.0（2025年），支持.NET 6+。

## 二、CommunityToolkit 核心子项目

| 子项目                      | 主要用途                                 | 适用平台                     | 特点                                       |
| --------------------------- | ---------------------------------------- | ---------------------------- | ------------------------------------------ |
| **CommunityToolkit.Mvvm**   | MVVM框架，提供属性通知、命令、消息传递等 | WPF、WinUI、MAUI、Avalonia等 | 轻量、高性能、Source Generator减少样板代码 |
| **CommunityToolkit.Maui**   | .NET MAUI的控件和工具集                  | .NET MAUI（跨平台）          | 提供MAUI专属控件和跨平台工具               |
| **CommunityToolkit.WinUI**  | WinUI 3的UI控件和工具                    | WinUI 3（Windows 11）        | 现代化Fluent Design控件                    |
| **CommunityToolkit.Common** | 共享基础库，供其他工具包共用             | 所有.NET平台                 | 提供通用工具类和扩展方法                   |

## 三、CommunityToolkit.Mvvm 核心优势（针对WPF上位机开发）

### 1. **现代化架构**

- **Source Generator技术**：编译时自动生成`INotifyPropertyChanged`和`ICommand`实现代码，减少60%以上样板代码。
- **零反射**：性能优于传统MVVM框架。

### 2. **跨平台兼容**

- 基于.NET Standard 2.0/2.1和.NET 6，可在WPF、WinUI、MAUI、Avalonia等平台无缝使用。
- 同一套ViewModel代码可复用于不同UI框架。

### 3. **核心组件**

- **ObservableObject**：属性变更通知基类。
- **RelayCommand/AsyncRelayCommand**：同步/异步命令实现。
- **IMessenger**：轻量级消息总线，支持跨组件松耦合通信。
- **ObservableValidator**：内置数据验证支持。

### 4. **官方支持与生态**

- 微软官方维护，被Microsoft Store等第一方应用使用。
- 与.NET生态深度集成，支持最新C#特性（如记录类型、init-only属性）。

## 四、上位机开发选型建议

### 1. **新项目首选**

- **中小型上位机/数据采集系统**：强烈推荐 **CommunityToolkit.Mvvm**。其轻量、高性能、低学习曲线适合快速开发。
- **大型复杂工业系统**：可考虑 **Prism**（模块化需求强）或 **CommunityToolkit.Mvvm + 模块化设计**。

### 2. **技术栈组合**

- **基础架构**：CommunityToolkit.Mvvm + .NET 8
- **UI控件**：HandyControl / MaterialDesignInXAML / WPF UI
- **通信层**：NModbus / HslCommunication / MQTTnet
- **图表展示**：LiveCharts2 / ScottPlot / OxyPlot

### 3. **迁移建议**

- **从MVVM Light迁移**：CommunityToolkit.Mvvm是官方推荐替代品，API设计相似但更现代化。
- **从传统MVVM迁移**：利用Source Generator大幅减少代码量，提升可维护性。

## 五、未来发展趋势

1. **AI集成**：计划集成智能推荐、自然语言处理等AI能力。
2. **性能持续优化**：更高效的渲染引擎和内存管理。
3. **跨平台深化**：进一步统一Windows、macOS、Linux、移动端的开发体验。
4. **开发者体验提升**：完善文档、示例和调试工具。

## 六、GitHub

- [CommunityToolkit/dotnet: .NET Community Toolkit is a collection of helpers and APIs that work for all .NET developers and are agnostic of any specific UI platform. The toolkit is maintained and published by Microsoft, and part of the .NET Foundation.](https://github.com/CommunityToolkit/dotnet)
  - [.NET 社区工具包文档 - Community Toolkits for .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/)
  - [Getting Started with the Windows Community Toolkit - Windows Community Toolkit | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/communitytoolkit/getting-started)
  - [CommunityToolkit/MVVM-Samples: Sample repo for MVVM package](https://github.com/CommunityToolkit/MVVM-Samples)
  - [MVVM 工具包简介 - Community Toolkits for .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/mvvm/)
  - [BYJRK/CommunityToolkit.Mvvm\_ZeroToHero: CommunityToolkit.Mvvm 从入门到精通](https://github.com/BYJRK/CommunityToolkit.Mvvm_ZeroToHero)
    - [在 .NET Framework 中使用 Source Generator - CommunityToolkit - 从入门到精通](https://mvvm.coldwind.top/Source%20Generator/SourceGeneratorNetFx/)

## 七、学习

- [CommunityToolkit从入门到精通（详细版） - 赵书记 - 博客园](https://www.cnblogs.com/davisdabing/p/18196205)

## 总结

CommunityToolkit从最初的UWP工具包发展为覆盖全.NET平台的现代化开发套件，其中**CommunityToolkit.Mvvm已成为WPF开发的首选MVVM框架**。对于上位机开发，它提供了性能、可维护性和跨平台能力的平衡，是替代已停止更新的MVVM Light的理想选择。建议新项目直接采用CommunityToolkit.Mvvm，并结合具体需求选择合适的UI控件库和通信框架。

