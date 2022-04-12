const arr = [6, 4, 3, 1, 9, 44, 33, 2];

const getOddNumbersCount = (array) => {
  return array.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 > 0 ? accumulator + 1 : accumulator,
    0
  );
};

const betterBubbleSort = (array) =>
  array.reduce((accumulatedData, currentElement) => {
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

const typeCounter = (arr) => {
  return arr.reduce((acc, curr) => {
    if (acc[typeof curr]) {
      acc[typeof curr]++;
    } else {
      acc[typeof curr] = 1;
    }
    return acc;
  }, {});
};

function findObject(arr, obj) {
  if (!arr || !obj || arr.length === 0) {
    return false;
  }

  return (
    arr.includes(obj) ||
    !!arr.find(
      (item) =>
        item &&
        typeof item === "object" &&
        findObj(Array.isArray(item) ? item : Object.values(item), person)
    )
  );
}

const appender = (arrayOne, arrayTwo) => {
  const nestedArr = arrayOne.find((element) => Array.isArray(element));
  const truthyValues = arrayTwo.reduce((result, currentValue) => {
    currentValue ? result.push(currentValue) : currentValue;
    return result;
  }, []);

  nestedArr.push(truthyValues);
  return arrayOne;
};

const flatten = (arr, parentKey = 1, result = []) => {
  for (let key of arr) {
    const propName = parentKey ? parentKey + "_" + key : key;
    if (typeof arr[key] === "object") {
      flatten(obj[key], propName, result);
    } else {
      result[propName] = obj[key];
    }
  }
  return result;
};

const removeInner = (arr, percent) => {
  const arrLength = arr.length;

  let calculatePercentage = (percent / 100) * arrLength;
  const calculateMiddle = Math.floor(calculatePercentage / 2);

  console.log(calculateMiddle);

  return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};

Array.prototype.getOddNumbersCount = getOddNumbersCount;
Array.prototype.betterBubbleSort = betterBubbleSort;
Array.prototype.typeCounter = typeCounter;
Array.prototype.findObject = findObject;
Array.prototype.appender = appender;
Array.prototype.flatten = flatten;
Array.prototype.removeInner = removeInner;

console.log(arr.getOddNumbersCount(arr));
console.log(arr.betterBubbleSort(arr));
