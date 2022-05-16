import { it, expect } from "vitest";

import { findByGivenWeight } from "../../chapter-2/question8";

it("should return if an array weight equals the given weight", () => {
  const array = [1, "Hi!"];
  const weight = 1;

  const result = findByGivenWeight(array, weight);

  expect(result).toBeFalsy;
});
