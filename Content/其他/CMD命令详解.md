# CMD命令详解

[TOC]

---

Windows CMD（命令提示符）是 Windows 操作系统中的一个命令行工具，允许用户通过输入文本指令来执行各种系统操作、管理文件、配置网络或运行脚本等。它基于早期的 **MS-DOS** 命令行界面，虽然在现代 Windows 中逐渐被 **PowerShell** 取代，但 CMD 仍然是许多用户和系统管理员的重要工具。

## 主要特点

1. **文本交互**
   用户通过输入命令（如 `dir`、`copy`、`ping`）直接与系统交互，无需图形界面。
2. **自动化与脚本**
   支持批处理脚本（`.bat` 或 `.cmd` 文件），可批量执行任务。
3. **系统管理功能**
   用于管理文件、磁盘、网络、服务、进程等底层操作。
4. **向后兼容**
   保留了许多 MS-DOS 时代的命令，兼容旧脚本和工具。



## 常见用途

- **文件操作**
  `dir`（列出目录内容）、`copy`（复制文件）、`del`（删除文件）、`mkdir`（创建文件夹）等。
- **网络诊断**
  `ping`（测试网络连接）、`ipconfig`（查看网络配置）、`tracert`（跟踪路由）等。
- **系统管理**
  `tasklist`（查看进程）、`shutdown`（关机/重启）、`sfc`（系统文件检查）等。
- **磁盘管理**
  `format`（格式化磁盘）、`chkdsk`（检查磁盘错误）、`diskpart`（分区管理）等。



## 基础命令示例

```powershell
1. dir                # 列出当前目录下的文件和子目录
2. cd C:\Users        # 切换目录到 C:\Users
3. copy file1.txt file2.txt  # 复制文件
4. ipconfig           # 显示网络配置（IP地址、网关等）
5. ping google.com    # 测试与 google.com 的网络连通性
6. shutdown /s /t 60  # 60秒后关机
```



## 如何打开 CMD

1. **快捷键**：`Win + R`，输入 `cmd` 后按回车。
2. **搜索栏**：在任务栏搜索“cmd”或“命令提示符”。
3. **右键菜单**：在文件夹中按住 `Shift` + 右键，选择“在此处打开命令窗口”（旧版 Windows）。



## 注意事项

- **管理员权限**：部分命令需要以管理员身份运行（右键选择“以管理员身份运行”）。
- **谨慎操作**：CMD 命令可能直接修改系统或删除文件，需确认指令正确性。
- **区分大小写**：多数命令不区分大小写（如 `DIR` 和 `dir` 等效）。



## CMD vs. PowerShell

- **CMD**：轻量级，适合简单任务和兼容旧脚本。
- **PowerShell**：功能更强大，支持对象管道、复杂脚本和现代系统管理。



如果需要深入学习，可以通过在 CMD 中输入 `help` 查看所有基础命令，或使用 `<命令> /?` 查看具体帮助（例如 `ping /?`）。对于高级用户，学习批处理脚本（Batch Scripting）可以大幅提升效率。



## CMD vs. 批处理命令

### **相同点**

1. **核心命令一致**
   两者均使用Windows命令解释器（如`cmd.exe`）执行，支持相同的底层命令（如`dir`、`copy`、`echo`等），且语法规则基本一致。

2. **自动化能力**
   均能完成文件管理、系统配置等任务，例如通过`xcopy`复制文件或`net start/stop`控制服务。

3. **环境变量操作**
   均可通过`set`命令设置或读取环境变量，支持动态修改运行环境。

   

### **不同点**

1. **交互方式与执行形式**
   - **命令行命令**：需在 cmd 或 PowerShel l窗口手动逐条输入执行，适用于即时调试或简单操作。
   - **批处理命令**：以 .bat 或 .cmd 脚本形式存储，按顺序自动执行多条命令，适用于重复性任务（如备份、部署）。
2. **功能复杂度与控制流**
   - **批处理**支持更复杂的逻辑控制，例如：
     - 条件判断（`if`、`else`）和循环（`for`、`while`）；
     - 子程序调用（`call`）和跳转（`goto`）；
     - 错误处理（`%ERRORLEVEL%`捕获错误码）和并发执行（通过`start`命令）。
   - **单条命令行命令**通常无法实现复杂逻辑，需依赖外部工具或逐条组合。
3. **环境变量作用域**
   - **命令行命令**：变量仅在当前会话有效，退出后失效。
   - **批处理脚本**：可通过`setlocal`和`endlocal`限制变量作用域，避免污染全局环境。
4. **错误处理机制**
   - **批处理**支持更精细的错误捕获与处理，例如通过`if %ERRORLEVEL% NEQ 0`判断命令执行状态，并执行回退操作。
   - **命令行命令**需手动检查每条命令的结果，无自动回退机制。
5. **执行效率与适用场景**
   - **批处理**适合长时间、多步骤任务（如自动化部署、批量文件处理）；
   - **命令行命令**更适合快速执行单次操作（如查看IP地址、临时文件删除）。



### **扩展说明**

- **`.bat`与`.cmd`文件的差异**
  - `.cmd`为Windows NT系列设计，支持更多命令（如`pushd`、`popd`）和严格错误处理，而`.bat`兼容老旧系统但功能受限。
  - 现代脚本建议优先使用`.cmd`，以兼容PowerShell调用和复杂任务需求。
- **安全性对比**
  批处理脚本因可包含任意命令，存在潜在安全风险（如恶意删除文件），需谨慎执行未知来源的脚本；而命令行命令需用户逐条确认，安全性更高。



### **总结**

命令行命令与批处理命令在功能上互补：前者灵活适用于即时操作，后者高效处理复杂自动化任务。实际使用中，可将常用命令行组合为批处理脚本，提升工作效率。





# 命令学习网站

1. **Microsoft 官方文档 - Windows 命令行**

   >[链接直达：Windows commands | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
   >
   >- **特点**：权威且全面，涵盖所有Windows命令的详细说明、参数用法及示例。
   >- **适用场景**：适合需要查找具体命令的官方定义或高级用法，例如 netstat、sc 等系统级命令。
   >- **亮点**：提供PowerShell与CMD命令的对比，帮助用户理解两种工具的差异与互补性。

2.  **ss64.com**

   > [链接直达：An A-Z Index of Windows CMD commands - SS64.com](https://ss64.com/nt/)
   >
   > - **特点**：专注命令行的参考网站，支持Windows、Linux、PowerShell等多种系统命令查询。
   > - **适用场景**：快速查找命令语法、参数说明及实际案例，例如`findstr`、`robocopy`等常用工具。
   > - **亮点**：界面简洁无广告，提供命令别名（如`ls`替代`dir`）的兼容性说明。

3. **tldr-pages 项目**

   > [链接直达：tldr pages](https://tldr.sh/)
   >
   > [cd | tldr InBrowser.App](https://tldr.inbrowser.app/pages/common/cd)
   >
   > - **特点**：社区驱动的简化版命令手册，通过实例快速掌握命令核心用法。
   > - **适用场景**：适合新手快速上手，例如“如何用`netstat`查看端口占用”等问题。
   > - **亮点**：支持离线使用（需安装客户端），内容由用户贡献，覆盖Windows、Linux等系统。

4. **ExplainShell.com**

   > [链接直达：explainshell.com - match command-line arguments to their help text](https://explainshell.com/)
   >
   > - **特点**：交互式解析命令行语句，拆分复杂命令并逐段解释功能。
   > - **适用场景**：学习复杂命令组合（如管道符`|`、重定向`>`等），例如`type 1.txt | findstr "java"`的分解说明。
   > - **亮点**：支持部分Windows命令解析，适合直观理解命令逻辑。

5. **PowerShell 官方文档**

   > [链接直达：PowerShell Documentation - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/)
   >
   > - **特点**：微软官方资源，深入讲解PowerShell脚本与命令的进阶用法。
   > - **适用场景**：需自动化任务或学习脚本编程的用户，例如服务管理、文件批量处理等。
   > - **亮点**：提供在线代码沙盒环境，可直接运行示例代码。

6. **其他补充资源**

   > - **GitHub - tldr-pages仓库**：通过社区案例学习命令的实用技巧（链接）。
   >
   > - BashrcGenerator.com：虽侧重Linux，但其“命令提示符生成器”功能可辅助自定义Windows终端的显示样式。



**总结**：

- **新手入门**优先选择 **tldr-pages** 和 **ss64.com**，快速掌握基础命令。
- **进阶学习**推荐 **Microsoft文档** 和 **PowerShell官方教程**，深入系统级操作与脚本开发。
- **交互学习**可尝试 **ExplainShell.com**，直观理解命令逻辑。



# 基础命令

本章节介绍CMD的命令

## 1、注释

- `rem`：注释，当 echo on 时支持echo回显；
- `::`：注释，不支持echo回显，不能在`()`语句块中使用。



## 2、echo和@

- echo：
  1. **回显命令内容**
     格式：echo [你的文字]
     在命令行窗口会打印命令内容
  2. **打开或关闭回显功能**
     格式：echo [{ on|off }]
  3. **输出空行**
     格式：echo. 或echo, 或echo: [>文件]
     相当于输入一个回车。可以作为其它命令的输入，比如echo.|time即相当于在TIME命令执行后给出一个回车。所以执行时系统会在显示当前时间后，自动返回到DOS提示符状态
  4. **答复命令中的提问**
     比如：C:>ECHO Y|DEL A :.，相当于执行DEL A :*.*命令时，系统确认框中直接返回Y，从而执行下一步，免去手动确认的过程
  5. **建立新文件或增加文件内容**
     格式：ECHO >文件名或ECHO 文件内容>>文件名；
  6. **使喇叭鸣响**
     格式：ECHO ^G
     **^G** 是在dos窗口中用Ctrl＋G或Alt＋007输入，输入多个^G可以产生多声鸣响
  7. **@**：表示本条命令不回显，仅在本条命令生效，优先级高于echo off；



## 3、Curl

[curl命令用法-CSDN博客](https://blog.csdn.net/u013514928/article/details/102810250)



## 4、netstat

显示活动TCP连接、计算机正在侦听的端口、以太网统计信息、IP路由表、IPv4统计信息（IP、ICMP、TCP和UDP协议）和IPv6统计信息（IPv6、ICMPv6、TCP over IPv6和UDP over IPv6协议）。当不带参数时，该命令显示活动的TCP连接。

[netstat | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat)

```cmd
# 显示 tcp/udp 统计信息
netstat -n -a
# 等同于
netstat -na

# 显示 tcp 统计信息
netstat -n -p tcp
```

**其他参考**

- [Windows 查看端口是否已打开\_如何查看当前端口开放情况-CSDN博客](https://blog.csdn.net/shenhaiwen/article/details/74252685)



## 5、telnet

测试端口是否可用

[telnet | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/telnet)

**如何退出 telnet**

- 按下 **Ctrl + ]* 组合键，这将进入 Telnet 的命令模式。
- 按下 **q** 或 **quit**



# 其他参考

- [批处理中setlocal enabledelayedexpansion的作用详细整理_set local enabledelayedexpansion-CSDN博客](https://blog.csdn.net/rhcgrys/article/details/124283862)
- [Windows BAT脚本基础教程-CSDN博客](https://blog.csdn.net/csfchh/article/details/106795352)
