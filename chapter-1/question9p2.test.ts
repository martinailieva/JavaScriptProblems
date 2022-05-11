import { it, expect } from "vitest";

import { formatSentence } from "./question9p2";

it("should replace extended tokens in string with given date", () => {
  const date = new Date();
  const result = formatSentence(date, "YYYY");

  const expectedResult = date.getUTCFullYear().toString();
  expect(result).toBe(expectedResult);
});
