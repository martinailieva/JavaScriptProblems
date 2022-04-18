const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const percentage = 50;

const removeInner = (arr, percent) => {
  const arrLength = arr.length;

  let calculatePercentage = (percent / 100) * arrLength;
  const calculateMiddle = Math.floor(calculatePercentage / 2);

  console.log(calculateMiddle);

  return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};

console.log(removeInner(arr, percentage));
