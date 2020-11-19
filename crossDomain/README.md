#跨域

* 什么是跨域
    > 当 ajax 请求和 <img> 路径与当前页面不同源时就会出现跨域问题
    
    * 同源
        > 请求的 url 与当前页面的协议、域名（）（或ip）、端口相同
        ~~~
        http://www.nnll.site/
        ~~~
        * 协议（https/http）
        * 主域名（nnll）（.site 后缀）
        * 子域名（www）
        * 端口（默认 80）

* [为什么限制跨域](https://www.zhihu.com/question/26379635)
    > 出于浏览器的同源策略限制，为了防止跨站脚本攻击（XSS）  
    
    * 跨站脚本攻击（XSS） 
        
        1. 假网站（钓鱼网站）要求进行身份认证，获取个人信息

* jsonp
    * 前端部分
        ~~~
        function getJsonp(url, callBack) {
            window.jsonP = function (data) {
                console.log('data:', data)
                return data
            }
            const Script = document.createElement('script');
            Script.type = 'appliction/json';
            Script.src = 'nnll.site/userInfo?callback=jsonP'
        }
        ~~~
    * script 标签内容
        ~~~
        <script type="appliction/json" src="http://nnll.site/userInfo?callback=jsonP"></script>
        // 内容
        jsonP({name: 'glk', sex: 'man'})
        ~~~

* [跨域资源共享（cors）](https://blog.csdn.net/qq_38128179/article/details/84956552)

    1. 普通跨域请求：只需服务器端设置Access-Control-Allow-Origin
        ~~~
        res.writeHead(200, {
            'Access-Control-Allow-Origin': 'nnll.site',
            ...
        })
        ~~~
    
    2. 带cookie跨域请求：前后端都需要进行设置
        ~~~
        // 前端
        {
            withCredentials: true,
            ...
        }
        
        // 后台
        res.writeHead({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'true',
            ...
        })
        ~~~



## http 协议

* 在路径中不写 http 协议
    
    > 不写协议，会获取当前页面的协议，避免迁移（http 迁至 https）导致的跨域
