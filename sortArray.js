var array = [2, 1, -4, 3, -6, 5, 0]
// 1,2,3,4,5,6 expected output
function sortArray(array) {
    var negativeNos = []
    var postiveNos = []

    for (let index = 0; index < array.length; index++) {
        if (array[index] <= 0) {
            negativeNos.push(array[index]);
        } else {
            postiveNos.push(array[index]);
        }
    }
    for (let index = 0; index < postiveNos.length; index++) {
        if (postiveNos[index] > postiveNos[index + 1]) {
            var temp = postiveNos[index + 1];
            postiveNos[index + 1] = postiveNos[index];
            postiveNos[index] = temp;
        }

        if (negativeNos[index] > negativeNos[index + 1]) {
            var temp = negativeNos[index + 1];
            negativeNos[index + 1] = negativeNos[index];
            negativeNos[index] = temp;
        }
    }
    return negativeNos.concat(postiveNos)
}
console.log(sortArray(array));