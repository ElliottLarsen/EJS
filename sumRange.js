'use strict';

const range = (start, end, step = 1) => {
    let rangeArr = [];
    for (let i = start; i <= end; i += step) {
        rangeArr.push(i);
    }
    return rangeArr
};

console.log(range(1, 10, 2))

const sum = (rangeArr) => {
    let sum = 0;

    for (let num of rangeArr) {
        sum += num;
    }

    return sum;
};

console.log(sum(range(1, 10)))