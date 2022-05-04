"use strict";
function findTheLongestWord(str) {
    if (typeof str === "string") {
        str = str.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    }
    let index = str.reduce((acc, curr, i) => {
        return curr.length > str[acc].length ? i : acc;
    }, 0);
    return str[index];
}
console.log(findTheLongestWord("What we do in life echoes to eternity!"));
