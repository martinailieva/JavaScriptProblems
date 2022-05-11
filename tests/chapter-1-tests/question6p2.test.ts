import { it, expect } from "vitest";

import { findTheLongestWordByLetter } from "../../chapter-1/question6p2";

it("should return the longest word from a given sentence excluding special characters", () => {
  const sentence = "Hi, there!";

  const result = findTheLongestWordByLetter(sentence, "H");

  expect(result).toBe("Hi");
});
