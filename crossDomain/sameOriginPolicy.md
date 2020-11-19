# 同源策略

> 是一个重要的安全策略，它用于限制一个 origin 的文档或者它加载的脚本如何能与另一个源的资源进行交互  
  能帮助阻隔恶意文档，减少可能被攻击的媒介
  
## 源的继承

> 通过 about:blank 或 javascript:，URL 执行的脚本会继承 URL 文档的源，因为这些类型的 URLs 没有源服务器的相关信息

## 源的更改

> js 可以将 document.domain 的值设置为当前域或当前域的父域
    
* 端口号由浏览器另行检查。任何对 document.domain 的赋值操作都会导致端口号被重写为 null  
  nnll.site:8080 不能通过设置 document.domain = document.domain 来与 nnll.site 来通信。必须在双方都赋值
    
## 跨源网络访问

> 同源策略控制不同源之间的交互在使用 XMLHttpRequest 和 <img> 会受到同源策略的约束。

* 交互通常分为三类：
    
    * 跨域写操作
        > 一般是被允许的。例如链接（links），重定向以及表单提交
    
    * 跨域资源嵌入
        > 一般是被允许的
    
    * 跨域读操作
        > 一般是不被允许的，但常可以用内嵌资源来巧妙地进行读取访问（jsonp）

* 允许跨源访问 CORS
    > CORS 是 HTTP 的一部分，它允许服务器指定哪些主机可以从服务端加载资源

* 如何阻止跨域访问 CSRF (Cross-Site Request Forgery)
    
    * 阻止跨域写操作，只要监测请求中一个不可推测的标记（CSRF token）即可
    
    * 阻止资源的跨站读取，需要保证资源是不可嵌入的
    
    * 阻止跨站嵌入，

## 跨源脚本 API 访问

> js 的 API 中，如 iframe.contentWindow window.parent window.open 和 window.opener 允许文档间直接互相引用  
  当不同源时，这些引用将对 Window 和 Location 对象的访问添加限制

* 为了让不同源文档进行交流可以使用 window.postMessage

## 跨源数据存储访问

* 访问存储在浏览器中的数据，如 localStorage 和 indexedDB，是以源进行分割，每个源都有自己单独存储的空间，  
  一个源中的 js 脚本不能对属于其他源的数据进行读写操作

* cookie 使用不同的源定义方式。一个页面可以为本域和父域设置 cookie，
