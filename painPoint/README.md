# pain point 痛点

* vue 项目使用 dom 还希望能使用 vue 特性
    
    > 插件弹窗方法，只能传入 string 或 dom 元素，使用了 ref
    
    > 插件站点方法，只能传入 string 或 dom 元素，同时量又非常大，使用 ref 会在页面加载很多  
    改用 Vue.extend(component)

* jquery 编写代码面向过程不易维护

* jquery Dom 操作和监听相互交叉过于复杂，不易理解
    
    > 当触发 dom 事件时，不应直接改变 dom  
    而是根据事件修改数据，然后根据数据状态渲染 dom
