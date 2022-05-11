import { it, expect } from "vitest";

import { dateToString } from "./question7";

it("should show given date as a string", () => {
  const date = new Date();

  const result = dateToString(date);

  expect(result).toBe(date.toISOString());
});
