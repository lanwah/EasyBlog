# PowerShell

[TOC]

---

PowerShell 是一种跨平台的任务自动化解决方案，由命令行 shell、脚本语言和配置管理框架组成。 PowerShell 在 Windows、Linux 和 macOS 上运行。

[MS Doc PowerShell](https://learn.microsoft.com/zh-cn/powershell/)

## 确定当前PowerShell版本

在 PowerShell 控制台中输入

```powershell
$PSVersionTable
```

## PowerShell命令参考

[Get-Help](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-help?view=powershell-7.4)

## 命令行 Shell

PowerShell 是新式命令 shell，其中包括其他常用 shell 的最佳功能。 与大多数仅接受并返回文本的 shell 不同，PowerShell 接受并返回 .NET 对象。 shell 包括以下功能：

- 可靠的命令行[历史记录](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_history)
- Tab 自动补全和命令预测（请参阅 [about_PSReadLine](https://learn.microsoft.com/zh-cn/powershell/module/psreadline/about/about_psreadline)）
- 支持命令和参数[别名](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_aliases)
- 用于链接命令的[管道](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_pipelines)
- 控制台内[帮助](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/get-help)系统，类似于 Unix `man` 页面

## 脚本语言

作为一种脚本语言，PowerShell 通常用于自动执行系统管理。 它还用于经常在 CI/CD 环境中生成、测试和部署解决方案。 PowerShell 是在 .NET 公共语言运行时 (CLR) 上构建的。 所有输入和输出都是 .NET 对象。 无需分析文本输出即可从输出中提取信息。 PowerShell 脚本语言包含以下功能：

- 可通过[函数](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_functions_advanced)、[类](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_classes)、[脚本](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_scripts)和[模块](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_modules)进行扩展
- 便于输出的可扩展[格式系统](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_format.ps1xml)
- 用于创建动态类型的可扩展[类型系统](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_types.ps1xml)
- 对常用数据格式（例如 [CSV](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-csv)、[JSON](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertfrom-json) 和 [XML](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/convertto-xml)）的内置支持

## 自动化平台

PowerShell 的可扩展性质使 PowerShell 模块的生态系统能够部署和管理使用的几乎所有技术。 例如：

Microsoft

- [Azure](https://learn.microsoft.com/zh-cn/powershell/azure)
- [Windows](https://learn.microsoft.com/zh-cn/powershell/windows/get-started)
- [Exchange](https://learn.microsoft.com/zh-cn/powershell/exchange/exchange-management-shell)
- [SQL](https://learn.microsoft.com/zh-cn/sql/powershell/sql-server-powershell)

第三方

- [AWS](https://aws.amazon.com/powershell/)
- [VMWare](https://core.vmware.com/vmware-powercli)
- [Google Cloud](https://cloud.google.com/powershell/)

### 配置管理

PowerShell Desired State Configuration ([DSC](https://learn.microsoft.com/zh-cn/powershell/scripting/dsc/overview/dscforengineers)) 是 PowerShell 中的一个管理框架，可让你使用“配置即代码”来管理企业基础结构。 借助 DSC 可以：

- 为可重复部署创建声明性[配置](https://learn.microsoft.com/zh-cn/powershell/scripting/dsc/configurations/configurations)和自定义脚本
- 强制执行配置设置并报告配置偏移
- 使用[推送或请求](https://learn.microsoft.com/zh-cn/powershell/scripting/dsc/pull-server/enactingconfigurations)模型部署配置

## PowerShell Markdown最佳做法

[Markdown best practices](https://learn.microsoft.com/zh-cn/powershell/scripting/community/contributing/general-markdown?view=powershell-7.4)

## PowerShell相关学习模块

[PowerShell](https://learn.microsoft.com/zh-cn/training/browse/?terms=PowerShell)

- [PowerShell 简介](https://learn.microsoft.com/zh-cn/training/modules/introduction-to-powershell/)
- [Windows PowerShell 入门](https://learn.microsoft.com/zh-cn/training/paths/get-started-windows-powershell/)
- [编写你的第一个 PowerShell 代码](https://learn.microsoft.com/zh-cn/training/modules/powershell-write-first/)

### PowerShell cmdlet

PowerShell 随附数百个预安装命令。 PowerShell 命令称为 cmdlet（读作 command-let）。

每个 cmdlet 的名称都包含一个“谓词-名词”对。 例如 `Get-Process`。 这种命名约定便于人们了解 cmdlet 的作用。 还能让你更轻松地找到所查找的命令。 当你查找要使用的 cmdlet 时，可以根据谓词或名词进行筛选。

#### 使用 cmdlet 探索 PowerShell

当你第一次学习 PowerShell 时，它可能会让人望而生畏，因为似乎要学习许多内容。 PowerShell 经过专门设计，你可以在需要它时一次学习少量知识。

PowerShell 包含 cmdlet，它们可帮助你探索 PowerShell。 通过使用下面三个 cmdlet，可以了解有哪些命令可用、这些命令执行什么操作，以及它们在什么类型上运行。

- `Get-Verb`。 运行此命令时，将返回大多数命令遵循的谓词的列表。 响应包括有关这些谓词的功能的说明。 由于大多数命令都遵循这种命名约定，因此它对命令的功能设置了预期目标。 如果你要创建命令，这有助于选择适当的命令和命令名称。
- `Get-Command`。 此命令会检索计算机上安装的所有命令的列表。
- `Get-Member`。 它在基于对象的输出上运行，并且能够发现可用于命令的对象、属性和方法。
- `Get-Help`。 以命令名称为参数调用此命令，将显示一个帮助页面，其中说明了命令的各个部分。

通过使用这些命令，可以了解几乎所有关于 PowerShell 的知识。

#### 谓词

谓词是 PowerShell 中的一个重要概念。 它是大多数 cmdlet 都遵循的一种命名标准。 你在编写自己的命令时，也应遵循此命名标准。 其中的思路是，谓词表示你尝试执行的操作，例如读取数据或更改数据。 PowerShell 有一个标准化的谓词列表。 要获取所有可用谓词的完整列表，请使用 `Get-Verb` cmdlet：

```powershell
Get-Verb
```

cmdlet 返回一个很长的谓词列表。 “说明”为谓词的用途提供上下文。 下面是前几行的输出：

```Output
Verb    AliasPrefix   Group     Description
----    -----------   -----     -----------
Add     a             Common    Adds a resource to a container, or attaches an item to another item
Clear   cl            Common    Removes all the resources from a container but does not delete the container
Close   cs            Common    Changes the state of a resource to make it inaccessible, unavailable, or unusab…
Copy    cp            Common    Copies a resource to another name or to another container
Enter   et            Common    Specifies an action that allows the user to move into a resource
Exit    ex            Common    Sets the current environment or context to the most recently used context
...
```

### 使用 Get-Command 查找命令

`Get-Command` cmdlet 将返回系统上安装的所有可用命令的列表。 返回的列表会非常大。 可以通过使用参数或帮助程序 cmdlet 筛选响应来限制返回的信息量。



#### 根据名称筛选

你可以使用不同的参数筛选 `Get-Command` 的输出。 通过筛选，可以查找具有特定属性的命令。 使用 Name 参数，可以按名称查找特定命令。

```powershell
Get-Command -Name Get-Process
```

```Output
CommandType     Name              Version    Source
-----------     ----              -------    ------
Cmdlet          Get-Process       7.0.0.0    Microsoft.PowerShell.Management
```

如果想要查找所有适用于进程的命令，该怎么办？ 可以使用通配符 `*` 来匹配其他形式的字符串。 例如：

```powershell
Get-Command -Name *-Process
```

```Output
CommandType     Name              Version    Source
-----------     ----              -------    ------
Cmdlet          Debug-Process     7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Get-Process       7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Start-Process     7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Stop-Process      7.0.0.0    Microsoft.PowerShell.Management
Cmdlet          Wait-Process      7.0.0.0    Microsoft.PowerShell.Management
```

### 根据名词和谓词进行筛选

还有其他可筛选谓词和名词值的参数。 命令名称的谓词部分位于最左侧。 谓词应为 `Get-Verb` cmdlet 返回的值之一。 命令的最右边是名词部分。 名词可以是任何内容。

- 根据谓词进行筛选。 在命令 `Get-Process` 中，谓词部分为 `Get`。 要筛选谓词部分，请使用 Verb 参数。

  ```powershell
  Get-Command -Verb 'Get'
  ```

  此示例列举出使用谓词 `Get` 的所有命令。

- 根据名词进行筛选。 在命令 `Get-Process` 中，名词部分是 `Process`。 要筛选名词，请使用 Noun 参数。 以下示例返回包含以字母 `U` 开头的名词的所有 cmdlet。

  ```powershell
  Get-Command -Noun U*
  ```

此外，还可以组合参数来缩小搜索范围，例如：

```powershell
Get-Command -Verb Get -Noun U*
```

```Output
CommandType     Name                         Version    Source
-----------     ----                         -------    ------
Cmdlet          Get-UICulture                7.0.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-Unique                   7.0.0.0    Microsoft.PowerShell.Utility
Cmdlet          Get-Uptime                   7.0.0.0    Microsoft.PowerShell.Utility
```

#### 使用帮助程序 cmdlet 筛选结果

还可以使用其他 cmdlet 来筛选结果。

- `Select-Object`。 此通用命令可帮助你从一个或多个对象中选取特定属性。 还可以限制返回的项目数。 以下示例返回当前会话中前 5 个可用命令的 Name 和 Source 属性值。

  ```powershell
  Get-Command | Select-Object -First 5 -Property Name, Source
  ```

  ```Output
  Name                      Source
  ----                      ------
  Add-AppPackage            Appx
  Add-AppPackageVolume      Appx
  Add-AppProvisionedPackage Dism
  Add-AssertionOperator     Pester
  Add-ProvisionedAppPackage Dism
  ```

  有关详细信息，请参阅 [Select-Object](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/select-object?view=powershell-7.4)。

- `Where-Object`。 此 cmdlet 允许根据属性值筛选返回的对象。 命令采用可以测试属性值的表达式。 以下示例返回以 `p` 开头的 `ProcessName` 的所有进程。

  ```powershell
  Get-Process | Where-Object {$_.ProcessName -like "p*"}
  ```

  `Get-Process` cmdlet 返回进程对象的集合。 要对响应进行筛选，可以使用管道将输出“发送”到 `Where-Object`。 使用管道“发送”表示通过管道 `|` 字符连接两个或更多个命令。 一个命令的输出作为下一个命令的输入发送。 `Where-Object` 的筛选表达式使用 `-like` 运算符来匹配以字母 `p` 开头的进程。

## 使用 Get-Member 浏览对象

当你能够找到所需的 cmdlet 后，需要进一步了解它生成的内容， `Get-Member` cmdlet 将显示对象的类型、属性和方法。 将你要检查的输出发送到 `Get-Member`。

```powershell
Get-Process | Get-Member
```

结果显示返回的 `TypeName` 类型以及对象的所有属性和方法。 下面是此类结果的一段摘录：

```Output
TypeName: System.Diagnostics.Process

Name        MemberType     Definition
----        ----------     ----------
Handles     AliasProperty  Handles = Handlecount
Name        AliasProperty  Name = ProcessName
...
```

使用 MemberType 参数可以限制返回的信息。

```powershell
Get-Process | Get-Member -MemberType Method
```

默认情况下，PowerShell 仅显示几个属性。 前面的示例显示了 `Name`、`MemberType` 和 `Definition` 成员。 可以使用 `Select-Object` 来指定要查看的属性。 例如，你希望仅显示 `Name` 和 `Definition` 属性：

```powershell
Get-Process | Get-Member | Select-Object Name, Definition
```

### 按参数类型搜索

`Get-Member` 向我们展示了 `Get-Process` 返回 Process 类型对象。 `Get-Command` 的 ParameterType 参数可用于查找将 Process 对象作为输入的其他命令。

```powershell
Get-Command -ParameterType Process
```

```Output
CommandType     Name                         Version    Source
-----------     ----                         -------    ------
Cmdlet          Debug-Process                7.0.0.0    Microsoft.PowerShell.Managem…
Cmdlet          Enter-PSHostProcess          7.1.0.0    Microsoft.PowerShell.Core
Cmdlet          Get-Process                  7.0.0.0    Microsoft.PowerShell.Managem…
Cmdlet          Get-PSHostProcessInfo        7.1.0.0    Microsoft.PowerShell.Core
Cmdlet          Stop-Process                 7.0.0.0    Microsoft.PowerShell.Managem…
Cmdlet          Wait-Process                 7.0.0.0    Microsoft.PowerShell.Managem…
```

了解命令的输出类型有助于缩小相关命令的搜索范围。

## 相关参考

1.  [探索 PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/discover-powershell?view=powershell-7.4)
