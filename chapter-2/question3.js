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
  const nestedArr = arrayOne.find((element) => Array.isArray(element));
  const truthyValues = arrayTwo.reduce((result, currentValue) => {
    currentValue ? result.push(currentValue) : currentValue;
    return result;
  }, []);

  nestedArr.push(truthyValues);
  return arrayOne;
};

console.log(appender(arr1, arr2));

export default appender;
