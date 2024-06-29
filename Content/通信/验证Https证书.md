# .NET 验证Https证书

[TOC]

----

## ServicePointManager

管理 [ServicePoint](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.servicepoint?view=net-7.0) 对象集合。

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.servicepointmanager?view=net-7.0)

### ServerCertificateValidationCallback

**完整声明**

`ServicePointManager.ServerCertificateValidationCallback`

获取或设置用于验证服务器证书的回调。

#### 属性声明

`public static System.Net.Security.RemoteCertificateValidationCallback? ServerCertificateValidationCallback { get; set; }`

#### 委托定义

`public delegate bool RemoteCertificateValidationCallback(object sender, X509Certificate? certificate, X509Chain? chain, SslPolicyErrors sslPolicyErrors);`

验证用于身份验证的远程安全套接字层 (SSL) 证书。

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.security.remotecertificatevalidationcallback?view=net-7.0)

##### 委托参数说明

###### X509Chain? chain

与远程证书关联的证书颁发机构链。

**X509Chain.ChainStatus 属性**

获取 [X509Chain](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chain?view=net-7.0) 对象中每个元素的状态。

**定义**

public System.Security.Cryptography.X509Certificates.X509ChainStatus[] ChainStatus { get; }

一个 [X509ChainStatus](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chainstatus?view=net-7.0) 对象数组。

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chain.chainstatus?view=net-7.0#system-security-cryptography-x509certificates-x509chain-chainstatus)

**X509ChainStatus.Status 属性**

指定 X509 链的状态。

一个 [X509ChainStatusFlags](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chainstatusflags?view=net-7.0) 值。

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chainstatus.status?view=net-7.0#system-security-cryptography-x509certificates-x509chainstatus-status)

**X509ChainStatusFlags 枚举**

定义一个 X509 链的状态。此枚举支持其成员值的按位组合。

**字段**

| CtlNotSignatureValid             | 262144    | 将证书信任列表 (CTL) 指定为包含无效签名。                    |
| -------------------------------- | --------- | ------------------------------------------------------------ |
| CtlNotTimeValid                  | 131072    | 将证书信任列表 (CTL) 指定为因时间值（如表明 CTL 已过期的值）无效而无效。 |
| CtlNotValidForUsage              | 524288    | 将证书信任列表 (CTL) 指定为对该使用无效。                    |
| Cyclic                           | 128       | 将 X509 链指定为无法生成。                                   |
| ExplicitDistrust                 | 67108864  | 将证书指定为显式不受信任。                                   |
| HasExcludedNameConstraint        | 32768     | 将 X509 链指定为因证书排除了名称约束而无效。                 |
| HasNotDefinedNameConstraint      | 8192      | 将证书指定为具有未定义的名称约束。                           |
| HasNotPermittedNameConstraint    | 16384     | 将证书指定为具有不受许可的名称约束。                         |
| HasNotSupportedCriticalExtension | 134217728 | 将证书指定为不支持关键扩展。                                 |
| HasNotSupportedNameConstraint    | 4096      | 将证书指定为不具有受支持的名称约束或具有的名称约束不受支持。 |
| HasWeakSignature                 | 1048576   | 将证书指定为未经强签名。 这通常指示 MD2 或 MD5 哈希算法被用于创建证书的哈希。 |
| InvalidBasicConstraints          | 1024      | 将 X509 链指定为因基本约束无效而无效。                       |
| InvalidExtension                 | 256       | 将 X509 链指定为因扩展无效而无效。                           |
| InvalidNameConstraints           | 2048      | 将 X509 链指定为因名称约束无效而无效。                       |
| InvalidPolicyConstraints         | 512       | 将 X509 链指定为因策略约束无效而无效。                       |
| NoError                          | 0         | 将 X509 链指定为无错误。                                     |
| NoIssuanceChainPolicy            | 33554432  | 指定在证书中不存在证书策略扩展。 如果组策略已指定所有证书都必须具有证书策略，则会发生此错误。 |
| NotSignatureValid                | 8         | 将 X509 链指定为因证书签名无效而无效。                       |
| NotTimeNested                    | 2         | 已弃用。 将 CA（证书颁发机构）证书和已颁发证书指定为具有不嵌套的有效期。 例如，CA 证书的有效期可为 1 月 1 日至 12 月 1 日，而颁发证书的有效期为 1 月 2 日至 12 月 2 日，这就意味着有效期不嵌套。 |
| NotTimeValid                     | 1         | 将 X509 链指定为因无效时间值（如表明证书已过期的值）而无效。 |
| NotValidForUsage                 | 16        | 将密钥用法指定为无效。                                       |
| OfflineRevocation                | 16777216  | 将 X509 链依赖的联机证书吊销列表 (CRL) 指定为当前处于脱机状态。 |
| PartialChain                     | 65536     | 将 X509 链指定为无法生成至根证书。                           |
| RevocationStatusUnknown          | 64        | 指定无法确定证书是否已吊销。 这可能是由于证书吊销列表 (CRL) 脱机或不可用。 |
| Revoked                          | 4         | 将 X509 链指定为因证书吊销而无效。                           |
| UntrustedRoot                    | 32        | 将 X509 链指定为因根证书不受信任而无效。                     |

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chainstatusflags?view=net-7.0)

###### sslPolicyErrors SslPolicyErrors

与远程证书关联的一个或多个错误。

**SslPolicyErrors 枚举**

**字段**

| None                          | 0    | 无 SSL 策略错误。                                            |
| ----------------------------- | ---- | ------------------------------------------------------------ |
| RemoteCertificateChainErrors  | 4    | [ChainStatus](https://learn.microsoft.com/zh-cn/dotnet/api/system.security.cryptography.x509certificates.x509chain.chainstatus?view=net-7.0#system-security-cryptography-x509certificates-x509chain-chainstatus) 已返回非空数组。 |
| RemoteCertificateNameMismatch | 2    | 证书名不匹配。                                               |
| RemoteCertificateNotAvailable | 1    | 证书不可用。                                                 |

[参考](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.security.sslpolicyerrors?view=net-7.0)

#### 使用示例

```C#
ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(CheckValidationResult);
....
....
....
private static bool CheckValidationResult(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors errors)
{
     return true; //总是接受  
}
```

实现或为如下的样子

```C#
// The following method is invoked by the RemoteCertificateValidationDelegate.
public static bool ValidateServerCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
{
   if (sslPolicyErrors == SslPolicyErrors.None)
        return true;

    Console.WriteLine("Certificate error: {0}", sslPolicyErrors);

    // Do not allow this client to communicate with unauthenticated servers.
    return false;
}
```

## HttpWebRequest.ServerCertificateValidationCallback

获取或设置用于验证服务器证书的回调函数。

### 定义

`public System.Net.Security.RemoteCertificateValidationCallback? ServerCertificateValidationCallback { get; set; }`

### 属性值

- [RemoteCertificateValidationCallback](https://learn.microsoft.com/zh-cn/dotnet/api/system.net.security.remotecertificatevalidationcallback?view=net-7.0)

用于验证服务器证书的回调函数。

### 适用于

| 产品           | 版本                                                         |
| :------------- | :----------------------------------------------------------- |
| .NET           | Core 2.0, Core 2.1, Core 2.2, Core 3.0, Core 3.1, 5, 6, 7, 8 |
| .NET Framework | 4.5, 4.5.1, 4.5.2, 4.6, 4.6.1, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8, 4.8.1 |
| .NET Standard  | 2.0, 2.1                                                     |
| Xamarin.iOS    | 10.8                                                         |
| Xamarin.Mac    | 3.0                                                          |

==注意== .NET Framework 版本支持的最低要求是4.5，因此4.5之前的版本只能使用 `ServicePointManager.ServerCertificateValidationCallback` 实现。



