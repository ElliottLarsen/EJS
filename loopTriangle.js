'use strict';

let character = "#";
let counter = 0;

do {
    console.log(character);
    counter += 1;
    character += "#";
} while (counter < 7)