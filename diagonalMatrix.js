/* 

[
[123],
[456],
[789]
]

*/

var matrix = [
    [2, 3, 4],
    [5, 3, -1],
    [9, 8, -2]
]
function diaganolMatrixSum(matrix) {
    var firstDiagonalLen = matrix.length
    var diagonal1 = 0;
    var diagonal2 = 0;
    for (let i = 0; i < firstDiagonalLen; i++) {
        const element = matrix[i];
        var secondDiagonalLen = element.length
        for (let j = 0; j < element.length; j++) {
            const elements = element[j];
            if (i + j == secondDiagonalLen - 1) {
                // 3, 5, 7
                /* 
                          i+j ==  n- 1(n length of array)
                [0][2] => 0+2 = 2
                [1][1] => 1+1 = 2
                [2][0] => 2+0 = 2
                */
                diagonal1 += elements
            }
            if (i == j) {
                /* 
                
                [0][0] 
                [1][1] 
                [2][2] 
                */


                // 1, 5, 9
                diagonal2 += elements
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2)
}

console.log(diaganolMatrixSum(matrix))
