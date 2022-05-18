import { it, expect, describe } from "vitest";

import { findTheLongestWord } from "../../chapter-1/question6";

describe("findTheLongestWord()", () => {
  it("should return the longest word from a given sentence excluding special characters", () => {
    const sentence = "Hi, there!";

    const result = findTheLongestWord(sentence);

    expect(result).toBe("there");
  });
});
