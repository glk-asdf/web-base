# new

* 构造函数返回对象时，会替代实例的对象

    * Date 不用 new 生成的是字符串，所以需要使用 new 实例化
    
    * array、Function 返回的是特殊对象，所以用 new 和不用 new，结果是相同的

* 构造函数可以直接执行，class 却不能直接执行，所以必须使用 new
