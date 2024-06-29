# common-logging的使用

[TOC]

---

[net-commons/common-logging（GitHub原始项目地址）](https://github.com/net-commons/common-logging)

[使用文档](http://net-commons.github.io/common-logging/)

由于源项目已经不再维护，因此本人拉取了代码进行整理和修复发现的问题。

[项目地址:arrow_right:](https://github.com/lanwah/common-logging)

## 使用手册

### 支持的参数

```xml
level - 全局支持
showDateTime - 全局支持
showLogName - 全局支持
showLevel - 全局支持
dateTimeFormat - 全局支持
useColor - ConsoleOutLoggerFactoryAdapter特有
useTraceSource - TraceLoggerFactoryAdapter特有
```

### 使用代码段

```C#
        /// <summary>
        /// net-commons/common-logging（原始项目地址）：https://github.com/net-commons/common-logging
        /// 项目文档：http://net-commons.github.io/common-logging/
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            // Adapter 支持的参数有：
            // level - 全局支持
            // showDateTime - 全局支持
            // showLogName - 全局支持
            // showLevel - 全局支持
            // dateTimeFormat - 全局支持
            // useColor - ConsoleOutLoggerFactoryAdapter特有
            // useTraceSource - TraceLoggerFactoryAdapter特有


            //// 设置日志适配器，通过此方式配置文件的配置将被忽略
            //LogManager.Adapter = new ConsoleOutLoggerFactoryAdapter(LogLevel.Trace, showDateTime: true, showLogName: false, showLevel: true, dateTimeFormat: "yyyy-MM-dd HH:mm.fff", useColor: true);

            var log = LogManager.GetLogger(typeof(Program));
            log.Fatal("Fatal Log");
            log.Error("Error Log");
            log.Warn("Warn Log");
            log.Info("Info Log");
            log.Debug("Debug Log");
            log.Trace("Trace Log");
            Console.ReadKey();
        }
```

### 配置文件介绍

```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <!-- 重要，通过配置文件实现的配置此部分必须存在 -->
  <configSections>
    <sectionGroup name="common">
      <section name="logging" type="Common.Logging.ConfigurationSectionHandler, Common.Logging" />
    </sectionGroup>
  </configSections>

  <!-- Debug日志配置，Debug下输出 -->
  <!--<common>
    <logging>
      <factoryAdapter type="Common.Logging.Simple.DebugLoggerFactoryAdapter, Common.Logging">
        <arg key="level" value="Trace" />
      </factoryAdapter>
    </logging>
  </common>-->

  <!-- Trace日志配置，Debug/Release下都输出 -->
  <!--<common>
    <logging>
      <factoryAdapter type="Common.Logging.Simple.TraceLoggerFactoryAdapter, Common.Logging">
        <arg key="level" value="Trace" />
        <arg key="useTraceSource" value="false" />
      </factoryAdapter>
    </logging>
  </common>-->

  <!-- 控制台日志配置 -->
  <common>
    <logging>
      <factoryAdapter type="Common.Logging.Simple.ConsoleOutLoggerFactoryAdapter, Common.Logging">
        <arg key="level" value="Trace" />
        <arg key="useColor" value="true" />
      </factoryAdapter>
    </logging>
  </common>

  <!-- 空日志配置 -->
  <!--<common>
    <logging>
      <factoryAdapter type="Common.Logging.Simple.NoOpLoggerFactoryAdapter, Common.Logging">
        <arg key="level" value="All" />
      </factoryAdapter>
    </logging>
  </common>-->

</configuration>
```

