import {it, describe, expect} from "vitest";
import getLongWords from "./getLongWords";

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];
const SHORT_WORDS = ["a", "bb", "ccc", "dddd"];
const ALL_LONG_WORDS = ["JavaScript", "TypeScript", "Python"];
const EMPTY_ARRAY = [];
const MIXED_LENGTH_WORDS = ["short", "tiny", "adequate", "sufficient"];

describe("getLongWords", () => {
  it("should return long words from LANGUAGES array", () => {
    const result = getLongWords(LANGUAGES);
    expect(result).toEqual(["JavaScript", "TypeScript"]);
  });

  it("should return long words from BEATLES array", () => {
    const result = getLongWords(BEATLES);
    expect(result).toEqual(["George","Ringo"]);
  });

  it("should return an empty array if no words are long enough", () => {
    const result = getLongWords(SHORT_WORDS);
    expect(result).toEqual([]);
  });

  it("should return the same array if all words are long enough", () => {
    const result = getLongWords(ALL_LONG_WORDS);
    expect(result).toEqual(["JavaScript", "TypeScript", "Python"]);
  });

  it("should handle an empty input array", () => {
    const result = getLongWords(EMPTY_ARRAY);
    expect(result).toEqual([]);
  });

  it("should handle an array with mixed length words", () => {
    const result = getLongWords(MIXED_LENGTH_WORDS);
    expect(result).toEqual(["short","adequate", "sufficient"]);
  });
});
