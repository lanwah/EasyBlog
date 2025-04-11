# Microsoft Edge WebView2

[TOC]

---

## Microsoft Edge 开发人员文档

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> https://learn.microsoft.com/zh-cn/microsoft-edge/developer/

## 为 WebView2 设置开发环境

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/how-to/machine-setup

## Microsoft Edge WebView2 简介

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/

## WebView2 SDK 发行说明（SDK版本及运行时版本(谷歌版本)）

<img src="../Images/Common/hand-right.png" alt="arrow-right" />[WebView2 SDK 发行说明 - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/release-notes/?tabs=dotnetcsharp)

<img src="../Images/Common/hand-right.png" alt="arrow-right" />[WebView2 SDK 的存档发行说明 - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/release-notes/archive?tabs=dotnetcsharp)

## WebView2 支持的平台及运行环境

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/concepts/distribution

## 分发应用和 WebView2 运行时

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> [Microsoft Edge WebView2 简介 - Microsoft Edge Developer documentation | Microsoft Learn](https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/)

## 下载 WebView2 运行时

<img src="../Images/Common/hand-right.png" alt="arrow-right" />https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH#download-section

## Microsoft Edge 和 WebView2 之间的差异

<img src="../Images/Common/hand-right.png" alt="arrow-right" /> https://learn.microsoft.com/zh-cn/microsoft-edge/webview2/concepts/browser-features

## WebView2版本

| WebView2 SDK版本    | 发布日期            | Microsoft Edge 版本 | Chromium Version                                             | 备注                       |
| ------------------- | ------------------- | ------------------- | ------------------------------------------------------------ | -------------------------- |
| 1.0.2210.55         | 2023 年 12 月 11 日 | 120.0.2210.55       | 120.0.2210.55                                                |                            |
| 1.0.1466-prerelease | 2022 年 10 月 31 日 | 109.0.1466.0        | 109.0.1466.0                                                 | ==最后一个支持Win7的版本== |
| 0.8.149             |                     | 76.0.149.0          | 76.0.149.0                                                   |                            |
|                     |                     |                     | [49.0.2623.110](https://github.com/cefsharp/CefSharp/releases?page=15) | ==最后一个支持Xp的版本==   |

## 运行环境支持

支持以下编程环境：

- Win32 C/C++
- **.NET framework 4.6.2 或更高版本**
- .NET Core 3.1 或更高版本
- .NET 5 或更高版本
- [WinUI 2.0](https://learn.microsoft.com/zh-cn/windows/apps/winui/winui2/)
- [WinUI 3.0](https://learn.microsoft.com/zh-cn/windows/apps/winui/winui3/)

WebView2 应用可以在以下版本的 Windows 上运行：

- Windows 11
- Windows 10
- Windows 10 IoT 企业版 LTSC x32 2019
- Windows 10 IoT 企业版 LTSC x64 2019
- Windows 10 IoT 企业版 21h1 x64
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

以下设备也支持 WebView2：

- Xbox
- HoloLens 2



## 操作系统支持

### Windows 7 和 8

WebView2 运行时版本 109 是支持以下 Windows 版本的最终版本。 WebView2 运行时和 SDK 版本 110.0.1519.0 及更高版本不支持这些操作系统。

- Windows 8/8.1
- Windows 7
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2

另请参阅：

- [Microsoft Edge 支持的操作系统](https://learn.microsoft.com/zh-cn/deployedge/microsoft-edge-supported-operating-systems) - Windows 7 和 Windows Server 2008 R2 的 WebView2 支持与 Microsoft Edge 具有相同的支持时间线。
- [Microsoft Edge 和 WebView2 终止对 Windows 7 和 Windows 8/8.1 的支持](https://blogs.windows.com/msedgedev/2022/12/09/microsoft-edge-and-webview2-ending-support-for-windows-7-and-windows-8-8-1/)

## 其他

### 1、查看Edge版本

> 在Edge浏览器中输入： edge://version/
