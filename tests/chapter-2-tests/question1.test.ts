import { it, expect } from "vitest";

import { sortArray, betterBubbleSort } from "../../chapter-2/question1";

it("should return sorted array by given sorting function", () => {
  const numbers = [2, 1];

  const result = sortArray(numbers, betterBubbleSort);

  expect(result).toEqual([1, 2]);
});
