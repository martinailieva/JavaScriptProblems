const findTheLongestWordByLetter = (str: string, letter: string): string => {
  const stringWords = str.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

  const isThereWordStartingWithPassedLetter = stringWords.some((word) =>
    word.startsWith(letter)
  );

  if (isThereWordStartingWithPassedLetter) {
    let index = stringWords.reduce((previousWord, currentWord, i) => {
      return currentWord.length >= stringWords[previousWord].length &&
        stringWords[i].startsWith(letter)
        ? i
        : previousWord;
    }, 0);

    return stringWords[index];
  }
  return "There is no word starting with this letter. Try again!";
};
console.log(
  findTheLongestWordByLetter("What we do in life lie echoes to eternity!", "e")
);
