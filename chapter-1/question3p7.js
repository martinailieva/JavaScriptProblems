const padWithSpace = (number) => {
  return number <= 9
    ? (number = "  " + number)
    : number <= 99
    ? (number = " " + number)
    : number;
};

const maxNumber = 5;
let row = "";
let i, j, k, m;

const seventhPattern = (maxNumber) => {
  let array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let n = 1;
  let low = 0,
    high = 9;

  for (i = 0; i < maxNumber; i++, low++, high--) {
    for (j = low; j <= high; j++, n++) {
      array[i][j] = padWithSpace(n);
    }
    for (j = low + 1; j <= high; j++, n++) {
      array[j][high] = padWithSpace(n);
    }
    for (j = high - 1; j >= low; j--, n++) {
      array[high][j] = padWithSpace(n);
    }
    for (j = high - 1; j > low; j--, n++) {
      array[j][low] = padWithSpace(n);
    }
  }

  for (i = 0; i < 10; i++) {
    row += "\n";
    for (j = 0; j < 10; j++) {
      row += " " + array[i][j] + " ";
    }
  }
  row += "\n";
  return row;
};

console.log(seventhPattern(maxNumber));
