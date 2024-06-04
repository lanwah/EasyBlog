# Git命令

[toc]

---

## 提交修改并推送

保存修改到本地仓库并推送至服务器。

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看文件状态</h3>

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-status">git status</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:25px;"></p>

 ```bash
git status -s
 ```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">添加提交文件</h3>

需要先添加提交文件（建立并提交索引）才能进行提交操作。

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-add">git add</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:25px;"></p>


```bash
git add .
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销提交文件</h3>

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-reset">git reset</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:25px;"></p>


```bash
git reset
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">提交修改</h3>

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-commit">git commit</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:25px;"></p>


```bash
git commit -m “提交的说明”
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">提交推送到远程仓库</h3>

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-push">git push</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:25px;"></p>


```bash
git push
```




## 暂存

暂存本地修改，然后把修改的文件恢复到修改之前。

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-stash">git-stash</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>


<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">暂存分支修改</h3>


```bash
git stash
// 或
git stash save 暂存名称
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看暂存信息</h3>

```bash
git stash list
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">恢复暂存修改，但不删除暂存</h3>

```bash
git stash apply
```

```bash
git stash apply 0 
// 等同于
git stash apply stash@{0}
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">删除暂存</h3>

<span style="color:red;">注意：</span>直接删除暂存则暂存的信息将丢失

```bash
git stash drop
```

```bash
git stash drop 0
// 等同于
git stash drop stash@{0}
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">恢复并删除暂存</h3>


```bash
git stash pop 0
// 等同于
git stash pop stash@{0}
```



## 分支操作

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-branch">git branch</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">查看分支</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看本地分支情况</h3>

1、可以查看本地分支名称与当前分支（*号开头的为当前分支）

```bash
git branch
```

2、以下命令支持通配符过滤，-l 为 --list的简写方式，格式为 git branch --list 通配符筛选

```bash
git branch --list
```

同

```bash
git branch -l
```

列出本地分支中以d开头的分支

```bash
git branch -l d*
```

3、列出本地分支名称，sha1，及最后一次提交信息

```bash
git branch -v
```

带上上游分支名称

```bash
git branch -vv
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看远程分支情况</h3>

```bash
git branch -r
```

同样支持和 -l 一起使用

```bash
git branch -r -l *main
```




<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看本地分支和远程分支情况</h3>


```bash
git branch -a
```

支持与 --list 一起使用，比如如下的命令实现显示本地及远程分支中的main分支。

```
git branch -a -l *main
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看本地分支和追踪情况</h3>


```bash
git remote show origin
```

---


<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">创建分支</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">以当前分支为基准分支创建新的分支</h3>

1、创建分支不改变当前分支

```bash
git branch 分支名称
// 例如，当前分支为main分支，创建mainNew分支
git branch mainNew
```

根据指定的基线分支创建新的分支

```
git branch 分支名称 远程分支名称
// 例如，以远程 origin/dev 为基线创建 dev 分支
git branch dev origin/dev
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">把远程分支同步到本地</h3>


```bash
git remote prune origin
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">删除本地分支</h3>


```bash
git branch -D 分支名称
// 例如：
git branch -D feature/chatfix
```



## 参考文章：

1. [git同步远程已删除的分支和删除本地多余的分支](https://www.cnblogs.com/saysmy/p/9166331.html)

1. [git常用命令-提交代码](https://www.cnblogs.com/nicoz/p/16968374.html)

