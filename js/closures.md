# 闭包

> [闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
函数 和 对其周围状态的引用 捆绑在一起构成闭包  
基于作用域链  
可以从内部函数作用域访问外部函数作用域

* index.js
    ~~~
    (function (window) {
        let name = 'liming';
        let sex = 'man';
        window.liming = {
            tell () {
                console.log('name:', name);
                console.log('sex:', sex);
            }
        }
    })(window)
    ~~~
    * tell 就是一个闭包，访问外部的 name 和 sex

## 优缺点

* 防止变量被污染

### 缺点

* 无法释放内存，不应在工厂函数中使用（将数据的引用删除，即可释放内存）
