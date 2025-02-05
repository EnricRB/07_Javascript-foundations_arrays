import { it, describe, expect } from "vitest";
import transformSecondsToWords from "./transformSecondsToWords";

const SECONDS = [2, 5, 100];
const EMPTY_SECONDS_LIST = [];
const SINGLE_SECOND_LIST = [42];
const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];

describe("transformSecondsToWords", () => {
  it("should transform an array of seconds to an array of strings", () => {
    const result = transformSecondsToWords(SECONDS);
    expect(result).toEqual(["2", "5", "100"]);
  });

  it("should handle an empty array", () => {
    const result = transformSecondsToWords(EMPTY_SECONDS_LIST);
    expect(result).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const result = transformSecondsToWords(SINGLE_SECOND_LIST);
    expect(result).toEqual(["42"]);
  });

  it("should handle an array with value zero", () => {
    const result = transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO);
    expect(result).toEqual(["0"]);
  });

  it("should handle negative values", () => {
    const result = transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES);
    expect(result).toEqual(["-1", "-60", "-3600"]);
  });
});
