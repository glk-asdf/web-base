# js

## 数据类型

* 基本类型
    * Symbol
    * Boolean
    * Number
    * String
    * number
    * null
* 引用类型
    * Object
        * Function
        * Array
* BigInt
    ~~~
    BigInt(123) // 123n
    ~~~

* typeof 输出基本数据类型
    ~~~
    // 基准数据类型
    typeof Symbol()     // 'symbol'
    typeof true         // 'boolean'
    typeof 1            // 'number'
    typeof 'a'          // 'string'
    typeof BigInt(123)  // 'bigint'
    typeof undefined    // 'undefined'
    typeof null         // 'object'
    // 引用数据类型
    typeof {}           // 'object'
    typeof []           // 'object'
    typeof function(){} // 'function'
    typeof (() => {})   // 'function'
    typeof (class A {}) // 'function'
    ~~~

* instanceof 判断构造函数的原型否在原型链上
    ~~~
    const arr = []
    arr instanceof Array                                    // true
    arr.__proto__ === Array.prototype                       // true
    Object.getPrototypeOf(arr) === Array.prototype          // true
    ~~~

## 类型转换

### 隐式转换

* toString  转换为字符串使用的 .toString()

* Number    转换为数字使用的是 Number(some)

### 转为字符串

* String()

* .toString()

## 时间延时函数

* setInterval 函数会越来越延迟。可能是因为异步响应后，等待事件循环执行，导致下次计时延迟

## 数据类型

* typeof 语句会解析数据类型，有多种写法
    ~~~
    typeof 1    // 'number'
    typeof (1)  // 'number'
    typeof(1)   // 'number'
    typeof ()   // Uncaught SyntaxError: Unexpected token ')'
    typeof()    // Uncaught SyntaxError: Unexpected token ')'
    ~~~
