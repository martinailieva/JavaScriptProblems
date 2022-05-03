type One = (string | number | number[] | { name: string })[];

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

function insertTruthyValuesInArray<T>(arrayOne: One, arrayTwo: Array<T>) {
  const nestedArr = arrayOne.find(Array.isArray);
  const truthyValues = arrayTwo.filter(Boolean);

  nestedArr.push(...truthyValues);
  return arrayOne;
}

console.log(insertTruthyValuesInArray(array1, array2));

// function appenderFP<T>(arr1: One, arr2: Array<T>) {
//   arr1.map((el) => (Array.isArray(el) ? [...el, ...arr2.filter(Boolean)] : el));
// }
