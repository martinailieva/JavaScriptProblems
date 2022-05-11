import { it, expect } from "vitest";

import { insertTruthyValuesInArray } from "./question3";

it("should insert the truthy values from the second array in nested array of first array", () => {
  const array1 = [1, [1, 2]];
  const array2 = [null, 3];

  const result = insertTruthyValuesInArray(array1, array2);

  const expectedResult = [1, [1, 2, 3]];
  expect(result).toEqual(expectedResult);
});
