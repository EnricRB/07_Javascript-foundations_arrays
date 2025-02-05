// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use map()
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

/**
 * Feeds a list of monkeys with a specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings where each string represents a monkey being fed with the specified fruit.
 */

const feedMonkeys = (monkeysList, fruit) => monkeysList.map(monkey => `${monkey} ${fruit}`);

export default feedMonkeys;
