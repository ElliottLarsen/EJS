'use strict';

function countBs(str) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            counter += 1;
        }
    }
    return counter;
}

console.log(countBs("BoBby"))

function countChar(str, char) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countChar("Hello, world!", "l"))