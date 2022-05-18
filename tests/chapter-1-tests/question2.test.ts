import { it, expect, describe } from "vitest";

import { bubbleSort } from "../../chapter-1/question2";

describe("bubbleSort()", () => {
  it("should return an ordered numbers array", () => {
    const numbers = [2, 1];

    const result = bubbleSort(numbers);

    expect(result).toEqual([1, 2]);
  });
});
