import { it, expect } from "vitest";

import { tokenFill } from "../../chapter-1/question9";

it("should replace tokens in string with given date", () => {
  const date = new Date();

  const result = tokenFill(date, "YYYY");

  expect(result).toBe("2022");
});
