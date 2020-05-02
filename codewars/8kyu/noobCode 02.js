function greaterThanLessThan(a, b, c) {
    if(a < b < c ) return true;
    return false
}
console.log(greaterThanLessThan(Number(null), 0, 1))

greaterThanLessThan = (a,b,c) => a < b < c 