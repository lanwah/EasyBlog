# 一探 Control.GetPreferredSize 的实现

**Control.GetPreferredSize(Size) 方法**

> [Control.GetPreferredSize(Size) 方法 (System.Windows.Forms) | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.control.getpreferredsize?view=windowsdesktop-9.0)

## 缘起

在 WinForm 中通常会调用 Control.GetPreferredSize(Size) 来获取控件需要的大小来使控件完整的显示。但是会感到很困惑此函数是如何实现的，哪些因素会影响此函数返回的Size大小呢？

## 缘落

通过Visual Studio的反编译，可以看到 **Control.GetPreferredSize(Size)**  代码的实现如下（由于反编译的代码没有注释，也很难理解，因此完善了注释）：

```C#
    [EditorBrowsable(EditorBrowsableState.Advanced)]
    public virtual Size GetPreferredSize(Size proposedSize)
    {
        Size size;
        // if (GetState(States.Disposing | States.Disposed))
        if (GetState(6144))
        {
            // 资源释放时获取大小，则直接从缓存获取（缓存存在则返回缓存中的大小否则返回 Size.Empty ）。
            size = CommonProperties.xGetPreferredSizeCache(this);
        }
        else
        {
            // 把 Size.Empty 转换为最大的尺寸大小
            proposedSize = LayoutUtils.ConvertZeroToUnbounded(proposedSize);
            // 对合适大小的限制算法
            proposedSize = ApplySizeConstraints(proposedSize);
            // if (GetExtendedState(ExtendedStates.UserPreferredSizeCache))
            if (GetState2(2048))
            {
                // 启用缓存，且缓存中存在数据则返回
                Size result = CommonProperties.xGetPreferredSizeCache(this);
                if (!result.IsEmpty && proposedSize == LayoutUtils.MaxSize)
                {
                    return result;
                }
            }

            CacheTextInternal = true;
            try
            {
                // 此函数的核心方法，里面有计算返回大小的核心实现
                // 详细的函数实现详见后面的代码片段，其实核心就两点：
                // 1、判断缓存中释放存在数据，存在则返回；
                // 2、缓存中不存在，返回 Bounds 的值；
                size = GetPreferredSizeCore(proposedSize);
            }
            finally
            {
                CacheTextInternal = false;
            }

            // 应用合适大小的限制规则
            size = ApplySizeConstraints(size);
            // if (GetExtendedState(ExtendedStates.UserPreferredSizeCache) && proposedSize == LayoutUtils.s_maxSize)
            if (GetState2(2048) && proposedSize == LayoutUtils.MaxSize)
            {
                // 开起了缓存，则加入缓存
                CommonProperties.xSetPreferredSizeCache(this, size);
            }
        }

        return size;
    }
```

**CommonProperties.xGetPreferredSizeCache(IArrangedElement element)** 实现

```C#
    /// <summary>
    ///  This value is the cached result of the return value from a control's
    ///  <see cref="Control.GetPreferredSizeCore(Size)"/> implementation when asked for a constraining
    ///  value of <see cref="LayoutUtils.s_maxSize"/> (or <see cref="Size.Empty"/> too).
    /// </summary>
    internal static Size xGetPreferredSizeCache(IArrangedElement element)
    {
        if (element.Properties.TryGetValue(s_preferredSizeCacheProperty, out Size size) && (size != LayoutUtils.s_invalidSize))
        {
            return size;
        }
 
        return Size.Empty;
    }
```

**LayoutUtils.ConvertZeroToUnbounded(Size size)** 实现

```C#
    public static Size ConvertZeroToUnbounded(Size size)
    {
        if (size.Width == 0)
        {
            size.Width = int.MaxValue;
        }
 
        if (size.Height == 0)
        {
            size.Height = int.MaxValue;
        }
 
        return size;
    }
```

**ApplySizeConstraints(Size proposedSize)** 实现

```C#
    // GetPreferredSize and SetBoundsCore call this method to allow controls to self impose
    // constraints on their size.
    internal Size ApplySizeConstraints(Size proposedSize)
    {
        return ApplyBoundsConstraints(0, 0, proposedSize.Width, proposedSize.Height).Size;
    }

    internal virtual Rectangle ApplyBoundsConstraints(int suggestedX, int suggestedY, int proposedWidth, int proposedHeight)
    {
        // COMPAT: in Everett we would allow you to set negative values in pre-handle mode
        // in Whidbey, if you've set Min/Max size we will constrain you to 0,0. Everett apps didnt
        // have min/max size on control, which is why this works.
        if (MaximumSize != Size.Empty || MinimumSize != Size.Empty)
        {
            Size maximumSize = LayoutUtils.ConvertZeroToUnbounded(MaximumSize);
            Rectangle newBounds = new(suggestedX, suggestedY, 0, 0)
            {
                // Clip the size to maximum and inflate it to minimum as necessary.
                Size = LayoutUtils.IntersectSizes(new Size(proposedWidth, proposedHeight), maximumSize)
            };
            newBounds.Size = LayoutUtils.UnionSizes(newBounds.Size, MinimumSize);
 
            return newBounds;
        }
 
        return new Rectangle(suggestedX, suggestedY, proposedWidth, proposedHeight);
    }
```

**GetPreferredSizeCore(Size proposedSize)** 实现

```C#
    // Overriding this method allows us to get the caching and clamping the proposedSize/output to
    // MinimumSize / MaximumSize from GetPreferredSize for free.
    internal virtual Size GetPreferredSizeCore(Size proposedSize)
    {
        return CommonProperties.GetSpecifiedBounds(this).Size;
    }
```

**CommonProperties.GetSpecifiedBounds(IArrangedElement element)** 实现

```
    /// <summary>
    ///  Returns the last size manually set into the element.
    /// </summary>
    /// <remarks>
    ///  <para>
    ///   See <see cref="UpdateSpecifiedBounds(IArrangedElement, int, int, int, int)"/>.
    ///  </para>
    /// </remarks>
    internal static Rectangle GetSpecifiedBounds(IArrangedElement element) =>
        element.Properties.TryGetValue(s_specifiedBoundsProperty, out Rectangle rectangle)
            && rectangle != LayoutUtils.s_maxRectangle
                ? rectangle
                : element.Bounds;
```

详细的代码实现可以参考：

- [Control.cs|GetPreferredSize(Size)](https://source.dot.net/#System.Windows.Forms/System/Windows/Forms/Control.cs,c1acc7a323311d02)

## 缘灭

通过对上面源码的阅读可知其实 GetPreferredSize(Size) 实现的核心就是：

- 先判断缓存中是否存在最合适的大小，存在则返回，
- 如果缓存中不存在则返回控件 Bounds 的大小，并根据是否开启缓存开关而缓存合适的大小。

