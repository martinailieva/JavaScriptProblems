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
function minMaxSort(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
const sortArray = (array, fn) => fn(array);
console.log(sortArray(arrayOfNumbers, betterBubbleSort));
