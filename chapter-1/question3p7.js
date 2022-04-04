const padWithSpace = (number) => {
  if (number <= 9) {
    number = ("  " + number).slice(-4);
  } else if (number <= 99) {
    number = (" " + number).slice(-4);
  }
  return number;
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

// function matrix(n) {
//   let result = new Array(n).fill().map(() => new Array(n).fill("")); // create empty n x n array
//   let counter = 1;
//   let startCol = 0;
//   let endCol = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startCol <= endCol && startRow <= endRow) {
//     for (let i = startCol; i <= endCol; i++) {
//       result[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;
//     for (let j = startRow; j <= endRow; j++) {
//       result[j][endCol] = counter;
//       counter++;
//     }

//     endCol--;

//     for (let i = endCol; i >= startCol; i--) {
//       result[endRow][i] = counter;
//       counter++;
//     }

//     endRow--;
//     for (let i = endRow; i >= startRow; i--) {
//       result[i][startCol] = counter;
//       counter++;
//     }

//     startCol++;
//   }

//   return result;
// }
// console.log(matrix(6));
