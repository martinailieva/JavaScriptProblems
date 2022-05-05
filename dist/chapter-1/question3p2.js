"use strict";
const rowsPattern2 = 5;
const halfDiamondPattern = (row) => {
    let output = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        console.log(output);
        output = "";
    }
    for (let r = row - 1; r >= 1; r--) {
        for (let j = 1; j <= r; j++) {
            output += j + " ";
        }
        console.log(output);
        output = "";
    }
};
console.log(halfDiamondPattern(rowsPattern2));
