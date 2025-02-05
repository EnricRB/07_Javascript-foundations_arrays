// const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
// const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 */

/**
 * Returns an array of strings with length equal or greater than 5.
 *
 * @param {string[]} wordsList - The array of words to filter.
 * @returns {string[]} An array containing words with length equal or greater than 5.
 */

function getLongWords(wordsList) {
    const result = [];
    for (let i = 0; i < wordsList.length; i++) {
      if (wordsList[i].length >= 5) {
        result.push(wordsList[i]);
      }
    }
    return result;
  }
  
  export default getLongWords;
