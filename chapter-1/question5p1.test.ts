import { it, expect } from "vitest";

import { weightCounter } from "./question5p1";

it("should count the overall weight of types by given weights", () => {
  const array = [1, "Hi"];

  const result = weightCounter(array);

  const expectedResult = 12;
  expect(result).toBe(expectedResult);
});
