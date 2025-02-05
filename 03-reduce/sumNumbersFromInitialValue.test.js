//Implement same test defined in 00-imperative/sumNumbersFromInitialValue.test.js

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
  it("should sum positive numbers with initial value 0", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = sumNumbersFromInitialValue(numbers, 0);
    expect(result).toBe(15);
  });

  it("should sum numbers with positive initial value", () => {
    const numbers = [1, 2, 3];
    const result = sumNumbersFromInitialValue(numbers, 10);
    expect(result).toBe(16);
  });

  it("should sum numbers with negative initial value", () => {
    const numbers = [1, 2, 3];
    const result = sumNumbersFromInitialValue(numbers, -5);
    expect(result).toBe(1);
  });

  it("should handle empty array with initial value", () => {
    const result = sumNumbersFromInitialValue([], 5);
    expect(result).toBe(5);
  });

  it("should handle array with negative numbers", () => {
    const numbers = [-1, -2, -3, 4, 5];
    const result = sumNumbersFromInitialValue(numbers, 0);
    expect(result).toBe(3);
  });
});
