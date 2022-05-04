"use strict";
const rows = 5;
const reverseRowPattern = (row) => {
    let output = "";
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        for (let k = i - 1; k >= 1; k--) {
            output += k + " ";
        }
        console.log(output);
        output = "";
    }
};
console.log(reverseRowPattern(rows));
