const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
  //set the param to array
return array.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const wordArray = word.split("")// convert the word to an array of characters 
  const scrolledWords = []

  for(let i= 0; i<wordArray.length; i++){
    const scrolledArray = [...wordArray]//create a copy of teh orginal array 
    //orginal Array
    for(let j = 0; j<= i; j++){
      const char = scrolledArray.shift()
      scrolledArray.push(char)
    }
    const scrolledWord = scrolledArray.join("")
    scrolledWords.push(scrolledWord)

  }
 return scrolledWords
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if(numbers.every((num) => typeof num === "number")){
  const minNum = Math.min(...numbers)
  const maxNum = Math.max(...numbers)
  

 return maxNum - minNum
  }else{
    return numbers
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
function morseCodeTranslator(message,dictionary) {
//will create a variable for teh result to save teh final message
let result = ""
const messageArray = message.split(" ")
//iterate to check each word
const code = messageArray.map((word) => 
word.split("")
.map((ele) => dictionary[ele.toUpperCase()])
.join("")
)
return result 
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
