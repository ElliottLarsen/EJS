'use strict';

function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1 || num < 0) {
        return false;
    }

    return isEven(num - 2);
}

console.log(isEven(75))