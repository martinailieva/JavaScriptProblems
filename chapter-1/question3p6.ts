const squarePattern = (): void => {
  const number = 5;
  const k = 1;
  let output = "";

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i === 1) {
        output += j + "   "; //first row
      } else if (j === number) {
        output += j - k + i + "  "; // right column
      } else if (i === number) {
        output += number * 2 + j - k + "  "; // last row
      } else if (j === 1) {
        output += number * 2 + i + j + k + "  "; //left column
      } else {
        output += "    "; //inside
      }
    }
    output += "\n";
  }
  console.log(output);
};
