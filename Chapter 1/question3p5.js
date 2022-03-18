let rows = prompt("insert a number", 5);

const pyramidPattern = (row) => {
  let output = "";
  let k = 1;
  for (let i = 1; i < row; i++) {
    for (let j = 1; j <= i; j++) {
      output += k++ + " ";
    }
    console.log(output);
    output = "";
  }
};

console.log(pyramidPattern(rows));
