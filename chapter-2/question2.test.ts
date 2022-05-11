import { it, expect } from "vitest";

import { findObject } from "./question2";

it("should check if given object is in an array", () => {
  const array = [1, "Hi!"];
  const searchedObject = 1;

  const result = findObject(array, searchedObject);

  expect(result).toBe(true);
});
