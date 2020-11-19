# web worker

> web worker 是运行在后台的 JavaScript，不会影响页面性能

* 当 HTML 页面执行脚本时，页面的状态是不可响应的，直到脚本已完成

* web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。  
  可以继续做其他事情，点击、选取内容等，而此时 web worker 在后台运行 

* 由于 web worker 位于外部文件，无法访问 window、document、parent 等 javascript 对象

## 实例

* index.html
    ~~~
    let w;
     
    function startWorker() {
    
        // 检验浏览器是否支持 web worker
        if(typeof(Worker) !== 'undefined') {
            if(typeof(w) == 'undefined') {
                // 创建 Web Worker 对象
                w = new Worker('demo_workers.js');
            }
            // 监听事件
            w.onmessage = function(event) {
                console.log(event.data)
            };
        } else {
            console.log('抱歉，你的浏览器不支持 Web Workers...')
        }
    }
     
    function stopWorker() 
    { 
        w.terminate();
        w = undefined;
    }
    ~~~
* demo_workers.js
    ~~~
    var i=0;
    
    function timedCount()
    {
        i=i+1;
        // 触发事件
        postMessage(i);
        setTimeout("timedCount()",500);
    }
    
    timedCount();
    ~~~
