# Promise

## [执行顺序](https://blog.csdn.net/Eryanini/article/details/84174827)

* new Promise 中的代码立即执行（在主线程同步执行）

~~~
const promise = new Promise((resolve, reject)=>{
  console.log(1);
  resolve();
  console.log(2);
})
promise.then(()=>{
  console.log(4);
})
console.log(5);

// 1
// 2
// 5
// 4
~~~

## 细节小点

* resolve 和 reject 并不能使起始函数停止，需要使用 return
