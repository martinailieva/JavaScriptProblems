const arrayOfNums = [6, 4, 3, 1, 9, 44, 33, 2];

const bubbleSort = (array: number[]): number[] =>
  array.reduce<number[]>((accumulatedData, currentElement) => {
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

console.log(betterBubbleSort(arrayOfNums));
