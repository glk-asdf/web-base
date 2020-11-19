import lodash from 'lodash'

/**
 * 递归生成树形结构
 * @param menuArr
 * @returns {Array}
 */
function getMenuTree(menuArr) {
    let arrV1 = [];
    let level = 1;
    // 排序
    menuArr.sort((a, b) => a.orders - b.orders);
    // 生成顶级菜单，并整理每项菜单
    for (let i = 0, l = menuArr.length; i < l; i++) {
        // 添加顶级目录
        if (item.top === true) {
            item.level = level;
            arrV1.push(item)
        }
    }
    // 为顶级菜单添加子菜单
    for (let i = 0; i < arrV1.length; i++) {
        addChild(arrV1[i], menuArr, level + 1)
    }

    // 为树结构添加子项
    function addChild(obj, arr, level) {
        obj.data = [];
        for (let i = 0, l = arr.length; i < l; i++) {
            let item = arr[i];
            if (item.pid === obj.id) {
                // 添加等级
                item.level = level;
                // 添加子数据
                obj.data.push(item);
                addChild(item, arr, level + 1)
            }
        }
    }

    return arrV1
}

/**
 * 快速生成树形结构
 * @param arr
 * @returns {*}
 */
function getTree(arr) {
    // 按 pid 分组
    let dataByPid = {};
    arr.forEach(obj => {
        const {pid} = obj;
        if (!dataByPid[pid]) dataByPid[pid] = [];
        dataByPid[pid].push(obj)
    });
    // 添加 children
    arr.forEach(obj => {
        const children = dataByPid[obj.id];
        if (children && children.length) obj.children = children
    });
    return dataByPid[0]
}
