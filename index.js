const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
// function sortByStringLength() {}

// 1. reiterate the problem words
// return an array with all the words sorted from shortest to longest
// 2. ask clarifying questions
// use for loop or for of loop
// 3. create examples starting with the simplest case (ex: if the function takes a string as a param, simplest case would be an empty string
// 4. write the function signature
function sortByStringLength(string) {
  // const acc = [];
  // for(let i = 0; i < string.length; i++){
  //   let word = string.sort()
  //   return word
  // }
  return string.sort((acc, ele) => acc.length - ele.length);
}
// 5. write pseudoCode inside the function
//    - one line of pseudo code for one line of actual code 
// Iterate over the array using a for loop
// 6. write your code 

// 7. write a test (tests are the examples we used in step 3)
// 8. repeat 6 and 7 until done 


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  //create an empty 
  // const scrollerArray = []
  //split the given string into an array of letters, save to variable
  // const lettersArray = 
  //remove the letter at index 0 (using shift) and add it to the end of the string array (using push)
  return word.split('').reduce((acc, _, index) => {
    const lettersToShift = word.substring(0, index + 1)
    const lettersToKeep = word.substring(index + 1)
    acc[index] = `${lettersToKeep}${lettersToShift}`
    return acc
  }, [])
  }

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes() {
const betweenExtremes = numbers => {
  if(!numbers.every(num => typeof num === 'number')) {
    return numbers
  } else {
  return Math.max(...numbers) - Math.min(...numbers)
    }
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
function morseCodeTranslator() {
  const morseCodeTranslator = (message, dictionary) => 
  message.split(' ').map(word => word.split('').map(character => dictionary[character.toUpperCase()]).join(' ')).join(' ')
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
