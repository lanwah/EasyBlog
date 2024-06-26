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



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">Stage Change（添加修改文件/暂存修改文件） 并提交修改</h3>

```bash
git commit -a -m “提交的说明”
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

推送并设置远端分支

```bash
git push --set-upstream origin 分支名称

// 例如：
git push --set-upstream origin develop
```

<a id="git_push_origin">把本地分支推送到远端指定分支</a>

```bash
// 把本地分支推送到远端master分支
git push origin HEAD:master
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



## 撤销未提交的修改

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-checkout">git-checkout</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

修改还未提交（commit），那么可以用以下命令进行恢复。

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销单个文件的修改</h3>

```bash
git checkout -- 修改的文件名
```

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">例如</div>

```bash
git checkout -- demo/ReadMe.txt
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销所有未提交的修改</h3>

```bash
git checkout -- .
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">删除工作区中所有未跟踪的文件和目录（比如新添加的文件，但还没有添加到暂存区的）</h3>

```bash
git clean -fd
```



<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://blog.csdn.net/weixin_38803409/article/details/132962409">git-restore</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

版本要求：Git 2.23版本及以上版本

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销工作区中所有的修改</h3>

```bash
git restore .
```

撤销工作区中单个文件的修改

```bash
git restore 文件名称
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">取消暂存（把暂存区中的文件恢复到工作区）</h3>

```bash
git restore --stage .
```

取消单个文件的暂存，使其恢复到工作区

```bash
git restore --stage 文件名称
```



## 撤销已提交的修改

本节介绍通过 git commit 已经提交了的代码如何进行撤销。

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-reset">git-reset</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

git-reset - Reset current HEAD to the specified state

> [!TIP]
>
> ==HEAD== 可以是小写的。
>
> HEAD^` 意思是上一个版本，也可以写成 `HEAD~1。

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销commit，撤销add，撤销代码</h3>

```bash
git reset --hard HEAD^
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销commit，撤销add，不撤销代码</h3>

保留所作的代码修改，修改的代码在本地工作区（未 add 的状态）。

```bash
git reset HDAD^
```

同

```bash
git reset --mixed HEAD^
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">撤销commit，不撤销add</h3>

不撤销add自然也就不会撤销修改的代码，此时已修改的代码时已经add到暂存区的状态（已 add 的状态）。

```bash
git reset --soft HEAD^
```



### 其他参考

[git commit 撤销的三种方法_git撤销commit-CSDN博客](https://blog.csdn.net/weixin_45678402/article/details/134663161)



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

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">以当前分支为基准创建新的分支</h3>

1、创建分支不改变当前分支

```bash
git branch 分支名称
// 例如，当前分支为main分支，创建mainNew分支
git branch mainNew
```


2、创建分支并切换当前分支到新分支，推荐使用git switch

```bash
git switch -c mainclone
```

或

```bash
git checkout -b mainclone
```

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">根据指定的基线分支创建新的分支</h3>

```
git branch 分支名称 远程分支名称
// 例如，以远程 origin/dev 为基线创建 dev 分支
git branch dev origin/dev
```



---

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">切换分支</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">切换当前分支</h3>

推荐使用 git switch

```bash
git switch 分支名称（分支名称不存在会提示错误）
// 例如
git switch main
```

同

```
git checkout 分支名称（分支名称不存在会提示错误）
// 例如
git checkout main
```

> [!NOTE]
>
> **git checkout 和 git switch 的区别**
>
> git checkout 是用于创建和切换分支的旧命令。它还可以用于恢复来自某个提交的修改。但是 git checkout 能做的不仅仅是这些，它还可以让你从任何分支复制文件或直接提交到当前工作区中，而无需切换分支。
>
> 实际上，git checkout 做了三件事情：
>
> 1）切换分支；
>
> 2）从暂存区复制文件到工作区（放弃当前修改）；
>
> 3）从其他区复制文件到工作区；
>
> 如果你不明白，那没关系，只需要记住：git checkout 能做的**不仅仅是分支的切换**，还有很多其他额外的功能，而这些额外的功能，增加了 git checkout 这个命令的复杂性。
>
> 因此，从 git 2.23 版本发布以后，引入了两个新的命令：**git switch** 和 **git restore**。
>
> 这样做的目的，是为了让人们**使用 git switch 来切换分支，使用 git restore 来撤销本地修改**。与此同时，git checkout 仍然被保存，用于提供更高级的选项来处理各种更加复杂的操作。
>
> **那么，git checkout 和 git switch 应该使用哪一个呢？**
>
> 如果是切换分支，请使用 git switch 命令而不是 git checkout。为什么？因为它就是为这个特定任务创建的。对于新的 git 用户，更容易记住 git switch 用于切换分支，git restore 用于恢复修改。
>
> 因此，对于切换和创建分支这个操作来说，使用 git switch 命令替代 git checkout 是被提倡的做法。
>
> 摘自：[git switch 和 checkout 之间有什么区别？](https://www.modb.pro/db/459519)

---



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">把远程分支同步到本地</h3>


```bash
git remote prune origin
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">删除本地分支</h3>

1、删除已经合并了的分支

```bash
git branch -d 分支名称
// 例如，以下命令删除develop分支
git branch -d develop
```

2、强制删除分支，-D 为 `--delete --force` 的简写


```bash
git branch -D 分支名称
// 例如，以下命令删除 develop 分支
git branch -D develop
```



<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">分支重命名</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">重命名分支名称</h3>

```bash
git branch -m 分支名称 新分支名称
```

把 develop 分支重命名成 developNew

```bash
git branch -m develop developNew
```

> [!TIP]
>
> 重命名分支之后可能导致因为本地分支名称与远程分支名称不一致而出现的 git push 命令使用报错，可以参考以下内容进行处理。
>
> <a href="#push.default(git push 默认推送规则)">push.default(git push 默认推送规则)</a>
>
> [推送到远端指定分支](#git_push_origin)



---

## 查看工作区和暂存区的修改

> [!TIP]
>
> **工作区**
>
> 本地Coding的工作区，是Stage Change之前的状态
>
> **暂存区**
>
> 修改了代码后先要Stage Change，Stage Change之后的状态

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看还未暂存状态下修改的文件信息</h3>

```bash
git diff --name-only
```

查看还未暂存状态下修改的文件内容，列出了修改的地方，内容太多不直观，个人不太喜欢用，退出查看状态 ==英文输入状态下输入 q== 

```bash
git diff
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">查看暂存状态下修改的文件信息</h3>

```bash
git diff --cached --name-only
```

查看暂存状态下修改的文件内容，列出了修改的地方，内容太多不直观，个人不太喜欢用，退出查看状态 ==英文输入状态下输入 q== 

```bash
git diff --cached 
```



---

## 查看分支日志

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-log">git log</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">查看当前分支日志</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">1、查看当前分支前5条日志，浏览模式下按 q 退出</h3>

```bash
git log -5
```

同

```bash
git log -n 5
```

同

```bash
git log --max-count=5
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">2、查看当前分支前5条非合并日志，浏览模式下按 q 退出</h3>

```bash
git log --no-merges -5
```

查看当前分支前5条非合并日志的话用如下命令

```bash
git log --merges -5
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">3、查看其他分支前5条日志，浏览模式下按 q 退出</h3>

```bash
git log origin/demo --no-merges -3
```

> [!TIP]
>
> 查看其他分支的日志，只要在 <mark>log</mark> 后面加上分支的名称即可。

其中 **origin/demo** 为分支名称。



---

## 挑选部分commit合并

适用场景：从develop分支挑选部分的commit合并到release。

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-cherry-pick">git cherry-pick</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">操作步骤</div>

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">1、拉取最新的代码</h3>

```bash
git fetch origin
```

此步骤是为了拉取各分支的最新提交信息到本地，防止因为本地的其他分支因为没同步而没获取到<mark>需要的提交(我们需要的提交，把此提交合并到当前分支)</mark>



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">2、切换到目标分支</h3>

此处为release分支，如果本地分支已落后于远端分支，则请先进行合并以便与远端分支保持同步。

```bash
git switch release
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">3、从源分支中找到需要合并入提交的SHA-1值</h3>

```bash
git log develop --no-merges -3
```

上面的指令用于获取指定分支上的非合并日志，在日志中有 SHA-1 的值，记录需要的 SHA-1 值。



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">4、根据挑选的 SHA-1 合并代码到当前分支</h3>

```bash
git cherry-pick sha1 sha2 sha3
例如
git cherry-pick 42cc76034817af2daa0db15382f23881ee31c952
```

执行完上面的指令之后，本地参考中已经合并了相关的提交，可以使用  git log -3 或 git status 查看本地仓库信息，如果没有冲突那么直接推送到远端仓库。



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">5、推送并入的提交到远端仓库</h3>

```bash
git push
```

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding:0px 20px;height:45px;
            line-height:45px;letter-spacing:2px;">
	<div>例子</div>
	<div style="position:absolute;right:-22px;top:0px;height:45px;width:45px;background:#2196F3;transform:skew(45deg,0deg);z-index:-1;"></div>
</div>

```bash
// 1. 拉取代码
git fetch origin
// 2. 合并代码，确保本地代码已是最新
git merge
// 3.1 挑选 SHA-1 合并代码到当前分支，并执行commit
git cherry-pick sha1 sha2 sha3
// 3.2 挑选 SHA-1 合并代码到当前分支，不执行commit(-n/--no-commit)
git cherry-pick -n sha1 sha2 sha3
// 3.2.1 提交修改
git commit -m "提交的信息"
// 4. 推送到服务器
git push 

// 待验证
git cherry-pick -n origin/develop   // 把 origin/develop 的最近的一个提交合并到本分支
git cherry-pick -n origin/develop~1 // 把 origin/develop 的倒数第二个提交合并到本分支
```



<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">相关参考</div>

1. [git 教程 --git cherry-pick 命令](https://www.cnblogs.com/ahzxy2018/p/14482626.html)



---

## 与上游保持同步

本节介绍Fork了其他人的项目代码，如何同步别人的最新代码到自己的仓库中。

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">1、查看自己的仓库是否已经关联了上游仓库</h3>

输入下面的命令，然后查看输出中是否有upstream的信息，没有上游仓库则按步骤2操作，否则按步骤3操作。

```bash
git remote -v
```

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">2、关联上游仓库</h3>

```bash
git remote add upstream 原始仓库地址
// 例如：
git remote add upstream https://github.com/schacon/blink
```

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">3、从远程仓库中拉取最新提交</h3>

```bash
git fetch upstream
```

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">4、将本地仓库与上游仓库中相应分支的代码进行合并</h3>

```bash
git merge upstream/develop
```

<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">5、将合并的结果推送到自己仓库的远端分支</h3>

```bash
git push origin/develop
```

上述的过程也可以用 TortoiseGit 的相关菜单进行操作。

![image-20240604181718629](../Images/Git命令/image-20240604181718629.png)



---

## Git 配置

本节介绍 git config 相关配置的查询和设置。

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding: 0px 25px;            height:45px;line-height:45px;border-radius:5px 5px 5px 0px;letter-spacing:2px;">
        <div><a style="color:white;" href="https://git-scm.com/docs/git-config/en">git-config</a></div>
        <div style="width:0px;height:0px;position: absolute;border:5px solid transparent;border-top:5px solid #1a76c0;            border-right:5px solid #1a76c0;left: 0px;bottom: -10px;"></div>
    </div>
<p style="margin-top:10px;"></p>

git-config - Get and set repository or global options

```bash
// 当前仓库配置
git config ****

// 全局配置
git config --global **

// 例如：
// 查询当前仓库的 push 规则配置
git config push.default

// 查询全局的 push 规则配置
git config --global push.default
```



<h3 style="border-left:6px solid #2196F3;background:#ddffff;padding:14px;font-size:16px;letter-spacing:1px;">push.default(git push 默认推送规则) </h3>

Defines the action `git push` should take if no refspec is given (whether from the command-line, config, or elsewhere). Different values are well-suited for specific workflows; for instance, in a purely central workflow (i.e. the fetch source is equal to the push destination), `upstream` is probably what you want. Possible values are:

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">支持的配置</div>

| 配置项     | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| `nothing`  | do not push anything (error out) unless a refspec is given. This is primarily meant for people who want to avoid mistakes by always being explicit. |
| `current`  | push the current branch to update a branch with the same name on the receiving end. Works in both central and non-central workflows. |
| `upstream` | push the current branch back to the branch whose changes are usually integrated into the current branch (which is called `@{upstream}`). This mode only makes sense if you are pushing to the same repository you would normally pull from (i.e. central workflow). |
| `tracking` | This is a deprecated synonym for `upstream`.                 |
| `simple`   | push the current branch with the same name on the remote.If you are working on a centralized workflow (pushing to the same repository you pull from, which is typically `origin`), then you need to configure an upstream branch with the same name.<br />This mode is the default since Git 2.0, and is the safest option suited for beginners. |
| `matching` | push all branches having the same name on both ends. This makes the repository you are pushing to remember the set of branches that will be pushed out (e.g. if you always push *maint* and *master* there and no other branches, the repository you push to will have these two branches, and your local *maint* and *master* will be pushed there).<br />To use this mode effectively, you have to make sure *all* the branches you would push out are ready to be pushed out before running *git push*, as the whole point of this mode is to allow you to push all of the branches in one go. If you usually finish work on only one branch and push out the result, while other branches are unfinished, this mode is not for you. Also this mode is not suitable for pushing into a shared central repository, as other people may add new branches there, or update the tip of existing branches outside your control.<br />This used to be the default, but not since Git 2.0 (`simple` is the new default). |

介绍：**[push.default](https://git-scm.com/docs/git-config/en#Documentation/git-config.txt-pushdefault)**

<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">查询配置</div>

1、查询当前仓库的 push 规则配置

```bash
git config push.default
```

2、查询全局的 push 规则配置

```bash
git config --global push.default
```



<div style="font-weight:bold;font-size:16pt;padding-top:15px;padding-bottom:5px;">设置默认的推送规则（push 规则）</div>

1、设置当前仓库的 push 规则配置

```bash
git config push.default upstream
```

2、设置全局的 push 规则配置

```bash
git config --global push.default upstream
```



---

## 参考文章：

1. [git同步远程已删除的分支和删除本地多余的分支](https://www.cnblogs.com/saysmy/p/9166331.html)
1. [git常用命令-提交代码](https://www.cnblogs.com/nicoz/p/16968374.html)
1. [git --- 回滚 restore, reset, revert](https://blog.csdn.net/weixin_38803409/article/details/132962409)

