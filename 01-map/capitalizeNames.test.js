import { it, describe, expect } from "vitest";
import capitalizeNames from "./capitalizeNames";

const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];

describe("capitalizeNames", () => {
  it("should capitalize all names in the array", () => {
    const result = capitalizeNames(NAMES);
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });

  it("should handle an empty array", () => {
    const result = capitalizeNames(EMPTY_NAMES_LIST);
    expect(result).toEqual([]);
  });

  it("should handle names that are already capitalized correctly", () => {
    const result = capitalizeNames(CAPITALIZED_NAMES);
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });

  it("should handle names that are all uppercase", () => {
    const result = capitalizeNames(UPPERCASED_NAMES);
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });

  it("should handle names that are all lowercase", () => {
    const result = capitalizeNames(LOWERCASED_NAMES);
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });

  it("should handle names with mixed casing", () => {
    const result = capitalizeNames(MIXED_CAPITALIZED_NAMES);
    expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
  });
});
