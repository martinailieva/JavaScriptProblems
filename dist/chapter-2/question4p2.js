"use strict";
const organizedArrayOfNums = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;
const calculateDivisible = (array, number) => {
    return array.reduce((accumulator, currentValue) => currentValue % number === 0
        ? [...accumulator, currentValue]
        : accumulator, []);
};
console.log(calculateDivisible(organizedArrayOfNums, divisible));
