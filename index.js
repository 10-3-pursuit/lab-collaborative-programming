const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(strArr) {
  //iterate through strArr array and sort each string by length
  const newArr = strArr.sort((a, b) => a.length - b.length);
  //return newArr with elements in order
  return newArr;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  //initialize an empty array
  let wordArr = [];
  //created a variable using 'let', that would start with the value of `word`
  let changedWord = word;
  //create a 'while' loop that will stop when the length of wordArr is no longer less than the length of 'word'
  while(wordArr.length < word.length) {
  //created a variable that holds the first character of the current value of changedWord
    firstLetter = changedWord.charAt(0);
    //assigns new value to changedWord, by removing the first character and adding the value of firstLetter to the end
    changedWord = changedWord.slice(1) + firstLetter;
    //pushes the current value of the changedWord to wordArr
    wordArr.push(changedWord);
  }
  //when the 'while' loop is finished, returns wordArr
  return wordArr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //created a variable 'total' and set the value of zero
  let total = 0;
  //iterate through the 'numbers' array using a 'for of' loop
  for (const num of numbers) {
    //if num is not a number, then the original 'numbers' array is returned
    if(typeof num != 'number') {
      return numbers;
    }
  }
  //create a new array using .sort that arranges all the numbers in the 'numbers' array from smallest to largest
  const newArr = numbers.sort((a, b) => a - b);
  //the value of 'total' equals the value of the last element in newArr minus the first element in newArr
  total = newArr[newArr.length - 1] - newArr[0];
  //return the total
  return total;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  //created a new array using the spread operator that spreads each character in the string into its own each element
  let characterArr = [...message]
  //creates a variable that holds an empty string
  let morseMessage = ""
  for (const char of characterArr) {
    morseMessage += dictionary[char.toUpperCase()] + " "
  }
  //returns morse code string
  return morseMessage
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
