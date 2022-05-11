import { it, expect } from "vitest";

import { getOddNumbersCount } from "./question1";

it("should return the odd numbers count", () => {
  const numbers = [1, 2];

  const result = getOddNumbersCount(numbers);

  const expectedResult = numbers.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 > 0 ? accumulator + 1 : accumulator,
    0
  );

  expect(result).toBe(expectedResult);
});
