import { it, describe, expect } from "vitest";
import createLocalesSettings from "./createLocalesSettings";

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
const EMPTY_LOCALES = [];
const SINGLE_LOCALE = ["EN"];
const DUPLICATE_LOCALES = ["EN", "EN", "FR", "FR"];

describe("createLocalesSettings", () => {
  it("should create locales settings with the first locale enabled and the rest disabled", () => {
    const result = createLocalesSettings(LOCALES);
    expect(result).toEqual({
      "EN": { id: 0, enabled: true },
      "GR": { id: 1, enabled: false },
      "FR": { id: 2, enabled: false },
      "IT": { id: 3, enabled: false },
      "PT": { id: 4, enabled: false }
    });
  });

  it("should handle an empty array", () => {
    const result = createLocalesSettings(EMPTY_LOCALES);
    expect(result).toEqual({});
  });

  it("should handle an array with one locale", () => {
    const result = createLocalesSettings(SINGLE_LOCALE);
    expect(result).toEqual({
      "EN": { id: 0, enabled: true }
    });
  });

  it("should handle an array with duplicate locales", () => {
    const result = createLocalesSettings(DUPLICATE_LOCALES);
    expect(result).toEqual({
      "EN": { id: 0, enabled: true },
      "FR": { id: 2, enabled: false }
    });
  });
});
