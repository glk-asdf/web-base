# ajax （asynchronous javaScript and xml 异步的 js 和 xml）

> 通过向服务器请求少量数据，使网页实现异步更新

## XMLHttpRequest

* XMLHttpRequest 可以获取任何类型数据，不止 xml

* 支持 Http 协议，还有 file:// 和 FTP

* 创建对象
    ~~~
    let request = new XMLHttpRequest();
    // 兼容 IE5，IE6
    let request
    if (window.XMLHttpRequeat) {
        requeat = new XMLHttpRequest()
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    ~~~

* 发送请求
    ~~~
    request.open('GET', 'ajax_info.txt', true);
    request.send();
    ~~~

* 请求类型

    > 与 post 相比，get 更简单也更快

    * get
        ~~~
        request.open('GET', '/api/info?a=1&b=2', true);
        request.send();
        ~~~
    
    * post
        ~~~
        request.open('post', '/api/login', true);
        
        // 使用与表单相同的方法
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        request.send('name=a&password=123456');
        
        // 或使用 json 格式
        request.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
        request.send({
            name: 'a',
            password: 123456
        });
        ~~~
    
        * 无法使用缓存文件
        
        * post 没有数据量限制（get 有数据量限制，只能使用 query string）
        
        * 发送包含未知字符的用户输入时，post 更稳定也更可靠

* 响应
    ~~~
    request.onreadystatechange = function () {
        if (require.readystate === 4 && require.status === 200) {
            // 字符串形式的响应数据
            console.log(request.responseText)
            // XML 形式的响应数据
            console.log(request.responseXML)
        }
    }
    ~~~
    * onreadystatechange 触发四次（每次变化都会触发 0-1 1-2 2-3 3-4）

* XMLHTTPRequest 的状态
    ~~~
    request.readyState
    ~~~
    * 0: 请求未初始化
    * 1: 服务器连接已建立
    * 2: 请求已接收
    * 3: 请求处理中
    * 4: 请求已完成，且响应已就绪
## fetch

> fetch 提供了一个获取资源的借口（包括跨域请求）

## fetch 跨域

