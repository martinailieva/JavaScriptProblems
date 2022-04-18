const arr1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const arr2 = [
  null,
  () => {
    console.log("Hello, world!");
  },
  ["one", "five"],
  undefined,
  6,
];

const appender = (arrayOne, arrayTwo) => {
  const nestedArr = arrayOne.find(Array.isArray);
  const truthyValues = arrayTwo.filter(Boolean);

  nestedArr.push(...truthyValues);
  return arrayOne;
};

console.log(appender(arr1, arr2));
