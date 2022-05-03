const arr: number[] = [6, 4, 3, 1, 9, 44, 33, 2];

const getOddNumbersCount = (array: number[]) => {
  return array.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 > 0 ? accumulator + 1 : accumulator,
    0
  );
};

console.log(getOddNumbersCount(arr));
