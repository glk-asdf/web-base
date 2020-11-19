# functional programming [函数式编程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

* 最主要的特征是，函数是一等公民

* 强调计算过程分解成可复用的过程，典型例子就是 map 和 reduce 方法组合成 MapReduce

* 只有纯的、没有副作用的函数，才是合格的函数


## 函数是“一等公民”

> 指的是函数和其他类型一样

* 可以赋值给变量
* 可以作为参数，传入另一个函数
* 可以作为函数的返回值

## 函数式编程有两个最基本的运算：合成和柯里化



### [currying 柯里化](https://www.jianshu.com/p/2975c25e4d71)

>  将多个参数的函数转为，接收一个参数，并返回接收余下参数且返回结果的新函数

~~~
function add (a, b) {
    return a + b
}
add(1, 2)   // 3

function addCurrying (a) {
    return function (b) {
        erturn a+ b
    }
}
addCurry(1)(2)  // 3
~~~

#### 好处

* 参数复用
    ~~~
    // 正则校验，currying 函数
    function curryingCheck (reg) {
        return function (str) {
            return reg.test(str)
        }
    }
    // 校验包含数字
    const numberCheck = curryingCheck(regExp('\d+', 'g'))
    numberCheck('123')  // true
    numberCheck(123)    // true
    ~~~
    * 利用闭包的特性，保存固有参数，也可以减少重复性的计算

* 提前确认
    ~~~
    const on = (function () {
        if (document.addEventListener) {
            return function (element, event, hander) {
                element.addEventListener(event, hander)
            }
        } else {
            return function (element, event, hander) {
                element.attachEvent('on' + event, hander)
            }
        }
    })()
    ~~~

* 延迟运行
    ~~~
    
    ~~~

### 高阶函数

> 一个函数可以接受另一个函数作为参数，传入的函数为回调函数，接收的函数为高阶函数
