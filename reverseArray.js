'use strict';

const reverseArr = (arr) => {
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnArr.push(arr.pop());
    }
    
    return returnArr;
};

const reverseArrInPlace = (arr) => {
    let front = 0;
    let back = arr.length - 1;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[back];
        arr[back] = arr[front];
        arr[front] = temp;
        front += 1;
        back -= 1;
    }
}

console.log(reverseArr([1, 2, 3, 4, 5]));

let inPlaceArr = ["a", "b", "c", "d"];
reverseArrInPlace(inPlaceArr);
console.log(inPlaceArr);