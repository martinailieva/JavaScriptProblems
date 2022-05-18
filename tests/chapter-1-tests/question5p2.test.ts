import { it, expect, describe } from "vitest";

import { extendedWeightCounter } from "../../chapter-1/question5p2";

describe("extendedWeightCounter()", () => {
  it("should count the deep overall weight of types by given weights", () => {
    const array = [1, { greet: "Hi" }];

    const result = extendedWeightCounter(array);

    expect(result).toBe(22);
  });
});
