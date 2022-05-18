import { it, expect, describe } from "vitest";

import { sortArray, betterBubbleSort } from "../../chapter-2/question1";

describe("sortArray()", () => {
  it("should return sorted array by given sorting function", () => {
    const numbers = [2, 1];

    const result = sortArray(numbers, betterBubbleSort);

    expect(result).toEqual([1, 2]);
  });
});
