var arr1 = [10, 20, 30]
var arr2 = [20, 25, 35, 10, 20]


function unCommonElements(arr1, arr2) {
    var input = arr1.concat(arr2);
    var uncommon = {}
    for (let index = 0; index < input.length; index++) {
        if(!uncommon[input[index]]) {
            uncommon[input[index]] = 1;
        } else {
            uncommon[input[index]]++
        }
    }
    var unCommonElem = []
    for (const key in uncommon) {
        if(uncommon[key] == 1) {
            unCommonElem.push(key)
        }
    }
    return unCommonElem;
}
console.log(unCommonElements(arr1, arr2))