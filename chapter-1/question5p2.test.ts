import { it, expect } from "vitest";

import { extendedWeightCounter } from "./question5p2";

it("should count the deep overall weight of types by given weights", () => {
  const array = [1, { greet: "Hi" }];

  const result = extendedWeightCounter(array);

  const expectedResult = 22;
  expect(result).toBe(expectedResult);
});
