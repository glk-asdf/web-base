# 居中

* position + margin
    > 若子元素大小超出父元素，可以将四边定位改为负值
    ~~~
    .center {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    ~~~

* position + transform
    ~~~
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ~~~

## 横向居中

* inline + text-align: center
    ~~~
    .box {
        text-align: center;
    }
    .center {
        display: inline;
    }
    ~~~

* margin
    ~~~
    .box {
    }
    .center {
        fl
        margin: 0 auto;
    }
    ~~~

* margin-left + transform
    > margin 设置百分比，是基于父元素的宽度（？内容宽度），margin-top 设置百分比在父元素为正方形时比较有用
    ~~~
    .center {
        margin-left: 50%;
        transform: translate(-50%, 0)
    }
    ~~~

## 纵向居中

* line-height
    ~~~
    .box {
        height: 100px;
        line-height: 100px;
    }
    ~~~

* vertical-align: middle
    > 在 line-height 的高度内，居中
    ~~~
    .box {}
    .center {
        vertical-align: middle;
    }
    ~~~
