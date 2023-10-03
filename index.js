const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(sentence) {

  // iterate over the array
  // sort by length, shortest first
  const sortedSentence = sentence.sort((a, b) => { 
    const wordA = a.length
    const wordB = b.length
    if(wordA < wordB){
      return -1
    } else if(wordA > wordB){
      return 1
    } else {
      return 0
    }
  })
  // should return the original array if any element is not a string
  // return sorted array
  return sortedSentence
}


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller() {
  // initialize empty result array
  // if the input is an empty string, return an empty array

  // initalize variable for length of the word 
  // make loop that iterates length times
  // move the last letter to the front .slice()
  // push to result

}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
// if the input is an empty string, return an empty array 
if(numbers === ''){
  return []
}
// iterate through numbers, filter out any that are not numbers
// if any elements found, return the original array
  const found = numbers.filter((num) => typeof num !== 'number')
  if(found.length > 0){
    return numbers
  }

  // find smallest number Math.min(...numbers)
  let smallestNum = Math.min(...numbers)
  // find largest number Math.max(...numbers)
  let largestNum = Math.max(...numbers)
  // return the difference 
  return largestNum - smallestNum
}

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
