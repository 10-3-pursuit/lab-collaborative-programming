const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrStr) {
  // make a variable for function parameter (which is an array of strings)
  // we need to iterate through the array to get to the element which is a string type
  // we need to find out the length of each each element string type
  // the length will be a number type
  // we can use .sort() method but for numbers to sort by length
  return arrStr.sort((a, b) => a.length - b.length);
};

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  // info: "scrolling" means rearranging the letters, but following a specific rule where you always move the first letter to the end!
  // initialize variable with empty array to use .push() array method to push scrolled words
  // iterate through string then use .slice() method first to remove first letter. Use .slice() again to remove rest of the wrd excluding first letter. Then concatenating both together inside for loop.
  // info: string.slice(startIndex, endIndex) extracts a section of a string and returns it as a new string, without modifying the original string. The extraction starts at the startIndex and ends at endIndex (end not included).
  let arrScrolledWords = [];
  for (let i = 0; i < str.length; i++) { // for strings index begin at 1
    let scrolledWordStr = str.slice(i) + str.slice (0,i); // the first letter plus the rest of the word
    // for example when str = "word" for i = 0 iteration str.slice(0) + str.slice(0,0) scrolledWordStr is "word" + "" -> "word"
    // for i = 1 iteration str.slice(1) + str.slice(0,1) scrolledWordStr is "ord" + "w" -> "ordw"
    // for i = 2 iteration str.slice(2) + str.slice(0,2) scrolledWordStr is "rd" + "wo" -> "rdwo" and so on
    arrScrolledWords.push(scrolledWordStr);
  }
  let words = arrScrolledWords.shift(); // to remove the first element in array and saving it to a variable (which contains original word) for later use
  arrScrolledWords.push(words); // to re-add the removed element at end of array
  return arrScrolledWords;
};


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
