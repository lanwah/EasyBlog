# Markdown编写语法说明

[TOC]

> [!important]
>
> 此中提供的markdown编写语法说明支持此博文中的语法格式在其他markdown编辑器上不一定支持

## 提示信息

介绍提示信息的输入和显示样式。

### 重要信息

```markdown
> [!IMPORTANT]
> 重要的提示内容，格式如下面的图片，Typora中不支持因此使用图片展示
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">markdown输出：</div>

> [!IMPORTANT] 
>
> Essential information required for user success.



### 提示信息

```markdown
> [!TIP]
> 提示信息内容，格式如下面的图片，Typora中不支持因此使用图片展示
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">markdown输出：</div>

> [!TIP] 
>
> Optional information to help a user be more successful. 



### 备注信息

```markdown
> [!NOTE]
> 注意信息内容，格式如下面的图片，Typora中不支持因此使用图片展示
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">markdown输出：</div>

> [!NOTE] 
>
> Information the user should notice even if skimming. 



### 注意信息

```markdown
> [!CAUTION] 
> Negative potential consequences of an action. 
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">markdown输出：</div>

> [!CAUTION] 
>
> Negative potential consequences of an action. 



### 警告信息

```markdown
> [!WARNING] 
> Dangerous certain consequences of an action.
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">markdown输出：</div>

> [!WARNING] 
>
> Dangerous certain consequences of an action.



## 颜色文字

### 蓝色粗体文字

```xml
<div style="color:blue;font-weight:bold;font-size:16pt;">内容</div>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">显示效果：</div>

<div style="color:blue;font-weight:bold;font-size:16pt;">请在这写入内容，这为蓝色文字的效果</div>



### 黑色粗体文字

```
<div style="font-weight:bold;font-size:16pt;padding-top:15px;">内容</div>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">显示效果：</div>

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">示例内容</div>



### 高亮文字

```xml
<mark>内容</mark>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">显示效果：</div>

<mark>高亮文字内容</mark>



### 左边框字体

```xml
<div style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">内容</div>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;">显示效果：</div>

<div style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">左侧边框带宽度，颜色为蓝色</div>



### 下边框字体

```
<div style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">内容</div>
```
<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">显示效果：</div>

<div style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">左侧边框带宽度，颜色为蓝色</div>

### 红色立体标题

```html
<div style="display:inline-block;position:relative;background:#F3715D;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div>推荐标题</div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #DD6755;            border-right:5px solid #DD6755;left: 0px;bottom: -10px;"></div>
    </div>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">显示效果：</div>

<div style="display:inline-block;position:relative;background:#F3715D;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div>推荐标题</div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #DD6755;            border-right:5px solid #DD6755;left: 0px;bottom: -10px;"></div>
    </div>



### 蓝色立体标题

```html
<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div>推荐标题</div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">显示效果：</div>

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div>推荐标题</div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>

