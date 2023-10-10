const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(str) {
  return str.sort((a,b) => a.length - b.length);
}
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  // (word) never changes. So the slice is done to "Hello" every time. 
  let wordArr = word.split("") 

// the array of letters is the same as the word length
  return wordArr.map((letter, index) => {
    return word.slice(index+1) + word.slice(0,index+1)
  });
}
// index is used because index is the increment. 
// .map() & .slice()

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  // subtract smallestNum from LargestNum 
  if (numbers.every(element => typeof(element) === "number")) {
    return Math.max(...numbers) - Math.min(...numbers);
  } else {
    return numbers;
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
function morseCodeTranslator(message, dictionary) {
  // Remember: Use .Uppercase because morsecode letters are in UCase. 
  // Key into the obj (data is an obj) -> for each char.
  // use an accumulator
  let acc = ""
  let UStr = message.toUpperCase()

  for (let str of UStr) {
    if(str !== " ") {
      if(UStr.lastIndexOf(str) === UStr.length-1) {
        acc += dictionary[str]
      } else {
        acc += dictionary[str] + " "
      }
    } else {
      acc += ""
      // this is uneccessary since it does NOTHING but it's here for that reminder.
    }
  }
  return acc
}

// ------------------------------ 
// const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
//  * Returns an array of all of the words sorted by length, shortest first
//  * @param {String[]}  - An array of strings.
//  * @returns {string[]} An array of strings.
//  */
// function sortByStringLength() {
//   // Return: array of words by LENGTH. Shortest first. Using .sort()

//   // Iterate through the array. 
//   return words.sort((a, b) => {
//     if (a.length > b.length) {
//       return 1;
//     } else if (a.length < b.length) {
//       return -1;
//     } else {
//       return 0;
//     }
//   // Get the length of each word 
//   // If word.length is greater than word2.length* 
//   // return 
//   });
// }

// /**
//  * Returns an array of the word in all scrolling positions.
//  * @param {String} word - A string.
//  * @returns {string[]} An array of strings
//  * Example: "Hello"
//  * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
//  */
// function textScroller(word) {

// }

// /**
//  * Returns the difference between the largest and smallest number in the array
//  * @param {Number[]} numbers - An array of numbers.
//  * @returns {Number} The difference between the largest and smallest number.
//  */
// function betweenExtremes(numbers) {
//   // Math.max -> numbers array to get the maximum value
//   let maxVal = Math.max(...numbers)
//   // Math.min -> numbers array to get the minimum value 
//   let minVal = Math.min(...numbers)
//   // take the difference of .max and .min and return value
//   return maxVal - minVal;
// }

// /**
//  * Returns the difference between the largest and smallest number in the array
//  * @param {String} message - A string to translate.
//  * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
//  * @returns {Number} The message in morse code
//  * Example: "A new month"
//  * .- / -. . .-- / -- --- -. - ....
//  */
// function morseCodeTranslator() {}

// module.exports = {
//   sortByStringLength,
//   textScroller,
//   betweenExtremes,
//   morseCodeTranslator,
// };


// // Notes: 
// //  Higher Order Array Functions: 
// // .map() 
// // .filter()
// // . find()
// // .some()
module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
