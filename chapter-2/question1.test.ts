import { it, expect } from "vitest";

import { sortArray, betterBubbleSort } from "./question1";

it("should return sorted array by given sorting function", () => {
  const numbers = [2, 1];

  const result = sortArray(numbers, betterBubbleSort);

  const expectedResult = [1, 2];
  expect(result).toEqual(expectedResult);
});
