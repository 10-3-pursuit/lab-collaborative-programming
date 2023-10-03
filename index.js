const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrStr) {
  // we iterate thru the array to get to the element which is a string type

  //we need to find out the length of each element string

  //the length will be a number type

  //we can use .sort() but for numbers to sort by length

  // dont forget to put the variable in the fx parameter b4 running the test
  return arrStr.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller() {}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes() {}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator() {}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
