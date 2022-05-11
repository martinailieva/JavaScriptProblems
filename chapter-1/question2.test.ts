import { it, expect } from "vitest";

import { bubbleSort } from "./question2";

it("should return an ordered numbers array", () => {
  const numbers = [2, 1];

  const result = bubbleSort(numbers);

  const expectedResult = [1, 2];
  expect(result).toEqual(expectedResult);
});
