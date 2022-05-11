import { it, expect } from "vitest";

import { findTheLongestWord } from "./question6";

it("should return the longest word from a given sentence excluding special characters", () => {
  const sentence = "Hi, there!";

  const result = findTheLongestWord(sentence);

  const expectedResult = "there";
  expect(result).toBe(expectedResult);
});
