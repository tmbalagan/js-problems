var arr = [4, 9, 6, 9, 12];
var sumOf = 15;

function sumOfNo(array, sum) {
  let index = 0;
  var next = 0;
  //   for (let index = 0; index < array.length; index++) {
  while (array.length > index) {
    if (array.length - 1 == index) {
      next++;
      index = next;
      continue;
    } else {
    var element = array[index] + array[index + 1];
      if (element == sum) {
        return [array[index], array[index + 1]];
      }
      index++;
    }
  }
  return "not matched sum";
}

console.log(sumOfNo(arr, sumOf));
