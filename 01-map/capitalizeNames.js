/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

/**
 * Capitalizes the first letter of each name in an array of names.
 *
 * @param {string[]} namesList - An array of names to be capitalized.
 * @returns {string[]} An array of names with the first letter capitalized and the rest in lowercase.
 */

const capitalizeMates = (namesList) => namesList.map(name => 
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);

export default capitalizeMates;
