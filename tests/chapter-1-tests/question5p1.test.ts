import { it, expect } from "vitest";

import { weightCounter } from "../../chapter-1/question5p1";

it("should count the overall weight of types by given weights", () => {
  const array = [1, "Hi"];

  const result = weightCounter(array);

  expect(result).toBe(12);
});
