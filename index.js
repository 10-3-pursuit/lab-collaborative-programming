const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(strArr) {
  //iterate through 'strArr' array, and sort each string by length.
  const newArr = strArr.sort((a, b) => a.length - b.length)
  //return newArr with elements in order
  return newArr
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  //Create an empty array
  let wordArr = []
  //create a variable using 'let', that will start with the value of 'word'
  let changedWord = word
  //Created a while loop that will stop when the length of wordArr is no longer less than the length of 'word'.
  while (wordArr.length < word.length){
    //Create a variable that holds the first character of the current value of 'changedWord'.
    let firstLetter = changedWord.charAt(0)
    //Assigns new value to changedWord, by removing the first character, and adding the value of 'firstLetter' to the end.
    changedWord = changedWord.slice(1) + firstLetter
    //Pushes the current value of changedWord to wordArr.
    wordArr.push(changedWord)
  }
  //When the While loop is finished, returns wordArr.
  return wordArr
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //Created a variable 'total' with a value of 0.
  let total = 0
  //Iterate through the 'numbers' array using a 'for of' loop
  for (const num of numbers) {
    //If num is NOT a number, then the original 'numbers' array is returned.
    if (typeof num != "number"){
      return numbers
    }
  }
  //Create a new array using .sort, that arranges all the numbers in the numbers array from smallest to largest.
  const newArr = numbers.sort((a, b) => a - b)
  //The value of 'total' equals the value of the last element in newArr minus the first element in newArr.
  total = newArr[newArr.length - 1] - newArr[0]
  //Return total
  return total
}

/*
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  let characterArr = [...message]
  let morseMessage = ""
  for (const char of characterArr) {
    morseMessage += dictionary[char.toUpperCase()] + " "
  }
  return morseMessage
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
