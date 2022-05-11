import { it, expect } from "vitest";

import { formatSentence } from "../../chapter-1/question9p2";

it("should replace extended tokens in string with given date", () => {
  const date = new Date();

  const result = formatSentence(date, "YYYY");

  expect(result).toBe("2022");
});
