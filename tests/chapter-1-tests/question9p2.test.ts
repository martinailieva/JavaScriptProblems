import { it, expect, describe } from "vitest";

import { formatSentence } from "../../chapter-1/question9p2";

describe("formatSentence()", () => {
  it("should replace extended tokens in string with given date", () => {
    const date = new Date();

    const result = formatSentence(date, "YYYY");

    expect(result).toBe("2022");
  });
});
