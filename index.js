const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
  //We want to sort the array of words by length. Where the shorter words will come before the longer words.
  return arr.sort((a,b)=> a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  //We want to first iterate over the word, then cycle letters of the word to the end of the word by each iteration
  //The first iteration should cycle the first letter to the end, the second should cycle the first 2 letters to the end, etc.
  return Array.from(word).map((letter,index)=>{
    return word.slice(index+1) + word.slice(0,index+1)
  })
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  return numbers.every((num)=> typeof(num) === 'number') ? Math.max(...numbers) - Math.min(...numbers):numbers
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message,dictionary) {
  return Array.from(message).reduce((acc,letter)=> {
    acc += dictionary[letter.toUpperCase()]||""
    return message.indexOf(letter) === message.length - 1 ? acc: dictionary[letter.toUpperCase()] ? acc+=" ":acc
  },"")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
