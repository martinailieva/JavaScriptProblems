import { it, expect } from "vitest";

import { typeCounter } from "./question4";

it("should count all types in an array", () => {
  const array = [1, "Hi"];

  const result = typeCounter(array);

  const expectedResult = { number: 1, string: 1 };
  expect(result).toEqual(expectedResult);
});
