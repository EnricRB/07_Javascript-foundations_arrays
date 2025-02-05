import {it, describe, expect} from "vitest";
import feedMonkeys from "./feedMonkeys";

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];
const apple = "🍎";
const banana = "🍌";
const grape = "🍇";
const specialCharacters = "🍉🍇";

describe("feedMonkeys", () => {
  it("should feed monkeys with bananas", () => {
    const result = feedMonkeys(MONKEYS_LIST, banana);
    expect(result).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });

  it("should feed monkeys with apples", () => {
    const result = feedMonkeys(MONKEYS_LIST, apple);
    expect(result).toEqual(["🐒 🍎", "🦍 🍎", "🦧 🍎"]);
  });

  it("should feed monkeys with grapes", () => {
    const result = feedMonkeys(MONKEYS_LIST, grape);
    expect(result).toEqual(["🐒 🍇", "🦍 🍇", "🦧 🍇"]);
  });

  it("should return an empty array if no fruit is provided", () => {
    const result = feedMonkeys(MONKEYS_LIST);
    expect(result).toEqual([]);
  });

  it("should handle feeding monkeys with special characters", () => {
    const result = feedMonkeys(MONKEYS_LIST, specialCharacters);
    expect(result).toEqual(["🐒 🍉🍇", "🦍 🍉🍇", "🦧 🍉🍇"]);
  });
});
