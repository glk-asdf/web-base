# webpack

## 组成

* entry     入口

* output    出口

* loader    将扩展语言预处理

* plugin    插件。插件的目的是解决 loader 无法实现的其他事

* model     模式。development production none，可以启用 webpack 相应环境下的优化

## webpack 常用插件

* http-webpack-plugin
    > 指定 HTML 入口文件
    
* mini-css-extract-plugin
    > 压缩 css

* uglifyjs-webpack-plugin
    > 压缩 js 文件

* BannerPlugin
    > 添加对文件的说明，版本、作者、日期
