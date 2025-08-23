# StringFormat

StringFormat.GenericDefault vs StringFormat.GenericTypographic 区别.



## 主要区别

### 1. 字符间距与紧排 (Kerning)
- **GenericDefault**
  - 采用GDI默认文本呈现方式
  - 通常不启用高级字符紧排和精确间距调整
  - 可能在字符串开头和结尾添加额外间距
  - 测量结果通常偏大

- **GenericTypographic**
  - 专为高质量排版设计
  - 启用精确字符紧排和间距调整
  - 严格遵循字体文件中定义的字符轮廓度量
  - 测量结果通常更小、更精确

### 2. 测量精度
- **GenericDefault**
  - 返回尺寸可能包含额外间距
  - 文本布局所需空间的保守估计

- **GenericTypographic**
  - 返回尺寸接近字符字形轮廓加精确紧排后的真实物理空间
  - 提供高精度测量

### 3. 行距 (Line Spacing)
- **GenericDefault**
  - 使用默认行距计算方式

- **GenericTypographic**
  - 使用更紧凑、更符合专业排版标准的行距

## 总结与选用建议

| 特性              | GenericDefault             | GenericTypographic                        |
| ----------------- | -------------------------- | ----------------------------------------- |
| **设计目标**      | GDI兼容性，一般UI显示      | 高质量专业排版                            |
| **字符紧排/间距** | 通常不启用/较宽松          | 启用/精确优化                             |
| **额外间距**      | 常在首尾添加(影响测量宽度) | 严格按字形轮廓，无额外间距                |
| **测量结果**      | 较大(包含额外空间)         | 较小、更精确(反映实际物理像素占用)        |
| **精度**          | 较低，满足一般显示需求     | 高，适用于精确定位                        |
| **典型用途**      | 常规Windows窗体控件渲染    | 打印、报表生成、CAD绘图等需要高精度的场景 |

## 代码示例

```csharp
// 使用GenericDefault
StringFormat defaultFormat = StringFormat.GenericDefault;
SizeF defaultSize = graphics.MeasureString(text, font, defaultFormat);

// 使用GenericTypographic
StringFormat typoFormat = StringFormat.GenericTypographic;
SizeF typoSize = graphics.MeasureString(text, font, typoFormat);
```



## 相关参考

- [StringFormat 类 (System.Drawing) | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/api/system.drawing.stringformat?view=windowsdesktop-9.0)

