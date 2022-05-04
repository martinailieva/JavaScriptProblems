"use strict";
const arr = [6, 4, 3, 1, 9, 44, 33, 2];
Array.prototype.getOddNumbersCount = (array) => {
    return array.reduce((accumulator, currentValue) => currentValue % 2 > 0 ? accumulator + 1 : accumulator, 0);
};
console.log(arr.getOddNumbersCount(arr));
Array.prototype.betterBubbleSort = (array) => array.reduce((accumulatedData, currentElement) => {
    let index = 0;
    while (index < accumulatedData.length &&
        currentElement > accumulatedData[index]) {
        index++;
    }
    accumulatedData.splice(index, 0, currentElement);
    return accumulatedData;
}, []);
Array.prototype.typeCounter = function typeCounter(arr) {
    return arr.reduce((acc, curr) => {
        if (acc[typeof curr]) {
            acc[typeof curr]++;
        }
        else {
            acc[typeof curr] = 1;
        }
        return acc;
    }, []);
};
Array.prototype.findObject = function findObject(arr, obj) {
    if (!arr || !obj || arr.length === 0) {
        return false;
    }
    return (arr.includes(obj) ||
        !!arr.find((item) => item &&
            typeof item === "object" &&
            findObject(Array.isArray(item) ? item : Object.values(item), {
                name: "John Doe",
            })));
};
const isObject = (value) => value && typeof value === "object";
Array.prototype.appendEvenOdd = function appendEvenOdd(arr1, arr2) {
    const arrays = arr2.filter(Array.isArray).flat();
    const objects = arr2.filter(isObject);
    return arr1.map((el, index) => index % 2 === 0 ? [...el, ...arrays] : [...el, ...objects]);
};
Array.prototype.flatten = function flatten(obj, parentKey = 1, result = []) {
    for (let key in obj) {
        const propName = parentKey ? parentKey + "_" + key : key;
        if (typeof obj[key] === "object") {
            flatten(obj[key], +propName, result);
        }
        else {
            result[propName] = obj[key];
        }
    }
    return result;
};
Array.prototype.removeInner = (arr, percent) => {
    const arrLength = arr.length;
    let calculatePercentage = (percent / 100) * arrLength;
    const calculateMiddle = Math.floor(calculatePercentage / 2);
    console.log(calculateMiddle);
    return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};
