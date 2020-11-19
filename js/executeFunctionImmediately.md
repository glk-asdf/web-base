# 立即执行函数

> 声明一个函数，并立即调用

* index.js
    ~~~
    // 用括号括起来
    (function () {alert("我是匿名函数")})()
    (function () {alert("我是匿名函数")}())
    // 前面加符号等
    !function () {alert("我是匿名函数")}()  //求反，我们不在意值是多少，只想通过语法检查
    +function () {alert("我是匿名函数")}() 
    -function () {alert("我是匿名函数")}() 
    ~function () {alert("我是匿名函数")}() 
    void function () {alert("我是匿名函数")}() 
    new function () {alert("我是匿名函数")}() 
    ~~~

    * 声明函数
    * 括号包起
        > function 既可以当语句也可以当表达式  
          js 引擎（v8）规定，function 出现在行首，一律解析为语句  
          所以，不加括号会产生语法错误
        ~~~
        // 语句
        funciton fn () {}
        // 表达式
        let fn = function () {}
        ~~~
    * 调用函数
