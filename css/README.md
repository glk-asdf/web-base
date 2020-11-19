# css

## 行内元素之间有间隙（即使 margin 为 0 也无法消除）

> 是因为浏览器行内元素特性

### 解决

* 将行内元素的父元素 font-size 和 line-height 设为 0


## [重绘和回流](https://blog.csdn.net/qq_29923881/article/details/83422671)

* 重绘：改变样式和图片等

* 回流：宽高等发生变化时，会重新计算文档中元素的位置（影响周围元素和dom树）

## 块级元素和行内元素

* 在不设置样式的情况下，块级元素无法和其他元素(包括块级元素)同处一行

## line-height

* 父元素设置 line-height ，子 span 设置 line-height 小于父元素时，不起作用

## css 样式

* [flex 弹性盒子](./md/flex.md)
