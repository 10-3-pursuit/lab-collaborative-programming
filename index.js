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
  // make loop that iterates length times (should have all combinations)
  // move the last letter to the front .slice() (should scroll in order)
  // push to result
  // return result

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
 *
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  
  // initialize empty array to store each translated letter
  const resultLetters = []

  // convert the message to uppercase
  message = message.toUpperCase()

  // convert message into an array of words
  const messageArray = message.split(' ')

  // iterate over each word of the array
  for(let word of messageArray){
    // iterate over each character of word
    for(let letter of word){
      // add the translated letter to the resultLetters array by matching letter with key
      resultLetters.push(dictionary[letter])
    }
  }
  // return the array as a string 
  return resultLetters.join(' ')
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
