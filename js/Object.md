# Object

##create

> 创建一个实例，并以传入对象为原型

~~~
Object.create({a: 1})
~~~

## defineProperty

> 通过属性的描述符去设置或修改属性

~~~
Object.defineProperty(obj, 'a', {
    // 描述符是否可修改
    configurable: true,
    // 属性值是否可修改，被赋值运算符
    writable: true,
    // 是否可枚举
    enumerable: true,
    // 属性对应的值
    value: 123,
    // getter 函数
    get: () => {},
    // setter 函数
    set: () => {}
})
~~~

## is

> 判断两个值是否相同

~~~
NaN == NaN              // false
NaN === NaN             // false
Object.is(NaN, NaN)     // true
~~~

* == 会存在类型转换
* === 不转换类型，但也无法判断 NaN

