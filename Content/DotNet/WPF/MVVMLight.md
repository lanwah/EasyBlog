# MVVMLight

MVVM Light（全称GalaSoft.MvvmLight）是一个轻量级、易上手的MVVM框架，由Laurent Bugnion开发，曾广泛应用于WPF、UWP、Xamarin等XAML平台。它通过提供一组基础组件，帮助开发者快速实现MVVM模式，降低样板代码量。

## MVVM Light 核心组件

- **ViewModelBase**：继承自`ObservableObject`，自动实现`INotifyPropertyChanged`接口，简化属性变更通知。
- **RelayCommand/RelayCommand<T>**：封装`ICommand`接口，方便将UI操作绑定到ViewModel方法。
- **Messenger**：轻量级消息总线，支持跨组件（View与ViewModel、ViewModel之间）松耦合通信。
- **SimpleIoc**：简单的IoC（控制反转）容器，用于依赖注入和服务定位，管理ViewModel及服务的生命周期。
- **ViewModelLocator**：视图模型定位器，通常在App.xaml中注册为静态资源，方便在XAML中绑定。

## 发展历程与现状

MVVM Light在2010年代初期至中期非常流行，因其简洁、易用而受到许多WPF开发者的青睐。然而，**其最后一个稳定版本5.4.1发布于2018年**，此后框架基本处于**停止更新状态**。随着.NET生态的演进，微软推出了**CommunityToolkit.Mvvm（原名Microsoft.Toolkit.Mvvm）**作为官方推荐的现代MVVM库，它采用Source Generator技术大幅减少样板代码，性能更优，且持续活跃更新。

## MVVM框架对比

- [MVVM 框架对比（适用于 WPF 的 Prism 及其他框架）\_mvvm prism9.0-CSDN博客](https://blog.csdn.net/zhxup606/article/details/152662011)

## 从 MvvmLight 迁移 - Community Toolkits for .NET

- [从 MvvmLight 迁移 - Community Toolkits for .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/communitytoolkit/mvvm/migratingfrommvvmlight)

## MVVMLight学习

- [利刃 MVVMLight - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6920706.html)
- [利刃 MVVMLight 1：MVVMLight介绍以及在项目中的使用 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6285954.html)
- [利刃 MVVMLight 2：Model、View、ViewModel结构以及全局视图模型注入器的说明 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6285990.html)
- [利刃 MVVMLight 3：双向数据绑定 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6286923.html)
- [利刃 MVVMLight 4：绑定和绑定的各种使用场景 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6425060.html)
- [利刃 MVVMLight 5：绑定在表单验证上的应用 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6518834.html)
- [利刃 MVVMLight 6：命令基础 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6557037.html)
- [利刃 MVVMLight 7：命令深入 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6607702.html)
- [利刃 MVVMLight 8：DispatchHelper在多线程和调度中的使用 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6633026.html)
- [利刃 MVVMLight 9：Messenger - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6679025.html)
- [利刃 MVVMLight 10：Messenger 深入 - Hello-Brand - 博客园](https://www.cnblogs.com/wzh2010/p/6689423.html)

