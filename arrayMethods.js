let numArr = [1, 2, 3, 4, 5];
let textArr = ["aa", "b", "c", "dd", "eee", "ff"];

let numArrFiltered = numArr.filter(num => num % 2 === 0);
let textArrFiltered = textArr.filter(text => text.length < 3 && text.length > 1);

console.log(numArrFiltered);
console.log(textArrFiltered);

const numArrMap = num => {
    return num * 2;
}

const textArrMap = text => {
    return text[0];
}

let numArrMapped = numArr.map(numArrMap);
let textArrMapped = textArr.map(textArrMap);

console.log(numArrMapped);
console.log(textArrMapped);

let reduceFunction = (a, b) => {
    return a + b;
};

let numArrReduced = numArr.reduce(reduceFunction);
let textArrReduced = textArr.reduce(reduceFunction);

console.log(numArrReduced);
console.log(textArrReduced);

const isEven = (num) => {return num % 2 === 0 };
const isLong = (char) => {return char.length > 1};

console.log(numArr.some(isEven));
console.log(textArr.some(isLong));
console.log(numArr.every(isEven));
console.log(textArr.every(isLong));