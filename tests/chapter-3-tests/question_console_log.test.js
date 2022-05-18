import { it, expect, vi, describe, beforeEach } from "vitest";

import { logger, warner } from "../../chapter-3/question_console_log";

describe("Console.log", () => {
  global.console = { log: vi.fn(), warn: vi.fn() };
  beforeEach(() => {
    global.console.log.mockReset();
    global.console.warn.mockReset();
  });

  it("should be called with given parameter", () => {
    const word = "zdr";

    logger(word);

    expect(console.log).toHaveBeenCalledWith(word);
  });

  it("should be called", () => {
    logger("zdr");

    expect(console.log).toBeCalled();
  });

  it("should be called with given parameter", () => {
    const word = "zdr";

    warner(word);

    expect(console.warn).toHaveBeenCalledWith(word);
  });
});
