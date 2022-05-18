import { it, expect, describe } from "vitest";

import { getOddNumbersCount } from "../../chapter-1/question1";

describe("getOddNumbersCount()", () => {
  it("should return the odd numbers count", () => {
    const numbers = [1, 2];

    const result = getOddNumbersCount(numbers);

    expect(result).toBe(1);
  });
});
