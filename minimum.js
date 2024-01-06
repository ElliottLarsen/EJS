const min = function(x, y) {
    return x > y ? y : x;
}

const min1 = (x, y) => {
    return x > y ? y : x;
}

function min2(x, y) {
    return x > y ? y : x; 
}

console.log(min(10, 9))
console.log(min(0, 1))

console.log(min1(10, 9))
console.log(min1(0, 1))

console.log(min2(10, 9))
console.log(min2(0, 1))