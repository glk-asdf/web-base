# async/await

> 异步函数，是 generator 的语法糖

## async 和 promise 之间的区别

* 在处理多个异步请求时，promise 通过链式调用，错误通过 catch 方法捕获并处理  
* async 通过 await 语句处理异步请求，可读性更好，错误通过 try/catch 捕获并处理，
  也可以调用返回的 promise 对象的 catch 方法捕获并处理

## 错误处理

* 在 promise 中添加 catch
    ~~~
    async function a () {
        await new Promise((resolve, reject) => {
            reject(1)
        }).catch(error => {
            console.error(error)
        })
        console.log('end')
    }
     a();
     
     // 1
     // end
    ~~~

* try/catch
    ~~~
    async function a () {
         try {
             await new Promise((resolve, reject) => {
                 reject(1)
             })
             console.log('err')
         } catch (err) {
             console.error(err)
         }
         console.log('end')
     }
     a();
     
     // 1
     // end
    ~~~

* 区分 data 和 error 并输出
    ~~~
    (async () => {
     const fetchData = () => {
      return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve('fetch data is me')
       }, 1000)
      })
     }
     
     const [err, data] = await fetchData().then(data => [null, data] ).catch(err => [err, null])
     console.log('err', err)
     console.log('data', data)
     // err null
     // data fetch data is me
    })()
    ~~~

* 抽离公共方法
    ~~~
    (async () => {
     const fetchData = () => {
      return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve('fetch data is me')
       }, 1000)
      })
     }
     
     // 抽离成公共方法
     const awaitWrap = (promise) => {
      return promise
       .then(data => [null, data])
       .catch(err => [err, null])
     }
     
     const [err, data] = await awaitWrap(fetchData())
     console.log('err', err)
     console.log('data', data)
     // err null
     // data fetch data is me
    })()
    ~~~
