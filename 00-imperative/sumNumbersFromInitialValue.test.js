import {it, describe, expect} from "vitest";
import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue";

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("sumNumbersFromInitialValue", () => {
  it("should return the correct sum with initial value 0", () => {
    const result = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);
    expect(result).toBe(15);
  });

  it("should return the correct sum with initial value 10", () => {
    const result = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsTen);
    expect(result).toBe(25);
  });

  it("should return the initial value if the list is empty", () => {
    const result = sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsTen);
    expect(result).toBe(initialAccumulatedValueAsTen);
  });

  it("should handle negative numbers in the list", () => {
    const result = sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsZero);
    expect(result).toBe(-15);
  });

  it("should handle a mix of positive and negative numbers", () => {
    const result = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);
    expect(result).toBe(3);
  });

  it("should handle an initial value of 0", () => {
    const result = sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero);
    expect(result).toBe(3);
  });

  it("should handle an initial value of 100", () => {
    const result = sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsOneHundred);
    expect(result).toBe(115);
  });
});
