function twosDifference(input) {
    var differenceValues = []
    var intial = 0
    var inputSort = input.sort((a, b)=> {
        return a - b;
    });
    for (let index = 0; index < inputSort.length; index++) {        
        if (inputSort[index] - inputSort[intial] == 2) {
            differenceValues.push([inputSort[intial], inputSort[index]])
        } else if ((inputSort.length - 1) == index) {
            intial++;
            index = intial;
            continue;
        }
    }
    return differenceValues
}
console.log(twosDifference([1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56]))

function twosDifference(input){
    return input
     .sort(function(a, b){
       return a - b
     })
     .filter(function(a){
       return input.indexOf(a+2) != -1
     })
     .map(function(a){
       return [a, a+2]
     })
  }