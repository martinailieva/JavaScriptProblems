import { it, expect, describe } from "vitest";

describe("prototypes", () => {
  it("should return the odd numbers count", function () {
    const numbers = [1, 2];

    const result = numbers.oddNumbers();

    expect(result).toBe(1);
  });
});
