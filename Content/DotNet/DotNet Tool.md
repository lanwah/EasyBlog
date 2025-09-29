# .NET Tool

.NET 工具是包含控制台应用程序的特殊 NuGet 包。 可以通过以下方式在计算机上安装工具：

- 作为全局工具。

  工具二进制文件安装在添加到 PATH 环境变量的默认目录中。 可以从计算机上的任何目录中调用该工具，而无需指定其位置。 工具的一个版本用于计算机上的所有目录。

- 作为自定义位置（也称为工具路径工具）中的全局工具。

  工具二进制文件安装在指定的位置。 可以通过向目录提供命令名称或将目录添加到 PATH 环境变量，从安装目录中调用该工具。 工具的一个版本用于计算机上的所有目录。

- 作为本地工具（适用于 .NET Core SDK 3.0 及更高版本）。

  工具二进制文件安装在默认目录中。 可以从安装目录或其任何子目录中调用该工具。 不同的目录可以使用相同工具的不同版本。

  .NET CLI 使用清单文件跟踪作为目录本地安装的工具。 当清单文件保存在源代码存储库的根目录中时，参与者可以克隆存储库并调用单个 .NET CLI 命令来安装清单文件中列出的所有工具。



- [.NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/)

- [.NET 工具 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/global-tools)
  - [教程：创建 .NET 工具 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/global-tools-how-to-create)
  - [教程：安装和使用 .NET 全局工具 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/global-tools-how-to-use)
  - [教程：安装和使用 .NET 本地工具 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/local-tools-how-to-use)
- [dotnet tool install 命令 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/dotnet-tool-install)

​	

```powershell
# 查看安装的本地工具
dotnet tool list

# 查看安装的全局工具，全局路径一般在 C:\Users\<用户名>\.dotnet 目录，比如 C:\Users\Fishel\.dotnet
dotnet tool list -g

# 打 nuget 包，输出到 nupkg 目录，注意项目的 csproj 文件中的配置，比如 PropertyGroup 下的
# <PackAsTool>true</PackAsTool>
# <ToolCommandName>EasyNet.Calc</ToolCommandName>
# <PackageOutputPath>./nupkg</PackageOutputPath>
# <Version>1.0.4</Version>
dotnet pack

# 安装本地 dotnet tool 工具
# 1. 通过运行 dotnet new 命令创建清单文件
dotnet new tool-manifest
# 2. 通过本地nuget包目录安装本地工具
dotnet tool install --add-source .\nupkg SimpleOperationTool

# 从本地的 nupkg 目录中更新 SimpleOperationTool
dotnet tool update --add-source .\nupkg SimpleOperationTool

# 运行本地工具，注意 EasyNet.Calc 为工具的名称，在 csproj 中有设置。
dotnet tool run EasyNet.Calc Add 1 2
```