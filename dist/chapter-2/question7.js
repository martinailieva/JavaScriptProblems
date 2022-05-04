"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomize = (arr) => {
    const randomizeArray = arr.sort(() => Math.random() - 0.5);
    console.log(randomizeArray);
    let sequences = [];
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            temp.push(array[i]);
        }
        else if (array[i] > array[i + 1]) {
            temp.push(array[i]);
            sequences.push(temp);
            temp = [];
        }
        else {
            temp.push(array[i]);
            sequences.push(temp);
            temp = [];
        }
    }
    return getLongestSequence(sequences);
};
const getLongestSequence = (array) => {
    return array.reduce((previousSequence, currentSequence) => {
        return previousSequence.length < currentSequence.length
            ? currentSequence
            : previousSequence;
    }, []);
};
console.log(randomize(array));
