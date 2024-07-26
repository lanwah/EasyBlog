# WebBrowser控件

设置WebBrowser控件使用IE浏览器的版本

```c#
        private void UseLatestIE(int major)
        {
            try
            {
                int num = 0;
                switch (major)
                {
                    case 7:
                        // 0x1B58
                        num = 7000;
                        break;
                    case 8:
                        // 0x22B8
                        num = 8888;
                        break;
                    case 9:
                        // 0x270F
                        num = 9999;
                        break;
                    case 10:
                        // 0x2711
                        num = 10001;
                        break;
                    case 11:
                        // 0x2AF9
                        num = 11001;
                        break;
                }

                if (num != 0)
                {
                    using (var registryKey = Registry.CurrentUser.OpenSubKey("SOFTWARE\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION", true))
                    {
                        if (registryKey != null)
                        {
                            registryKey.SetValue(Path.GetFileName(Process.GetCurrentProcess().MainModule.FileName), num, RegistryValueKind.DWord);
                        }
                    }
                }
            }
            catch
            {
            }
        }
```



## 相关参考

1. **[C#设置WebBrowser IE浏览器版本](https://www.cnblogs.com/guohu/p/9110121.html)**
2. **[调整.NET控件WebBrowser的默认浏览器内核版本](https://blog.csdn.net/herogui/article/details/51982474)**
3. **[IE版本设置信息](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/general-info/ee330730(v=vs.85)?redirectedfrom=MSDN)**
