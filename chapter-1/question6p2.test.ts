import { it, expect } from "vitest";

import { findTheLongestWordByLetter } from "./question6p2";

it("should return the longest word from a given sentence excluding special characters", () => {
  const sentence = "Hi, there!";

  const result = findTheLongestWordByLetter(sentence, "H");

  const expectedResult = "Hi";
  expect(result).toBe(expectedResult);
});
