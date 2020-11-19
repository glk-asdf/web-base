# array

## new Array()

> 因为 Array() 返回的是数组，基本类型是对象，所以 new Array() 和 Array() 的结果是一样的

* 传入一个数字，会生成长度为数字的 empty 空数组

* 传入一个数组，会生成包含数组的数组
    ~~~
    Array([1])  // [[1]]
    ~~~

* 传入一个非数字（包括数组），或多个参数，会以参数为内容创建数组

## empty

* 通过数组的方法（除了 from）遍历，会跳过 empty

## from

> 将类数组（具有 length 属性，通过下标访问，包含数组）转为数组，将 empty 转为 undefined

* 创建 0 - 99 的数组
    ~~~
    Array.from(new Array(100), (v, i) => i)
    ~~~

* 数组去重
    ~~~
    let arr = [1, 3, 7, 9, 3, 5]
    // arr 去重后，如果剩下一个元素，且是数字则会变成相应长度的空数组
    Array(...new Set(arr))
    
    // 使用 from 就不会存在上面问题
    Array.from(new Set(arr))
    ~~~
