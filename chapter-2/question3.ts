const array1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const array2 = [
  null,
  () => {
    console.log("Hello, world!");
  },
  ["one", "five"],
  undefined,
  6,
];

export function insertTruthyValuesInArray(
  arrayOne: any,
  arrayTwo: any[]
): any[] {
  const nestedArr = arrayOne.find(Array.isArray);
  const truthyValues = arrayTwo.filter(Boolean);

  nestedArr.push(...truthyValues);
  return arrayOne;
}

console.log(insertTruthyValuesInArray(array1, array2));
