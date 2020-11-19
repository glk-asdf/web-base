# lodash

## 常用方法

* groupBy
    > 分组
    ~~~
    _.groupBy([6.1, 4.2, 6.3], Math.floor);
    // => { '4': [4.2], '6': [6.1, 6.3] }
     
    // The `_.property` iteratee shorthand.
    _.groupBy(['one', 'two', 'three'], 'length');
    // => { '3': ['one', 'two'], '5': ['three'] }
    ~~~

* keyBy
    > 数组转dict
    ~~~
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
     
    _.keyBy(array, function(o) {
      return String.fromCharCode(o.code);
    });
    // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     
    _.keyBy(array, 'dir');
    // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
    ~~~

* result
    > 获取对象的值
    ~~~
    const object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     
    _.result(object, 'a[0].b.c1');
    // => 3
     
    _.result(object, 'b[0].b.c1');
    // => undefined
    
    let a
    _.result(a, 'b[0].b.c1');
    // => undefined
    ~~~

* set
    > 给对象添加值
    ~~~
    const object = {};
     
    _.set(object, 'a[0].b.c', 4);
    console.log(object.a[0].b.c);
    // => 4
    ~~~

* cloneDeep
    > [深拷贝](https://zhuanlan.zhihu.com/p/41699218)
    ~~~
    const object = [{a: 1}, {b: 2}];
     
    _.cloneDeep(object);
    // => [{a: 1}, {b: 2}]
    ~~~

## cloneDeep 实现细节

### 深拷贝和浅拷贝：

* 浅拷贝 生成新的对象，并对属性进行获取，对于引入类型数据，浅拷贝只是对对象引用的复制，一个改变另一个也会跟着变化

* 深拷贝 生成新的对象，并对属性进行获取，如果属性是引入数据类型，会根据数据类型相应的进行复制

### 总结

* lodash的深拷贝方法是相对完善和严谨的，对于特殊的数据类型，环，兼容性等等都考虑到了。  
但是对于function类型，依然是引用。并且，也没有深拷贝在原型链上的属性。  
实现的方式主要是以Object.prototype.toString.call得到tag，再分类处理，  
环由stack解决，symbol由Object.getOwnPropertySymbols方法解决。
