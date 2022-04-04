//bubble sort
const arr = [6, 4, 3, 1, 9, 44, 33, 2];

// let bubbleSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// console.log(bubbleSort(arr));

const betterBubbleSort = (array) =>
  array.reduce((accumulatedData, currentElement) => {
    let index = 0;
    while (
      index < accumulatedData.length &&
      currentElement > accumulatedData[index]
    ) {
      index++;
    }
    accumulatedData.splice(index, 0, currentElement);
    return accumulatedData;
  }, []);

console.log(betterBubbleSort(arr));
