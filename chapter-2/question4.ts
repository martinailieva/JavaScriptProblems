const organizedArray = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;

const calculate = (array: number[], number: number): number => {
  return array.reduce(
    (accumulator, currentValue) =>
      currentValue > number ? accumulator + currentValue : accumulator,
    0
  );
};

console.log(calculate(organizedArray, higherThan));
