# MSBuild

[Use the MSBuild XML schema to control builds - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2022)

## MSBuild Conditions

[MSBuild Conditions - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-conditions?view=vs-2022)

- [MSBuild Conditional Constructs - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-conditional-constructs?view=vs-2022)
- [MSBuild Reserved and Well-known Properties - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/msbuild-reserved-and-well-known-properties?view=vs-2022)
- [Common MSBuild Project Properties - MSBuild | Microsoft Learn](https://learn.microsoft.com/en-us/visualstudio/msbuild/common-msbuild-project-properties?view=vs-2022)
- [MSBuild properties for Microsoft.NET.Sdk - .NET | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/core/project-sdk/msbuild-props#framework-properties)

<div style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">判断是否为net45环境</div>


```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFrameworks>net45;net48;netstandard2.1;netcoreapp2.1;netcoreapp3.1</TargetFrameworks>
    </PropertyGroup>

    <PropertyGroup Condition="'$(TargetFramework.TrimEnd(`0123456789`))' == 'net'">
        <!-- Properties for .NET Framework -->
    </PropertyGroup>

</Project>
```

<div style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">net3.5;net4.0;net4.5下引入System.Windows.Forms命名空间</div>

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFrameworks>net3.5;net4.0;net4.5;netstandard2.0;net5.0;net8.0</TargetFrameworks>
    <FileVersion>1.0.0.1</FileVersion>
    <AssemblyVersion>1.0.0.1</AssemblyVersion>
    <Version>1.0.1</Version>
    <GenerateDocumentationFile>True</GenerateDocumentationFile>
  </PropertyGroup>    

  <ItemGroup Condition="'$(TargetFramework)' == 'net3.5' or '$(TargetFramework)' == 'net4.0' or '$(TargetFramework)' == 'net4.5'">
    <Reference Include="System.Windows.Forms" />
  </ItemGroup>

</Project>
```

<div style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">开发环境Debug模式下存在【配置文件名称.Debug.xml】时用此文件作为应用程序的配置文件【配置文件名称.xml】</div>

```xml
<!-- PostBuildEvent 为生成后事件 -->  
<Target Name="PostBuild" AfterTargets="PostBuildEvent" Condition="$(ConfigurationName) == 'Debug' And Exists('$(ProjectDir)\配置文件名称.$(Configuration).xml')">
    <Delete Files="$(TargetDir)\配置文件名称.xml" />
    <Copy SourceFiles="$(ProjectDir)\配置文件名称.$(Configuration).xml" DestinationFiles="$(TargetDir)\配置文件名称.xml" />
    <Message Importance="High" Text="将[$(ProjectDir)配置文件名称.$(Configuration).xml]文件拷贝到程序内做为配置文件名称.xml" />
  </Target>
```

