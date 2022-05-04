"use strict";
const arrayOfNumbers = [6, 4, 3, 1, 9, 44, 33, 2];
const betterBubbleSort = (array) => array.reduce((accumulatedData, currentElement) => {
    let index = 0;
    while (index < accumulatedData.length &&
        currentElement > accumulatedData[index]) {
        index++;
    }
    accumulatedData.splice(index, 0, currentElement);
    return accumulatedData;
}, []);
console.log(betterBubbleSort(arrayOfNumbers));
