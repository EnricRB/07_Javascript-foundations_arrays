import { it, describe, expect } from "vitest";
import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer";

const EMPTY_COUNTRIES_ARRAY = [];
const COUNTRIES_WITH_NO_SHORT_NAMES = ["United Kingdom", "Portugal", "Greece"];
const COUNTRIES_WITH_ALL_SHORT_NAMES = ["Italy", "Spain", "Japan"];
const COUNTRIES_WITH_MIXED_LENGTH = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  it("should return countries with five characters or fewer", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_MIXED_LENGTH);
    expect(result).toEqual(["Italy"]);
  });

  it("should handle an empty array of countries", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(EMPTY_COUNTRIES_ARRAY);
    expect(result).toEqual([]);
  });

  it("should handle an array with no countries having five characters or fewer", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_NO_SHORT_NAMES);
    expect(result).toEqual([]);
  });

  it("should handle an array with all countries having five characters or fewer", () => {
    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES_WITH_ALL_SHORT_NAMES);
    expect(result).toEqual(COUNTRIES_WITH_ALL_SHORT_NAMES);
  });
});
