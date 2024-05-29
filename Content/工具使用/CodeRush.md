# CodeRush

此文用于记录CodeRush的使用和配置。

## CodeRush常用快捷键

### [Keyboard Shortcuts]([Keyboard Shortcuts | CodeRush | DevExpress Documentation](https://docs.devexpress.com/CodeRushForRoslyn/403630/getting-started/keyboard-shortcuts))

1. [Shortcuts](https://docs.devexpress.com/CodeRushForRoslyn/403628/getting-started/keyboard-shortcuts/shortcuts)

2. [Caps as a Modifier](https://docs.devexpress.com/CodeRushForRoslyn/403629/getting-started/keyboard-shortcuts/caps-as-a-modifier)

3. [CodeRush Shortcuts](https://docs.devexpress.com/CodeRushForRoslyn/401983/getting-started/keyboard-shortcuts/coderush-shortcuts)

### 常用快捷键

| 快捷键               | 功能说明                                                     | 前置条件                                                     |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `CapsLock + Space`   | **折叠代码：**<br />1、显示/隐式转换；<br />2、表达式和非表达式转换；<br />3、分解初始化/非分解初始化；<br />4、变量内联。 | 焦点在要处理的代码行上                                       |
| `CapsLock + Delete`  | **删除未使用的代码：**<br />1、删除多余的类型限定符；<br />2、删除未使用的函数；<br />3、删除未使用的参数。 | 焦点在要处理的代码行上                                       |
| `CapsLock + Insert`  | **新增代码：**<br />1、新增函数参数；<br />2、生成基类构造函数；<br />3、向接口中添加属性或函数。 | 焦点在要处理的代码行上                                       |
| `CapsLock + Up/Down` | 在方法间移动                                                 | 焦点在方法的定义上                                           |
| `Alt + Up/Down`      | 切换方法的访问修饰符（默认不启用）                           | 焦点在方法的定义上                                           |
| `CTRL+C`             | 复制                                                         | 编辑器有焦点                                                 |
| `CTRL+X`             | 剪切                                                         | 编辑器有焦点                                                 |
| `CTRL+W`             | 扩大选择                                                     | 编辑器有焦点                                                 |
| `CTRL+SHIFT+W`       | 减少选择                                                     | 编辑器有焦点                                                 |
| `/`                  | 添加注释/取消注释                                            | 选择多行文本<br />选择的是一行文本此快捷键不生效<br />按数字键盘上的/此快捷键不生效 |
| `B`                  | 添加 {} 形成代码块                                           | 选择多行文本                                                 |
| `C`                  | 添加 try/catch 代码块                                        | 选择多行文本                                                 |
| `T`                  | 添加 try/catch/finally 代码块                                | 选择多行文本                                                 |
| `F`                  | 添加 try/finally 代码块                                      | 选择多行文本                                                 |
|                      |                                                              |                                                              |
|                      |                                                              |                                                              |



## 相关文档下载

[CodeRush 快捷键和模板](./CodeRush/CodeRushShortcutsAndTemplates.pdf)

[CodeRush学习指引项目](./CodeRush/LearningSolution.rar)

## Q&A

<span style="color:blue;font-weight:bold;">Num+/Num- 快捷键是什么？</span>

> [!TIP]
>
> 此两个快捷键是指数字键盘上的 + 号和 - 号，此两个快捷键默认是不启用的。详见
>
> ![image-20240528190805491](../Images/CodeRush/image-20240528190805491.png)

<span style="color:blue;font-weight:bold;">Visual Studio智能感知与CodeRush冲突如何解决？</span>

> ![image-20240529182001720](../Images/CodeRush/image-20240529182001720.png)
>
> 此处的配置解决了两个问题：
>
> 1. CodeRush模块输入高于IDE的智能感知；
> 2. IDE中支持输入.或,输入，以便CodeRush模板中需要的组合输入，比如输入：`nd.s,i` 触发的是 `Dictionary<string, int> dictionary = new Dictionary<string, int>();`

