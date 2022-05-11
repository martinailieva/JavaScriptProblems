import { it, expect } from "vitest";

import { extendedWeightCounter } from "../../chapter-1/question5p2";

it("should count the deep overall weight of types by given weights", () => {
  const array = [1, { greet: "Hi" }];

  const result = extendedWeightCounter(array);

  expect(result).toBe(22);
});
