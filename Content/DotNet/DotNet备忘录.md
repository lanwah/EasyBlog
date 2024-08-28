# DotNet备忘录

[TOC]

---

1. **可空类型ToString()返回的是string.Empty。**

   ```C#
   int? intVal = null;
   // sval = ""
   var sval = intVal.ToString();
   ```

2. **可空类型比较。**

   ```C#
   int? intVal = null;
   // false
   var b = intVal < 6;
   // false
   b = intVal > 6;
   
   intVal = 7;
   // false
   b = intVal < 6;
   // true
   b = intVal > 6;
   
   intVal = 4;
   // true
   b = intVal < 6;
   // false
   b = intVal > 6;
   ```
   
3. 1

4. 1

5. 1

6. 1

7. 1



## WinForms

1. **控件启用双重缓冲的首选方法**

   ```C#
   // 参考：https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.controlstyles?view=netframework-4.0
   this.DoubleBuffered = true;
   ```
   
2. 1

3. 1

4. 1
