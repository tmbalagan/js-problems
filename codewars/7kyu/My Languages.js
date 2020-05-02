// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript


/* 
1. To short language based upon greater than value wise

Steps done:
0: create obj for easily match in the form {"10":"Java"}
1. object.values() to get values of object and it's return array
2. in that array of values sort descending order
3. using map to match value in descending value wise to push to languages based > 60 
*/




function myLanguages(results) {
    var obj = {}
    for (const key in results) {
        obj[results[key]] = key
    }
    var languages = []
    Object.values(results).sort((a, b) => b - a).map((val) => {
        if (results[obj[val]] == val && val >= 60) {
            languages.push(obj[val])
        }
    });
    return languages
}
console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))


function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }