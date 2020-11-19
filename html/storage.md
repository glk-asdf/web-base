# storage 存储

> 浏览器缓存，cookie、sessionStorage、localStorage

## 有效期
    
* cookie            可以设置有效期 expires，未设有效期的在浏览器关闭时清除

* sessionStorage    在页签关闭时删除

* localStorage      没有过期时间，永久保存

    * [可在保存的数据中心自己设置过期时间，自己判断](https://blog.csdn.net/zhaoxiang66/article/details/86703438)

## 作用范围

* cookie            可跨标签页使用

* sessionStorage    只能在当前标签页使用，从当前页打开的同源页面会复制一份 sessionStorage

* localStorage      可跨标签页使用

## 大小

* cookie            不超过 4k
    
    * 4k 包括 name、等于号、value
    * firfox 

* sessionStorage    5M左右

* localStorage      2.5 ~ 10M
