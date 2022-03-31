let rows = 5;

function pyramidPattern() {
  let output = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j < i; j++) {}
    let temp = i;
    for (let k = 1; k <= i; k++) {
      output += temp + " ";
      temp = temp + rows - k;
    }
    console.log(output);
    output = "";
  }
}
pyramidPattern();
