# optimization 优化

> 针对前段各个方面优化

* [常见优化](https://www.cnblogs.com/xiaohuochai/articles/9178390.html)

* js 面向过程的写法，在复杂项目中会过于臃肿

* 页面大量渲染时的优化
    
    * 加载卡顿
        
        * 分片加载      SetTimeout
        
        * 将图片图标改为字体图标，多个图片改为雪碧图
        
    * 大量数据
        * 分层       概览-单模块详解
        * 分级       树形图
        * 分页       表格
        * 懒加载      不在当视图范围的可以先不加载
        
            * 地图，不在当前视图的站点可以先去掉
            * 图片，还没滚到的可以先不加载

        * [分片](https://blog.csdn.net/weixin_42112865/article/details/100979363)
            
            > 时间分片，减少渲染压力
            
            * setTimeout 将代码插入至同步队列之后
            
            * requestAnimationFrame 基于屏幕刷新率，避免闪屏
            
            * DocumentFragment 
                
                * 是 dom 节点，不是 dom 树的一部分，存在于内存
                * 不像 dom 元素会实时计算样式，在完成添加后，再添加至实际容器
