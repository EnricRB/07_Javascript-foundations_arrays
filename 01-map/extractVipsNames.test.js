import { it, describe, expect } from "vitest";
import extractVipsNames from "./extractVipsNames";

const EMPTY_VIPS_LIST = [];

const SINGLE_VIP_LIST = [{ name: "Foo", age: 80 }];

const VIPS = [
  { name: "Foo", age: 80 },
  { name: "Bar", age: 2 },
  { name: "Fizz", age: 5 },
  { name: "Buzz", age: 16 },
  { name: "FizzBuzz", age: 100 },
];

const VIPS_WITH_DIFFERENT_AGES = [
  { name: "Foo", age: 80 },
  { name: "Bar", age: 2 },
  { name: "Fizz", age: 5 },
  { name: "Buzz", age: 16 },
  { name: "FizzBuzz", age: 100 },
];

describe("extractVipsNames", () => {
  it("should extract names from VIPS array", () => {
    const result = extractVipsNames(VIPS);
    expect(result).toEqual(["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"]);
  });

  it("should handle an empty array", () => {
    const result = extractVipsNames(EMPTY_VIPS_LIST);
    expect(result).toEqual([]);
  });

  it("should handle an array with one VIP", () => {
    const result = extractVipsNames(SINGLE_VIP_LIST);
    expect(result).toEqual(["Foo"]);
  });

  it("should handle VIPs with different ages", () => {
    const result = extractVipsNames(VIPS_WITH_DIFFERENT_AGES);
    expect(result).toEqual(["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"]);
  });
});
