const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;

const calculate = (array, number) => {
  return array.reduce(
    (accumulator, currentValue) =>
      currentValue > number ? accumulator + currentValue : accumulator,
    0
  );
};

console.log(calculate(arr1, higherThan));
