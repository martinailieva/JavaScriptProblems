"use strict";
const array1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];
const array2 = [
    null,
    () => {
        console.log("Hello, world!");
    },
    ["one", "five"],
    undefined,
    6,
];
function insertTruthyValuesInArray(arrayOne, arrayTwo) {
    const nestedArr = arrayOne.find(Array.isArray);
    const truthyValues = arrayTwo.filter(Boolean);
    nestedArr.push(...truthyValues);
    return arrayOne;
}
console.log(insertTruthyValuesInArray(array1, array2));
