# 填充

* calc 函数
    ~~~
    calc(100% - 100px)
    ~~~

## 横向填充

> 在不设置样式的情况下，块级元素无法和其他元素同处一行

* margin 偏移
    ~~~
    .box {
        padding-left: 100px;
    }
    .children {
        margin-left: -100px;
        width: 100px;
    }
    .row-fill {}
    ~~~

* position
    ~~~
    .box {
        padding-left: 100px;
        position: relative;
    }
    .children {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
    }
    .row-fill {}
    ~~~
    
* flex
    > 适用于宽度不确定的情况
    ~~~
    .box {
        display: flex;
    }
    .children1 {
        width: 100px;
    }
    .row-fill {
        flex: auto;
    }

## 纵向填充

* margin 偏移，box-sizing: border-box
    ~~~
    .box {
        padding-top: 100px;
        box-sizing: border-box;
    }
    .children {
        margin-top: -100px;
        height: 100px;
    }
    .colcmn-fill {
        height: 100%;
    }
    ~~~

* position
    ~~~
    .box {
        padding-top: 100px;
        position: relative;
    }
    .children {
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
    }
    .column-fill {
        height: 100%;
    }
    ~~~
    
* flex
    > 适用于高度不确定的情况
    ~~~
    .box {
        display: flex;
        flex-direction: column;
    }
    .children1 {
        height: 100px;
    }
    .column-fill {
        flex: auto;
    }
    ~~~
