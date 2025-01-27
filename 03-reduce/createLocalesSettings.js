// const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "US": {id: 1, enabled: false},
 *  "EN": {id: 2, enabled: false},
 *  "EN": {id: 3, enabled: false},
 *  "EN": {id: 4, enabled: false},
 * }
 */
/**
 * Creates a settings object for a list of locales.
 *
 * @param {string[]} localesList - An array of locale strings.
 * @returns {Object} An object where each key is a locale and the value is an object containing the locale's settings.
 * @property {number} id - The index of the locale in the localesList array.
 * @property {boolean} enabled - A boolean indicating if the locale is enabled (true for the first locale, false for others).
 */
