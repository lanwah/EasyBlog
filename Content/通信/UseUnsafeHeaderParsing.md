# HttpWebRequestElement.UseUnsafeHeaderParsing Property

[TOC]

## 异常信息

> <span style="color:red;font-weight:bold;">System.Net.WebException:“服务器提交了协议冲突. Section=ResponseHeader Detail=CR 后面必须是 LF”</span>

## 解决办法

一、通过配置文件实现

web.config或app.config中设置如下属性

```xml
<system.net> 
    <settings> 
    <httpWebRequest useUnsafeHeaderParsing="true" /> 
    </settings> 
</system.net> 
```

二、通过代码实现

```C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Configuration;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace UnsafeHeaderParsingSample
{
    internal class Program
    {
        private static void Main()
        {
            // Enable UseUnsafeHeaderParsing 
            if (!ToggleAllowUnsafeHeaderParsing(true))
            {
                // Couldn't set flag. Log the fact, throw an exception or whatever. 
            }

            // This request will now allow unsafe header parsing, i.e. GetResponse won't throw an exception. 
            var request = (HttpWebRequest)WebRequest.Create("http://localhost:8000");
            var response = request.GetResponse();

            // Disable UseUnsafeHeaderParsing 
            if (!ToggleAllowUnsafeHeaderParsing(false))
            {
                // Couldn't change flag. Log the fact, throw an exception or whatever. 
            }

            // This request won't allow unsafe header parsing, i.e. GetResponse will throw an exception. 
            var strictHeaderRequest = (HttpWebRequest)WebRequest.Create("http://localhost:8000");
            var strictResponse = strictHeaderRequest.GetResponse();
        }

        // Enable/disable useUnsafeHeaderParsing. 
        // See http://o2platform.wordpress.com/2010/10/20/dealing-with-the-server-committed-a-protocol-violation-sectionresponsestatusline/ 
        public static bool ToggleAllowUnsafeHeaderParsing(bool enable)
        {
            //Get the assembly that contains the internal class 
            Assembly assembly = Assembly.GetAssembly(typeof(SettingsSection));
            if (assembly != null)
            {
                //Use the assembly in order to get the internal type for the internal class 
                Type settingsSectionType = assembly.GetType("System.Net.Configuration.SettingsSectionInternal");
                if (settingsSectionType != null)
                {
                    //Use the internal static property to get an instance of the internal settings class. 
                    //If the static instance isn't created already invoking the property will create it for us. 
                    object anInstance = settingsSectionType.InvokeMember("Section",
                    BindingFlags.Static | BindingFlags.GetProperty | BindingFlags.NonPublic, null, null, new object[] { });
                    if (anInstance != null)
                    {
                        //Locate the private bool field that tells the framework if unsafe header parsing is allowed 
                        FieldInfo aUseUnsafeHeaderParsing = settingsSectionType.GetField("useUnsafeHeaderParsing", BindingFlags.NonPublic | BindingFlags.Instance);
                        if (aUseUnsafeHeaderParsing != null)
                        {
                            aUseUnsafeHeaderParsing.SetValue(anInstance, enable);
                            return true;
                        }

                    }
                }
            }
            return false;
        }
    }
}
```

## 相关参考

1. [如何在代码中设置useUnsafeHeaderParsing](http://cn.voidcc.com/question/p-udcdbuys-yp.html)
1. [HttpWebRequestElement.UseUnsafeHeaderParsing Property](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.configuration.httpwebrequestelement.useunsafeheaderparsing?view=netframework-4.8.1)
1. [SettingsSectionInternal](https://referencesource.microsoft.com/#System/net/System/Net/Configuration/SettingsSection.cs,176)