# Windows命令

[TOC]

所有受支持的 Windows 和 Windows Server 版本都内置了一组 Win32 控制台命令。 这组文档介绍了可用于通过脚本或脚本工具自动执行任务的 Windows 命令。

Windows命令即我们通常所说的Cmd命令又叫做Win32 控制台命令。

[MS Doc：Windows 命令](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)

## 命令行 shell

Windows 有两个命令行 shell：命令 shell 和 [PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/overview)。 每个 shell 都是一个软件程序，可在你与操作系统或应用程序之间提供直接通信，从而提供自动化 IT 操作的环境。

命令 shell 是 Windows 中内置的第一个 shell，用于使用批处理 (.bat) 文件自动执行日常任务，例如用户帐户管理或夜间备份。 使用 Windows 脚本宿主，可以在命令 shell 中运行更复杂的脚本。 有关详细信息，请参阅 [cscript](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/cscript) 或 [wscript](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/wscript)。 与使用用户界面相比，使用脚本执行操作效率更高。 脚本接受命令行中可用的所有命令。

PowerShell 旨在扩展命令 shell 的功能，运行名为 cmdlet 的 PowerShell 命令。 Cmdlet 类似于 Windows 命令，但提供可扩展性更高的脚本语言。 可以在 PowerShell 中同时运行 Windows 命令和 PowerShell cmdlet，但命令 shell 只能运行 Windows 命令，而不能运行 PowerShell cmdlet。

对于最可靠、最新的 Windows 自动化，我们建议使用 PowerShell，而不是 Windows 命令或 Windows 脚本宿主实现 Windows 自动化。

有关 Windows 命令的退出和错误代码的参考，请参阅[调试系统错误代码](https://learn.microsoft.com/zh-cn/windows/win32/debug/system-error-codes)文章，这些文章可能有助于了解生成的错误。 Windows 命令还包括命令重定向运算符。 若要详细了解其用法，请参阅[使用命令重定向运算符](https://learn.microsoft.com/zh-cn/previous-versions/windows/it-pro/windows-xp/bb490982(v=technet.10))。

> [!NOTE]
>
> 你还可以下载并安装 [PowerShell Core](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell)，这是 PowerShell 的开源版本。

## 命令 shell 文件和目录名称自动补全

可以将 Command shell 配置为在按下指定的控制字符时自动补全计算机或用户会话上的文件和目录名称。 默认情况下，对于文件和目录名，此控制字符配置为 Tab 键，但也可能有所不同。 若要更改此控制字符，请运行 `regedit.exe` 并导航到以下任一注册表项和条目，具体取决于是希望仅更改当前用户的值，还是要更改计算机所有用户的值。

> [!CAUTION]
>
> 不正确地编辑注册表可能会对系统造成严重损坏。 在对注册表进行以下更改之前，应备份计算机上任何有价值的数据。

registry复制

```registry
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\CompletionChar
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\PathCompletionChar
```

将这些值设置为要使用的控制字符的值。 有关完整列表，请参阅[虚拟键代码](https://learn.microsoft.com/zh-cn/windows/win32/inputdev/virtual-key-codes)。 若要禁用注册表中的特定补全字符，请使用空格 (0x20) 的值，因为它不是有效的控制字符。 此注册表项的值类型为 REG_DWORD，也可以用十六进制或十进制值指定。

也可以运行 `cmd.exe` 并带有参数和开关 `/F:ON` 或 `/F:OFF`，从而根据命令 shell 实例来启用或禁用文件和目录名称补全。 如果使用 `/F:ON` 参数和开关启用了名称补全，则会使用控制字符 `Ctrl-D` 来进行目录名称补全，使用 `Ctrl-F` 进行文件名补全。 用户指定的设置优先于计算机设置，命令行选项优先于注册表设置。

## 命令行参考 A-Z

若要查找有关特定命令的信息，请在以下 A-Z 菜单中，选择命令开头的字母，然后选择命令名称。

[A](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#a) | [B](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#b) | [C](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#c) | [D](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#d) | [E](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#e) | [F](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#f) | [G](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#g) | [H](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#h) | [I](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#i) | [J](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#j) | [K](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#k) | [L](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#l) | [M](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#m) | [N](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#n) | [O](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#o) | [P](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#p) | [Q](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#q) | [R](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#r) | [S](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#s) | [T](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#t) | [U](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#u) | [V](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#v) | [W](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#w) | [X](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#x) | Y | Z

[MS Doc：命令行参考 A-Z](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#command-line-reference-a-z) 



## S

- [shutdown | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown)

  - [cmd 中 shutdown 命令总结 - GOD\_HJ - 博客园](https://www.cnblogs.com/GOD-HJ/p/17462915.html)

    > ```cmd
    > // 立即关闭电脑，并强制关闭正在运行的应用程序，不等待计时器倒计时。
    > shutdown /s /f /t 0
    > 
    > // 立即关闭电脑并关机。
    > shutdown /s
    > 
    > // 注销当前用户并返回登录页面。
    > shutdown /l
    > ```

