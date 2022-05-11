import { it, expect } from "vitest";

import { timeDifference } from "./question8";

it("should return time difference between two dates", () => {
  const result = timeDifference(
    new Date("2022-01-01 11:11:11"),
    new Date("2022-01-09 12:12:12")
  );

  const expectedResult = "1 week(s) ago";
  expect(result).toBe(expectedResult);
});
