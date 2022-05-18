import { it, expect, describe } from "vitest";

import { removeInner } from "../../chapter-2/question6";

describe("removeInner", () => {
  it("should remove inner precentage of numbers of an array", () => {
    const array = [1, 2, 3, 4];
    const percent = 50;

    const result = removeInner(array, percent);

    expect(result).toEqual([1, 4]);
  });
});
