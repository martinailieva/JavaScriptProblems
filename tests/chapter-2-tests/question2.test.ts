import { it, expect, describe } from "vitest";

import { findObject } from "../../chapter-2/question2";

describe("findObject", () => {
  it("should check if given object is in an array", () => {
    const array = [1, "Hi!"];
    const searchedObject = 1;

    const result = findObject(array, searchedObject);

    expect(result).toBe(true);
  });
});
