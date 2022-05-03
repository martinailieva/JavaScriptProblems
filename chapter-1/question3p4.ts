const rows = 5;

const diamondPattern = (row: number) => {
  let output = "";
  for (let i = 1; i <= row; i++) {
    for (let j = i; j <= row; j++) {
      output += " ";
    }
    for (let k = 1; k <= i; k++) {
      output += k + " ";
    }
    console.log(output);
    output = "";
  }
  for (let i = row - 1; i >= 1; i--) {
    for (let j = row; j >= i; j--) {
      output += " ";
    }
    for (let k = 1; k <= i; k++) {
      output += k + " ";
    }
    console.log(output);
    output = "";
  }
};

console.log(diamondPattern(rows));
