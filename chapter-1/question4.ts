function typeCounter<T>(arr: T[]): T[] {
  return arr.reduce((acc, curr) => {
    if (acc[typeof curr]) {
      acc[typeof curr]++;
    } else {
      acc[typeof curr] = 1;
    }
    return acc;
  }, []);
}

const array = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
];

console.log(typeCounter(array));
