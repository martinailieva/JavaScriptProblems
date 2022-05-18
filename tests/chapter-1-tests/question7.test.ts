import { it, expect, describe } from "vitest";

import { dateToString } from "../../chapter-1/question7";

describe("dateToString()", () => {
  it("should show given date as a string", () => {
    const date = new Date();

    const result = dateToString(date);

    expect(result).toBe(date.toISOString());
  });
});
