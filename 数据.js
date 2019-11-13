
let res = {
    result: [
        {
            month: 21,
            weather: '晴'
        }, {
            month: 111,
            weather: '小雨'
        }, {
            month: 32,
            weather: '大雨'
        }, {
            month: 2,
            weather: '小雨'
        }, {
            month: 2,
            weather: '阴'
        }, {
            month: 212,
            weather: '雪'
        }
    ]
}
// function sortData(a, b) {
//     return a.month - b.month
// }
// res.result.sort(sortData);


//先把年份加进 RealDataSource ，根据年份丢进月份
//然后给年份排序，再给同年里的按月份排序
function getRealDataSource() {
    let RealDataSource = [
        { type: 'YS', year: '2019', children: [] }
    ]
    for (item of res.result) {

        //假设都是2019年的
        if (item.type == "YS" && item.year == '2019') {
            RealDataSource.push(item)
        }

        //怎么保证这之前已有预算

        function sortMonth(a, b) {
            return a.month - b.month
        }


        // if (item.type == "SJ") {
        RealDataSource[0].children.push(item)
        // RealDataSource[0].children.sort(sortMonth);
        // console.log(RealDataSource);
        // }
    }
    console.log(RealDataSource);
}

getRealDataSource()