# router

## mode 模式

* hash      默认，使用 url 的 hash 来模拟一个完整的 url，当 url 改变时，页面不会重新加载

* history   使用 history.pushState API 来完成 URL 跳转而无需重新加载页面
    
    * 虽然页面切换无需从新加载页面，但从新页面打开带有 path 的 url 会报 404，所以需要后台将所有页面指向 index.html
