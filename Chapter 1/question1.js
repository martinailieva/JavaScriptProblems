const arr = [6, 4, 3, 1, 9, 44, 33, 2];
let count = 0;
arr.map((num) => {
  num % 2 !== 0 ? count++ : 0;
});

console.log(count);
