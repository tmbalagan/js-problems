function toUnderscore(string) {
    var snakeCase = ""
    if(typeof string !== 'string') return (string).toString()

    for (let index = 0; index < string.length; index++) {
        if (index != 0 && (string[index].charCodeAt() >= 65 && string[index].charCodeAt() <= 90)) {
            snakeCase += ("_"+(string[index].toLowerCase()));
        } else {
            snakeCase += (string[index]).toLowerCase();
        }
    }
    return snakeCase;
}
console.log(toUnderscore(5))