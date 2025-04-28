# git config

git config 命令详解

[TOC]

---

## 命令功能

通过 `git config` 查看或设置git配置。



## git 配置级别

- **系统配置**

  > 影响所有用户和仓库，优先级最低。配置文件位于 Git 安装目录下的 `/etc/gitconfig`（Unix）或 `C:\ProgramData\Git\config`（Windows）
  >
  > 可通过 `git config --system --show-origin -l` 命令进行查看。

- **全局配置**

  > 影响当前用户的所有仓库，优先级次之。配置文件位于 `~/.gitconfig`（Unix）或 `%userprofile%\.gitconfig`（Windows）
  >
  > 可通过 `git config --global --show-origin -l` 命令进行查看。

- **本地配置**

  > 仅影响当前 Git 仓库，优先级最高。配置文件位于当前目录下 `.git/config`
  >
  > 可通过 `git config --local --show-origin -l` 命令进行查看。



## 优先级

**从高到低**：

`local`（仓库级） > `global`（全局级） > `system`（系统级）

### **生效规则**

- **覆盖原则**

  Git 会按优先级顺序合并配置：

  - 如果某个配置项在 `local` 中存在，则直接使用 `local` 的值。
  - 如果 `local` 未配置，则使用 `global` 的值。
  - 如果 `global` 也未配置，则使用 `system` 的值。

- **继承与冲突解决**

  - 例如，若 `global` 中设置了 `user.name=Alice`，而 `local` 中设置了 `user.name=Bob`，最终生效的是 `local` 的 `Bob`。
  - 若某个配置项仅在 `system` 中定义，则所有用户和仓库默认继承该配置。



## Q&A

<div>
	<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding:0px 20px;height:45px;line-height:45px;letter-spacing:2px;">
		<div>git config, git config --local, git config --global, git config --system 的区别是什么？</div>
		<div style="position:absolute;right:-22px;top:0px;height:45px;width:45px;background:#2196F3;transform:skew(45deg,0deg);z-index:-1;"></div>
	</div>
	<div style="background-color:#2196F3;height:3px;width:100%;"/>
</div>

**git config**

> 查询的是当前目录下的生效配置，会综合各级别中的配置给出当前生效的配置这些配置可能来自local,global或system。



**git config --local**

> 查询的是当前仓库级的配置



**git config --global**

> 查询的是全局级的配置。



**git config --system**

> 查询的是系统级的配置



<div>
	<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding:0px 20px;height:45px;line-height:45px;letter-spacing:2px;">
		<div>git config, git config --show-origin 的区别是什么？</div>
		<div style="position:absolute;right:-22px;top:0px;height:45px;width:45px;background:#2196F3;transform:skew(45deg,0deg);z-index:-1;"></div>
	</div>
	<div style="background-color:#2196F3;height:3px;width:100%;"/>
</div>

> git config 和 git config --show-origin 都是显示当前仓库中生效的配置，不同点在于
>
> git config 只查询配置项的值。
>
> git config --show-origin 处理显示出配置项的值外还同步输出了配置项值的来源，比如本地的配置，还是全局的配置，亦或是系统的配置。
>
> ```bash
> git config core.autocrlf
> // 输出:
> // true
> 
> git config --show-origin core.autocrlf
> // 输出:
> // file:D:/Program Files/Git/etc/gitconfig true
> ```
>
> 



## 示例说明

以 `core.autocrlf` 为例

此命令含义详解：

- [【git系列4/4】如何设置core.autocrlf | core.safecrlf （配置值的含义及最佳实践）-CSDN博客](https://blog.csdn.net/w8y56f/article/details/126027361)
- [git core.autocrlf配置说明 - Youpeng - 博客园](https://www.cnblogs.com/youpeng/p/11243871.html)

**core.autocrlf  配置说明**

> true： 提交时改成LF，检出时改成CRLF  
>
> input：提交时改成LF，检出时不改  
>
> false：提交时是什么就是什么，不改换行符，检出时也不改

```bash
// 查询本地级仓库换行符配置（无任何输出，表示全局无此配置）
git config --local --show-origin core.autocrlf

// 查询全局级换行符配置
git config --global --show-origin core.autocrlf
// 此命令输出
// file:C:/Users/Administrator/.gitconfig  false

// 查询系统级换行符配置
git config --system --show-origin core.autocrlf
// 此命令输出
// file:D:/Program Files/Git/etc/gitconfig true
 
// 查询当前仓库生效的换行符配置（本地仓库无此配置，因此用的是全局的配置）
git config --show-origin core.autocrlf
// 此命令输出
// file:C:/Users/Administrator/.gitconfig  false

// 取消全局的配置
git config --global --unset core.autocrlf

// 再次查询全局级换行符配置（无任何输出，表示全局无此配置）
git config --global --show-origin core.autocrlf

// 再次查询本地仓库生效的换行符配置（本地仓库和全局级都无此配置，因此用的是系统级的配置）
git config --show-origin core.autocrlf
// 此命令输出
// file:D:/Program Files/Git/etc/gitconfig true

// core.autocrlf 最佳实践
// Windows:core.autocrlf true
// Mac/Linux:core.autocrlf input
```

