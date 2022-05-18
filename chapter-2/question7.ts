const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const randomize = (arr: number[]): number[] => {
  let sequences: number[][] = [];
  let temp: number[] = [];

  const randomizeArray = arr.sort(() => Math.random() - 0.5);
  console.log(randomizeArray);

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      temp.push(array[i]);
    } else if (array[i] > array[i + 1]) {
      temp.push(array[i]);
      sequences.push(temp);
      temp = [];
    } else {
      temp.push(array[i]);
      sequences.push(temp);
      temp = [];
    }
  }
  return getLongestSequence(sequences);
};

export const getLongestSequence = (array: number[][]) => {
  return array.reduce((previousSequence, currentSequence) => {
    return previousSequence.length < currentSequence.length
      ? currentSequence
      : previousSequence;
  }, []);
};

console.log(randomize(array));
