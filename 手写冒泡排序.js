

let aaa = [22, 12, 5, 8, 3, 7, 9, 6, 4, 11, 14, 15, 10]
var count = 0

fmtMP = function (arr) {
    for (i = 0; i < arr.length - 1; i++) {       //本来就比长度少一次，而且还是从0开始的，所以是<length-1,或者<=lenth-2   这个冒泡我至少是第三次看了，希望这次我他妈记住了------20191010
        for (j = 0; j < arr.length - (1 + i); j++) {    //今天的理解： 1.1次循环的作用是把大数字往后挪  所以意味着2.1次循环时候最后一位必然不用比了，所以可以再少 i 次
            if (arr[j] > arr[j + 1]) {
                let item = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = item
                count++
                console.log(count)
            }
        }
    }
    return arr
}


console.log(aaa);
fmtMP(aaa);
console.log(aaa);
