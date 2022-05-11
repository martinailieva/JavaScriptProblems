import { it, expect } from "vitest";

import { appendEvenOdd } from "./question3p2";

it("should insert arrays from the second array into odd elements of first array, and objects from the second in the even elements in first", () => {
  const arrayForInsert = [
    [1, 2],
    [3, 4],
  ];
  const arrayForExtract = [[3], { greet: "Hi" }];

  const result = appendEvenOdd(arrayForInsert, arrayForExtract);

  const expectedResult = [
    [1, 2, 3],
    [3, 4, { greet: "Hi" }],
  ];
  expect(result).toEqual(expectedResult);
});
