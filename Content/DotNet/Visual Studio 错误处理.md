# Visual Studio 错误处理

无法处理文件 因为它位于 Internet 或受限区域中，或者文件上具有 Web 标记。要想处理这些文件，请删除 Web 标记。

> ```powershell
> Get-childItem * -include *.resx -recurs | unblock-File
> ```