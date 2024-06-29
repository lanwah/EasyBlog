# WinDbg基本环境搭建及安装

[TOC]

---

## 安装

有2个方式可以安装WinDbg。

1. **新版 安装WinDbg Preview**
   在商店里搜WinDbg直接就可以安装，这里安装的版本是x64版本。x64版本的WinDbg其实是可以调试x86版本的程序，直接附加到进程就可以了，这也是我们推荐的方式。
2. 旧版 安装windows sdk
   - 由于官方不提供独立的旧的WinDbg安装方式，需要安装Windows sdk。
     参考链接：
     [Download the Windows Driver Kit (WDK) - Windows drivers | Microsoft Docs](https://docs.microsoft.com/en-us/windows-hardware/drivers/download-the-wdk)
   - 或者可以直接下载6.0打包好的版本云盘：[pan.baidu.com/s/1VqXVIGVH…](https://link.juejin.cn/?target=https%3A%2F%2Fpan.baidu.com%2Fs%2F1VqXVIGVHxAZVPNds1525Jg) 提取码：mahg

这里建议新旧两个版本都安装，实际调试时候都可能需要用到。

## 配置与调试

### 符号文件配置

**sympath**: `WinDbg` 查找 `symbols`的地址.

`symbols` 能优化我们的调试体验，我们可以通过如下命令查看 `sympath` :

```x86asm
.sympath
```

一般通过两种种方式设置`sympath`。参考[Symbol path for Windows debuggers](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/symbol-path).

- 系统环境变量

  增加系统环境变量：`_NT_SYMBOL_PATH` 对应的值为：
  `SRV*C:\Symbols*http://msdl.microsoft.com/download/symbols`

- 调试会话中设置

  可以再调试种如下加载`symbols` :

```bash
.sympath C:\symbols\local;srv*C:\symbols\microsoft*https://msdl.microsoft.com/download/symbols
.reload
```

### 加载SOS.dll

SOS是在ntsd或windbag下调试.Net程序的扩展。有两种方式可以加载。
\- `.loadby`
一般使用`.loadby sos clr` （针对.net framework 4.x）没有报错就代表正确加载了。实际上根据情况有如下几种选择：

```x86asm
    .loadby sos mscorsvr
    .loadby sos mscorwks
    .loadby sos clr
    .loadby sos coreclr
    .loadby sos <somethingelse>
```

如何选择参考链接： [.net - Cannot .loadby sos mscorwks or .loadby sos clr - Stack Overflow](https://stackoverflow.com/questions/52258291/cannot-loadby-sos-mscorwks-or-loadby-sos-clr)

```markdown
 - `.load`
```

对第一种方式的不能正确加载的情况，可以自行加载，使用方式如下：

```
.load C:\Windows\Microsoft.NET\Framework64\v4.0.30319\sos.dll
```

接下来就能愉快的使用!eeheap等命令调试了。

**注意**：不要在.net clr还没有加载的时候就尝试加载sos 键入`g`直到clr加载后再中断重新加载sos.dll。

# 特殊情况的处理

如果只调试自己电脑上的程序那么一般情况比较简单，但调试客户的程序会遇到各种各样的情况。例如如下两种最常见的场景。

## 1. 32位兼容程序的调试

有时我们在生成项目时，选择了优先32位。生成32的程序在我们现在的64位环境下，会运行在wow64下。
这个时候我们是可以直接使用x64版本的windbg直接附加到进程调试的，但是对客户的机器上的程序，我们很多时候都需要生成dump来分析当时的问题。直接用默认的64位任务管理器生成的dump并不能直接分析，给bug的分析带来很多困难。我们可能会看到如下提示信息。

```sql
  0:000> !eeheap
  SOS does not support the current target architecture.
```

或者，

```vhdl
Failed to load data access DLL, 0x80004005 
Verify that 1) you have a recent build of the debugger (6.2.14 or newer) 
            2) the file mscordacwks.dll that matches your version of mscorwks.dll is 
                in the version directory 
            3) or, if you are debugging a dump file, verify that the file 
                mscordacwks_<arch>_<arch>_<version>.dll is on your symbol path. 
            4) you are debugging on the same architecture as the dump file. 
                For example, an IA64 dump file must be debugged on an IA64 
                machine.

You can also run the debugger command .cordll to control the debugger's 
load of mscordacwks.dll.  .cordll -ve -u -l will do a verbose reload. 
If that succeeds, the SOS command should work on retry.

If you are debugging a minidump, you need to make sure that your executable 
path is pointing to mscorwks.dll as well.
```

按照提示输入`.cordll -ve -u -l`后有如下提示。

```lua
  .cordll -ve -u -l 
  CLR DLL status: No load attempts
```

使用windbg preview时可以在堆栈中看到wow64等字样就是遇到了这种问题。

我们可以通过如下方式解决：

- 1. 使用32位的任务管理器重新抓dump。
     32位任务管理器位于 `C:\Windows\SysWOW64\Taskmgr.exe`下。参考链接：[.Net Dump 的分析 I | 非洲海星的深海大鳳梨 (wordpress.com)](https://smokingpc.wordpress.com/2017/09/02/net-dump-analysis-1/)
- 1. 使用`soswow64`加载sos
     这里一定要使用旧版的windbg x86版本并下载soswow64放到指定目录下。
     使用 `.load soswow64` 加载后就能使用sos中的扩展命令。github中的readme说的非常清楚。

参考链接：[poizan42/soswow64: windbg/dbgeng extension for debugging 64-bit dumps of 32-bit .NET processes. (github.com)](https://github.com/poizan42/soswow64)

## 2. clr运行环境不符的调试

有时调试的目标dump的clr版本与本地并不相符，使用 `.cordll -ve -u -l` 命令有如下类似提示。
`unable to find mscordacwks_x86_x86_4.7.3110.00.dll by mscorwks search`
可以按提示拷贝目标机器上的相应dll，重命名后放到windbg的目录下。
参考：
[Windbg调试SOS.DLL和CLR 不匹配问题_SpringDou的博客-CSDN博客](https://blog.csdn.net/SpringDou/article/details/80338658)

## 3. 调试其他机器上的内存转储文件

参考[原文地址](https://github.com/gabrielweyer/nuggets/blob/main/docs/windbg/README.md#analysing-the-dump-on-another-machine)

需要目标计算机上的如下`DLL`s:

- `mscordacwks.dll`
- `SOS.dll`

他们位于当前的`.NET framework`中: `C:\Windows\Microsoft.NET`. [Debugging Managed Code Using the Windows Debugger](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugging-managed-code) .

你需要把他们加载到`WinDbg`:

- `SOS`: `.load C:\path-to-dll\SOS.dll`
- `mscordacwks`: `.cordll -lp C:\directory-in-which-mscordacwks-is-located`
  - 路径不要带上`mscordacwks.dll` (例如，如果路径是 `C:\dlls\mscordacwks.dll` ，则使用如下命令 `.cordll -lp C:\dlls`)

## 4. 其他常见问题

参考[nuggets/README.md at main · gabrielweyer/nuggets (github.com)](https://github.com/gabrielweyer/nuggets/blob/main/docs/windbg/README.md#troubleshooting)

# Q&A

- 能在vs下使用sos扩展么？

  现在版本的vs已经不支持加载sos了，但是可以使用稍旧版本vs并配合如下扩展。（未测试过）
  [angelhernandezm/visualsos: Visual SOS is both a standalone application (x64) and extension for Visual Studio that exposes functionality in SOS (debugging extension) not available in Visual Studio Debugger. (github.com)](https://github.com/angelhernandezm/visualsos)

- 可以使用哪些sos命令？
  参考官方文档：[SOS.dll (SOS Debugging Extension) - .NET Framework | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/tools/sos-dll-sos-debugging-extension)

- dotnet core下的SOS？
  dotnet core下的sos安装好像有自己的方法，参考
  [WinDbg 加载 dotnet core 的 sos.dll 辅助调试方法 - 云+社区 - 腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1923303)。
  目前.net6好像并不需要这样。
  
- **!clrstack 错误提示**

  > clrstack： No export clrstack found

  > 如果是.Net3.5或更低版本需要“.loadby sos mscorwks”加载sos。
  >
  > 如果是.Net4.0版本需要“.loadby sos clr”。

# 其他参考链接

1. dotnet core下的配置。[教你配置windows上的windbg,linux上的lldb，打入clr内部这一篇就够了 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904151478976519#heading-11)
2. [windbg - Failed to load data access DLL, 0x80004005 - Stack Overflow](https://stackoverflow.com/questions/1920712/failed-to-load-data-access-dll-0x80004005)
3. ["Failed to load data access DLL, 0x80004005" when debugging a live process on local machine (microsoft.com)](https://social.msdn.microsoft.com/Forums/vstudio/en-US/435be6af-7ead-46ae-b966-308a2c572872/quotfailed-to-load-data-access-dll-0x80004005quot-when-debugging-a-live-process-on-local?forum=windbg)
4. [How to use Windbg to debug a dump of a 32bit .NET app running on a x64 machine - PKI Extensions (sysadmins.lv)](https://www.sysadmins.lv/retired-msft-blogs/alejacma/how-to-use-windbg-to-debug-a-dump-of-a-32bit-net-app-running-on-a-x64-machine.aspx)
5. [visual studio 2010 - Debugging dump of 32-bit process captured on 64-bit machine - Stack Overflow](https://stackoverflow.com/questions/4000420/debugging-dump-of-32-bit-process-captured-on-64-bit-machine)
6. [调试运行在Wow64子系统下的程序----x64版windbg调试win32程序_lixiangminghate的专栏-CSDN博客](https://blog.csdn.net/lixiangminghate/article/details/86687628)

## 文章摘自

[WinDbg调试托管程序环境问题总结](https://www.cnblogs.com/zhangchen-trunk/p/15614850.html) 