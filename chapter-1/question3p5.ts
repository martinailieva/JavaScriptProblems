const rowsPattern5 = 5;

const columnPyramidPattern = (row: number): void => {
  let output = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j < i; j++) {}
    let temp = i;
    for (let k = 1; k <= i; k++) {
      output += temp + " ";
      temp = temp + row - k;
    }
    console.log(output);
    output = "";
  }
};
console.log(columnPyramidPattern(rowsPattern5));
