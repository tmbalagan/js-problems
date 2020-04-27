var input = [-1, 2, -1, 3, 2];

function nonRepeating (array) {
    var elements = {}
    for (let index = 0; index < array.length; index++) {    
        if(!elements[array[index]]) {
            elements[array[index]] = 1
        } else {
            elements[array[index]]++
        }
    }
    console.log(elements);
    for (const iterator in elements) {
        if(elements[iterator] == 1) {
            return iterator
        }
    }
    return "no unique elements"
}
console.log(nonRepeating(input));