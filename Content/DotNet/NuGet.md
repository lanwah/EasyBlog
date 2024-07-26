# NuGet包管理

[TOC]

---

## NuGet 简介

![hand-right](../Images/Common/hand-right.png) [NuGet 简介](https://learn.microsoft.com/zh-cn/nuget/what-is-nuget)

## 在 Visual Studio 中使用 NuGet 包管理器安装、更新、卸载和管理包

通过 Microsoft Visual Studio for Windows 中的 NuGet 包管理器 UI，可轻松安装、卸载和更新项目和解决方案中的 NuGet 包。

![hand-right](../Images/Common/hand-right.png) [使用 NuGet 包管理器在 Visual Studio 中安装和管理包](https://learn.microsoft.com/zh-cn/nuget/consume-packages/install-use-packages-visual-studio)

## NuGet常用命令

![hand-right](../Images/Common/hand-right.png) [dotnet nuget](https://learn.microsoft.com/zh-cn/dotnet/core/tools/dotnet-nuget-delete)

![hand-right](../Images/Common/hand-right.png) [PowerShell 参考](https://learn.microsoft.com/zh-cn/nuget/reference/powershell-reference)

### 1. 推送包到服务器

[dotnet nuget push](https://learn.microsoft.com/zh-cn/dotnet/core/tools/dotnet-nuget-push)

   > **命令：**
   >
   > ```shell
   > dotnet nuget push [<ROOT>] [-d|--disable-buffering] [--force-english-output]
   >     [--interactive] [-k|--api-key <API_KEY>] [-n|--no-symbols]
   >     [--no-service-endpoint] [-s|--source <SOURCE>] [--skip-duplicate]
   >     [-sk|--symbol-api-key <API_KEY>] [-ss|--symbol-source <SOURCE>]
   >     [-t|--timeout <TIMEOUT>]
   > 
   > dotnet nuget push -h|--help
   > dotnet nuget push -k 密钥 -s nuget服务地址 nuget包地址
   > ```
   >
   > **示例：**
   >
   > ```shell
   > # 将E:\LinkC\Desktop\cef.redist.x86.109.1.11.nupkg 推送到 http://192.168.10.144:9001/v3/index.json
   > dotnet nuget push -k qwerty123456 -s http://192.168.10.144:9001/v3/index.json E:\LinkC\Desktop\cef.redist.x86.109.1.11.nupkg
   > 
   > # 将 foo.nupkg 推送到 NuGet 配置文件中指定的默认推送源（使用 API 密钥）：
   > dotnet nuget push foo.nupkg -k 4003d786-cc37-4004-bfdf-c4f3e8ef9b3a
   > 
   > # 将 foo.nupkg 推送到官方 NuGet 服务器，以指定 API 密钥：
   > dotnet nuget push foo.nupkg -k 4003d786-cc37-4004-bfdf-c4f3e8ef9b3a -s https://api.nuget.org/v3/index.json
   > 
   > # 将 foo.nupkg 推送到自定义推送源 https://customsource（指定 API 密钥） ：
   > dotnet nuget push foo.nupkg -k 4003d786-cc37-4004-bfdf-c4f3e8ef9b3a -s https://customsource/
   > 
   > # 将 foo.nupkg 推送到 NuGet 配置文件中指定的默认推送源：
   > dotnet nuget push foo.nupkg
   > 
   > # 将 foo.symbols.nupkg 推送到默认符号源 ：
   > dotnet nuget push foo.symbols.nupkg
   > 
   > # 将 foo.nupkg 推送到 NuGet 配置文件中指定的默认推送源（超时 360 秒）：
   > dotnet nuget push foo.nupkg --timeout 360
   > 
   > # 将当前目录中的所有 .nupkg 文件推送到 NuGet 配置文件中指定的默认推送源：
   > dotnet nuget push "*.nupkg"
   > 
   > # 将所有 .nupkg 文件推送到 NuGet 配置文件中指定的默认推送源，即使 HTTP(S) 服务器返回“409 Conflict”响应也是如此：
   > dotnet nuget push "*.nupkg" --skip-duplicate
   > 
   > # 将所有 .nupkg 文件推送到 NuGet 配置文件中指定的默认推送源，即使 HTTP(S) 服务器返回“409 Conflict”响应也是如此：
   > dotnet nuget push "*.nupkg" --skip-duplicate
   > 
   > # 将当前目录中的所有 .nupkg 文件推送到本地源目录 ：
   > dotnet nuget push "*.nupkg" -s c:\mydir
   > ```
   >

### 2. 安装包

[Install-Package（Visual Studio 中的包管理器控制台）](https://learn.microsoft.com/zh-cn/nuget/reference/ps-reference/ps-ref-install-package)

> **命令：**
>
> ```shell
> Install-Package [-Id] <string> [-IgnoreDependencies] [-ProjectName <string>] [[-Source] <string>]     [[-Version] <string>] [-IncludePrerelease] [-FileConflictAction] [-DependencyVersion]    [-WhatIf] [<CommonParameters>]
> ```
>
> **例如：**
>
> ```shell
> # Installs the latest version of Elmah from the current source into the default project
> Install-Package Elmah
> 
> # Installs Glimpse 1.0.0 into the MvcApplication1 project
> Install-Package Glimpse -Version 1.0.0 -Project MvcApplication1
> 
> # Installs Ninject.Mvc3 but not its dependencies from c:\temp\packages
> Install-Package Ninject.Mvc3 -IgnoreDependencies -Source c:\temp\packages
> 
> # Installs the package listed on the online packages.config into the current project
> # Note: the URL must end with "packages.config"
> Install-Package https://raw.githubusercontent.com/linked-data-dotnet/json-ld.net/master/.nuget/packages.config
> 
> # Installs jquery 1.10.2 package, using the .nupkg file under local path of c:\temp\packages
> Install-Package c:\temp\packages\jQuery.1.10.2.nupkg
> 
> # Installs the specific online package
> # Note: the URL must end with ".nupkg"
> Install-Package https://globalcdn.nuget.org/packages/microsoft.aspnet.mvc.5.2.3.nupkg
> ```
>

### 3. 更新/重新安装包

[Update-Package（Visual Studio 中的包管理器控制台）](https://learn.microsoft.com/zh-cn/nuget/reference/ps-reference/ps-ref-update-package)

> **命令：**
>
> ```shell
> Update-Package [-Id] <string> [-IgnoreDependencies] [-ProjectName <string>] [-Version <string>]
>     [-Safe] [-Source <string>] [-IncludePrerelease] [-Reinstall] [-FileConflictAction]
>     [-DependencyVersion] [-ToHighestPatch] [-ToHighestMinor] [-WhatIf] [<CommonParameters>]
> ```
>
> **例如：**
>
> ```shell
> # Updates all packages in every project of the solution
> Update-Package
> 
> # Updates every package in the MvcApplication1 project
> Update-Package -ProjectName MvcApplication1
> 
> # Updates the Elmah package in every project to the latest version
> Update-Package Elmah
> 
> # Updates the Elmah package to version 1.1.0 in every project showing optional -Id usage
> Update-Package -Id Elmah -Version 1.1.0
> 
> # Updates the Elmah package within the MvcApplication1 project to the highest "safe" version.
> # For example, if Elmah version 1.0.0 of a package is installed, and versions 1.0.1, 1.0.2,
> # and 1.1 are available in the feed, the -Safe parameter updates the package to 1.0.2 instead
> # of 1.1 as it would otherwise.
> Update-Package Elmah -ProjectName MvcApplication1 -Safe
> 
> # Reinstall the same version of the original package, but with the latest version of dependencies
> # (subject to version constraints). If this command rolls a dependency back to an earlier version,
> # use Update-Package <dependency_name> to reinstall that one dependency without affecting the
> # dependent package.
> Update-Package Elmah –reinstall
> 
> # Reinstall the Elmah package in just MyProject
> Update-Package Elmah -ProjectName MyProject -reinstall
> 
> # Reinstall the same version of the original package without touching dependencies.
> Update-Package Elmah –reinstall -ignoreDependencies
> ```

### 4. 查找包

[Get-Package（Visual Studio 中的包管理器控制台）](https://learn.microsoft.com/zh-cn/nuget/reference/ps-reference/ps-ref-get-package)

> **命令：**
>
> ```shell
> Get-Package -Source <string> [-ListAvailable] [-Updates] [-ProjectName <string>]
>     [-Filter <string>] [-First <int>] [-Skip <int>] [-AllVersions] [-IncludePrerelease]
>     [-PageSize] [<CommonParameters>]
> ```
>
> **例如：**
>
> ```shell
> # Lists the packages installed in the current solution
> # 列出当前解决方案中安装的所有包
> Get-Package
> 
> # 列出安装了某个包的所有项目
> Get-Package PackageName
> 
> # Lists the packages installed in a project
> Get-Package -ProjectName MyProject
> 
> # Lists packages available in the current package source
> Get-Package -ListAvailable
> 
> # Lists 30 packages at a time from the current source, and prompts to continue if more are available
> Get-Package -ListAvailable -PageSize 30
> 
> # Lists packages with the Ninject keyword in the current source, up to 50
> Get-Package -ListAvailable -Filter Ninject
> 
> # List all versions of packages matching the filter "jquery"
> Get-Package -ListAvailable -Filter jquery -AllVersions
> 
> # Lists packages installed in the solution that have available updates
> Get-Package -Updates
> 
> # Lists packages installed in a specific project that have available updates
> Get-Package -Updates -ProjectName MyProject
> ```

### 5. 卸载包

[Uninstall-Package（Visual Studio 中的包管理器控制台）](https://learn.microsoft.com/zh-cn/nuget/reference/ps-reference/ps-ref-uninstall-package)

> **命令：**
>
> ```shell
> Uninstall-Package [-Id] <string> [-RemoveDependencies] [-ProjectName <string>] [-Force]
>     [-Version <string>] [-WhatIf] [<CommonParameters>]
> ```
>
> **例如：**
>
> ```shell
> # Uninstalls the Elmah package from the default project
> Uninstall-Package Elmah
> 
> # Uninstalls the Elmah package and all its unused dependencies
> Uninstall-Package Elmah -RemoveDependencies
> 
> # Uninstalls the Elmah package even if another package depends on it
> Uninstall-Package Elmah -Force
> ```

## NuGet包服务器

### NuGet.Server

![hand-right](../Images/Common/hand-right.png) [NuGet.Server](https://learn.microsoft.com/zh-cn/nuget/hosting-packages/nuget-server)

NuGet.Server 是由 .NET Foundation 提供的包，其创建的 ASP.NET 应用程序可在运行 IIS 的任何服务器上托管包源。 简而言之，NuGet.Server 通过 HTTP（尤其是 OData）在服务器上提供文件夹。 其设置方法十分简单，最适用于简单的方案。

1. 在 Visual Studio 中创建空的 ASP.NET Web 应用程序并向其添加 NuGet.Server 包。
2. 配置应用程序中的 `Packages` 文件夹并添加包。
3. 将应用程序部署到适合的客户端。

以下各节使用 C# 详细演练此过程。

如果对 NuGet.Server 有进一步的疑问，请在 https://github.com/nuget/NuGetGallery/issues 上创建问题。

### BaGet

![hand-right](../Images/Common/hand-right.png) [BaGet](https://github.com/lanwah/BaGet)

https://loic-sharma.github.io/BaGet/

BaGet (pronounced "baguette") is a lightweight NuGet and symbol server. It is [open source](https://github.com/loic-sharma/BaGet), cross-platform, and cloud ready!

## 常见的 NuGet 配置

NuGet 的行为受一个或多个 `NuGet.Config` (XML) 文件中累积设置驱动，这些文件可以存在于解决方案（如果不使用解决方案，则存在项目）、用户和计算机级别。 还可以使用全局 `NuGetDefaults.Config` 文件专门配置包源。 这些设置应用于 CLI、包管理器控制台和包管理器 UI 中发出的所有命令。

![hand-right](../Images/Common/hand-right.png) [常见的 NuGet 配置](https://learn.microsoft.com/zh-cn/nuget/consume-packages/configuring-nuget-behavior)

## nuget.config 参考

NuGet 行为由不同 `NuGet.Config` 或 `nuget.config` 文件中的设置来控制，如[常见 NuGet 配置](https://learn.microsoft.com/zh-cn/nuget/consume-packages/configuring-nuget-behavior)中所述。

`nuget.config` 是包含顶级 `<configuration>` 节点的 XML 文件，而该节点包含本主题中所述的节元素。 每个部分均包含零个或多个项。 请参阅[示例配置文件](https://learn.microsoft.com/zh-cn/nuget/reference/nuget-config-file#example-config-file)。 设置名称不区分大小写，并且值可以使用[环境变量](https://learn.microsoft.com/zh-cn/nuget/reference/nuget-config-file#using-environment-variables)。

![hand-right](../Images/Common/hand-right.png) [nuget.config 参考](https://learn.microsoft.com/zh-cn/nuget/reference/nuget-config-file)

## 相关参考

1. [dotnet nuget](https://learn.microsoft.com/zh-cn/dotnet/core/tools/dotnet-nuget-delete)
1. [PowerShell 参考](https://learn.microsoft.com/zh-cn/nuget/reference/powershell-reference)
1. [修改项目中packages包目录](https://www.cnblogs.com/lanwah/p/18005414)
1. [NuGet的使用、部署、搭建私有服务](https://www.cnblogs.com/Jack-Blog/p/7890369.html)
