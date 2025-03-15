# WinDbg相关

记录常用的Windbg命令

[TOC]

---

## 抓取dump包

[ProcDump](https://learn.microsoft.com/en-us/sysinternals/downloads/procdump)

### 1、即时抓取dump包

>  `procdump  -ma WindowsFormsApp5.exe D:\dumps\wfapp5.dmp`
>
> **WindowsFormsApp5.exe** 为进行名称，可以使用pid。
>
> **D:\dumps\wfapp5.dmp** 为生成的dmp包存放路径。

### 2、程序卡死

> `procdump -ma -h -w WindowsFormsApp1.exe E:\net5\hungwindow.dmp`
>
> **WindowsFormsApp1.exe** 为进行名称
>
> **E:\net5\hungwindow.dmp** 为生成的dmp包存放路径

### 3、程序出现异常或崩溃时抓取dump包

> `procdump  -ma -e  -w zldemo.exe E:\Procdump\dump\project.dmp`
>
> **zldemo.exe** 为程序名称
>
> **E:\Procdump\dump\project.dmp** 为生成的dmp包存放路径

## WinDbg命令详解

详细介绍相关命令

### 异常分析相关命令

记录异常相关的命令，打印堆栈信息

| 命令              | 含义                                                         |
| ----------------- | ------------------------------------------------------------ |
| **`!analyze -v`** | [显示有关当前异常或错误检查的信息。](https://www.lmlphp.com/user/57925/article/item/2647467/) |
| **`.ecxr`**       | 定位当前异常的上下文信息，并显示指定记录中的重要寄存器.      |
| **`k`**           | 打印当前线程的调用堆栈                                       |
| **`~0 k`**        | 表示打印0号线程的调用堆栈                                    |
| **`kb`**          | 显示传递给堆栈回溯中的每个函数的前三个参数                   |
| **kc**            | 只显示调用栈的模块名和地址                                   |
| **kd**            | 直接显示所有的栈情况                                         |
| **KD**            | 用于显示Stack的Dump，在跟踪栈时比较有用                      |
| **Kp**            | 显示传递给堆栈回溯中的每个函数的所有参数。<br>参数列表包含参数的数据类型、名字和值KP与Kp相似，只是KP将参数换行显示了； |
| **Kv**            | 用于显示FPO（Frame Pointer Omission）和调用约定              |
|                   |                                                              |
|                   |                                                              |

命令可以组合使用，用分号分隔，比如 `.ecxr;k`

### 线程命令

`~number s` 切换到指定线程，number为具体线程的ID。

| 命令              | 含义                                                      |
| ----------------- | --------------------------------------------------------- |
| ~                 | 简洁地显示当前进程的所有线程                              |
| ~.                | 表示当前线程                                              |
| ~#                | 表示异常或者产生调试事件的线程                            |
| ~*                | 表示所有线程                                              |
| ~1                | 表示一号线程                                              |
| ~2 s              | 表示选择2号线程作为当前线程                               |
| ~3 f              | 冻结三号线程                                              |
| ~3 u              | 解冻三号线程                                              |
| ~2 n              | 挂起二号线程                                              |
| ~2 m              | 恢复二线程                                                |
| ~*e !clrstack     | 遍历每个线程, 依次输出它们的托管调用栈                    |
| !threads          | 查看所有的托管线程                                        |
| !threads -special | 查看每个线程状态                                          |
| !threadpool       | 查看线程池CPU占用，包括总线程数、队列请求数、CP线程数。   |
| !runaway          | 查看每个线程的CPU占用时间，可以找到哪个线程占用时间更高。 |
|                   |                                                           |
|                   |                                                           |

### 未分类命令

| 命令                                                         | 含义                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| !address -summary                                            | 查看当前 process 的内存占用量                                |
| !dumpheap -stat -min 1024                                    | 寻找大对象                                                   |
| !dumpheap -type System.String -min 10240                     | 增加 `-type` 属性筛选出 `>10k` 的字符串。                    |
| !gcroot 4a855060<br />!gcroot address<br />!DumpObj /d address | 查看地址对应的对象                                           |
| !eeheap -gc                                                  | 观察托管堆内存占用                                           |
| !tp（!threadpool）                                           | 查看CPU使用率和线程数量信息                                  |
| !eestack -EE                                                 | 相当于在所有线程上执行 dumpstack (参数EE表示只显示托管代码)  |
| !clrstack                                                    | 查看当前线程的托管代码。类似于 `!dumpstack -EE`              |
| !clrstack -a                                                 | 显示所有参数信息和变量信息                                   |
| .cls                                                         | 清屏                                                         |
| !cpuid                                                       | 查看cpu信息                                                  |
| !name2ee                                                     | 查看指定文件的指定类的MethodTable,EEClass等信息，如<br />!name2ee * RabbitMQ.Client.Impl.Frame |
| !handle                                                      | 列出所有句柄                                                 |
| !handle handleID f                                           | 检查句柄信息                                                 |
| !htrace handleID                                             | 检查操作句柄的历史记录                                       |
| !cs csID                                                     | 列出CriticalSection的详细信息                                |
| !cs -l                                                       | 查看临界区信息                                               |
| ~~[owner thread id]                                          | 把owner thread id转换成线程号                                |
| .sympath                                                     | 查看符号路径                                                 |
| .cordll -ve -u -l                                            | 加载CLR和SOS                                                 |
| u                                                            | 反汇编                                                       |
| r                                                            | 查看修改寄存器                                               |
| !pe                                                          | 输出异常信息                                                 |
|                                                              |                                                              |

根据提示，用 !dumpmt 地址 查看具体的MethodTable信息；
!dumpmt 找到相关MethodTable处的相关信息。
!dumpmd 根据MethodDesc找到相关模块信息，比如MethodTable.
!dumpdomain 显示所有域里的程序集，或者根据参数获取指定域。
!savemodule 根据具体程序集地址，把当前程序集的代码生成到指定文件
查看占用内存过高的命令比如：
!eeheap 查看堆中信息，可以查看到大对象。
!dumpheap 查看GC堆中信息，一般带-min,-stat,-type等参数。
!dumpheap -stat 按对象类型排序输出所有对象个数、占用字节数
注：Free这项： 0118c800 101 14824 Free
这项一般都是GC还未压缩空间或一些堆上分配的禁止GC回收的pinned object（非托管对象或unsafe指针对象）.
!dumpheap -type System.String -min 100 查找堆上大于100字节的字符串，注：-min 85000(大于85000字节的字符串或对象将存储在大对象堆上)
!dumphead -mt xxxxx 类型不确定时，用mt串查找
!do 地址 查看指定地址存放的数据信息
!gcroot 地址 根据堆地址，查看相关模块引用代码信息，如果没找到，表示等待回收。
!gcgen 地址 根据堆地址，看它的代龄，0代，1代，2代，试了好像没有这个指令

!help 命令 可以查看指定命令的帮助信息
注意：调试Dump一定要用对应版本的WinDbg，比如32位系统Dump要用WinDbg-x32

## 使用快捷键

| 按键 | 含义     |
| ---- | -------- |
| F6   | 附加进程 |
|      |          |
|      |          |

## 报错处理

1. **`!clrstack 错误`**

   <span style="color:red;font-weight:bold;">clrstack： No export clrstack found</span>

   > .Net3.5或更低版本需要 `.loadby sos mscorwks 加载sos
   >
   > .Net4.0版本需要 `.loadby sos clr` 

2. 

## 相关

[WinDbg命令](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/-cordll--control-clr-debugging-)

[windbg常用命令](https://blog.csdn.net/evsqiezi/article/details/85157290)

[如何在 NET 程序万种死法中有效的生成 Dump (上)](https://www.cnblogs.com/huangxincheng/p/14661031.html)

[如何在 NET 程序万种死法中有效的生成 Dump (下)](https://www.cnblogs.com/huangxincheng/p/14692441.html)

[WinDbg排查.net性能或内存问题步骤简述](https://blog.csdn.net/youbl/article/details/88893182)

[再记一次w3wp占用CPU过高的解决过程](https://www.yii666.com/article/55633.html)







