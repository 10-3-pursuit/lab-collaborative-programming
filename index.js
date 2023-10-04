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
function textScroller(str) {
  // function takes one parameter (string) - created variable str for function parameter
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
function betweenExtremes(numbersArr) {
  //return empty array if argument is an empty array
  //return original array if array elements are NaN
  //OTHERWISE return difference between min and max numbers within array (returns a number type)
  if (numbersArr.length === 0) return [];
  let hasNaNInArr = false; // will change to true if has only numbers in array
  for (let num of numbersArr) {
    if (typeof num !== "number") {
    hasNaNInArr = true; // to use later for if statement and return statement outside of the for loop aka iterations (if this is true function should return original array)
    break; // break out of loop aka stop iterating as soon as its finds any element that's NaN (can probably use .find() instead)
  }}
  if (hasNaNInArr) {
    return numbersArr;
  }
  return Math.max(...numbersArr) - Math.min(...numbersArr);
};


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  // function takes 2 parameters - a string and an object of strings
  // Mistake in JS doc: returns the difference between largest and smallest number in the array - so not the morsecode message itself but the length of string created using morse code
  // output according to test should be string (not array) ".... . .-.. .-.. --- .-- --- .-. .-.. -.." if input is string "Hello world", so spaces must be added and taken into account
  // initialize an empty string so we can put the translated values of the message into it later and get the length of the string created
  // to translate we can iterate through the string characters and see if the letters in the message matches the keys in the dictionary in order to extract the value stored in the key
  let morseCodeTranslationStr = "";
  for (let char of message.toUpperCase()) {
    if (dictionary[char]) { // if char and dictionary key match it'll evaluate to true to execute next line
      morseCodeTranslationStr += dictionary[char] + " "; // += for strings acts like how .push() works for arrays in this case
    }
  }
  return morseCodeTranslationStr.trim(); // returns translated string built by iterating through message input, and .trim() removes trailing spaces
};


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
