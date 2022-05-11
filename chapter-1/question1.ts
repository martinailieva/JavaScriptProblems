const arr = [6, 4, 3, 1, 9, 44, 33, 2];

export const getOddNumbersCount = (array: number[]): number => {
  return array.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 > 0 ? accumulator + 1 : accumulator,
    0
  );
};

console.log(getOddNumbersCount(arr));
