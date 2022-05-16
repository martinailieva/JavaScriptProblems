import { it, expect } from "vitest";

import { flatten } from "../../chapter-2/question5";

it("should flatten an array", () => {
  const input = [{ person: "John", skils: ["JS", "TS"] }];

  const result = flatten(input);

  const expectedResult = [{ person: "John", skils_0: "JS", skils_1: "TS" }];
  expect(result).toEqual(expectedResult);
});
