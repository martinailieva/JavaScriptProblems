interface Array<T> {
  oddNumbers(): number;
  betterBubbleSort(array: number[]): number[];
  typeCounter(arr: any[]): string[];
  findObject(arr: any[], obj: any): unknown;
  appendEvenOdd(arr1: (number[] | string[])[], arr2: any[]): unknown;
  flatten(obj: any, parentKey: number, result: string[]): any;
  removeInner(arr: number[], percent: number): number[];
}

Array.prototype.oddNumbers = function () {
  return this.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 > 0 ? accumulator + 1 : accumulator,
    0
  );
};

Array.prototype.betterBubbleSort = (array: number[]): number[] =>
  array.reduce<number[]>((accumulatedData, currentElement) => {
    let index = 0;
    while (
      index < accumulatedData.length &&
      currentElement > accumulatedData[index]
    ) {
      index++;
    }
    accumulatedData.splice(index, 0, currentElement);
    return accumulatedData;
  }, []);

Array.prototype.typeCounter = function typeCounter(arr: any[]): string[] {
  return arr.reduce((acc, curr) => {
    if (acc[typeof curr]) {
      acc[typeof curr]++;
    } else {
      acc[typeof curr] = 1;
    }
    return acc;
  }, []);
};

Array.prototype.findObject = function findObject(arr: any, obj: any): unknown {
  if (!arr || !obj || arr.length === 0) {
    return false;
  }

  return (
    arr.includes(obj) ||
    !!arr.find(
      (item: any) =>
        item &&
        typeof item === "object" &&
        findObject(Array.isArray(item) ? item : Object.values(item), {
          name: "John Doe",
        })
    )
  );
};

const isObj = (value: {}) => value && typeof value === "object";

Array.prototype.appendEvenOdd = function appendEvenOdd(
  arr1: (number[] | string[])[],
  arr2: any[]
): unknown {
  const arrays = arr2.filter(Array.isArray).flat();
  const objects = arr2.filter(isObj);

  return arr1.map((el, index) =>
    index % 2 === 0 ? [...el, ...arrays] : [...el, ...objects]
  );
};

Array.prototype.flatten = function flatten(
  obj: any,
  parentKey = 1,
  result: string[] = []
): string[] {
  for (let key in obj) {
    const propName = parentKey ? parentKey + "_" + key : key;
    if (typeof obj[key] === "object") {
      flatten(obj[key], +propName, result);
    } else {
      result[+propName] = obj[key];
    }
  }
  return result;
};

Array.prototype.removeInner = (arr: number[], percent: number): number[] => {
  const arrLength = arr.length;

  let calculatePercentage = (percent / 100) * arrLength;
  const calculateMiddle = Math.floor(calculatePercentage / 2);

  console.log(calculateMiddle);

  return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};
