const dataObj = [
  6,
  "Test",
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admin" },
];
const givenWeight = 26;

const weightCounterForSearch = (item: any): number => {
  let counter = 0;
  if ((typeof item === "object" && item) || Array.isArray(item)) {
    counter += 10;
    for (const key in item) {
      counter += weightCounter(item[key]);
    }
  }
  if (typeof item === "string") {
    counter += 8;
  } else if (typeof item === "number") {
    counter += 4;
  } else if (!item && typeof item === "object") {
    counter += 2;
  } else if (typeof item === "function") {
    counter += 10;
  } else if (typeof item === undefined) {
    counter += 2;
  } else if (typeof item === "boolean") {
    counter += 4;
  }

  return counter;
};

const findByGivenWeight = (array: any[], weight: number): boolean => {
  let hasEqualWeight = false;
  for (let i = 0; i < array.length; i++) {
    if (weightCounter(array[i]) === weight) {
      return !hasEqualWeight;
    }
  }
  return hasEqualWeight;
};

console.log(findByGivenWeight(dataObj, givenWeight));
