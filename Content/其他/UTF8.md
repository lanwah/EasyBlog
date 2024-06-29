# .NET UTF-8与UTF-8-BOM编码

MSDoc：[UTF8Encoding 类](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.utf8encoding?view=net-7.0)

### BOM与错误检测参数

| 成员                                                         | BOM    | 错误检测      |
| :----------------------------------------------------------- | :----- | :------------ |
| [Encoding.UTF8](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.encoding.utf8?view=net-7.0) | 是     | 无 (替换回退) |
| [UTF8Encoding.UTF8Encoding()](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.utf8encoding.-ctor?view=net-7.0#system-text-utf8encoding-ctor) | 否     | 无 (替换回退) |
| [UTF8Encoding.UTF8Encoding(Boolean)](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.utf8encoding.-ctor?view=net-7.0#system-text-utf8encoding-ctor(system-boolean)) | 可配置 | 无 (替换回退) |
| [UTF8Encoding.UTF8Encoding(Boolean, Boolean)](https://learn.microsoft.com/zh-cn/dotnet/api/system.text.utf8encoding.-ctor?view=net-7.0#system-text-utf8encoding-ctor(system-boolean-system-boolean)) | 可配置 | 可配置        |

## (BOM)字节顺序标记的前缀

16进制：EF-BB-BF

==注意==：使用 Encoding.UTF8 时，对应的编码方式为 <span style="color:blue;">UTF-8-BOM</span> 。