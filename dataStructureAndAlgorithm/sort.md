# [排序](https://www.runoob.com/w3cnote/sort-algorithm-summary.html)

* 冒泡排序

    ~~~
    const arr = [1,2,3,4,5,9,8,7,6]
    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = i+1; j < l; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    ~~~

* 选择排序

    ~~~
    const arr = [1,2,3,4,5,9,8,7,6]
    for (let i = 0, l = arr.length; i < l; i++) {
        let min = i
        for (let j = i+1; j < l; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
                const temp = arr[i]
                arr[i] = arr[min]
                arr[min] = temp
        }
    }
    ~~~

* 插入排序

    > 插入排序，是基于已排序的部分是有序的，可以减少不必要的比较

    ~~~
    const arr = [1,2,3,4,5,9,8,7,6]
    for (let i = 1, l = arr.length; i < l; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (arr[i] > arr[j]) {
                if (i <= j) {
                    const temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
                break
            }
        }
    }
    ~~~

* 快速排序

    > 取一个数作为基准；将大于它的数放左边，小于它的数放右边；重复直到各区间只剩一个数  
    使用 挖坑填数 和 分治法
    ~~~
    function quick_sort (arr, l = 0, r = arr.length - 1) {
        if (l < r) {
            let i = l
            let j = r
            let x = arr[i]
            while (i < j) {
                while (i < j && arr[j] >= x) j--;
                if (i < j) {
                    arr[i] = arr[j]
                    i++
                }
                while (i < j && arr[i] < x) i++;
                if (i < j) {
                    arr[j] = arr[i]
                    j--
                }
            }
            arr[i] = x;
            quick_sort(arr, l, i - 1)
            quick_sort(arr, i + 1, r)
        }
    }
    ~~~
    * ( >= | < ) 和 ( >= | <= ) 无多余填坑，( > | <= ) 有多余填坑，( > | < ) 多余填坑最多
    * ( >= | < )( >= | <= )( > | <= )( > | < ) 遍历相同

* 归并排序 merge sort
    
    > 将两个有序数组合：从最小开始较小的先合入，直到一组合完然后将另一组剩下的接入  
    递归的分组，直到剩下一个就是有序的
    ~~~
    function merge_sort (arr, l = 0, r = arr.length - 1) {
        if (l < r) {
            let middle = Math.floor((l + r) / 2)
            merge_sort(arr, l, middle)
            merge_sort(arr, middle + 1, r)
            mergeArray(arr, l, middle, r)
        }
    }
    function mergeArray (arr, l, middle, r) {
        const temp = [...arr]
        let i = l
        let j = middle + 1
        let k = l
        while (i <= middle && j <= r) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++]
            } else {
                arr[k++] = temp[j++]            
            }
        }
        while (i <= middle) arr[k++] = temp[i++]
        while (j <= r) arr[k++] = temp[j++]
    }
    ~~~

* 堆排序 heap sort
    
    > 生成最大堆，取最大值，再将剩下的调整为最大堆
    ~~~
    
    ~~~

* 基数排序 Radix sort
    
    > 将每一个数字放在数组中对应下标，再一筛选即可得到排序后的数组  
    将数据通过基数的限制来减少空间的开销
    ~~~
    function redix_sort (arr, k = Math.ceil(Math.log10(Math.max(...arr))), r = 10) {
        // arr  数组
        // k    位数
        // r    基数
        // n    数组长度
        const n = arr.length
        // temp 临时数组
        let temp
        // cnt  基于基数的计数数组
        const cnt = []
        for (let j = 0, rtok = 1; j < k; j++,rtok *= r) {
            // 重置计数
            for (let i = 0; i < r; i++) {
                cnt[i] = 0
            }
            // 基于基数的计数
            for (let i = 0; i < n; i++) {
                cnt[Math.floor(arr[i]/rtok)%r]++
            }
            // 基于基数的位置分配
            for (let i = 1; i < r; i++) {
                cnt[i] += cnt[i-1]
            }
            // arr 移至 temp
            temp = [...arr]
            // 将数据填入，基于基数分配的位置
            for (let i = n - 1; i >= 0; i--) {
                cnt[Math.floor(temp[i]/rtok)%r]--
                arr[cnt[Math.floor(temp[i]/rtok)%r]] = temp[i]
            }
        }
    }
    ~~~
