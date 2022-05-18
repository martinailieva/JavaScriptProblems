import { it, expect, describe } from "vitest";

import { insertTruthyValuesInArray } from "../../chapter-2/question3";

describe("insertTruthyValuesInArray()", () => {
  it("should insert the truthy values from the second array in the first nested array of first array", () => {
    const array1 = [1, [1, 2]];
    const array2 = [null, 3];

    const result = insertTruthyValuesInArray(array1, array2);

    expect(result).toEqual([1, [1, 2, 3]]);
  });
});
