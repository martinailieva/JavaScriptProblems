// let rows = prompt("insert a number", 5);
let rows = 5;

const pyramidPattern = (row) => {
  let output = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    console.log(output);
    output = "";
  }
};

console.log(pyramidPattern(rows));
