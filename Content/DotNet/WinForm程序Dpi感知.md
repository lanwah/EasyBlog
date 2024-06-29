# WinForm程序Dpi感知

本文介绍.NET WinForm程序Dpi感知的相关知识。

## 一、相关的一些概念

介绍Dpi，分辨率相关的知识。

### 1、什么是Dpi？

> 每英寸点数（每英寸长度内的像素点数）。
>
> 如标准的Windows DPI（96Dpi），代表1英寸96个像素。

[百度百科Dpi介绍](https://baike.baidu.com/item/DPI/908073?fr=ge_ala)

### 2、1英寸等于多少毫米（mm）？

> 1英寸=25.4mm=2.54cm
>
> 1mm=1/25.4英寸=0.0393700787401575英寸
>
> 1cm=10/25.4英寸=0.393700787401575英寸

### 3、分辨率？

> 分辨率，又称解析度、解像度，可以细分为[显示分辨率](https://baike.baidu.com/item/显示分辨率/3431933?fromModule=lemma_inlink)、[图像分辨率](https://baike.baidu.com/item/图像分辨率/872374?fromModule=lemma_inlink)、[打印分辨率](https://baike.baidu.com/item/打印分辨率/9560832?fromModule=lemma_inlink)和[扫描分辨率](https://baike.baidu.com/item/扫描分辨率/7122498?fromModule=lemma_inlink)等。

[百度百科分辨率介绍](https://baike.baidu.com/item/%E5%88%86%E8%BE%A8%E7%8E%87/213523?fr=aladdin)

### 4、屏幕分辨率（显示器分辨率）？

> 屏幕分辨率是指纵向和横向上的像素点数，单位是px。
>
> 屏幕分辨率确定计算机屏幕上显示多少信息的设置，以水平和垂直像素来衡量。就相同大小的屏幕而言，当屏幕分辨率低时（例如 640 x 480），在屏幕上显示的像素少，单个像素尺寸比较大。屏幕分辨率高时（例如 1600 x 1200），在屏幕上显示的像素多，单个像素尺寸比较小。
>
> [显示分辨率](https://baike.baidu.com/item/显示分辨率/3431933?fromModule=lemma_inlink)就是屏幕上显示的像素个数，分辨率160×128的意思是[水平方向](https://baike.baidu.com/item/水平方向/56274880?fromModule=lemma_inlink)含有[像素数](https://baike.baidu.com/item/像素数/5165473?fromModule=lemma_inlink)为160个，垂直方向像素数128个。[屏幕尺寸](https://baike.baidu.com/item/屏幕尺寸/3031029?fromModule=lemma_inlink)一样的情况下，分辨率越高，显示效果就越精细和细腻。

[百度百科屏幕分辨率介绍](https://baike.baidu.com/item/%E5%B1%8F%E5%B9%95%E5%88%86%E8%BE%A8%E7%8E%87/2193029?fr=ge_ala)

## 二、WinForm程序的一些基本知识

本节介绍WinForm程序的一些基本概念。

### 1、WinFrom程序界面或者控件大小的单位是什么？

> 是像素，控件的大小以像素为单位。

### 2、显示器分辨率对WinForm程序有何影响？

在系统缩放比是100%的前提下。

> **对于同一台显示器不同分辨率而言**
>
> 对于同一台显示器，通过**显示设置**来改变系统的分辨率有以下现象。
>
> 分辨率越高WinForm程序看起来越小。像素点越密集，WinForm程序看起来越清晰。
>
> 分辨率越低WinForm程序看起来越大。像素点越稀疏，WinForm程序看起来越模糊。
>
> 可以看作是一张位图，在低像素显示时图片被放大导致图片模糊。

> **对于相同分辨率不同的显示器而言**
>
> 小显示器WinForm程序看起来更小，大显示器WinForm程序看起来会更大。
>
> <span style="color:red;">就笔者来看相同分辨率下小显示器的显示效果会更好些，没有找到只有屏幕大小不同时WinForm显示效果是位图缩放还是矢量图缩放的相关的资料，欢迎大家提供相关信息，后面再更新。</span>
>
> **附上一篇文章：**[同一块参数的屏幕，显示同样内容，是不是屏幕小的比屏幕大的更清晰呢?](https://www.zhihu.com/question/559786945?utm_id=0)

### 3、如何更改系统的Dpi值？

在Win7系统中。

![img](../images/WinForm程序Dpi感知/70.png)

在Win10系统中

![image-20230803192552906](../images/WinForm程序Dpi感知/image-20230803192552906.png)

### 4、在WinForm程序中默认的Dpi感知模式是什么？

> 桌面应用程序必须告知 Windows 它们是否支持 DPI 缩放。 ==默认情况下，系统会认为桌面应用程序 DPI 不感知，并按位图拉伸其窗口。==
>
> **DPI 未识别模式**（WinForm程序默认模式）
>
> DPI 感知不到的应用程序以 96 (100% ) 的固定 DPI 值呈现。 每当这些应用程序在显示比例大于 96 DPI 的屏幕上运行时，Windows 会将应用程序位图拉伸到预期的物理大小。 这会导致应用程序出现模糊。
>
> **系统 DPI 感知模式**
>
> 系统DPI感知的桌面应用程序通常在用户登录时接收主连接监视器的DPI。在初始化期间，他们使用System DPI值适当地布局UI(大小控制，选择字体大小，加载资源等)。因此，系统DPI感知应用程序不是DPI缩放(位图拉伸)，由Windows在单个DPI上显示。当应用程序移动到具有不同比例因子的显示器时，或者如果显示比例因子以其他方式改变，Windows将位图缩放应用程序的窗口，使它们看起来模糊。实际上，系统DPI感知的桌面应用程序仅在单一显示比例因子下呈现清晰，每当DPI改变时就会变得模糊。

### 5、如何设置WinForm程序的Dpi感知方式？

> 1 通过应用程序清单设置
>
> 2 通过 API 调用以编程方式

### 6、WinForm程序中如何获取程序识别到的Dpi？

```C#
        var g = this.CreateGraphics();
        var dpiX = g.DpiX;
        var dpiY = g.DpiY;
```

==注意在无应用程序清单文件(.manifest文件)或.manifest文件中未启用Dpi感知时获取到的Dpi值始终是96。==

![image-20230803200344785](../images/WinForm程序Dpi感知/image-20230803200344785.png)

### 7、不同Dpi下WinForm程序的显示效果

按钮设计时初始大小

![image-20230803200829757](../images/WinForm程序Dpi感知/image-20230803200829757.png)

系统缩放系数

![image-20230803201357770](../images/WinForm程序Dpi感知/image-20230803201357770.png)

不启用Dpi感知时的效果图

![QQ截图20230803201039](../images/WinForm程序Dpi感知/QQ截图20230803201039.png)

启用Dpi感知后的效果图

![QQ截图20230803201139](../images/WinForm程序Dpi感知/QQ截图20230803201139.png)

注意看标签字的清晰度和弹出框中Size的区别，真实图片可以明显感觉到清晰度的差别，上图中可能不明显。

## 相关参考

1、[Windows 上的高 DPI 桌面应用程序开发](https://learn.microsoft.com/zh-cn/windows/win32/hidpi/high-dpi-desktop-application-development-on-windows?redirectedfrom=MSDN)

2、[设置进程的默认 DPI 感知](https://learn.microsoft.com/zh-cn/windows/win32/hidpi/setting-the-default-dpi-awareness-for-a-process?source=recommendations)

3、[解决C# Winform高DPI字体模糊得两种方案](https://blog.csdn.net/ffx54611/article/details/103530282)

4、[Winform与WPF程序处理DPI问题](https://blog.csdn.net/ZslLoveMiwa/article/details/81294311)