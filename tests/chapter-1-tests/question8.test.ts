import { it, expect, describe } from "vitest";

import { timeDifference } from "../../chapter-1/question8";

describe("timeDifference()", () => {
  it("should return time difference between two dates", () => {
    const result = timeDifference(
      new Date("2022-01-01 11:11:11"),
      new Date("2022-01-09 12:12:12")
    );

    expect(result).toBe("1 week(s) ago");
  });
});
