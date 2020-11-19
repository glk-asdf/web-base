# axios
> 基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中使用

## 取消请求

~~~
// 创建取消令牌的生成器
const CancelToken = axios.CancelToken;
// 从中获取令牌对象
const source = CancelToken.source();
// 发请求
axios.get('/user/12345', {
    // 传递令牌
    cancelToken: source.token
})
// 2秒取消请求
setTimeout(function(){
    source.cancel();
}, 2000);
~~~

* 实现
    ~~~
    function axios_get () {
        
    }
    ~~~


