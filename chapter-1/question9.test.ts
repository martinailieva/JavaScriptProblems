import { it, expect } from "vitest";

import { tokenFill } from "./question9";

it("should replace tokens in string with given date", () => {
  const date = new Date();
  const result = tokenFill(date, "YYYY");

  const expectedResult = date.getUTCFullYear().toString();
  expect(result).toBe(expectedResult);
});
