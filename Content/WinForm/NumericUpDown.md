# NumericUpDown

WinForm 中 NumericUpDown 控件的 ValueChanged 事件是在输入值失去焦点时触发的（NumericUpDown控件失去焦点时会设置Value值从而引发 ValueChanged 事件）。

问题：ValueChanged 事件虽然也能做到值改变时的通知但是无法做到在输入的过程中值改变时提供及时的反馈。

解决思路：通过查看 NumericUpDown 的源码发现此控件的内部有个 TextBox 控件访问修饰符是 internal ，可以通过反射获取内部的 TextBox 控件然后通过 订阅 TextBox 控件的 TextChanged 事件即可实现相应的效果。

下面提供获取 NumericUpDown 控件中 TextBox 控件的扩展方法实现，方便需要用此功能的地方进行快速的调用。

```C#
        /// <summary>
        /// 获取NumericUpDown的TextBox控件
        /// </summary>
        /// <param name="numericUpDown"></param>
        /// <returns></returns>
        public static TextBox GetNumericUpDownTextBox(this NumericUpDown numericUpDown)
        {
            // 通过反射获取nudTemperatureValue中内部属性 TextBox 
            var type = typeof(NumericUpDown);
            var property = type.GetProperty("TextBox", System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.NonPublic);
            if (property.IsNull())
            {
                return null;
            }

            var ctrl = property.GetValue(numericUpDown, null);
            return ctrl as TextBox;
        }
```

其中 IsNull() 也是一个判空的扩展方法。