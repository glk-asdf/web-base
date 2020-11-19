# element

## 使用细节

* el-checked 在点击发生变化后，判断不应变化，直接将其绑定数值改变，
虽然表面恢复了原样，但再次点击是获取的却是相反的结果
    * 使用 nextTick 就可以正常表现了

* el-table-column 的排序方法 sort-method 接收得是 formatter 之前的值

* el-table-column 只能通过 v-if 控制显隐，且需要搭配 key（会导致后面的列使用前面隐藏列的属性）
    
    > el-table 中放置 el-table-column，与实际 element 布局存在出入
