/**
 * 回答方式: 直接保存或者复制本js文件, 然后在原处作答. 注意不要改动函数结构
 * 在原本的函数体里返回正确答案
 * 本卷直接用代码判卷, 没有人工干预. 格式改动会导致试卷无效
 */
module.exports = {
    // 选择题, 单项选择, 每题4分
    // 直接返回正确答案字符串, 如 `return 'A';`
    qn0: () => {
        /*
        只是样例! 不用改动

        A. 选我, 选我就得分

        B. 别选我

        C. 别选我

        D. 别选我
        */
        return 'A';
    },
    qn1: () => {
        /*
        以下方法中, 返回值类型和其他最不同的:

        A. Array.forEach

        B. Array.reduce

        C. Array.map

        D. Array.splice
        */
        return 'A';
    },
    qn2: () => {
        /*
        以下哪个场景*不适合*使用WebSocket:

        A. 交易页面, 用户用RESTful API下单, WebSocket告知用户订单成交

        B. 身份审核, 提交文件后1-2个工作日审核完毕, WebSocket通知用户审核完毕

        C. 用户在线聊天, 发送聊天内容和接收聊天内容都用WebSocket传输

        D. 去中心化游戏应用, 两人对战用WebSocket通知对手位置, 对战结束后胜负结果上链
        */
        return 'A';
    },
    qn3: () => {
        /*
        前端在 foobar.com, 向 api.foobar.com 发送请求, 以下哪个请求不需要OPTIONS preflight (以Chrome为准):

        A. 一个GET请求, 有Content-Type头, 值为application/json

        B. 一个PUT请求, 没有头

        C. 一个POST请求, 有User-Agent和Connection头

        D. 一个HEAD请求, 有Authorization头
        */
        return 'B';
    },
    qn4: () => {
        /*
        CSS中, flex是哪三个flex关键字的简写 (可以查文档):

        A. flex-grow, flex-shrink, flex-basis

        B. flex-direction, flex-grow, flex-shrink

        C. flex-direction, flex-wrap, flex-flow

        D. flex-direction, flex-basis, flex-flow
        */
        return 'A';
    },
    qn5: () => {
        // 以下表达式中能去除所有空格的是:
        //
        // A. str = str.replace(/\s*/g,"");

        // B. str = str.replace(/^\s*|\s*$/g,"");

        // C. str = str.replace( /^\s*/, “”);

        // D. str = str.replace(/(\s*$)/g, "");
        return 'A';
    },
    qn6: () => {
        /*
        以下哪个不是服务器端渲染SSR的问题:

        A. 性能开销大

        B. 缓存机制复杂

        C. 框架支持不完善

        D. 搜索引擎不执行JS
        */
        return 'A';
    },
    qn7: () => {
        /*
        以下关于Redux, 错误的是:

        A. Reducer中不能做异步操作

        B. Redux store可以从js文件export并在任意位置使用

        C. 使用Redux时需要先引入React依赖

        D. Redux用于应用的状态管理
        */
        return 'C';
    },
    qn8: () => {
        /*
        以下哪个权重最大:

        A. 内联样式

        B. ID选择器（如 #content ）

        C. 类选择器（如 .content）

        D. 标签选择器（如 div、p）
        */
        return 'A';
    },
    qn9: () => {
        /*
        关于git, 以下命令中只涉及本地仓库的为:

        A. git branch -l -a

        B. git push

        C. git reset --hard ORIG_HEAD

        D. git fetch --all
        */
        return 'C';
    },
    qn10: () => {
        /*
        以下代码片段, 选择它的打印输出 (省略换行)

        ```js
        function fn1(){
          for(var i=0;i<4;i++){
            var timer=setTimeout(function(i){
              console.log(i);
              clearTimeout(timer)
            },10,i);
          }
        }
        fn1();
        ```
        A. 3 2 1 0

        B. 0 1 2 3

        C. 0 1 2

        D. 打印为空
        */
        return 'B';
    },
    qn11: () => {
        /*
        以下代码片段, 选择它的打印输出 (省略换行)

        ```js
        function fn2(){
          for(var i=0;i<4;i++){
            var timer=setInterval(function(i,timer){
              console.log(i);
              clearInterval(timer)
            },10,i,timer);
          }
        }
        fn2();
        ```
        A. 0 1 2 3 0 1 2 3 四个数重复

        B. 0 1 2 3 3 3 3 重复

        C. 0 1 2 3 随机顺序出现, 总个数一致

        D. 打印为空
        */
        return 'B';
    },
    qn12: () => {
        /*
        以下哪个HTTP状态码非错误状态:

        A. 404

        B. 500

        C. 303

        D. 400
        */
        return 'C';
    },
    qn13: () => {
        /*
        关于let和var, 以下正确的是:

        A. let是块级作用域, var是函数级作用域, let和var变量定义都会提升 (hoist)

        B. let是函数级作用域, var是块级作用域, let和var变量定义都会提升 (hoist)

        C. let是函数级作用域, var是块级作用域, let变量定义会提升 (hoist), var不会

        D. let是块级作用域, var是函数级作用域, var变量定义会提升 (hoist), let不会
        */
        return 'D';
    },
    qn14: () => {
        /*
        以下代码片段, 选择它的打印输出 (省略换行)

        ```js
        console.log(0.25 + 0.25 === 0.5);
        console.log(0.1 + 0.2 === 0.3);
        ```
        A. true true

        B. false false

        C. true false

        D. false true
        */
        return 'C';
    },
    qn15: () => {
        /*
        关于HTTPS / SSL / TLS, 以下错误的是:

        A. 当客户端收到服务器端发送的证书, 证书充当公钥. 为了验证证书有效性, 用客户端已经安装的CA证书检查

        B. 后续的HTTPS通讯, 客户端和服务器端的通讯会使用非对称加密

        C. 公司内网需要监控解密HTTPS时, 可以在客户端安装公司自己的CA证书

        D. 最常用的非对称加密算法RSA, 是基于大素数分解质因数实现的
        */
        return 'C';
    },
    qn16: () => {
        /*
        关于Linux命令, 错误的是:

        A. man <some_command> 可以查看命令的手册, man代表manual

        B. ls -l命令可以列出文件, 但不包含隐藏文件

        C. grep -C 3 "关键词" 命令可以找到包含"关键词"的行, 以及展示上面3行和下面3行

        D. cat out.txt | vim 这个命令用管道可以把out.txt中的文本导到vim中编辑
        */
        return 'D';
    },
    qn17: () => {
        /*
        关于HTML自定义标签, 错误的是:

        A. <greeting></greeting> 这段HTML代码是合法的, 可以被正常展示

        B. HTML自定义标签可以应用CSS

        C. HTML自定义标签可以用JS操作

        D. 已知的HTML自定义标签才能应用CSS, 以及用JS操作. 未知的HTML标签会成为HTMLUnknownElement的实例
        */
        return 'D';
    },
    qn18: () => {
        /*
        以下哪个元素, 不符合在默认情况下, 设置margin上下距离和宽高无效, 但是其他样式有效:

        A. span

        B. button

        C. input

        D. strong

        E. sub

        F. label

        G. code

        H. a

        I. p
        */
        return 'H';
    },
    qn19: () => {
        /*
        以下代码片段, 选择它的打印输出 (省略换行)
        ```js
        var m = true;
        setTimeout(
          function() {
            m = false;
          }, 3000);
        );
        while(m) {}
        console.log('DONE');
        ```

        A. DONE (约3秒后打印, 不精确)

        B. 不打印

        C. DONE (立即打印)

        D. 代码抛错
        */
        return 'D';
    },
    qn20: () => {
        /*
        以下代码片段, 选择它的打印输出 (省略换行)
        ```js
        const a = [];
        for (var i=0; i<10; i++) {
          a.push(function() {
            return console.log(i);
          });
        }
        a[0]();
        a[1]();
        ```

        A. 10 10

        B. 不打印

        C. 0 1

        D. undefined undefined
        */
        return 'A';
    },
    // 实现题, 每题10分
    /**
     * 统计数组中每个字符串出现次数
     * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
     * @return {[key: string]: number} 出现次数Map, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
     */
    frequencyMap: strs => {
        //TODO your code goes here...
        let obj = {};
        strs.forEach(str => {
            if (!obj[str]) {
                obj[str] = 1;
                return
            }
            obj[str]++
        });
        return obj;
    },
    /**
     * 请处理给定字符串:
     *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
     *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
     * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
     * @return str: 例 "I'm driving to Beijing after breakfast "
     */
    decode: str => {
        //TODO your code goes here...
        let re = /[^A-z\s']+/g
        str = str.replace(re, ' ');
        return str;
    },
    /**
     * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
     * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
     * @return int: 需要的会议室的个数, 例 1
     * 另一个测试用例: [[10,20], [19,30]] => 2
     */
    minRequiredMeetingsRooms: meetings => {
        //TODO your code goes here...
        let times = Array(...new Set(meetings.flat())).sort();
        let num = 0;
        let record = times.map(time => {
            meetings.forEach(metting => {
                if (time === metting[0]) {
                    num++
                } else if (time === metting[1]) {
                    num--
                }
            });
            return num
        });

        return Math.max(...record);
    },
    /**
     * 部门安排所有组合
     * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
     *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
     * @param required_department: dict, 该任务需要参与的部门和需要的人数
     *   例 {'frontend': 2, 'backend': 1}
     * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
     */
    staffCombinations: (department_staff_dict, required_staff) => {
        //TODO your code goes here...
        let keys = Object.keys(required_staff);
        let combinationByDepartmentDict = {};
        keys.forEach(key => {
            combinationByDepartmentDict[key] = getCombinationByDepartment(key, required_staff[key])
        });
        let combination = combinationByDepartmentDict[keys[0]];
        keys.forEach(key => {
            if (key === keys[0]) return;
            let arrTemp = [];
            combination.forEach(arr1 => {
                combinationByDepartmentDict[key].forEach(arr2 => {
                    arrTemp.push(arr1.concat(arr2))
                })
            });
            combination = arrTemp
        });
        combination.forEach(arr => {
            arr.sort()
        });
        function getCombinationByDepartment (key, num) {
            let arr = department_staff_dict[key];
            let combinationByDepartment = arr.map(v => [v]);
            index = 1;
            while (index < num) {
                let arrTemp = [];
                combinationByDepartment.forEach(comArr => {
                    arr.forEach(v => {
                        if (comArr.includes(v)) return;
                        arrTemp.push(comArr.concat(v))
                    })
                });
                combinationByDepartment = arrTemp;
                index++;
            }
            combinationByDepartment = Array(...new Set(combinationByDepartment.map(arr => {
                return arr.sort().join(',')
            })))
            combinationByDepartment = combinationByDepartment.map(str => str.split(','));
            return combinationByDepartment
        }
        return combination;
    },
    /**
     * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
     * @param num1 加数, 字符串, 例 '123456789123456789'
     * @param num2 加数, 字符串, 例 '987654321987654321'
     * @return 和, 例             '1111111111111111110'
     */
    addStrings: (num1, num2) => {
        //TODO your code goes here...
        let arr1 = num1.split('').reverse();
        let arr2 = num2.split('').reverse();
        let arr = arr1.length > arr2.length ? arr1 : arr2;
        let isOver = false;
        let num = arr.map((v,i) => {
            let num = Number(arr1[i]) + Number(arr2[i]) + (isOver ? 1 : 0);
            if (num >=10) {
                isOver = true;
                return num -10
            }
            isOver = false;
            return num
        }).reverse().join('');
        if (isOver) num = 1 + num;
        return num;
    },
};

/*
01转换法：

思路是开一个数组，其下标表示1到m个数，数组元素的值为1表示其下标代表的数被选中，为0则没选中。

首先初始化，将数组前n个元素置1，表示第一个组合为前n个数。
然后从左到右扫描数组元素值的“10”组合，找到第一个“10”组合后将其变为“01”组合；
同时将其左边的所有“1”全部移动到数组的最左端。
当第一个“1”移动到数组的m-n的位置，即n个“1”全部移动到最右端时，就得到了最后一个组合。
 */

/**
 * 获得指定数组的所有组合
 */
function arrayCombine(targetArr) {
    if(!targetArr || !targetArr.length) {
        return [];
    }

    var len = targetArr.length;
    var resultArrs = [];

    // 所有组合
    for(var n = 1; n < len; n++) {
        var flagArrs = getFlagArrs(len, n);
        while(flagArrs.length) {
            var flagArr = flagArrs.shift();
            var combArr = [];
            for(var i = 0; i < len; i++) {
                flagArr[i] && combArr.push(targetArr[i]);
            }
            resultArrs.push(combArr);
        }
    }

    return resultArrs;
}

/**
 * 获得从m中取n的所有组合
 */
function getFlagArrs(m, n) {
    if(!n || n < 1) {
        return [];
    }

    var resultArrs = [],
        flagArr = [],
        isEnd = false,
        i, j, leftCnt;

    for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
    }

    resultArrs.push(flagArr.concat());

    while (!isEnd) {
        leftCnt = 0;
        for (i = 0; i < m - 1; i++) {
            if (flagArr[i] == 1 && flagArr[i+1] == 0) {
                for(j = 0; j < i; j++) {
                    flagArr[j] = j < leftCnt ? 1 : 0;
                }
                flagArr[i] = 0;
                flagArr[i+1] = 1;
                var aTmp = flagArr.concat();
                resultArrs.push(aTmp);
                if(aTmp.slice(-n).join("").indexOf('0') == -1) {
                    isEnd = true;
                }
                break;
            }
            flagArr[i] == 1 && leftCnt++;
        }
    }
    return resultArrs;
}
