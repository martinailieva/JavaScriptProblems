import { it, expect, describe } from "vitest";

import { typeCounter } from "../../chapter-1/question4";

describe("typeCounter()", () => {
  it("should count all types in an array", () => {
    const array = [1, "Hi"];

    const result = typeCounter(array);

    expect(result).toEqual({ number: 1, string: 1 });
  });
});
