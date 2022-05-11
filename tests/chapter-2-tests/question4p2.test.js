import { it, expect } from "vitest";

import { calculateDivisible } from "../../chapter-2/question4p2";

it("should return a new array with numbers divisible to a given number", () => {
  const array = [1, 2];
  const divideBy = 2;

  const result = calculateDivisible(array, divideBy);

  expect(result).toEqual([2]);
});
