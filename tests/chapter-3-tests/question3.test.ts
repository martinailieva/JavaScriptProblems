import { it, expect, describe } from "vitest";

import { Color } from "../../chapter-3/question3";

describe("Color()", () => {
  it("should return a rgb css value", () => {
    const color = new Color(0, 0, 0, "#000");

    const result = color.getColorRGB();

    expect(result).toBe("rgb(0,0,0)");
  });

  it("should return a short hex value", () => {
    const color = new Color(0, 0, 0, "#000");

    const result = color.getColorShortHex();

    expect(result).toBe("#000");
  });

  it("should return a long hex value", () => {
    const color = new Color(0, 0, 0, "#000000");

    const result = color.getColorLongHex();

    expect(result).toBe("#000000");
  });
});
