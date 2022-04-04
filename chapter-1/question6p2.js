const findTheLongestWord = (str, letter) => {
  const stringWords = str.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  const isThereWordStartingWithPassedLetter = stringWords.some((word) =>
    word.startsWith(letter)
  );

  if (isThereWordStartingWithPassedLetter) {
    let index = stringWords.reduce((acc, curr, i) => {
      return curr.length >= stringWords[acc].length &&
        stringWords[i].startsWith(letter)
        ? i
        : acc;
    }, 0);

    return stringWords[index];
  }
  return "There is no word starting with this letter. Try again!";
};
console.log(
  findTheLongestWord("What we do in life lie echoes to eternity!", "e")
);
