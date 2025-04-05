# 基于任务的异步模式 (TAP)

[TOC]

---

在 .NET 中，基于任务的异步模式是建议用于新开发的异步设计模式。 它基于 [System.Threading.Tasks](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks) 命名空间中的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 和 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 类型，这些类型用于表示异步操作。

## [概述](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)

### 命名、参数和返回类型

TAP 使用单个方法表示异步操作的开始和完成。 这与异步编程模型（APM 或 `IAsyncResult`）模式和基于事件的异步模式 (EAP) 形成对比。 APM 需要 `Begin` 和 `End` 方法。 EAP 需要后缀为 `Async` 的方法，以及一个或多个事件、事件处理程序委托类型和 `EventArg` 派生类型。 TAP 中的异步方法在返回可等待类型（如 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task)、[Task<TResult>](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1)、[ValueTask](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.valuetask) 和 [ValueTask<TResult>](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.valuetask-1)）的方法的操作名称后面添加 `Async` 后缀。 例如，返回 `Task<String>` 的异步 `Get` 操作可命名为 `GetAsync`。 若要将 TAP 方法添加到已包含带 `Async` 后缀的 EAP 方法名称的类中，请改用后缀 `TaskAsync`。 例如，如果类具有 `GetAsync` 方法，请使用名称 `GetTaskAsync`。 如果方法启动异步操作，但不返回可等待类型，它的名称应以 `Begin`、`Start` 或表明此方法不返回或抛出操作结果的其他某谓词开头。  

TAP 方法返回 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [System.Threading.Tasks.Task<TResult>](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1)，具体取决于相应同步方法返回的是 void 还是类型 `TResult`。

TAP 方法的参数应与其同步对应方法的参数匹配，并应以相同顺序提供。 但是，`out` 和 `ref` 参数不受此规则的限制，并应完全避免。 应该将通过 `out` 或 `ref` 参数返回的所有数据改为作为由 `TResult` 返回的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 的一部分返回，且应使用元组或自定义数据结构来容纳多个值。 即使 TAP 方法的同步对应项没有提供 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 参数，也应考虑添加此参数。

专用于创建、控制或组合任务的方法无需遵循此命名模式，因为方法名称或方法所属类型的名称已明确指明方法的异步用途；此类方法通常称为“组合器”。 组合器的示例包括 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 和 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany)，[使用基于任务的异步模式](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/consuming-the-task-based-asynchronous-pattern)一文的[使用基于任务的内置组合器](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/consuming-the-task-based-asynchronous-pattern#combinators)部分对此进行了介绍。

有关展示了 TAP 语法与旧异步编程模式（如异步编程模型 (APM) 和基于事件的异步模式 (EAP)）语法区别的示例，请参阅[异步编程模式](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/)。



### 初始化异步操作

基于 TAP 的异步方法可以同步完成少量工作，如在返回结果任务之前，验证自变量和启动异步操作。 应将同步工作保持最小，以便异步方法可以快速返回。 快速返回的原因包括：

- 可以从用户界面 (UI) 线程调用异步方法，因此，所有长期运行的同步工作可能会降低应用程序的响应能力。
- 可以同时启动多个异步方法。 因此，在异步方法的同步部分中的任何长时间运行的工作都可以延迟其他异步操作的启动，从而减少并发的优点。

在某些情况下，完成操作所需的工作量要比异步启动操作所需的工作量少。 读取流时，按照在内存中已缓冲好的数据来满足该读取，这就是此类情形的一个示例。 在这样的情况下，操作可能会同步完成，同时返回已完成的任务。



### 异常

异步方法应引发仅将引发异步方法调用的异常，以响应用法错误。 用法错误决不应该出现在成品代码中。 例如，如果将空引用（在 Visual Basic 中为 `Nothing`）作为方法的某个参数传递导致了错误状态（通常由 [ArgumentNullException](https://learn.microsoft.com/zh-cn/dotnet/api/system.argumentnullexception) 异常表示），则可以修改调用代码以确保绝对不传递空引用。 对于所有其他错误，在运行异步方法时发生的异常应分配给返回的任务，即使该异步方法碰巧在任务返回前同步完成。 通常，任务最多包含一个异常。 但是，如果任务表示多个操作（例如，[WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall)），则多个异常可能与单个任务关联。



### 目标环境

在实现 TAP 方法时，你可以确定异步执行发生的位置。 可选择在线程池上执行工作负载，通过使用异步 I/O 实现它（不必绑定到大部分操作执行的线程），在特定线程（如 UI 线程）上运行它，或者使用任何数目的潜在上下文。 TAP 方法甚至可能没有要执行的代码，可能只返回 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 表示系统其他位置发生的情况（例如，表示到达已排入队列数据结构的数据的任务）。

TAP 方法的调用方可能会同步等待生成的任务，以阻止等待 TAP 方法完成，也可能会在异步操作完成时运行其他（延续）代码。 延续代码的创建者可以控制该代码的执行位置。 你可以通过 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类上的方法（例如，[ContinueWith](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.continuewith)）显式创建延续代码，也可以使用基于延续（例如，C# 中的 `await`、Visual Basic 中的 `Await` 和 F# 中的 `AwaitValue`）构建的语言支持隐式创建延续代码。



### 任务状态

[Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类提供了异步操作的生命周期，且该周期由 [TaskStatus](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus) 枚举表示。 为了支持派生自 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 和 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 的类型的个别案例，并支持调度时分离构造，[Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类公开了 [Start](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.start) 方法。 公共 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 构造函数创建的任务称为“冷任务”，因为它们在非计划 [Created](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-created) 状态下开始生命周期，并仅在对这些实例调用 [Start](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.start) 时才被排入计划。

所有其他任务在热状态下开始其生命周期，这意味着它们表示的异步操作已启动，并且其任务状态是 [TaskStatus.Created](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-created) 以外的枚举值。 必须激活从 TAP 方法返回的所有任务。 **如果 TAP 方法在内部使用任务的构造函数来实例化要返回的任务，TAP 方法必须在返回前先对 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 对象调用 [Start](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.start)。** TAP 方法的使用者可以安全地假设返回的任务处于活动状态且不应尝试对从 TAP 方法返回的任何 [Start](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.start) 调用 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task)。 对活动的任务调用 [Start](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.start) 将引发 [InvalidOperationException](https://learn.microsoft.com/zh-cn/dotnet/api/system.invalidoperationexception) 异常。



### 取消（可选）

在 TAP 中，取消是异步方法实现者和异步方法使用者的选项。 如果操作允许取消，则会公开接受取消标记（[CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 实例）的异步方法的重载。 按照约定，该参数命名为 `cancellationToken`。

C#复制

```csharp
public Task ReadAsync(byte [] buffer, int offset, int count,
                      CancellationToken cancellationToken)
```

该异步操作监视取消请求的此标记。 如果它收到取消请求，则可以选择接受该请求并取消操作。 如果取消请求导致过早地结束工作，则 TAP 方法返回一个在 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态下结束的任务；没有可用结果且不引发异常。 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态被视为任务的最终（完成）状态，以及 [Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 和 [RanToCompletion](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-rantocompletion) 状态。 因此，如果一个任务处于 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态，则其 [IsCompleted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.iscompleted) 属性将返回 `true`。 在 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态下完成任务时，将计划或执行向任务注册的任何延续，除非延续选项（如 [NotOnCanceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcontinuationoptions#system-threading-tasks-taskcontinuationoptions-notoncanceled)）特定于取消延续。 任何通过使用语言功能异步等待已取消的任务的代码都将继续运行，但不接收 [OperationCanceledException](https://learn.microsoft.com/zh-cn/dotnet/api/system.operationcanceledexception) 或其中派生的异常。 通过诸如 [Wait](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.wait) 的方法同步阻止的代码等待任务，并且 [WaitAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.waitall) 将继续运行但出现异常。

如果取消标记请求在接受调用标记的 TAP 方法之前取消，TAP 方法应返回 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 任务。 但是，如果在运行异步操作时请求取消，则异步操作不需要接受该取消请求。 仅当该操作如取消请求的结果那样结束时，返回的任务才应以 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态结束。 如果已请求取消，但仍然生成了结果或异常，则任务应在 [RanToCompletion](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-rantocompletion) 或 [Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 状态下结束。

对于要首先对其公开可取消功能的异步方法，无需提供不接受取消令牌的重载。 对于无法取消的方法，不提供接受取消标记的重载；这有助于向调用方指示目标方法是否真正可取消。 不要求取消的使用者代码可以调用接受 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 的方法，并提供 [None](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.none) 作为参数值。 [None](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.none) 在功能上等效于默认 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken)。



### 进度报告（可选）

某些异步操作受益于提供进度通知；这些通常用于使用有关该异步操作的进度的信息更新用户界面。

在 TAP 中，通过 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1) 接口处理进度，此接口作为通常名为 `progress` 的参数传递给异步方法。 调用异步方法时提供进度接口有助于消除不正确使用导致的争用情况（也就是说，操作启动后未正确注册的事件处理程序可能缺少更新）。 更重要的是，根据所使用的代码，进度接口将支持不同的进度实现。 例如，使用代码可能只关心最新的进度更新，可能需要缓冲所有更新，可能需要为各个更新调用操作，也可能需要控制是否需将该调用封送到特定线程。 通过使用接口的不同实现，所有这些选项都可以满足特定使用方的需要。 与取消一样，仅在 API 支持进度通知时，TAP 实现才应提供 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1) 参数。

例如，如果本文前面所述的 `ReadAsync` 方法可以以到目前为止读取的字节数的形式报告中间进度，则进度回调可能为 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1) 接口：

C#复制

```csharp
public Task ReadAsync(byte[] buffer, int offset, int count,
                      IProgress<long> progress)
```

如果 `FindFilesAsync` 方法返回满足特定搜索模式的所有文件的列表，则进度回叫可以对已完成工作的百分比和当前部分结果集进行估计。 可通过元组来提供此信息：

C#复制

```csharp
public Task<ReadOnlyCollection<FileInfo>> FindFilesAsync(
            string pattern,
            IProgress<Tuple<double,
            ReadOnlyCollection<List<FileInfo>>>> progress)
```

也可以使用特定于 API 的数据类型执行此操作：

C#复制

```csharp
public Task<ReadOnlyCollection<FileInfo>> FindFilesAsync(
    string pattern,
    IProgress<FindFilesProgressInfo> progress)
```

在后一种情况下，特殊数据类型应加上后缀 `ProgressInfo`。

如果 TAP 实现提供接受 `progress` 参数的重载，则必须允许该参数为 `null`，在这种情况下，不会报告任何进度。 TAP 实现应向 [Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 对象同步报告进度，这使异步方法能够快速提供进度。 它还允许进度使用方确定处理信息的最佳方式和位置。 例如，进度实例可以选择将回调封送，并引发有关捕获到的同步上下文的事件。



### IProgress<T> 实现

.NET 提供 [Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 类，该类实现 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1)。 [Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 类的声明方式如下：

C#复制

```csharp
public class Progress<T> : IProgress<T>  
{  
    public Progress();  
    public Progress(Action<T> handler);  
    protected virtual void OnReport(T value);  
    public event EventHandler<T>? ProgressChanged;  
}  
```

[Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 的实例公开 [ProgressChanged](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1.progresschanged#system-progress-1-progresschanged) 事件，此事件在异步操作每次报告进度更新时引发。 实例化 [ProgressChanged](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1.progresschanged#system-progress-1-progresschanged) 实例后，会在捕获到的 [SynchronizationContext](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.synchronizationcontext) 对象上引发 [Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 事件。 如果没有可用的同步上下文，则使用针对线程池的默认上下文。 可以向此事件注册处理程序。 为了方便起见，也可将单个处理程序提供给 [Progress](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1) 构造函数，并且行为与 [ProgressChanged](https://learn.microsoft.com/zh-cn/dotnet/api/system.progress-1.progresschanged#system-progress-1-progresschanged) 事件的事件处理程序一样。 异步引发进度更新以避免延迟异步操作，同时执行事件处理程序。 另一个 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1) 实现可以选择应用不同的语义。



### 选择要提供的重载

如果 TAP 实现使用可选的 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.cancellationtoken) 和可选的 [IProgress](https://learn.microsoft.com/zh-cn/dotnet/api/system.iprogress-1) 参数，则可能需要多达四次的重载：

C#复制

```csharp
public Task MethodNameAsync(…);  
public Task MethodNameAsync(…, CancellationToken cancellationToken);  
public Task MethodNameAsync(…, IProgress<T> progress);
public Task MethodNameAsync(…,
    CancellationToken cancellationToken, IProgress<T> progress);  
```

但是，许多 TAP 实现没有提供取消和进度功能，因此它们需要一个方法：

C#复制

```csharp
public Task MethodNameAsync(…);  
```

如果 TAP 实现支持取消或进度但不同时支持二者，则 TAP 实现可能提供以下两种重载：

C#复制

```csharp
public Task MethodNameAsync(…);  
public Task MethodNameAsync(…, CancellationToken cancellationToken);  
  
// … or …  
  
public Task MethodNameAsync(…);  
public Task MethodNameAsync(…, IProgress<T> progress);  
```

如果 TAP 实现同时支持取消和进度，则可以公开所有四个重载。 但它也可以只提供以下两个：

C#复制

```csharp
public Task MethodNameAsync(…);  
public Task MethodNameAsync(…,
    CancellationToken cancellationToken, IProgress<T> progress);  
```

若要弥补缺少的两个中间组合，开发人员可以为 `cancellationToken` 参数传递 [None](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.none) 或默认的 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken)，为 `null` 参数传递 `progress`。

如果需要 TAP 方法的每种用法都支持取消或进度，则可以忽略不接受相关参数的重载。

如果决定公开多个重载以使取消或进度可选，则不支持取消或进度的重载的行为方式就像其已将取消的 [None](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.none) 或进度的 `null` 传递给确实支持它们的重载。





## [实现 TAP](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/implementing-the-task-based-asynchronous-pattern)

可使用以下三种方式实现基于任务的异步模式 (TAP)：使用 Visual Studio 中的 C# 和 Visual Basic 编译器、手动实现或编译器和手动方法相结合。 以下各节详细地讨论了每一种方法。 可以使用 TAP 模式实现计算密集型和 I/O 密集型异步操作。 [工作负载](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/implementing-the-task-based-asynchronous-pattern#workloads)部分介绍了各种类型的操作。



### 生成 TAP 方法

#### 使用编译器

自 .NET Framework 4.5 起，任何归于 `async` 关键字（Visual Basic 中的 `Async`）的方法都被视为异步方法，并且 C# 和 Visual Basic 编译器会执行必要的转换，以使用 TAP 异步实现方法。 异步方法应返回 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 对象。 对于后者，函数的主体应返回 `TResult`，并且编译器确保此结果是通过生成的任务对象获得。 同样，未在方法的主体中处理的任何异常都会被封送处理为输出任务并导致生成的任务结束以 [TaskStatus.Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 状态结束。 此规则的异常发生在 [OperationCanceledException](https://learn.microsoft.com/zh-cn/dotnet/api/system.operationcanceledexception)（或派生类型）未得到处理时，在这种情况下生成的任务以 [TaskStatus.Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态结束。



#### 手动生成 TAP 方法

你可以手动实现 TAP 模式以更好地控制实现。 编译器依赖从 [System.Threading.Tasks](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks) 命名空间公开的公共外围应用和 [System.Runtime.CompilerServices](https://learn.microsoft.com/zh-cn/dotnet/api/system.runtime.compilerservices) 命名空间中支持的类型。 如要自己实现 TAP，你需要创建一个 [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 对象、执行异步操作，并在操作完成时，调用 [SetResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setresult)、[SetException](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setexception)、[SetCanceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setcanceled) 方法，或调用这些方法之一的`Try`版本。 手动实现 TAP 方法时，需在所表示的异步操作完成时完成生成的任务。 例如：

C#复制

```csharp
public static Task<int> ReadTask(this Stream stream, byte[] buffer, int offset, int count, object state)
{
    var tcs = new TaskCompletionSource<int>();
    stream.BeginRead(buffer, offset, count, ar =>
    {
        try { tcs.SetResult(stream.EndRead(ar)); }
        catch (Exception exc) { tcs.SetException(exc); }
    }, state);
    return tcs.Task;
}
```



#### 混合方法

你可能发现手动实现 TAP 模式、但将实现核心逻辑委托给编译器的这种方法很有用。 例如，当你想要验证编译器生成的异步方法之外的参数时，可能需要使用这种混合方法，以便异常可以转义到该方法的直接调用方而不是通过 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 对象被公开：

C#复制

```csharp
public Task<int> MethodAsync(string input)
{
    if (input == null) throw new ArgumentNullException("input");
    return MethodAsyncInternal(input);
}

private async Task<int> MethodAsyncInternal(string input)
{

   // code that uses await goes here

   return value;
}
```

这种委托有用的另一种情况是：你在实施快速路径优化并想返回缓存的任务时。



### 工作负载

你可将计算密集型和 I/O 密集型异步操作作为 TAP 方法实现。 但是，当 TAP 方法从库中公开地公开时，应仅向涉及 I/O 密集型操作的工作负载提供这种方法（它们也可能涉及计算，但不是应仅仅是计算）。 如果是纯粹的计算密集型方法，应只公开为同步实现。 然后，使用它的代码可能会选择是将同步方法调用包装到任务中以将工作卸载到另一线程，还是实现并行。 如果方法是 I/O 密集型，应只公开为异步实现。



#### 计算密集型任务

[System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类非常适合表示计算密集型操作。 默认情况下，它利用 [ThreadPool](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.threadpool) 类中的特殊支持来提供有效的执行，还对执行异步计算的时间、地点和方式提供重要控制。

你可以通过以下方式生成计算密集型任务：

- 在 .NET Framework 4.5 及更高版本（包括 .NET Core 和 .NET 5+）中，使用静态 [Task.Run](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run) 方法作为 [TaskFactory.StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew) 的快捷方式。 你可以使用 [Run](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run) 来轻松启动针对线程池的计算密集型任务。 这是用于启动一项计算密集型任务的首选机制。 仅当需要更细化地控制任务时，才直接使用 `StartNew`。
- 在 .NET Framework 4 中，使用 [TaskFactory.StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew) 方法，这种方法接受异步执行委托（通常是 [Action](https://learn.microsoft.com/zh-cn/dotnet/api/system.action-1) 或 [Func](https://learn.microsoft.com/zh-cn/dotnet/api/system.func-1)）。 如果你提供 [Action](https://learn.microsoft.com/zh-cn/dotnet/api/system.action-1) 委托，该方法会返回表示异步执行该委托的 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 对象。 如果你提供 [Func](https://learn.microsoft.com/zh-cn/dotnet/api/system.func-1) 委托，该方法会返回 [System.Threading.Tasks.Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 对象。 [StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew) 方法的重载接受一个取消标记（[CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken)）、任务创建选项（[TaskCreationOptions](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcreationoptions)）和一个任务计划程序（[TaskScheduler](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskscheduler)），它们都对计划和任务执行提供细粒度控制。 定目标到当前任务计划程序的工厂实例可用作 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类的静态属性 ([Factory](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.factory))；例如：`Task.Factory.StartNew(…)`。
- 如果希望分别生成并计划任务时，请使用 `Task` 类型的构造函数和 `Start` 方法。 公共方法必须仅返回已开始的任务。
- 使用 [Task.ContinueWith](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.continuewith) 方法的重载。 此方法创建一项在另一任务完成时已排好计划的新任务。 某些 [ContinueWith](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.continuewith) 重载接受一个取消标记、延续选项和一个任务计划程序，以更好地控制计划和执行延续任务。
- 使用 [TaskFactory.ContinueWhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.continuewhenall) 和 [TaskFactory.ContinueWhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.continuewhenany) 方法。 这些方法会在提供的全部任务或任意一组任务完成时创建已计划的新任务。 这些方法还提供了重载，用于控制这些任务的计划和执行。

在计算密集型任务中，如果系统在开始运行任务之前收到取消请求，则它可以防止执行已计划的任务。 同样，如果你提供一个取消标记（[CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 对象），则可以将标记传递给监视该标记的异步代码。 你也可以将此标记提供给先前提过的方法（如 `StartNew` 或 `Run`），以便`Task`运行时也能监视该标记。

例如，请考虑使用呈现图像的异步方法。 任务的主体可以轮询取消标记，如果在呈现过程中收到取消请求，代码可提前退出。 此外，如果呈现启动之前收到取消请求，你需要阻止呈现操作：

C#复制

```csharp
internal Task<Bitmap> RenderAsync(
              ImageData data, CancellationToken cancellationToken)
{
    return Task.Run(() =>
    {
        var bmp = new Bitmap(data.Width, data.Height);
        for(int y=0; y<data.Height; y++)
        {
            cancellationToken.ThrowIfCancellationRequested();
            for(int x=0; x<data.Width; x++)
            {
                // render pixel [x,y] into bmp
            }
        }
        return bmp;
    }, cancellationToken);
}
```

如果满足下列条件之一，则计算密集型任务以 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态结束：

- 取消请求通过 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 对象到达，该对象在任务转换到 `StartNew` 状态前，作为创建方法的自变量（例如 `Run` 或 [Running](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-running)）提供。
- [OperationCanceledException](https://learn.microsoft.com/zh-cn/dotnet/api/system.operationcanceledexception) 异常在此类任务的主体内未得到处理，该异常包含传给该任务的同一 [CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken)，并且该标记显示已请求取消操作。

如果另一个异常在任务的主体内未得到处理，则此任务以 [Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 状态结束，并且任何等待该任务或访问其结果的尝试都将引发异常。



#### I/O 密集型任务

若要创建一个不应由线程直接支持其全部执行的任务，请使用 [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 类型。 此类型公开一个返回关联 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.task) 实例的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 属性。 此任务的生命周期是由 [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 方法控制的，比如 [SetResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setresult)、[SetException](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setexception)、[SetCanceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.setcanceled) 以及它们的 `TrySet` 变形。

假设你想创建一个将在指定时间段后完成的任务。 例如，你可能想延迟用户界面中的活动。 [System.Threading.Timer](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.timer) 类已提供在指定时间段后以异步方式调用委托的能力，并且你可以通过使用 [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 将 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 前端放在计时器上，例如：

C#复制

```csharp
public static Task<DateTimeOffset> Delay(int millisecondsTimeout)
{
    TaskCompletionSource<DateTimeOffset> tcs = null;
    Timer timer = null;

    timer = new Timer(delegate
    {
        timer.Dispose();
        tcs.TrySetResult(DateTimeOffset.UtcNow);
    }, null, Timeout.Infinite, Timeout.Infinite);

    tcs = new TaskCompletionSource<DateTimeOffset>(timer);
    timer.Change(millisecondsTimeout, Timeout.Infinite);
    return tcs.Task;
}
```

[Task.Delay](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.delay) 方法正是为此目的而提供，并且你可以在另一个异步方法内使用它。例如，要实现异步轮询循环：

C#复制

```csharp
public static async Task Poll(Uri url, CancellationToken cancellationToken,
                              IProgress<bool> progress)
{
    while(true)
    {
        await Task.Delay(TimeSpan.FromSeconds(10), cancellationToken);
        bool success = false;
        try
        {
            await DownloadStringAsync(url);
            success = true;
        }
        catch { /* ignore errors */ }
        progress.Report(success);
    }
}
```

[TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 类并没有对应的非泛型类。 然而 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 派生自 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task)，因此你可以为仅返回任务的 I/O 密集型方法使用泛型 [TaskCompletionSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1) 对象。 为了做到这一点，你可以使用具有虚拟 `TResult`（[Boolean](https://learn.microsoft.com/zh-cn/dotnet/api/system.boolean) 是一个很好的默认选项，但是如果你担心 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 用户将其向下转换成 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1)，那么你可以转而使用私有 `TResult` 类型）。 例如，上一个示例中的 `Delay` 方法返回现有时间和所产生的偏移量（`Task<DateTimeOffset>`）。 如果结果值是不必要的，则可对该方法进行如下改写（注意对 [TrySetResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskcompletionsource-1.trysetresult) 的返回类型的更改和实参的更改）：

C#复制

```csharp
public static Task<bool> Delay(int millisecondsTimeout)
{
     TaskCompletionSource<bool> tcs = null;
     Timer timer = null;

     timer = new Timer(delegate
     {
         timer.Dispose();
         tcs.TrySetResult(true);
     }, null, Timeout.Infinite, Timeout.Infinite);

     tcs = new TaskCompletionSource<bool>(timer);
     timer.Change(millisecondsTimeout, Timeout.Infinite);
     return tcs.Task;
}
```



#### 计算密集型和 I/O 密集型混合任务

异步方法不只局限于计算密集型或 I/O 密集型操作，还可以是两者的结合。 事实上，多个异步操作通常组合成较大的混合操作。 例如，请考虑前面示例中的 `RenderAsync` 方法，该方法执行计算密集型操作以根据某些输入 `imageData` 呈现图像。 此 `imageData` 可能来自你异步访问的 Web 服务：

C#复制

```csharp
public async Task<Bitmap> DownloadDataAndRenderImageAsync(
    CancellationToken cancellationToken)
{
    var imageData = await DownloadImageDataAsync(cancellationToken);
    return await RenderAsync(imageData, cancellationToken);
}
```

此示例还演示了如何通过多个异步操作使单个取消标记线程化。 有关详细信息，请参阅[使用基于任务的异步模式](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/consuming-the-task-based-asynchronous-pattern)中的取消用法部分。





## [使用 TAP](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/consuming-the-task-based-asynchronous-pattern)

使用基于任务的异步模式 (TAP) 处理异步操作时，可以使用回叫实现等待，而不会阻塞。 对于任务，这可通过 [Task.ContinueWith](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.continuewith) 等方法实现。 通过允许在正常控制流中等待异步操纵，基于语言的异步支持可隐藏回叫，并且编译器生成的代码可提供此相同 API 级别的支持。



### 使用 Await 挂起执行

可以使用 C# 中的 [await](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/operators/await) 关键字和 Visual Basic 中的 [Await 运算符](https://learn.microsoft.com/zh-cn/dotnet/visual-basic/language-reference/operators/await-operator)来异步等待 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 和 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 对象。 等待 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 时，`await` 表达式的类型为 `void`。 等待 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 时，`await` 表达式的类型为 `TResult`。 `await` 表达式必须出现在异步方法的正文内。 （.NET Framework 4.5 中引入了这些语言功能。）

实际上，await 功能通过使用延续任务在任务上安装回叫。 此回叫在挂起点恢复异步方法。 恢复异步方法时，如果等待的操作已成功完成且为 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1)，返回的是 `TResult`。 如果等待的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 以 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态结束，就会抛出 [OperationCanceledException](https://learn.microsoft.com/zh-cn/dotnet/api/system.operationcanceledexception) 异常。 如果等待的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 以 [Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 状态结束，就会抛出导致它发生故障的异常。 一个 `Task` 可能由于多个异常而出错，但只会传播一个异常。 不过，[Task.Exception](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.exception) 属性会返回包含所有错误的 [AggregateException](https://learn.microsoft.com/zh-cn/dotnet/api/system.aggregateexception) 异常。

如果同步上下文（[SynchronizationContext](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.synchronizationcontext) 对象）与暂停时正在执行异步方法的线程（例如，[SynchronizationContext.Current](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.synchronizationcontext.current) 属性不是 `null`）相关联，异步方法使用上下文的 [Post](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.synchronizationcontext.post) 方法，恢复相同的同步上下文。 否则，它依赖暂停时的当前任务计划程序（[TaskScheduler](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskscheduler) 对象）。 通常情况下，这是定目标到线程池的默认任务计划程序 ([TaskScheduler.Default](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskscheduler.default))。 此任务计划程序确定等待的异步操作是否应在该操作完成时恢复，或是否应计划该恢复。 默认计划程序通常允许在完成等待操作的线程上延续任务。

调用异步方法时，将同步执行函数的正文，直到遇见尚未完成的可等待实例上的第一个 await 表达式，此时调用返回到调用方。 如果异步方法不返回 `void`，将会返回 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 对象，以表示正在进行的计算。 在非 void 异步方法中，如果遇到 return 语句或到达方法正文末尾，任务就以 [RanToCompletion](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-rantocompletion) 最终状态完成。 如果未经处理的异常导致无法控制异步方法正文，任务就以 [Faulted](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-faulted) 状态结束。 如果异常为 [OperationCanceledException](https://learn.microsoft.com/zh-cn/dotnet/api/system.operationcanceledexception)，任务改为以 [Canceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskstatus#system-threading-tasks-taskstatus-canceled) 状态结束。 通过此方式，最终将发布结果或异常。

此行为有几种重要特殊情况。 出于性能原因，如果任务在等待时已完成，则不会生成控件，并且该函数将继续执行。 返回到原始上下文并不总是所需的行为，可对其进行更改；将在下一节中更详细地描述此内容。



#### 使用 Yield 和 ConfigureAwait 配置挂起和恢复

有多种方法可更好地控制异步方法的执行。 例如，可以使用 [Task.Yield](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.yield) 方法，将暂停点引入异步方法：

C#复制

```csharp
public class Task : …
{
    public static YieldAwaitable Yield();
    …
}
```

这相当于以异步方式发布或计划返回当前上下文。

C#复制

```csharp
Task.Run(async delegate
{
    for(int i=0; i<1000000; i++)
    {
        await Task.Yield(); // fork the continuation into a separate work item
        ...
    }
});
```

还可以使用 [Task.ConfigureAwait](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.configureawait) 方法，更好地控制异步方法中的暂停和恢复。 如前所述，默认情况下，异步方法挂起时会捕获当前上下文，捕获的上下文用于在恢复时调用异步方法的延续。 在多数情况下，这就是你所需的确切行为。 在其他情况下，你可能不关心延续上下文，则可以通过避免此类发布返回原始上下文来获得更好的性能。 若要启用此功能，请使用 [Task.ConfigureAwait](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.configureawait) 方法，指示等待操作不要捕获和恢复上下文，而是继续执行正在等待完成的所有异步操作：

C#复制

```csharp
await someTask.ConfigureAwait(continueOnCapturedContext:false);
```



### 取消异步操作

从 .NET Framework 4 开始，支持取消操作的 TAP 方法提供至少一个接受取消令牌（[CancellationToken](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken) 对象）的重载。

可通过取消令牌源（[CancellationTokenSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtokensource) 对象）创建取消令牌。 源的 [Token](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtokensource.token) 属性返回取消令牌，它在源的 [Cancel](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtokensource.cancel) 方法获得调用时收到信号。 例如，若要下载一个网页，并且希望能够取消此操作，请创建 [CancellationTokenSource](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtokensource) 对象，将它的令牌传递给 TAP 方法，再在准备好取消此操作时，调用源的 [Cancel](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtokensource.cancel) 方法：

C#复制

```csharp
var cts = new CancellationTokenSource();
string result = await DownloadStringTaskAsync(url, cts.Token);
… // at some point later, potentially on another thread
cts.Cancel();
```

若要取消多个异步调用，可以将相同令牌传递给所有调用：

C#复制

```csharp
var cts = new CancellationTokenSource();
    IList<string> results = await Task.WhenAll(from url in urls select DownloadStringTaskAsync(url, cts.Token));
    // at some point later, potentially on another thread
    …
    cts.Cancel();
```

或者，将相同令牌传递给操作的选择性子集：

C#复制

```csharp
var cts = new CancellationTokenSource();
    byte [] data = await DownloadDataAsync(url, cts.Token);
    await SaveToDiskAsync(outputPath, data, CancellationToken.None);
    … // at some point later, potentially on another thread
    cts.Cancel();
```

 > [!IMPORTANT]
 > 可以从任意线程启动取消请求。

可以将 [CancellationToken.None](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.none) 值传递给接受取消令牌的任何方法，指明绝不会请求取消操作。 这会导致 [CancellationToken.CanBeCanceled](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.cancellationtoken.canbecanceled) 属性返回 `false`，并且调用的方法可以相应地进行优化。 出于测试目的，还可以通过传入预取消标记（该标记使用接受布尔值的构造函数进行实例化）来指示是否应以已取消或未取消状态启动标记。

使用此方法进行取消具有以下优点：

- 可以将相同的取消标记传递给任意数量的异步和同步操作。
- 相同的取消请求可能会扩展到任意数量的侦听器。
- 异步 API 的开发人员可完全控制是否可以请求取消以及取消何时生效。
- 使用 API 的代码可以选择性地确定将对其传播取消请求的异步调用。



### 监视进度

某些异步方法通过传入异步方法的进度接口来公开进度。 例如，设想某个函数以异步方式下载文本字符串，并在该过程中引发包括到目前为止下载完成百分比的进度更新。 此类方法可在 Windows Presentation Foundation (WPF) 应用程序中使用，如下所示：

C#复制

```csharp
private async void btnDownload_Click(object sender, RoutedEventArgs e)
{
    btnDownload.IsEnabled = false;
    try
    {
        txtResult.Text = await DownloadStringTaskAsync(txtUrl.Text,
            new Progress<int>(p => pbDownloadProgress.Value = p));
    }
    finally { btnDownload.IsEnabled = true; }
}
```





### 使用内置的基于任务的连结符

[System.Threading.Tasks](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks) 命名空间包含多个方法，可用于撰写和处理任务。

#### Task.Run

[Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类包含多个 [Run](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run) 方法，以便于将工作作为 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 或 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 轻松卸载到线程池，例如：

C#复制

```csharp
public async void button1_Click(object sender, EventArgs e)
{
    textBox1.Text = await Task.Run(() =>
    {
        // … do compute-bound work here
        return answer;
    });
}
```

其中部分 [Run](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run) 方法（如 [Task.Run(Func)](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.run#system-threading-tasks-task-run(system-func((system-threading-tasks-task)))) 重载）以 [TaskFactory.StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew) 方法的简约表示形式存在。 借助此重载，可以在卸载的工作内使用 await，例如：

C#复制

```csharp
public async void button1_Click(object sender, EventArgs e)
{
    pictureBox1.Image = await Task.Run(async() =>
    {
        using(Bitmap bmp1 = await DownloadFirstImageAsync())
        using(Bitmap bmp2 = await DownloadSecondImageAsync())
        return Mashup(bmp1, bmp2);
    });
}
```

此类重载在逻辑上相当于结合使用 [TaskFactory.StartNew](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.startnew) 方法和任务并行库中的 [Unwrap](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskextensions.unwrap) 扩展方法。



#### Task.FromResult

[FromResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.fromresult) 方法的适用情景为，数据可能已存在，且只需通过提升到 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 的任务返回方法返回：

C#复制

```csharp
public Task<int> GetValueAsync(string key)
{
    int cachedValue;
    return TryGetCachedValue(out cachedValue) ?
        Task.FromResult(cachedValue) :
        GetValueAsyncInternal();
}

private async Task<int> GetValueAsyncInternal(string key)
{
    …
}
```



#### Task.WhenAll

[WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 方法可用于异步等待多个表示为任务的异步操作。 该方法所具有的多个重载支持一组非泛型任务或一组不统一的常规任务（如异步等待多个返回 void 的操作，或异步等待多个返回值的方法，其中每个值可能具有不同类型），并支持一组统一的常规任务（如异步等待多个 `TResult` 返回方法）。

假设你想要向多个客户发送电子邮件。 你可以重叠发送邮件，因此发送邮件时无需等待上一封邮件完成发送。 还可以查看发送操作完成的时间，以及是否发生了错误：

C#复制

```csharp
IEnumerable<Task> asyncOps = from addr in addrs select SendMailAsync(addr);
await Task.WhenAll(asyncOps);
```

此代码不显式处理可能发生的异常，而是通过对 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 生成的任务执行 `await` 传播异常。 若要处理该异常，可以使用以下代码：

C#复制

```csharp
IEnumerable<Task> asyncOps = from addr in addrs select SendMailAsync(addr);
try
{
    await Task.WhenAll(asyncOps);
}
catch(Exception exc)
{
    ...
}
```

在这种情况下，如果任意异步操作失败，所有异常都会合并到 [AggregateException](https://learn.microsoft.com/zh-cn/dotnet/api/system.aggregateexception) 异常中，此异常存储在 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 方法返回的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 中。 但是，仅通过 `await` 关键字传播其中一个异常。 如果想要检查所有异常，可以重写前面的代码，如下所示：

C#复制

```csharp
Task [] asyncOps = (from addr in addrs select SendMailAsync(addr)).ToArray();
try
{
    await Task.WhenAll(asyncOps);
}
catch(Exception exc)
{
    foreach(Task faulted in asyncOps.Where(t => t.IsFaulted))
    {
        … // work with faulted and faulted.Exception
    }
}
```

让我们考虑一下以异步方式从 Web 下载多个文件的示例。 在此示例中，所有异步操作具有相同的结果类型，并很容易对结果进行访问：

C#复制

```csharp
string [] pages = await Task.WhenAll(
    from url in urls select DownloadStringTaskAsync(url));
```

可以使用上一个返回 void 方案中所讨论的异常处理技术：

C#复制

```csharp
Task<string> [] asyncOps =
    (from url in urls select DownloadStringTaskAsync(url)).ToArray();
try
{
    string [] pages = await Task.WhenAll(asyncOps);
    ...
}
catch(Exception exc)
{
    foreach(Task<string> faulted in asyncOps.Where(t => t.IsFaulted))
    {
        … // work with faulted and faulted.Exception
    }
}
```



#### Task.WhenAny

[WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 方法可用于异步等待多个表示为要完成的任务的异步操作之一。 此方法适用于四个主要用例：

- 冗余：多次执行一个操作并选择最先完成的一次（例如，联系能够生成一个结果的多个股市行情 Web 服务并选择完成最快的一个）。
- 交错：启动多个操作并等待所有这些操作完成，但是在完成这些操作时对其进行处理。
- 限制：允许其他操作完成时开始附加操作。 这是交错方案的扩展。
- 早期释放：例如，用任务 t1 表示的操作可以与任务 t2 组成 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 任务，您可以等待 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 任务。 任务 t2 可以表示超时、取消或其他一些导致 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 任务先于 t1 完成的信号。



##### 冗余

假设你想要决定是否购买股票。 你信任一些股票建议 Web 服务，但每个服务最终会在不同的时间段变得很慢，具体取决于每日负载。 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 方法可用于在任何操作完成时接收通知：

C#复制

```csharp
var recommendations = new List<Task<bool>>()
{
    GetBuyRecommendation1Async(symbol),
    GetBuyRecommendation2Async(symbol),
    GetBuyRecommendation3Async(symbol)
};
Task<bool> recommendation = await Task.WhenAny(recommendations);
if (await recommendation) BuyStock(symbol);
```

[WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 返回已成功完成的所有任务的取消包装结果。与它不同，[WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 返回已完成的任意任务。 如果任务失败，重要的是知道该任务失败，如果任务成功，重要的是知道返回值与哪个任务相关联。 因此，你需要访问返回任务的结果，或进一步等待，如本示例中所示。

与 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 一样，必须能够容纳异常。 因为接收到完成的任务后，可以等待返回的任务传播错误，并适当地进行 `try/catch`，例如：

C#复制

```csharp
Task<bool> [] recommendations = …;
while(recommendations.Count > 0)
{
    Task<bool> recommendation = await Task.WhenAny(recommendations);
    try
    {
        if (await recommendation) BuyStock(symbol);
        break;
    }
    catch(WebException exc)
    {
        recommendations.Remove(recommendation);
    }
}
```

此外，即使第一个任务成功完成，后续任务也可能会失败。 此时，可以有多个选择来处理异常：可以等待所有启动的任务完成，这种情况可以使用 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 方法，或者决定所有异常是否重要且必须记录。 为此，可以使用延续任务以在任务异步完成时接收通知：

C#复制

```csharp
foreach(Task recommendation in recommendations)
{
    var ignored = recommendation.ContinueWith(
        t => { if (t.IsFaulted) Log(t.Exception); });
}
```

或：

C#复制

```csharp
foreach(Task recommendation in recommendations)
{
    var ignored = recommendation.ContinueWith(
        t => Log(t.Exception), TaskContinuationOptions.OnlyOnFaulted);
}
```

或者甚至：

C#复制

```csharp
private static async void LogCompletionIfFailed(IEnumerable<Task> tasks)
{
    foreach(var task in tasks)
    {
        try { await task; }
        catch(Exception exc) { Log(exc); }
    }
}
…
LogCompletionIfFailed(recommendations);
```

最后，若要取消所有剩余操作：

C#复制

```csharp
var cts = new CancellationTokenSource();
var recommendations = new List<Task<bool>>()
{
    GetBuyRecommendation1Async(symbol, cts.Token),
    GetBuyRecommendation2Async(symbol, cts.Token),
    GetBuyRecommendation3Async(symbol, cts.Token)
};

Task<bool> recommendation = await Task.WhenAny(recommendations);
cts.Cancel();
if (await recommendation) BuyStock(symbol);
```



##### 交错

假设你要从 Web 下载图像，并且处理每个图像（例如，将图像添加到 UI 控件）。 可以在 UI 线程上按顺序处理图像，但建议尽可能同时下载图像。 此外，建议不要直到所有图像都下载完成才将图像添加到 UI。 建议在完成下载时添加它们。

C#复制

```csharp
List<Task<Bitmap>> imageTasks =
    (from imageUrl in urls select GetBitmapAsync(imageUrl)).ToList();
while(imageTasks.Count > 0)
{
    try
    {
        Task<Bitmap> imageTask = await Task.WhenAny(imageTasks);
        imageTasks.Remove(imageTask);

        Bitmap image = await imageTask;
        panel.AddImage(image);
    }
    catch{}
}
```

还可以将交错应用于涉及下载图像 [ThreadPool](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.threadpool) 的计算密集型处理的方案；例如：

C#复制

```csharp
List<Task<Bitmap>> imageTasks =
    (from imageUrl in urls select GetBitmapAsync(imageUrl)
         .ContinueWith(t => ConvertImage(t.Result)).ToList();
while(imageTasks.Count > 0)
{
    try
    {
        Task<Bitmap> imageTask = await Task.WhenAny(imageTasks);
        imageTasks.Remove(imageTask);

        Bitmap image = await imageTask;
        panel.AddImage(image);
    }
    catch{}
}
```



##### 遏制

请考虑交错示例，因用户大量下载图像而导致下载必须受到遏制除外；例如，你希望仅能同时下载特定数目的内容。 为此，可以启动异步操作的子集。 操作完成后，你可以启动其他操作对其进行替代：

C#复制

```csharp
const int CONCURRENCY_LEVEL = 15;
Uri [] urls = …;
int nextIndex = 0;
var imageTasks = new List<Task<Bitmap>>();
while(nextIndex < CONCURRENCY_LEVEL && nextIndex < urls.Length)
{
    imageTasks.Add(GetBitmapAsync(urls[nextIndex]));
    nextIndex++;
}

while(imageTasks.Count > 0)
{
    try
    {
        Task<Bitmap> imageTask = await Task.WhenAny(imageTasks);
        imageTasks.Remove(imageTask);

        Bitmap image = await imageTask;
        panel.AddImage(image);
    }
    catch(Exception exc) { Log(exc); }

    if (nextIndex < urls.Length)
    {
        imageTasks.Add(GetBitmapAsync(urls[nextIndex]));
        nextIndex++;
    }
}
```



##### 早期释放

假设正在异步等待某个操作完成的同时，对用户的取消请求（例如，用户单击取消按钮）进行响应。 以下代码阐释了此方案：

C#复制

```csharp
private CancellationTokenSource m_cts;

public void btnCancel_Click(object sender, EventArgs e)
{
    if (m_cts != null) m_cts.Cancel();
}

public async void btnRun_Click(object sender, EventArgs e)
{
    m_cts = new CancellationTokenSource();
    btnRun.Enabled = false;
    try
    {
        Task<Bitmap> imageDownload = GetBitmapAsync(txtUrl.Text);
        await UntilCompletionOrCancellation(imageDownload, m_cts.Token);
        if (imageDownload.IsCompleted)
        {
            Bitmap image = await imageDownload;
            panel.AddImage(image);
        }
        else imageDownload.ContinueWith(t => Log(t));
    }
    finally { btnRun.Enabled = true; }
}

private static async Task UntilCompletionOrCancellation(
    Task asyncOp, CancellationToken ct)
{
    var tcs = new TaskCompletionSource<bool>();
    using(ct.Register(() => tcs.TrySetResult(true)))
        await Task.WhenAny(asyncOp, tcs.Task);
    return asyncOp;
}
```

一旦决定退出，此实现将重新启用用户界面，但不会取消基础异步操作。 另一种选择是决定退出时，取消挂起的操作，但在操作完成之前不重新建立用户界面，可能会由于取消请求而提前结束：

C#复制

```csharp
private CancellationTokenSource m_cts;

public async void btnRun_Click(object sender, EventArgs e)
{
    m_cts = new CancellationTokenSource();

    btnRun.Enabled = false;
    try
    {
        Task<Bitmap> imageDownload = GetBitmapAsync(txtUrl.Text, m_cts.Token);
        await UntilCompletionOrCancellation(imageDownload, m_cts.Token);
        Bitmap image = await imageDownload;
        panel.AddImage(image);
    }
    catch(OperationCanceledException) {}
    finally { btnRun.Enabled = true; }
}
```

另一个早期释放示例涉及结合使用 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 方法和 [Delay](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.delay) 方法，下一部分将对此进行介绍。



#### Task.Delay

[Task.Delay](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.delay) 方法可用于将暂停引入异步方法的执行中。 这对于许多功能都非常有用，包括构建轮询循环和延迟预定时间段的用户输入处理。 [Task.Delay](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.delay) 方法还可以与 [Task.WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 结合使用，以对 await 实现超时。

如果某任务属于较大型异步操作（如 ASP.NET Web 服务）中的一部分，由于花费时间过长而不能完成，则整体操作可能会受到影响（尤其是此任务一直不能完成的情况下）。 因此，等待异步操作时可以超时非常重要。 虽然同步 [Task.Wait](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.wait)、[Task.WaitAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.waitall) 和 [Task.WaitAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.waitany) 方法接受超时值，但相应的 [TaskFactory.ContinueWhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.continuewhenall)/[TaskFactory.ContinueWhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.continuewhenany) 和前述 [Task.WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall)/[Task.WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 方法不接受。 相反，可以将 [Task.Delay](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.delay) 与 [Task.WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany)结合使用，以实现超时。

例如，在 UI 应用程序中，假设你想要下载图像，并在图像下载期间禁用该 UI。 但是，如果下载时间过长，你希望重新启用 UI 并放弃下载：

C#复制

```csharp
public async void btnDownload_Click(object sender, EventArgs e)
{
    btnDownload.Enabled = false;
    try
    {
        Task<Bitmap> download = GetBitmapAsync(url);
        if (download == await Task.WhenAny(download, Task.Delay(3000)))
        {
            Bitmap bmp = await download;
            pictureBox.Image = bmp;
            status.Text = "Downloaded";
        }
        else
        {
            pictureBox.Image = null;
            status.Text = "Timed out";
            var ignored = download.ContinueWith(
                t => Trace("Task finally completed"));
        }
    }
    finally { btnDownload.Enabled = true; }
}
```

这同样适用于多个下载，因为 [WhenAll](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenall) 返回任务：

C#复制

```csharp
public async void btnDownload_Click(object sender, RoutedEventArgs e)
{
    btnDownload.Enabled = false;
    try
    {
        Task<Bitmap[]> downloads =
            Task.WhenAll(from url in urls select GetBitmapAsync(url));
        if (downloads == await Task.WhenAny(downloads, Task.Delay(3000)))
        {
            foreach(var bmp in downloads.Result) panel.AddImage(bmp);
            status.Text = "Downloaded";
        }
        else
        {
            status.Text = "Timed out";
            downloads.ContinueWith(t => Log(t));
        }
    }
    finally { btnDownload.Enabled = true; }
}
```



### 构建基于任务的连结符

因为任务可以完全代表异步操作、提供同步和异步功能来加入操作、检索其结果等，所以可以构建组成任务的连结符的库以构建更大的模式。 如前一部分所述，.NET 包括一些内置连结符，但是，你也可以构建自己的连结符。 以下各节提供了一些潜在的连结符方法和类型的示例。



#### RetryOnFault

在许多情况下，如果上次尝试失败，你可能想要重试操作。 对于同步代码，你可能会构建一个帮助器方法来实现此目的，如下例中的 `RetryOnFault`：

C#复制

```csharp
public static T RetryOnFault<T>(
    Func<T> function, int maxTries)
{
    for(int i=0; i<maxTries; i++)
    {
        try { return function(); }
        catch { if (i == maxTries-1) throw; }
    }
    return default(T);
}
```

你可以为异步操作（使用 TAP 实现，因此返回任务）构建几乎相同的帮助器方法：

C#复制

```csharp
public static async Task<T> RetryOnFault<T>(
    Func<Task<T>> function, int maxTries)
{
    for(int i=0; i<maxTries; i++)
    {
        try { return await function().ConfigureAwait(false); }
        catch { if (i == maxTries-1) throw; }
    }
    return default(T);
}
```

然后，可以使用此连结符将重试编码到应用程序的逻辑中，例如：

C#复制

```csharp
// Download the URL, trying up to three times in case of failure
string pageContents = await RetryOnFault(
    () => DownloadStringTaskAsync(url), 3);
```

可以进一步扩展 `RetryOnFault` 函数。 例如，该函数可以接受另一个 `Func<Task>`（在重试间隔期间调用以确定何时重试该操作）：

C#复制

```csharp
public static async Task<T> RetryOnFault<T>(
    Func<Task<T>> function, int maxTries, Func<Task> retryWhen)
{
    for(int i=0; i<maxTries; i++)
    {
        try { return await function().ConfigureAwait(false); }
        catch { if (i == maxTries-1) throw; }
        await retryWhen().ConfigureAwait(false);
    }
    return default(T);
}
```

重试该操作前，可以使用以下函数等待片刻：

C#复制

```csharp
// Download the URL, trying up to three times in case of failure,
// and delaying for a second between retries
string pageContents = await RetryOnFault(
    () => DownloadStringTaskAsync(url), 3, () => Task.Delay(1000));
```



#### NeedOnlyOne

有时，你可以利用冗余改进操作延迟和提高成功的可能性。 假设有多个 Web 服务提供股票报价，但在一天中的不同时间，每个服务可能提供不同级别的质量和响应时间。 为了应对这些波动，你可能会向所有 Web 服务发出请求，并且只要从其中一个获得响应，立刻取消剩余的请求。 你可以通过 helper 函数更轻松地实现此启动多个操作的通用模式：等待任何操作，然后取消其余部分。 以下示例中的 `NeedOnlyOne` 函数阐释了这种方案：

C#复制

```csharp
public static async Task<T> NeedOnlyOne(
    params Func<CancellationToken,Task<T>> [] functions)
{
    var cts = new CancellationTokenSource();
    var tasks = (from function in functions
                 select function(cts.Token)).ToArray();
    var completed = await Task.WhenAny(tasks).ConfigureAwait(false);
    cts.Cancel();
    foreach(var task in tasks)
    {
        var ignored = task.ContinueWith(
            t => Log(t), TaskContinuationOptions.OnlyOnFaulted);
    }
    return completed;
}
```

然后，你可以使用此函数，如下所示：

C#复制

```csharp
double currentPrice = await NeedOnlyOne(
    ct => GetCurrentPriceFromServer1Async("msft", ct),
    ct => GetCurrentPriceFromServer2Async("msft", ct),
    ct => GetCurrentPriceFromServer3Async("msft", ct));
```



#### 交错操作

处理大型任务集时，如果使用 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 方法支持交错方案，可能存在潜在性能问题。 每次调用 [WhenAny](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.whenany) 都会向每个任务注册延续。 对于 N 个任务，这将导致在交错操作的操作期间创建 O(N2) 次延续。 如果处理大型任务集，则可以使用连结符（以下示例中的 `Interleaved`）来解决性能问题：

C#复制

```csharp
static IEnumerable<Task<T>> Interleaved<T>(IEnumerable<Task<T>> tasks)
{
    var inputTasks = tasks.ToList();
    var sources = (from _ in Enumerable.Range(0, inputTasks.Count)
                   select new TaskCompletionSource<T>()).ToList();
    int nextTaskIndex = -1;
    foreach (var inputTask in inputTasks)
    {
        inputTask.ContinueWith(completed =>
        {
            var source = sources[Interlocked.Increment(ref nextTaskIndex)];
            if (completed.IsFaulted)
                source.TrySetException(completed.Exception.InnerExceptions);
            else if (completed.IsCanceled)
                source.TrySetCanceled();
            else
                source.TrySetResult(completed.Result);
        }, CancellationToken.None,
           TaskContinuationOptions.ExecuteSynchronously,
           TaskScheduler.Default);
    }
    return from source in sources
           select source.Task;
}
```

然后，可以在任务完成时，使用连结符来处理任务的结果，例如：

C#复制

```csharp
IEnumerable<Task<int>> tasks = ...;
foreach(var task in Interleaved(tasks))
{
    int result = await task;
    …
}
```



#### WhenAllOrFirstException

在特定的分散/集中情况下，你可能想要等待集中的所有任务，除非某个任务发生错误。在这种情况下，你希望在异常发生时停止等待。 你可以通过使用连结符方法（如 `WhenAllOrFirstException`）实现该目的，如下所示：

C#复制

```csharp
public static Task<T[]> WhenAllOrFirstException<T>(IEnumerable<Task<T>> tasks)
{
    var inputs = tasks.ToList();
    var ce = new CountdownEvent(inputs.Count);
    var tcs = new TaskCompletionSource<T[]>();

    Action<Task> onCompleted = (Task completed) =>
    {
        if (completed.IsFaulted)
            tcs.TrySetException(completed.Exception.InnerExceptions);
        if (ce.Signal() && !tcs.Task.IsCompleted)
            tcs.TrySetResult(inputs.Select(t => t.Result).ToArray());
    };

    foreach (var t in inputs) t.ContinueWith(onCompleted);
    return tcs.Task;
}
```



### 构建基于任务的数据结构

除了能够生成基于任务的自定义组合器，在 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 和 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1)（表示异步操作结果和联接所必需的同步操作结果）中包含数据结构，还可以使其成为功能非常强大的类型，基于该类型可生成在异步方案中使用的自定义数据结构。



#### AsyncCache

任务的重要方面之一是，它可能会分发到多个使用者，所有使用者都可以等待任务、向任务注册延续、获取任务结果或异常（如果是 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 的话）等。 这样一来，[Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 和 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 就非常适用于异步缓存基础结构。 下面的示例演示了基于 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 生成的功能非常强大的小型异步缓存：

C#复制

```csharp
public class AsyncCache<TKey, TValue>
{
    private readonly Func<TKey, Task<TValue>> _valueFactory;
    private readonly ConcurrentDictionary<TKey, Lazy<Task<TValue>>> _map;

    public AsyncCache(Func<TKey, Task<TValue>> valueFactory)
    {
        if (valueFactory == null) throw new ArgumentNullException("valueFactory");
        _valueFactory = valueFactory;
        _map = new ConcurrentDictionary<TKey, Lazy<Task<TValue>>>();
    }

    public Task<TValue> this[TKey key]
    {
        get
        {
            if (key == null) throw new ArgumentNullException("key");
            return _map.GetOrAdd(key, toAdd =>
                new Lazy<Task<TValue>>(() => _valueFactory(toAdd))).Value;
        }
    }
}
```

[AsyncCache](https://devblogs.microsoft.com/pfxteam/parallelextensionsextras-tour-12-asynccache/) 类接受需要使用 `TKey` 且返回 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 的函数作为构造函数的委托。 以前从缓存访问的所有值都存储在内部字典中，`AsyncCache` 可以确保每个密钥仅生成一个任务，即便同时访问缓存也是如此。

例如，你可以生成下载网页的缓存：

C#复制

```csharp
private AsyncCache<string,string> m_webPages =
    new AsyncCache<string,string>(DownloadStringTaskAsync);
```

然后可以在任何需要网页内容的时候，以异步方式使用此缓存。 `AsyncCache` 类可确保下载尽可能少的页面，并缓存结果。

C#复制

```csharp
private async void btnDownload_Click(object sender, RoutedEventArgs e)
{
    btnDownload.IsEnabled = false;
    try
    {
        txtContents.Text = await m_webPages["https://www.microsoft.com"];
    }
    finally { btnDownload.IsEnabled = true; }
}
```



#### AsyncProducerConsumerCollection

你还可以使用任务来构建协调异步活动的数据结构。 请考虑经典的并行设计模式之一：制造者/使用者。 在此模式下，制造者生成数据，使用者使用数据，制造者和使用者可能会并行运行。 例如，使用者处理之前由制造者生成的第 1 项，而制造者现在正在制造第 2 项。 对于制造者/使用者模式，总是需要某种数据结构来存储制造者创建的工作，以便使用者可以收到新数据的通知并及时发现新数据。

以下是基于任务构建的简单数据结构，可以将异步方法用作生成方和使用方：

C#复制

```csharp
public class AsyncProducerConsumerCollection<T>
{
    private readonly Queue<T> m_collection = new Queue<T>();
    private readonly Queue<TaskCompletionSource<T>> m_waiting =
        new Queue<TaskCompletionSource<T>>();

    public void Add(T item)
    {
        TaskCompletionSource<T> tcs = null;
        lock (m_collection)
        {
            if (m_waiting.Count > 0) tcs = m_waiting.Dequeue();
            else m_collection.Enqueue(item);
        }
        if (tcs != null) tcs.TrySetResult(item);
    }

    public Task<T> Take()
    {
        lock (m_collection)
        {
            if (m_collection.Count > 0)
            {
                return Task.FromResult(m_collection.Dequeue());
            }
            else
            {
                var tcs = new TaskCompletionSource<T>();
                m_waiting.Enqueue(tcs);
                return tcs.Task;
            }
        }
    }
}
```

通过该数据结构，可以编写如下所示的代码：

C#复制

```csharp
private static AsyncProducerConsumerCollection<int> m_data = …;
…
private static async Task ConsumerAsync()
{
    while(true)
    {
        int nextItem = await m_data.Take();
        ProcessNextItem(nextItem);
    }
}
…
private static void Produce(int data)
{
    m_data.Add(data);
}
```

[System.Threading.Tasks.Dataflow](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.dataflow) 命名空间包括 [BufferBlock](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.dataflow.bufferblock-1) 类型，可以类似方式使用它，但无需生成自定义集合类型：

C#复制

```csharp
private static BufferBlock<int> m_data = …;
…
private static async Task ConsumerAsync()
{
    while(true)
    {
        int nextItem = await m_data.ReceiveAsync();
        ProcessNextItem(nextItem);
    }
}
…
private static void Produce(int data)
{
    m_data.Post(data);
}
```

 > [!NOTE]
 > [System.Threading.Tasks.Dataflow](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.dataflow) 命名空间作为 NuGet 包提供。 若要安装包含 [System.Threading.Tasks.Dataflow](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.dataflow) 命名空间的程序集，请在 Visual Studio 中打开项目，选择“项目”菜单中的“管理 NuGet 包”，再在线搜索 `System.Threading.Tasks.Dataflow` 包。





## [与其他异步模式和类型互操作](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/interop-with-other-asynchronous-patterns-and-types)

.NET 中异步模式的简短历史记录：

- .NET Framework 1.0 引进了 [IAsyncResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.iasyncresult) 模式，也称为[异步编程模型 (APM)](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/asynchronous-programming-model-apm) 或 `Begin/End` 模式。
- .NET Framework 2.0 增加了[基于事件的异步模式 (EAP)](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/event-based-asynchronous-pattern-eap)。
- .NET Framework 4 引进了[基于任务的异步模式 (TAP)](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)，它取代了 APM 和 EAP，并能够轻松构建从早期模式中迁移的例程。



### 任务和异步编程模型 (APM)

#### 从 APM 到 TAP

因为[异步编程模型 (APM)](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/asynchronous-programming-model-apm) 模式的结构合理，而且能够轻松生成包装，将 APM 实现公开为 TAP 实现。 .NET Framework 4 及更高版本包含采用 [FromAsync](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory.fromasync) 方法重载形式的帮助器例程来实现这种转换。

请考虑 [Stream](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.stream) 类及其 [BeginRead](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.stream.beginread) 和 [EndRead](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.stream.endread) 方法，它们代表与同步 [Read](https://learn.microsoft.com/zh-cn/dotnet/api/system.io.stream.read) 方法对应的 APM：

C#复制

```csharp
public int Read(byte[] buffer, int offset, int count)
```

C#复制

```csharp
public IAsyncResult BeginRead(byte[] buffer, int offset,
                              int count, AsyncCallback callback,
                              object state)
```

C#复制

```csharp
public int EndRead(IAsyncResult asyncResult)
```

可以使用 [TaskFactory.FromAsync](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.taskfactory-1.fromasync) 方法来实现此操作的 TAP 包装，如下所示：

C#复制

```csharp
public static Task<int> ReadAsync(this Stream stream,
                                  byte[] buffer, int offset,
                                  int count)
{
    if (stream == null)
       throw new ArgumentNullException("stream");

    return Task<int>.Factory.FromAsync(stream.BeginRead,
                                       stream.EndRead, buffer,
                                       offset, count, null);
}
```

此实现类似于以下内容：

C#复制

```csharp
 public static Task<int> ReadAsync(this Stream stream,
                                   byte [] buffer, int offset,
                                   int count)
 {
    if (stream == null)
        throw new ArgumentNullException("stream");

    var tcs = new TaskCompletionSource<int>();
    stream.BeginRead(buffer, offset, count, iar =>
                     {
                        try {
                           tcs.TrySetResult(stream.EndRead(iar));
                        }
                        catch(OperationCanceledException) {
                           tcs.TrySetCanceled();
                        }
                        catch(Exception exc) {
                           tcs.TrySetException(exc);
                        }
                     }, null);
    return tcs.Task;
}
```



#### 从 TAP 到 APM

如果现有的基础结构需要 APM 模式，则还需要采用 TAP 实现并在需要 APM 实现的地方使用它。 由于任务可以组合，并且 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类实现 [IAsyncResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.iasyncresult)，你可以使用一个简单的 helper 函数执行此操作。 以下代码使用 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task-1) 类的扩展，但可以对非泛型任务使用几乎相同的函数。

C#复制

```csharp
public static IAsyncResult AsApm<T>(this Task<T> task,
                                    AsyncCallback callback,
                                    object state)
{
    if (task == null)
        throw new ArgumentNullException("task");

    var tcs = new TaskCompletionSource<T>(state);
    task.ContinueWith(t =>
                      {
                         if (t.IsFaulted)
                            tcs.TrySetException(t.Exception.InnerExceptions);
                         else if (t.IsCanceled)
                            tcs.TrySetCanceled();
                         else
                            tcs.TrySetResult(t.Result);

                         if (callback != null)
                            callback(tcs.Task);
                      }, TaskScheduler.Default);
    return tcs.Task;
}
```

现在，请考虑具有以下 TAP 实现的用例：

C#复制

```csharp
public static Task<String> DownloadStringAsync(Uri url)
```

并且想要提供此 APM 实现：

C#复制

```csharp
public IAsyncResult BeginDownloadString(Uri url,
                                        AsyncCallback callback,
                                        object state)
```

C#复制

```csharp
public string EndDownloadString(IAsyncResult asyncResult)
```

以下示例演示了一种向 APM 迁移的方法：

C#复制

```csharp
public IAsyncResult BeginDownloadString(Uri url,
                                        AsyncCallback callback,
                                        object state)
{
   return DownloadStringAsync(url).AsApm(callback, state);
}

public string EndDownloadString(IAsyncResult asyncResult)
{
   return ((Task<string>)asyncResult).Result;
}
```



### 任务和基于事件的异步模式 (EAP)

包装 [基于事件的异步模式 (EAP)](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/event-based-asynchronous-pattern-eap) 实现比包装 APM 模式更为复杂，因为与 APM 模式相比，EAP 模式的变体更多，结构更少。 为了演示，以下代码包装了 `DownloadStringAsync` 方法。 `DownloadStringAsync` 接受 URI，在下载时引发 `DownloadProgressChanged` 事件，以报告进度的多个统计信息，并在完成时引发 `DownloadStringCompleted` 事件。 最终在指定 URI 中返回一个字符串，其中包含页面内容。

C#复制

```csharp
 public static Task<string> DownloadStringAsync(Uri url)
 {
     var tcs = new TaskCompletionSource<string>();
     var wc = new WebClient();
     wc.DownloadStringCompleted += (s,e) =>
         {
             if (e.Error != null)
                tcs.TrySetException(e.Error);
             else if (e.Cancelled)
                tcs.TrySetCanceled();
             else
                tcs.TrySetResult(e.Result);
         };
     wc.DownloadStringAsync(url);
     return tcs.Task;
}
```



### 任务和等待句柄



#### 从等待句柄到 TAP

虽然等待句柄不能实现异步模式，但高级开发人员可以在设置等待句柄时使用 [WaitHandle](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.waithandle) 类和 [ThreadPool.RegisterWaitForSingleObject](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.threadpool.registerwaitforsingleobject) 方法实现异步通知。 可以包装 [RegisterWaitForSingleObject](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.threadpool.registerwaitforsingleobject) 方法以在等待句柄中启用针对任何同步等待的基于任务的替代方法：

C#复制

```csharp
public static Task WaitOneAsync(this WaitHandle waitHandle)
{
    if (waitHandle == null)
        throw new ArgumentNullException("waitHandle");

    var tcs = new TaskCompletionSource<bool>();
    var rwh = ThreadPool.RegisterWaitForSingleObject(waitHandle,
        delegate { tcs.TrySetResult(true); }, null, -1, true);
    var t = tcs.Task;
    t.ContinueWith( (antecedent) => rwh.Unregister(null));
    return t;
}
```

使用此方法，可以在异步方法中使用现有 [WaitHandle](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.waithandle) 实现。 例如，若要限制在任何特定时间执行的异步操作数，可以利用信号灯（[System.Threading.SemaphoreSlim](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.semaphoreslim) 对象）。 可以将并发运行的操作数目限制到 N，方法为：初始化到 N 的信号量的数目、在想要执行操作时等待信号量，并在完成操作时释放信号量 ：

C#复制

```csharp
static int N = 3;

static SemaphoreSlim m_throttle = new SemaphoreSlim(N, N);

static async Task DoOperation()
{
    await m_throttle.WaitAsync();
    // do work
    m_throttle.Release();
}
```

还可以构建不依赖等待句柄就完全可以处理任务的异步信号量。 若要执行此操作，可以使用 [使用基于任务的异步模式](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/consuming-the-task-based-asynchronous-pattern) 中所述的用于在 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task)。

#### 从 TAP 到等待句柄

正如前面所述， [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 类实现 [IAsyncResult](https://learn.microsoft.com/zh-cn/dotnet/api/system.iasyncresult)，且该实现公开 [IAsyncResult.AsyncWaitHandle](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task.system-iasyncresult-asyncwaithandle) 属性，该属性会返回在 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) 完成时设置的等待句柄。 可以获得 [WaitHandle](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.waithandle) 的 [Task](https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.tasks.task) ，如下所示：

C#复制

```csharp
WaitHandle wh = ((IAsyncResult)task).AsyncWaitHandle;
```





## 请参阅

- [异步编程模型 (APM) - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/standard/asynchronous-programming-patterns/asynchronous-programming-model-apm)