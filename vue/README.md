# vue 知识点整理

[面试题](https://www.cnblogs.com/zdz8207/p/vue-face-know.html)

## vue 的双向绑定数据原理

* 网上解释
    * 采用 数据劫持 结合 [发布者-订阅者](https://www.jianshu.com/p/2ec316ca0f8b) 模式的方式
    * 通过 Object.defineProperty 来劫持各个属性的 setter、getter
    * 在数据变动时，发布消息给订阅者触发响应监听回调

* vue 官方
    * ![数据绑定视图](./data.png)
    * 通过 Object.defineProperty 将数据转为 getter 和 setter
    * 每个组件实例都有一个 watcher 实例
    * 组件在渲染过程中使用（touch）数据，触发 getter，在 watcher 记录为依赖项
    * 当依赖项发生变化时，触发 setter，会通知 watcher，把依赖项相关的组件重新渲染

### 原理自述

* 采用 数据劫持 结合 发布者-订阅者模式
* 使用 Object.defineProperty 将属性转为 getter/setter
* 每一个组件实例都有一个 watcher 实例，在组件渲染过程将使用过的属性记录为依赖
* 当属性的 setter 触发时，通知 watcher，把关联的组件重新渲染


## 生命周期

> 生命周期视图 ![视图](./lifecycle.png)

* 初始化实例
* init event(事件)
* init lifecycle(生命周期)
***
### beforeCreate
***
* init injections(注入)    注入依赖
* init reactivity(反应性 响应式)
***
### created
***
* has el    是否有可挂载的 dom 对象
    * 没有：暂停。直到执行 vm.$mount(el) 后，继续生命周期
* has template    是否有模板
    * 有：编译 template(模板) 为渲染函数
    * 没有：编译 el's outerHTML(当前模块所有 HTML 标签) 为渲染函数
*** 
### beforeMount
***
* create vm.$el and replace "el" with it    创建 dom 对象，并替换要挂载的 dom 对象
***
### mounted
***
* when data change    数据更新时
***
### beforeUpdate
***
* virtual dom re-render and patch    真实 dom 重新渲染和补全
***
### updated
***
* when vm.$destroy() is called    当销毁 vue 实例时
***
### beforeDestroy
***
* teardown watchers,child components and event listeners    卸载 watcher 实例，子组件和事件监听
***
### destroyed
***

## 父子组件生命周期

* 父 beforeCreate -> 父 created -> 父 beforeMount -> 
  子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 
  父 mounted
  
    * 可能是渲染函数生成真实 dom 时，开始了子元素的生命周期，同时等到子元素挂载完成后，将包含子元素的父元素挂载
  
* 父 beforeUpdate -> 父 updated

    * 父组件更新，不影响子组件
  
* 父 beforeUpdate -> 
  子 beforeUpdate -> 子 updated -> 
  父 updated

    * 子组件更新，先触发父组件更新，同时等到子元素真实 dom 更新完成后，将包含子元素的父元素更新
  
* 父 beforeDestroy -> 
  子 beforeDestroy -> 子 destroy -> 
  父 destroyed

    * 父组件销毁前，先将子组件销毁

## 虚拟 DOM

> createElement 创建的并不是实际的 DOM，它包含的信息，告诉 vue 需要渲染什么样的节点，及其子节点，被称为虚拟节点  
虚拟 DOM，是组件树建立起的整个虚拟节点树

## [nextTick](https://segmentfault.com/a/1190000012861862)

> vue 有一个异步 watcher 队列

1. 在同步队列（包括执行 nextTick，添加回调函数）执行完成后
2. 执行异步 watcher 队列，完成后
3. 执行 nextTick 的回调函数
4. 执行异步 watcher 队列（在所有回调函数执行完后，且 nextTick 的回调函数中触发了 watcher）

### 父子组件执行顺序

* 父组件： 同步队列 =》 异步 watcher 队列 =》  
  子组件们： A 同步队列 =》 B 同步队列 =》 异步 watcher 队列（父 A B） =》  
  父组件： 同步队列 =》 异步 watcher 队列

    * this.$nextTick 会将回调函数添加到 this 对应的实例的 watcher 实例
    
        * 在父组件同步队列调用子组件的 $nextTick ，不会在父组件的异步 watcher 队列执行，
        而是等到子组件们的同步队列执行完成后，在子组件们的异步队列中执行，不过会优先于子组件的异步队列  

## watch 监测

* 键是需要观测表达式，值是对应的回调函数
    ~~~
    watch: {
        a () {},
        // 字符串的形式传入非根属性
        'a.b': function () {},
        // 使用方法名
        b: 'someMethod',
        // 被侦听的对象的属性（有初始化的）改变时，触发 handler
        c: {
            handler () {},
            deep: true
        },
        // 初始化调用，该回调将会在侦听开始之后被立即调用
        d: {
          handler: 'someMethod',
          immediate: true
        },
        // 你可以传入回调数组，它们会被逐一调用
        e: [
          'handle1',
          function handle2 (val, oldVal) { /* ... */ },
          {
            handler: function handle3 (val, oldVal) { /* ... */ },
            /* ... */
          }
        ],
    },
    methods: {
        someMethod () {}
    }
    ~~~

* deep 的原理是递归遍历对象，判断是否发生变化，但只有初始化的才有参照对比，所以未初始化的属性不会监测

## model 自定义组件数据双向绑定

> 可以设置父组件传入的属性和传出的事件，默认 value 属性和 input 事件

~~~
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: String,
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})

<my-checkbox v-model="foo" value="some value"></my-checkbox>
~~~

## 开发细节

* 递归组件

    > 通过 name，在组件内自调用

* 动态组件

    > component 组件根据不同的 is 会切换组件标签，以及重新初始化内容  
    * 可以通过 keep-alive 将失活的组件缓存，保存组件的状态  
      组件切换钩子 activated 和 deactivated
    
* 异步组件
    
    > 将项目通过组件分割，首屏模块优先加载，其余模块使用时加载，加快首屏模块渲染速度
    
    * 工厂函数
        ~~~
        Vue.component('async-example', function(resolve, reject){
            resolve({
                template: '<dev>hello world</dev>'
            })
        })
        ~~~
    * webpack code-splitting
        ~~~
        Vue.component('async-webpack-example', function(resolve, reject){
            require('async-webpack-example', resolve)
        })
        ~~~
    * 工厂函数返回 Promise
        ~~~
        Vue.component('async-example', () => Promise.resolve({
            template: '<div>hello world</div>'
        }))
        ~~~
    * import
        ~~~
        Vue.component('async-webpack-example', () => import('./async-webpack-example'))
        ~~~
    * 局部组件注册异步组件
        ~~~
        {
            components: {
                myComponent: () => import('./async-webpack-example')
            }
        }
        ~~~

* 路由懒加载
    
    > 路由结合异步组件，实现按需加载
    
    * import    通过工厂函数懒加载
        ~~~
        const routes = [
            {
                name: 'my-component',
                path: '/my-component',
                component: () => import('./async-webpack-example')
            }
        ]
        ~~~
    
    * 把组件按组分块
        ~~~
        const routes = [
            {
                name: 'my-component',
                path: '/my-component',
                component: () => import(/* webpackChunkName: 'group-btn' */ './async-webpack-example')
            }
        ]
        ~~~
    
    * require().default    非懒加载，适用于开发环境热更新
        ~~~
        const routes = [
            {
                name: 'my-component',
                path: '/my-component',
                component: require('./async-webpack-example').default
            }
        ]
        ~~~

* vue.delete

    > 普通 delete 将属性删除后，就不会再有 setter 也就不会再触发响应  
    vue.delete 补足了不响应的缺点，触发了关联组件的重新渲染

* 对象的覆盖，对象的属性也会重新转为 getter 和 setter

* data 监测
    
    * vue 2.x 是通过 Object.defineProperty 将 data 转化为 getter 和 setter，无法监测直接添加的属性
    
    * vue 3.x 是通过 proxy 对 data 设置一层拦截，进行相应监听，get 和 set 都会被监听，新属性就不需要通过 vue.set 设置

## [router](./router.md)
