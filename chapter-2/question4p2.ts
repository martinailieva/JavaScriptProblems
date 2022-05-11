const organizedArrayOfNums = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;

export const calculateDivisible = (
  array: number[],
  number: number
): number[] => {
  return array.reduce<number[]>(
    (accumulator, currentValue) =>
      currentValue % number === 0
        ? [...accumulator, currentValue]
        : accumulator,
    []
  );
};

console.log(calculateDivisible(organizedArrayOfNums, divisible));
