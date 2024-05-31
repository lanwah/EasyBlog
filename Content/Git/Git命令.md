# Git命令

[toc]

---

## 提交修改并推送

保存修改到本地仓库并推送至服务器。

<h3 style="border-bottom:4px solid #2196F3;background:#ddffff;padding:14px 14px 14px 5px;font-size:16px;letter-spacing:1px;">查看文件状态</h3>

[git status](https://git-scm.com/docs/git-status)

> [!NOTE]
>
> ```bash
> git status -s
> ```



### 添加提交文件

> [!TIP]
>
> 需要先添加提交文件（建立并提交索引）才能进行提交操作。

> 命令
>
> [git add](https://git-scm.com/docs/git-add)
>
> 例子
>
> `git add .`

### 撤销提交文件

> 命令
>
> [git reset](https://git-scm.com/docs/git-reset)
>
> 例子
>
> `git reset`

### 提交修改

> 命令
>
> [git commit](https://git-scm.com/docs/git-commit)
>
> 例子
>
> `git commit -m “提交的说明”`

### 提交推送到远程仓库

> 命令
>
> [git push](https://git-scm.com/docs/git-push)
>
> 例子
>
> ```bash
> git push
> ```



## 暂存

暂存本地修改，然后把修改的文件恢复到修改之前。

[git-stash 命令](https://git-scm.com/docs/git-stash)

### 暂存分支修改

**命令：**

1. `git stash`
2. `git stash save 暂存名称`

### 查看暂存信息

**命令：**

`git stash list`

### 恢复暂存修改，但不删除暂存

命令：

1. `git stash apply`
2. `git stash apply 0` 等同于 `git stash apply stash@{0}`

### 删除暂存

<span style="color:red;">注意：</span>直接删除暂存则暂存的信息将丢失

命令：`git stash drop`

`git stash drop 0` 等同于 `git stash drop stash@{0}`

### 恢复并删除暂存

**命令：**

`git stash pop 0` 等同于  `git stash pop stash@{0}`

## 分支操作

### 查看本地分支和远程分支情况

**命令：**`git branch -a`

### 查看本地分支和追踪情况

**命令：**`git remote show origin`

### 把远程分支同步到本地

**命令：**`git remote prune origin`

### 删除本地分支

**命令：**`git branch -D 分支名称`

<span style="color:green;font-weight:bold;">例如：</span>`git branch -D feature/chatfix`

### 参考文章：

1. [git同步远程已删除的分支和删除本地多余的分支](https://www.cnblogs.com/saysmy/p/9166331.html)
2. 











