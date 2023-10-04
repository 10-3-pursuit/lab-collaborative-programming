const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */


//return an array of strings in ascending order by length

//add param to function (array of strings)
//sort through the array to put shortest word first, increasing to longest word last 
//return sorted array
const sortByStringLength = array => array.sort((word1, word2) => word1.length - word2.length)

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */

//Returns an array of each iteration of a word each time the first letter is removed and added on to the end of the word.

function textScroller(word) {
//create an empty 
// const scrollerArray = []
//split the given string into an array of letters, save to variable
// const lettersArray = 
//remove the letter at index 0 (using shift) and add it to the end of the string array (using push)
return word.split('').reduce((acc, _, index) => {       //splitting the string provided to an array of letters. reduce word to an array of words of the shifted result (index + 1 times)
  const lettersToShift = word.substring(0, index + 1)   //assigning a variable to the substring we need to shift to the end, based on current index (+ 1 because the 2nd param in substring is not inclusive)
  const lettersToKeep = word.substring(index + 1) //assigning a variable to the substring we need to keep, based on current index (+ 1, with no second param because it will grab everything to the end)
  acc[index] = `${lettersToKeep}${lettersToShift}`
  return acc
}, [])
//join the letters without a space
//push new word to created array
//return created array

// 'hello'
// ['h', 'e', 'l', 'l', 'o']
// const movedLetter = letters.shift()
// letters = ['e', 'l', 'l', 'o']
// movedLetter = h
// letters.push(movedLetter)
// letters = ['e', 'l', 'l', 'o', 'h']
// const newWord = letters.join('') => 'elloh'
// scrollerArray.push(newWord)
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
const betweenExtremes = numbers => {
  if(!numbers.every(num => typeof num === 'number')) {
    return numbers
  } else {
  return Math.max(...numbers) - Math.min(...numbers)
  }
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
const morseCodeTranslator = (message, dictionary) => 
  message.split(' ').map(word => word.split('').map(character => dictionary[character.toUpperCase()]).join(' ')).join(' ')

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
