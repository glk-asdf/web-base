# 常见算法题

* 分针和时针每隔多少时间重合一次
    ~~~
    // 时针速度
    let hSpeed = 360/12
    // 分针速度
    let mSpeed = 360/1
    
    // 时针与分针的下次合并是在分
    // mSpeed * h - hSpeed * h === 360
    let h = 360 / (mSpeed - hSpeed)
    
    // 360/330      即 12/11 小时
    ~~~
