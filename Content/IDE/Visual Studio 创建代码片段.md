# Visual Studio 创建代码片段

- [在 Visual Studio 中创建代码片段 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2022)
- [代码片段架构参考 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/ide/code-snippets-schema-reference?view=vs-2022)



## 编写代码片段

```xml
<?xml version="1.0" encoding="utf-8"?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>填入标题</Title>
            <Description>填入代码片段的描述，不需要就删除此行</Description>
            <Shortcut>代码片段快捷键，输入快捷键后连续按两次Tab将插入代码段，不需要就删除此行</Shortcut>
        </Header>
        <Snippet>
			<References>
				<Reference>
					<Assembly>填入导入的程序集，如 System.Web，不需要就删除 References 块</Assembly>
				</Reference>
			</References>
			<Imports>
				<Import>
					<Namespace>填入导入的命名空间，如 System.Web，不需要就删除 Imports 块</Namespace>
				</Import>
			</Imports>
            <Code Language="CSharp"><![CDATA[
填入代码片段
]]>
            </Code>
        </Snippet>
    </CodeSnippet>
</CodeSnippets>
```

==将上面的文件保存为  *.snippet* 文件==



## 导入代码片段

工具 -> 代码片段管理器（**Ctrl**+**K**、 **B**）

**代码片段存放位置：**

- *%USERPROFILE%\Documents\Visual Studio 2017\Code Snippets\Visual C#\My Code Snippets*
- *%USERPROFILE%\Documents\Visual Studio 2022\Code Snippets\Visual C#\My Code Snippets*



**Visual Studio 自带代码片段位置：**

- C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\VC#\Snippets\2052
- C:\Program Files\Microsoft Visual Studio\2022\Professional\VC#\Snippets\2052



## 使用代码片段

- 输入代码片段中的快捷键，然后按Tab；
- 在键盘上，按 **Ctrl**+**K**、 **X**
- 在键盘上，按 **Ctrl**+**K**、 **S**