# Task.Result跟 Task.GetAwaiter.GetResult()相同吗？怎么选？

[TOC]

前几天在用线程池执行一些任务时运到一种情形，就是回调方法中使用到了异步方法，但是回调方法貌似不支持`async await`的写法。这时候我应该如何处理呢？是使用`Task.Result`来获取返回结果，还是使用`GetAwaiter.GetResult()`呢？本文就来探讨下吧。

这里先上我这种场景的伪代码：

```C#
ThreadPool.QueueUserWorkItem(ExcuteScanProcess, node);
```

在`ExcuteScanProcess`这个回调方法中

```c#
private void ExcuteScanProcess(object state)
{
    ……其他处理……
    repository.UpdateAsync(node).ConfigureAwait(false).GetAwaiter().GetResult();
    ……其他处理……
}
```

如上图所示`repository.UpdateAsync(node)`属于异步方法，这时候我想要等待它异步执行完成之后再执行后续的逻辑。这时候我有两种选择，是直接

`repository.UpdateAsync(node).ConfigureAwait(false).GetAwaiter().GetResult();`

好呢，还是

`repository.UpdateAsync(node).ConfigureAwait(false).Result;`

好呢？

为此我查找了相关的资料，对它俩的区别做一个简单的总结：

其实这两个使用方式是差不多的。不过，还是有一点小小的区别的：如果任务失败，`Task.GetAwaiter().GetResult()`会直接抛出异常，而`Task.Result`则会把异常包装在`AggregateException`中。从这个角度说`Task.GetAwaiter().GetResult()`要优于`Task.Result`。毕竟它少了异常的包装操作，即直接抛出异常，而不是把异常包装在`AggregateException`中。

下面的引言解释了为什么`Task.Result`不仅仅包含`Task.GetAwaiter().GetResult()`（由于“非常高的兼容性”）的异常传播行为。

>  如前所述，我们有一个非常高的兼容性标准，因此我们避免了改动。因此，`Task.Wait`保留了始终包装的原始行为。但是，您可能会发现自己处在某些高级情况下，这些情况下您想要的行为类似于所采用的同步阻塞`Task.Wait`，但是您希望将原始异常展开而不是传播，而不是将其封装在`AggregateException`中。为此，您可以直接定位任务的等待者。当您编写“ `await task;`”时，编译器`Task.GetAwaiter()`会将其转换为方法的用法，这将返回具有`GetResult()`方法的实例。当用于有故障的任务时，`GetResult()`将传播原始异常（这是“ `await task;`” 如何获得其行为）。因此，您可以使用“`task.GetAwaiter().GetResult()`如果您想直接调用此传播逻辑。

https://blogs.msdn.microsoft.com/pfxteam/2011/09/28/task-exception-handling-in-net-4-5/

 “ `GetResult`”实际上表示“检查任务是否有错误” 通常，我会尽力避免对异步任务进行同步阻塞。但是，在少数情况下，我确实违反了该准则。在那些罕见的情况下，我的首选方法是`GetAwaiter().GetResult()`因为它保留任务异常，而不是将它们包装在中`AggregateException`。

#### 总结

通过上述内容的阐述，因此在那些必须对异步任务进行同步阻塞的场景中，我选择使用

`GetAwaiter().GetResult()`

## 版权特别声明

本文摘自：https://cloud.tencent.com/developer/article/1649197