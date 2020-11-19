# footer 置底

> 在含有 header、main、footer 的布局中：  
  需要在 main 较小时，设置 footer 定位在最底部；  
  main 较大时，footer 跟随文档流

1. position: sticky
    ~~~
    body {
        min-height: 100vh;
    }

    header, main, footer {
        height: 100px;
    }

    header {
        background-color: #aa0000;
    }

    main {
        background-color: #00aa00;
    }

    footer {
        background-color: #0000aa;
        position: sticky;
        top: 100vh;
    }
    ~~~

2. 定位
    ~~~
    body {
        min-height: 100vh;
        position: relative;
        padding-bottom: 100px;
    }
    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100px;
        width: 100%;
    }
    ~~~


