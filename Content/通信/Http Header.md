[TOC]

---

# Http Header

Content-Language,Content-Length,Content-Type,Content-Encoding

```html
Accept	        指定客户端能够接收的内容类型	Accept:text/plain,text/html
Accept-Charset	浏览器可以接受的字符编码集。	Accept-Charset:iso-8859-5
Accept-Encoding	指定浏览器可以支持的web服务器返回内容压缩编码类型。	Accept-Encoding:compress,gzip
Accept-Language	浏览器可接受的语言	Accept-Language:en,zh
Accept-Ranges	可以请求网页实体的一个或者多个子范围字段	Accept-Ranges:bytes
Authorization	HTTP授权的授权证书	Authorization:Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
Cache-Control	指定请求和响应遵循的缓存机制	Cache-Control:no-cache
Connection	表示是否需要持久连接。（HTTP 1.1默认进行持久连接）	Connection:close
Cookie	        HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。	Cookie:$Version=1;Skin=new;
Content-Length	请求的内容长度	Content-Length:348
Content-Type	请求的与实体对应的MIME信息	Content-Type:application/x-www-form-urlencoded
Date	        请求发送的日期和时间	Date:Tue,15 Nov 2010 08:12:31 GMT
Expect	        请求的特定的服务器行为	Expect:100-continue
From            发出请求的用户的Email	From:user@email.com
Host	        指定请求的服务器的域名和端口号	Host:www.zcmhi.com
If-Match	只有请求内容与实体相匹配才有效	If-Match:“737060cd8c284d8af7ad3082f209582d”
If-Modified-Since	如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码	If-Modified-Since:Sat,29 Oct 2010 19:43:31 GMT
If-None-Match	如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变	If-None-Match:“737060cd8c284d8af7ad3082f209582d”
If-Range	如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag	If-Range:“737060cd8c284d8af7ad3082f209582d”
If-Unmodified-Since	只在实体在指定时间之后未被修改才请求成功	If-Unmodified-Since:Sat,29 Oct 2010 19:43:31 GMT
Max-Forwards	限制信息通过代理和网关传送的时间	Max-Forwards:10
Pragma	        用来包含实现特定的指令	Pragma:no-cache
Proxy-Authorization	连接到代理的授权证书	Proxy-Authorization:Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
Range	        只请求实体的一部分，指定范围	Range:bytes=500-999
Referer    	先前网页的地址，当前请求网页紧随其后,即来路	Referer:http:
TE	        客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息	TE:trailers,deflate;q=0.5
Upgrade	        向服务器指定某种传输协议以便服务器进行转换（如果支持）	Upgrade:HTTP/2.0,SHTTP/1.3,IRC/6.9,RTA/x11
User-Agent    	User-Agent的内容包含发出请求的用户信息	User-Agent:Mozilla/5.0(Linux;X11)
Via	        通知中间网关或代理服务器地址，通信协议	Via:1.0 fred,1.1 nowhere.com(Apache/1.1)
Warning	        关于消息实体的警告信息	Warn:199 Miscellaneous warning 
```

## 一、HTTP头引入

正确的设置HTTP头部信息有助于搜索引擎判断网页及提升网站访问速度。通常HTTP消息包括：客户机向服务器的请求消息和服务器向客户机的响应消 息。客户端向服务器发送一个请求，请求头包含请求的方法、URI、协议版本、以及包含请求修饰符、客户信息和内容的类似于MIME的消息结构。服务器以一 个状态行作为响应，相应的内容包括消息协议的版本，成功或者错误编码加上包含服务器信息、实体元信息以及可能的实体内容。 

![HTTP请求详解图](../Images/HttpHeader/1734086-20230325230835215-690116929.png)

Http协议定义了很多与服务器交互的方法，即**HTTP请求的种类**中，最基本的有4种，分别是GET、POST、PUT、DELETE。一个URL地址用于描述一个网络上的资源，而HTTP中**GET、POST、PUT、 DELETE**就对应着对这个资源的**查、改、增、删**4个操作，我们最常见的就是GET和POST了。

- **GET：通过请求URI得到资源。一般用于获取/查询资源信息。**

- **POST：用于向服务器提交新的内容。一般用于更新资源信息**。

## 二、HTTP头信息解读

HTTP的头域包括**通用头、请求头、响应头和实体头**四个部分。每个头域由一个域名，冒号（:）和域值三部分组成（说白了就是键值对）。

- **通用头**：是客户端和服务器都可以使用的头部，可以在客户端、服务器和其他应用程序之间提供一些非常有用的通用功能，如Date头部。
- **请求头**：是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如Accept头部。
- **响应头**：便于客户端提供信息，比如，客服端在与哪种类型的服务器进行交互，如Server头部。
- **实体头**：指的是用于应对实体主体部分的头部，比如，可以用实体头部来说明实体主体部分的数据类型，如Content-Type头部。

## 三、HTTP通用头

通用头域包含请求和响应消息都支持的头域，通用头域包含缓存头部Cache-Control、Pragma及信息性头部Connection、Date、Transfer-Encoding、Update、Via。

**1、Cache-Control**

Cache-Control指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置 Cache-Control并不会修改另一个消息处理过程中的缓存处理过程。请求时的缓存指令包括no-cache、no-store、max-age、 max-stale、min-fresh、only-if-cached，响应消息中的指令包括public、private、no-cache、no- store、no-transform、must-revalidate、proxy-revalidate、max-age。各个消息中的指令含义如 下：

- no-cache：指示请求或响应消息不能缓存，实际上是可以存储在本地缓存区中的，只是在与原始服务器进行新鲜度验证之前，缓存不能将其提供给客户端使用。
- no-store：缓存应该尽快从存储器中删除文档的所有痕迹，因为其中可能会包含敏感信息。
- max-age：缓存无法返回缓存时间长于max-age规定秒的文档，若不超规定秒浏览器将不会发送对应的请求到服务器，数据由缓存直接返回； 超过这一时间段才进一步由服务器决定是返回新数据还是仍由缓存提供。若同时还发送了max-stale指令，则使用期可能会超过其过期时间。
- min-fresh：至少在未来规定秒内文档要保持新鲜，接受其新鲜生命期大于其当前 Age 跟 min-fresh 值之和的缓存对象。
- max-stale：指示客户端可以接收过期响应消息，如果指定max-stale消息的值，那么客户端可以接收过期但在指定值之内的响应消息。
- only-if-cached：只有当缓存中有副本存在时，客户端才会获得一份副本。
- Public：指示响应可被任何缓存区缓存，可以用缓存内容回应任何用户。
- Private：指示对于单个用户的整个或部分响应消息，不能被共享缓存处理，只能用缓存内容回应先前请求该内容的那个用户。

**2、Pragma**

Pragma头域用来包含实现特定的指令，最常用的是Pragma:no-cache。在HTTP/1.1协议中，它的含义和Cache- Control:no-cache相同。

**3、Connection**

Connection表示是否需要持久连接。如果Servlet看到这里的值为“Keep-Alive”，或者看到请求使用的是HTTP 1.1（HTTP 1.1默认进行持久连接），它就可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。要实现这一 点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入 ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。

- Close：告诉WEB服务器或者代理服务器，在完成本次请求的响应后，断开连接，不要等待本次连接的后续请求了。
- Keepalive：告诉WEB服务器或者代理服务器，在完成本次请求的响应后，保持连接，等待本次连接的后续请求。
- Keep-Alive：如果浏览器请求保持连接，则该头部表明希望 WEB 服务器保持连接多长时间（秒），如Keep-Alive：300。

**4、Date**

Date头域表示消息发送的时间，服务器响应中要包含这个头部，因为缓存在评估响应的新鲜度时要用到，其时间的描述格式由RFC822定义。例 如，Date:Mon, 31 Dec 2001 04:25:57 GMT。Date描述的时间表示世界标准时，换算成本地时间，需要知道用户所在的时区。

**5、Transfer-Encoding**

WEB 服务器表明自己对本响应消息体（不是消息体里面的对象）作了怎样的编码，比如是否分块（chunked），例如：Transfer-Encoding: chunked

**6、Upgrade**

它可以指定另一种可能完全不同的协议，如HTTP/1.1客户端可以向服务器发送一条HTTP/1.0请求，其中包含值为“HTTP/1.1”的Update头部，这样客户端就可以测试一下服务器是否也使用HTTP/1.1了。

**7、Via**

列出从客户端到 OCS 或者相反方向的响应经过了哪些代理服务器，他们用什么协议（和版本）发送的请求。

当客户端请求到达第一个代理服务器时，该服务器会在自己发出的请求里面添加 Via 头部，并填上自己的相关信息，当下一个代理服务器 收到第一个代理服务器的请求时，会在自己发出的请求里面复制前一个代理服务器的请求的Via头部，并把自己的相关信息加到后面，以此类推，当 OCS 收到最后一个代理服务器的请求时，检查 Via 头部，就知道该请求所经过的路由。例如：Via：1.0 236-81.D07071953.sina.com.cn:80 (squid/2.6.STABLE13)

## 四、HTTP请求头

请求头用于说明是谁或什么在发送请求、请求源于何处，或者客户端的喜好及能力。服务器可以根据请求头部给出的客户端信息，试着为客户端提供更好的响 应。请求头域可能包含下列字段Accept、Accept-Charset、Accept- Encoding、Accept-Language、Authorization、From、Host、If-Modified-Since、If- Match、If-None-Match、If-Range、If-Range、If-Unmodified-Since、Max-Forwards、 Proxy-Authorization、Range、Referer、User-Agent。对请求头域的扩展要求通讯双方都支持，如果存在不支持的请 求头域，一般将会作为实体头域处理。

**8、Accept**

告诉WEB服务器自己接受什么介质类型，*/* 表示任何类型，type/* 表示该类型下的所有子类型，type/sub-type。

**9、Accept-Charset**

浏览器告诉服务器自己能接收的字符集。

**10、Accept-Encoding**

浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）。

**11、Accept-Language**

浏览器申明自己接收的语言。语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等等。

**12、Authorization**

当客户端接收到来自WEB服务器的 WWW-Authenticate 响应时，用该头部来回应自己的身份验证信息给WEB服务器。

**13、If-Match**

如果对象的 ETag 没有改变，其实也就意味著对象没有改变，才执行请求的动作，获取文档。

**14、If-None-Match**

如果对象的 ETag 改变了，其实也就意味著对象也改变了，才执行请求的动作，获取文档。

**15、If-Modified-Since**

如果请求的对象在该头部指定的时间之后修改了，才执行请求的动作（比如返回对象），否则返回代码304，告诉浏览器该对象没有修改。例如：If-Modified-Since：Thu, 10 Apr 2008 09:14:42 GMT

**16、If-Unmodified-Since**

如果请求的对象在该头部指定的时间之后没修改过，才执行请求的动作（比如返回对象）。

**17、If-Range**

浏览器告诉 WEB 服务器，如果我请求的对象没有改变，就把我缺少的部分给我，如果对象改变了，就把整个对象给我。浏览器通过发送请求对象的ETag 或者自己所知道的最后修改时间给 WEB 服务器，让其判断对象是否改变了。总是跟 Range 头部一起使用。

**18、Range**

浏览器（比如 Flashget 多线程下载时）告诉 WEB 服务器自己想取对象的哪部分。例如：Range: bytes=1173546

**19、Proxy-Authenticate**

代理服务器响应浏览器，要求其提供代理身份验证信息。

**20、Proxy-Authorization**

浏览器响应代理服务器的身份验证请求，提供自己的身份信息。

**21、Host**

客户端指定自己想访问的WEB服务器的域名/IP 地址和端口号。如Host：rss.sina.com.cn

**22、Referer**

浏览器向WEB 服务器表明自己是从哪个网页URL获得点击当前请求中的网址/URL，例如：Referer：http://www.ecdoer.com/

**23、User-Agent**

浏览器表明自己的身份（是哪种浏览器）。例如：Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36

## 五、HTTP响应头

响应头向客户端提供一些额外信息，比如谁在发送响应、响应者的功能，甚至与响应相关的一些特殊指令。这些头部有助于客户端处理响应，并在将来发起更 好的请求。响应头域包含Age、Location、Proxy-Authenticate、Public、Retry- After、Server、Vary、Warning、WWW-Authenticate。对响应头域的扩展要求通讯双方都支持，如果存在不支持的响应头 域，一般将会作为实体头域处理。

**24、Age**

当代理服务器用自己缓存的实体去响应请求时，用该头部表明该实体从产生到现在经过多长时间了。

**25、Server**

WEB 服务器表明自己是什么软件及版本等信息。例如：Server：Apache/2.0.61 (Unix)

**26、Accept-Ranges**

WEB服务器表明自己是否接受获取其某个实体的一部分（比如文件的一部分）的请求。bytes：表示接受，none：表示不接受。

**27、Vary**

WEB服务器用该头部的内容告诉 Cache 服务器，在什么条件下才能用本响应所返回的对象响应后续的请求。假如源WEB服务器在接到第一个请求消息时，其响应消息的头部为：Content- Encoding: gzip; Vary: Content-Encoding，那么Cache服务器会分析后续请求消息的头部，检查其Accept-Encoding，是否跟先前响应的Vary头 部值一致，即是否使用相同的内容编码方法，这样就可以防止Cache服务器用自己Cache 里面压缩后的实体响应给不具备解压能力的浏览器。例如：Vary：Accept-Encoding。

## 六、HTTP实体头

实体头部提供了有关实体及其内容的大量信息，从有关对象类型的信息，到能够对资源使用的各种有效的请求方法。总之，实体头部可以告知接收者它在对什 么进行处理。请求消息和响应消息都可以包含实体信息，实体信息一般由实体头域和实体组成。实体头域包含关于实体的原信息，实体头包括信息性头部 Allow、Location，内容头部Content-Base、Content-Encoding、Content-Language、 Content-Length、Content-Location、Content-MD5、Content-Range、Content-Type，缓 存头部Etag、Expires、Last-Modified、extension-header。

**28、Allow**

服务器支持哪些请求方法（如GET、POST等）。

**29、Location**

表示客户应当到哪里去提取文档，用于将接收端定位到资源的位置（URL）上。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。

**30、Content-Base**

解析主体中的相对URL时使用的基础URL。

**31、Content-Encoding**

WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip

**32、Content-Language**

WEB 服务器告诉浏览器理解主体时最适宜使用的自然语言。

**33、Content-Length**

WEB服务器告诉浏览器自己响应的对象的长度或尺寸，例如：Content-Length: 26012

**34、Content-Location**

资源实际所处的位置。

**35、Content-MD5**

主体的MD5校验和。

**36、Content-Range**

实体头用于指定整个实体中的一部分的插入位置，他也指示了整个实体的长度。在服务器向客户返回一个部分响应，它必须描述响应覆盖的范围和整个实体长 度。一般格式： Content-Range:bytes-unitSPfirst-byte-pos-last-byte-pos/entity-legth。例如，传 送头500个字节次字段的形式：Content-Range:bytes0- 499/1234如果一个http消息包含此节（例如，对范围请求的响应或对一系列范围的重叠请求），Content-Range表示传送的范 围，Content-Length表示实际传送的字节数。

**37、Content-Type**

WEB 服务器告诉浏览器自己响应的对象的类型。例如：Content-Type：application/xml

**38、Etag**

就是一个对象（比如URL）的标志值，就一个对象而言，比如一个html文件，如果被修改了，其Etag也会别修改，所以，ETag的作用跟 Last-Modified的作用差不多，主要供WEB服务器判断一个对象是否改变了。比如前一次请求某个html文件时，获得了其 ETag，当这次又请求这个文件时，浏览器就会把先前获得ETag值发送给WEB服务器，然后WEB服务器会把这个ETag跟该文件的当前ETag进行对 比，然后就知道这个文件有没有改变了。

**39、Expires**

WEB服务器表明该实体将在什么时候过期，对于过期了的对象，只有在跟WEB服务器验证了其有效性后，才能用来响应客户请求。是 HTTP/1.0 的头部。例如：Expires：Sat, 23 May 2009 10:02:12 GMT

**40、Last-Modified**

WEB服务器认为对象的最后修改时间，比如文件的最后修改时间，动态页面的最后产生时间等等。例如：Last-Modified：Tue, 06 May 2008 02:42:43 GMT

## 六、以百度首页为例获取请求头和响应头内容

**1、请求头：**

我们现在通过谷歌浏览器来查看一下请求头：

以打开百度首页为例，然后在谷歌浏览器中打开“工具-开发者工具”，切换到network标签， 然后刷新页面：

![百度请求](../Images/HttpHeader/1734086-20230325230834780-1140278937.png)

上图中，打开箭头处html格式的文件，显示如下：

![百度请求头](../Images/HttpHeader/1734086-20230325230834265-6295890.png)

上图中的Request Headers就是我们所需要的请求头。里面的内容全部是键值对。服务器拿到这些键值对后会对其进行分析。

我们再来重复一下常见**请求头键值对的含义：**

- Host:www.baidu.com   本次请求访问的主机地址（虚拟主机名称）
- Cache-control:no-cache    设置网页缓存的使用方法
- Pragma:no-cache
- **Accept**:text/html,xxxxxx…..**客户端可以接收的数据类型**（如果内容是：*/*，表示接收所有类型）
- **User-Agent**:Mozilla/5.0xxxxx **主要表示客户端类型**
- **Accept-Encoding**:gzip,deflate,sdch 浏览器能够接收的**数据压缩编码方式**（表示浏览器能够接收什么格式的压缩的数据）
- **Accept-Language**:zh-CN,zh;q=0.8 浏览器期望的**接受的语言种类**
- Accept-Charset: ISO-8859-1    客户端所接收的字符集编码
- If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT  和缓存机制相关的头
- Referer: http://www.smyh.me/index.jsp  当前页面来自哪个页面（可能是由之前的页面通过超链接点进到这个页面来）
- Cookie
- Connection: close/Keep-Alive  请求完之后，是关闭此连接，还是继续保持连接
- Date: Tue, 11 Jul 2013 18:23:51 GMT 当前请求的时间

注：上面的这些指的是get请求的请求头。

**2、响应头：**

我们再来看一下响应头的内容：

![百度响应头](../Images/HttpHeader/1734086-20230325230833684-2000743966.png)

常见的响应头键值对的含义：

- Location: http://www.smyh.me/index.jsp   重定向（302+Location实现重定向）
- Server            服务器类型
- Content-Encoding    服务器当前返回给客户端的数据压缩格式
- Content-Length     返回给客户端的数据量的大小
- Content-Language: zh-cn  语言种类
- **Content-Type**: text/html; **charset**=GB2312    返回的数据的类型、字符集编码方式
- Last-Modified       资源最后一次修改的时间（配合请求头中的If-Modified-Since+304/307实现缓存机制）
- Refresh: 1;url=http://www.it315.org 　　 隔多少秒以后，让当前页面去访问哪个地址（例如网页登陆成功后，跳回原来的界面，就是用的这个头）
- Content-Disposition: attachment;filename=aaa.zip  和下载相关，通知浏览器以附件的形式下载服务器发送过去的数据
- Transfer-Encoding: chunked  数据传输模式
- Set-Cookie:SS=Q0=5Lb_nQ; path=/search   和cookie相关的头
- ETag: W/"83794-1208174400000"    和cookie相关的头

- Expires: -1     通知浏览器是否缓存当前资源：如果这个头的值是一个以毫秒为单位值，则通知浏览器缓存资源到指定的时间点；如果值是0或-1，则通知浏览器禁止缓存
- Cache-Control: no-cache  通知浏览器是否缓存资源
- Pragma: no-cache     -- 通知浏览器是否缓存资源

注： 之所以三个头是一个功能,是因为历史原因。不同的浏览器对这三个头支持的不同,一般来说这三个头要同时使用，以确保不同的浏览器都能实现控制缓存的功能

- Connection: close/Keep-Alive  是否继续保持连接
- Date: Tue, 11 Jul 2000 18:23:51 GMT   当前响应的时间

## 七、通过Android代码获取请求头与相应头的内容

在上一篇文章中，我们讲到了使用HttpClient发送HTTP请求。我们将里面的代码重新复制一下贴出来：（省的切换回去，麻烦的很）

activity_main.xml代码如下：

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity" >
 
    <Button
        android:id="@+id/button1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Send Request" />
 
    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent" >
 
        <TextView
            android:id="@+id/TextView1"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="@string/hello_world" />
    </ScrollView>
 
</LinearLayout>
```

布局文件中，我们用一个ScrollView来包裹TextView。借助ScrollView控件的话，就可以允许我们一滚动的形式查看屏幕外i的那部分内容。

MainActivity.java的代码如下：（注释比较详细）

```java
 package com.example.m04_http01;
 
 import org.apache.http.HttpEntity;
 import org.apache.http.HttpResponse;
 import org.apache.http.client.HttpClient;
 import org.apache.http.client.methods.HttpGet;
 import org.apache.http.impl.client.DefaultHttpClient;
 import org.apache.http.util.EntityUtils;
 import android.app.Activity;
 import android.os.Bundle;
 import android.os.Handler;
 import android.os.Message;
 import android.view.View;
 import android.view.View.OnClickListener;
 import android.widget.Button;
 import android.widget.TextView;

 public class MainActivity extends Activity {

     public static final int SHOW_RESPONSE = 0;

     private Button button_sendRequest;
     private TextView textView_response;

     //新建Handler的对象，在这里接收Message，然后更新TextView控件的内容
     private Handler handler = new Handler() {

         @Override
         public void handleMessage(Message msg) {
             super.handleMessage(msg);
             switch (msg.what) {
             case SHOW_RESPONSE:
                 String response = (String) msg.obj;
                 textView_response.setText(response);
                 break;

             default:
                 break;
             }
         }

     };

     @Override
     protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(savedInstanceState);
         setContentView(R.layout.activity_main);
         textView_response = (TextView)findViewById(R.id.TextView1);
         button_sendRequest = (Button)findViewById(R.id.button1);

         button_sendRequest.setOnClickListener(new OnClickListener() {

             //点击按钮时，执行sendRequestWithHttpClient()方法里面的线程
             @Override
             public void onClick(View v) {
                 // TODO Auto-generated method stub
                 sendRequestWithHttpClient();
             }
         });
     }

     //方法：发送网络请求，获取百度首页的数据。在里面开启线程
     private void sendRequestWithHttpClient() {
         new Thread(new Runnable() {

             @Override
             public void run() {
                 //用HttpClient发送请求，分为五步
                 //第一步：创建HttpClient对象
                 HttpClient httpCient = new DefaultHttpClient();
                 //第二步：创建代表请求的对象,参数是访问的服务器地址
                 HttpGet httpGet = new HttpGet("http://www.baidu.com");

                 try {
                     //第三步：执行请求，获取服务器发还的相应对象
                     HttpResponse httpResponse = httpCient.execute(httpGet);
                     //第四步：检查响应的状态是否正常：检查状态码的值是200表示正常
                     if (httpResponse.getStatusLine().getStatusCode() == 200) {
                         //第五步：从响应对象当中取出数据，放到entity当中
                         HttpEntity entity = httpResponse.getEntity();
                         String response = EntityUtils.toString(entity,"utf-8");//将entity当中的数据转换为字符串

                         //在子线程中将Message对象发出去
                         Message message = new Message();
                         message.what = SHOW_RESPONSE;
                         message.obj = response.toString();
                         handler.sendMessage(message);
                     }

                 } catch (Exception e) {
                     // TODO Auto-generated catch block
                     e.printStackTrace();
                 }

             }
         }).start();//这个start()方法不要忘记了

     }
 } 
```

这段代码要实现的功能是：用户点击按钮，能够获取百度首页的html数据并显示在TextView当中。

现在要做的事情是：修改上方代码中sendRequestWithHttpClient()这个方法里面的内容：

```java
     //方法：发送网络请求，获取百度首页的数据。在里面开启线程
     private void sendRequestWithHttpClient() {
         new Thread(new Runnable() {

             @Override
             public void run() {
                 //用HttpClient发送请求，分为五步
                 HttpClient httpCient = new DefaultHttpClient();
                 HttpGet httpGet = new HttpGet("http://www.baidu.com");

                 //放入请求头的内容，必须是以键值对的形式，这里以Accept-language为例
                 httpGet.addHeader("Accept-Language","zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4");
                 //获取请求头，并用Header数组接收
                 Header [] reqHeaders = httpGet.getAllHeaders();
                 //遍历Header数组，并打印出来
                 for (int i = 0; i < reqHeaders.length; i++) {
                     String name = reqHeaders[i].getName();
                     String value = reqHeaders[i].getValue();
                     Log.d("http01", "Http request: Name--->" + name + ",Value--->" + value);
                 }

                 try {
                     HttpResponse httpResponse = httpCient.execute(httpGet);

                     //获取响应头，并用Header数组接收
                     Header [] responseHeaders = httpResponse.getAllHeaders();
                     //遍历Header数组，并打印出来
                     for (int i = 0; i < responseHeaders.length; i++) {
                         String name = responseHeaders[i].getName();
                         String value = responseHeaders[i].getValue();
                         Log.d("http01", "Http response: Name--->" + name + ",Value--->" + value);
                     }                   

                     if (httpResponse.getStatusLine().getStatusCode() == 200) {
                         HttpEntity entity = httpResponse.getEntity();
                         String response = EntityUtils.toString(entity,"utf-8");//将entity当中的数据转换为字符串

                         //在子线程中将Message对象发出去
                         Message message = new Message();
                         message.what = SHOW_RESPONSE;
                         message.obj = response.toString();
                         handler.sendMessage(message);
                     }

                 } catch (Exception e) {
                     // TODO Auto-generated catch block
                     e.printStackTrace();
                 }

             }
         }).start();//这个start()方法不要忘记了

     }
```

上方代码中，加粗部分是我们所添加的内容，用于获取请求头和响应头的键值对内容。代码解释如下：

12行：**通过httpGet的addHeader()方法手动添加一个请求头**(我们在上一段中看到的例子其实是浏览器帮我们添加好了的，那种情况下不需要手动添加)

14行：**通过httpGet的getAllHeaders()方法获取响应头的内容**，并用Header数组接收。注意，在导入Header的包时，我们选择org.apache.http.Header这个包;请求头的每一个键值对都是Header里面的内容。

16至20行：遍历输出Header数组里面的内容。

25至32行：获取响应头的内容，原理类似。

运行程序，点击按钮后，在后台输出结果如下：

![请求结果](../Images/HttpHeader/1734086-20230325230833055-673345140.png)

这与我们在上一段中看到的许多键是一样的。



## 版权特别声明

本文摘自：https://www.bbsmax.com/A/Ae5RPO0LzQ/

# Accept 和 Content-Type区别

Accept表示 客服端（浏览器）支持的类型，也是希望服务器响应发送回来的的数据类型。

例如：Accept：text/xml; ，也就是希望服务器响应发送回来的是xml文本格式的内容。

Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 
比如：Content-Type：text/html; 
代表发送端发送的数据格式是html。

区别：

1.Accept属于请求头， Content-Type属于实体头。 
Http报头分为通用报头，请求报头，响应报头和实体报头。 
请求方的http报头结构：通用报头|请求报头|实体报头 
响应方的http报头结构：通用报头|响应报头|实体报头

2.Accept代表发送端（客户端）希望接受的数据类型。 
比如：Accept：text/xml; 
代表客户端希望接受的数据类型是xml类型

Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 
比如：Content-Type：text/html; 
代表发送端发送的数据格式是html。

---
版权声明：本文为CSDN博主「my_angle2016」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/my_angle2016/article/details/108538822



