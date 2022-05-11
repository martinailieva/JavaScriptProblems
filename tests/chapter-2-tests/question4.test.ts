import { it, expect } from "vitest";

import { calculate } from "../../chapter-2/question4";

it("should sum the elements of an array that have a higher value than a given number", () => {
  const array = [1, 2, 3];
  const number = 1;

  const result = calculate(array, number);

  expect(result).toBe(5);
});
