# class

## 在 class 中使用箭头函数

> 解析应该如下
~~~
class A {
    x = () => {
        console.log(this, 11)
    }
    y () {
        console.log(this, 22)
    }
}
~~~
> 相当于
~~~
let A = (function(){
    function A () {
        this.x = () => {
            console.log(this, 11)
        }
    } 
    A.prototype.y = function () {
        console.log(this, 22)
    }
})()
~~~
> 所以实例对象的方法内的 this 都指向实例对象
