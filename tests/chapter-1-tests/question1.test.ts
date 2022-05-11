import { it, expect } from "vitest";

import { getOddNumbersCount } from "../../chapter-1/question1";

it("should return the odd numbers count", () => {
  const numbers = [1, 2];

  const result = getOddNumbersCount(numbers);

  expect(result).toBe(1);
});
