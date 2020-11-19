# WebSocket

> [WebSocket](http://www.ruanyifeng.com/blog/2017/05/websocket.html) 是一种网络通信协议，不同于 HTTP（通信只能由客户端发起），属于服务端推送技术的一种

* 建立在 TCP 协议上，服务器端实现比较容易

* 协议的标识符是 ws（如加密为 wss）

~~~
// 建立连接
const ws = new WebSocket('wss://echo.websocket.org');

// 连接建立成功时
ws.onopen = function (evt) {
    console.log('Connection open ...');
    ws.send(' Hello Web');
}

// 当接收信息时
ws.onmessage = function (evt) {
    console.log('Received Message:', evt.data);
    ws.close();
}

// 当关闭连接时
ws.onclose = function (evt) {
    console.log('Connection closed');
}
~~~
