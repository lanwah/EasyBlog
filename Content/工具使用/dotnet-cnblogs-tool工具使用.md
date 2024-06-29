# dotnet-cnblogs-tool 工具使用

工具的作用在下面第一部分原作者的GitHub说明和博客中有介绍，此文中就不在说明。

---
[toc]
***

### 一、DotNet博客园图片上传工具

1. ==GitHub源码地址==：https://github.com/stulzq/dotnet-cnblogs-tool
2. 介绍博客：[如何高效的编写与同步博客](https://www.cnblogs.com/stulzq/p/9043632.html)

### 二、dotnet-cnblogs安装与使用

1. [dotnet-cnblog工具的使用](https://www.cnblogs.com/hxld/p/16831363.html)
2. [dotnet-cnblog的安装与使用](https://www.cnblogs.com/henry666/p/16621020.html)
3. [快捷方式制作](https://www.cnblogs.com/shengliC/p/14410298.html)

### 三、快捷方式的分享点

**改进的目的：**强迫症的作祟，希望看起来更加美观，效果如下图所示：

![改进后的显示效果](../Images/dotnet-cnblogs-tool工具使用/1734086-20230302084724604-1782596234.png)

==前提：==请先阅读<span style="color:red;">快捷方式制作</span>中关联的文章。

**操作步骤：**

1. 找个固定的目录存放脚本bat，如下图所示：

![脚本bat](../Images/dotnet-cnblogs-tool工具使用/1734086-20230302084724204-1100412997.png)

2. 然后把脚本发送到桌面快捷方式，如下图所示：

![发送到桌面快捷方式](../Images/dotnet-cnblogs-tool工具使用/1734086-20230302084723849-329966246.png)

3. 在资源管理器中输入 `%AppData%\Microsoft\Windows\SendTo` 打开发送到目录，并把==步骤2==中发送到桌面的快捷方式剪切到此处，如下图所示：

![发送到桌面的快捷方式剪切到发送到目录](../Images/dotnet-cnblogs-tool工具使用/1734086-20230302084723460-915318226.png)

4. 修改快捷方式的图标，如下图所示

![修改快捷方式图标](../Images/dotnet-cnblogs-tool工具使用/1734086-20230302084723082-1647045496.png)

5. 到此优化完成。

### 四、碰到的问题

用Markdown编写文章时图片请使用`![]()` <span style="color:red">别用img</span>否则用工具上传不了！