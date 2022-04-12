const arr1 = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log("Hello, world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];

const isObj = (obj) => {
  if (
    typeof obj !== undefined &&
    obj !== null &&
    typeof obj === "object" &&
    typeof obj !== "function"
  ) {
    return true;
  } else {
    return false;
  }
};

const appender = (arrOne, arrTwo) => {
  const objects = [];
  const arrays = [];

  for (let j = 0; j < arrTwo.length; j++) {
    if (Array.isArray(arrTwo[j])) {
      arrays.push(arrTwo[j]);
    } else if (isObj(arrTwo[j])) {
      objects.push(arrTwo[j]);
    }
  }

  for (let i = 0; i < arrOne.length; i++) {
    if (i % 2 === 0) {
      arrOne[i] = arrOne[i].concat(arrays);
    } else {
      arrOne[i] = arrOne[i].concat(objects);
    }
  }
  return arrOne;
};

console.log(appender(arr1, arr2));
