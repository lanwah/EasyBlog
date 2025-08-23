# OFD文档

OFD（Open Fixed-layout Documents的简称，意为开放版式文件）版式文档是版面呈现效果高度精确固定的电子文件，其呈现与设备无关。与pdf文件相仿，具有格式独立、版面固定、固化呈现等特点。OFD也逐渐开始在电子发票、电子公文、电子证照等等的领域中应用。



## 一、OFD特点

OFD标准有一系列技术优势。

1. 体积精简，格式开放，利于理解，长期可读可用
2. 根据我国各领域特色需要进行特性扩展，更深入地贴合了应用需求
3. 标准可支持国产密码算法，是文档安全性的有力保证，也是文件具有法律效力的基本条件
4. 标准是自主可控的，国家再有需要对OFD做上面提到的扩展时，特别是在我国党政军严肃类文档应用领域，可以不受控于外部的厂商，我们有自主的标准话语权



## 二、标准规范

- [GB/T 33190-2016](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=3AF6682D939116B6F5EED53D01A9DB5D) - 电子文件存储与交换格式版式文档



## 三、OFD核心特性与价值

1. **技术特点**
   - **固定版式**：内容布局与设备无关，跨平台显示一致，杜绝“跑版”问题。
   - **结构化数据**：基于XML描述文档结构和内容，体积小（比PDF压缩率更高），易于机器处理。
   - **强安全性**：支持国产密码算法（如SM2/SM3）和数字签名，防篡改且具法律效力。
   - **开放可扩展**：标准公开，支持自定义语义标引（如电子公文的结构化元数据）。
2. **应用场景**
   - **电子发票**：国家税务总局强制要求增值税电子普通发票采用OFD格式。
   - **电子公文**：党政机关公文交换标准（GB/T 33476.3-2016）。
   - **电子证照**：学历证书、职业资格证等（GB/T 36905-2018）。
   - **金融单据**：合同、结算单、凭证等。



## 四、OFD 处理库

[GitHub - wukonggo/awesome-ofd: 精选的中国开放文档格式(OFD)资源列表，包括标准规范、库、SDK、转换工具、阅读器和教程，为开发者和研究者提供全面参考。](https://github.com/wukonggo/awesome-ofd)

> 精选的中国开放文档格式(OFD)资源列表，包括标准规范、库、SDK、转换工具、阅读器和教程，为开发者和研究者提供全面参考。



### C#

- [GitHub - wukonggo/OFDConverter: A straightforward PDF to OFD (Open Fixed-layout Document) conversion. 简易的PDF转换为OFD格式文档](https://github.com/wukonggo/OFDConverter)

  > OFDConverter 是一个简易的PDF转换为OFD格式文档,转换效率高，用于将PDF文件转换为OFD（Open Fixed-layout Document）格式。OFD是一种开放的版式文档格式，在中国广泛使用，特别是在政府和企业文档管理中。

- [GitHub - swpudp/OfdSharp](https://github.com/swpudp/OfdSharp)

  > ofd文件读写类库,目前只完成ofd发票内容解析与验真部分开发

- [GitHub - zhuovi/XiaoFeng.Ofd: OFD 读写处理库，支持文档的生成、文档编辑、数字签名、文档合并、文档拆分、文档转换至PDF、文档查询等功能。](https://github.com/zhuovi/XiaoFeng.Ofd/?tab=readme-ov-file)

  > OFD 读写处理库，支持文档的生成、文档编辑、数字签名、文档合并、文档拆分、文档转换至PDF、文档查询等功能。
  >
  > [知识库 - 魔法精灵技术文档](https://www.eelf.cn/Knowledge)

- **相关文章**

  - [C#/VB.NET 将PDF转为OFD\_c# pdf转ofd-CSDN博客](https://blog.csdn.net/Eiceblue/article/details/119868263)
  - [pdf文档转ofd文档国标\_javapdf转ofd,javapdf转ofd资源-CSDN下载](https://download.csdn.net/download/trojanth/12818576?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-download-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-12818576-blog-119868263.235%5Ev43%5Epc_blog_bottom_relevance_base6&depth_1-utm_source=distribute.pc_relevant_t0.none-task-download-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-12818576-blog-119868263.235%5Ev43%5Epc_blog_bottom_relevance_base6&utm_relevant_index=1)



### Java

- [GitHub - ofdrw/ofdrw: OFD Reader & Writer 开源的OFD处理库，支持文档生成、数字签名、文档保护、文档合并、转换、导出等功能，文档格式遵循《GB/T 33190-2016 电子文件存储与交换格式版式文档》。](https://github.com/ofdrw/ofdrw)

  > OFD Reader & Writer 开源的OFD处理库，支持文档生成、数字签名、文档保护、文档合并、转换、导出等功能，文档格式遵循《GB/T 33190-2016 电子文件存储与交换格式版式文档》。

  - [ofdrw/ofdrw-converter/doc/CONVERTER.md at master · ofdrw/ofdrw · GitHub](https://github.com/ofdrw/ofdrw/blob/master/ofdrw-converter/doc/CONVERTER.md)

    > OFD Reader & Writer Convert to OFD (OFDRW C2O)
    >
    > OFDRW提供了将其它类型媒体文件或文档转换成OFD文档内容功能，例如：
    >
    > - PDF转换OFD
    > - 文本转换OFD
    > - 图片转换OFD

- [PDF转OFD工具类 Java\~\~\~解决你的燃眉之急\_java pdf转ofd-CSDN博客](https://blog.csdn.net/qq_51239427/article/details/141218181)

