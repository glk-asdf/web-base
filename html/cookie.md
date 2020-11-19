# cookie

> 用于存储 web 页面的用户信息

* cookie 以名值对形式存储，名值对之间用分号和空格隔开'; '
    ~~~
    'username=john Doe'
    'a=1; b=2; c=3'
    ~~~

* 浏览器发送请求时，会将属于当前页面的 cookie 添加到该请求中

* 默认情况下，cookie 在浏览器关闭时（不是页签关闭）删除
  
    * 除非设置了过期时间，并在有效期内
    
    * 如果设置有效期，且不在有效期内时，cookie 会被直接删除

* cookie 并未完全遵守同源策略，使得子域获取父域的 cookie

## javascript 处理 cookie

* 创建 cookie
    ~~~
    document.cookie = 'username=john Doe';
    // 设置路径
    document.cookie = 'username=john doe;path=/';
    // 设置过期时间
    document.cookie = 'username=john doe;expires=Thu, 18 Dec 2043 12:00:00 GMT'
    ~~~
    * document.cookie 一次只能对一个 cookie 进行设置或更新
    
    * cookie 的属性值可以跟在键值对后面，用来具体化对 cookie 的设置/更新，使用分号以作分隔
        
        * ;path=path （'/' '/api'），默认当前文档位置的路径（目录路径，如 /test/a 页面，path 默认 /test）
        
        * ;domain=domain （'nnll.site', 'subdomain.nnll.site'），默认当前页面的域名
        
        * ;max-age=max-age-in-seconds (例如一年为 60*60*24*365)
        
        * ;expires=date-in-GMTString-format 如果没有定义，会显示 Session，在会话结束时过期
        
        * ;secure （cookie 通过 https 协议传输）

* 读取 cookie
    ~~~
    document.cookie;    // 'a=1; b=2; c=3'
    ~~~

* 修改 cookie
    ~~~
    // 设置同名 cookie 即可覆盖，旧的 cookie 信息（path、expires）全部清除
    document.cookie = 'username=mimang'
    ~~~
    
* 删除 cookie
    ~~~
    // 设置有效期为过去的时间，即可删除 cookie
    document.cookie = 'username=;Thu, 01 Jan 1997 00:00:00 GMT'
    ~~~

## set-cookie 响应头部和 cookie 请求头部

* cookie 请求会将属于当前页面的 cookie 通过 cookie 字段传给后台

* 服务器收到 HTTP 请求时，可以在响应头里面添加一个 Set-Cookie 选项。
    
    * HTTPOnly ：只用于 http 请求，js 不可读

## cookie 是根据页面的域名和路径添加，还是根据 ajax 接口的域名和路径添加

## 安全

* 路径限制并不能阻止从其他路径访问 cookie。比如通过 iframe 访问 contentDocument.cookie  
  保护 cookie 不被非法访问的唯一方法是将它放在另一个域名/子域名之下，利用同源策略保护其不被读取

* cookie 同源策略仅以 domain 和 path 作为同源限制，不区分端口和协议
    
    * domain 向上通配：一个页面可以为本域和父域设置 cookie
