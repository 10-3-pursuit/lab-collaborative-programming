const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
// A function to parse the orginal array and return it sorted.
// must be sort by length.
return arr.sort((a,b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  // needs to iterate through a string , moving postion 0 to the end each time .
  // needs to return the orginal string 
  if(word.length === 0) {
    return [];
  }

  const result = [];
  for (let i = 1; i < word.length + 1; i++) {
    // we are slicng 
    const scrolledWord = word.slice(i) + word.slice(0, i)
    
    result.push(scrolledWord);
  }
  
  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(arr) {
  // iterate through a an array of numbers looking for min and max.
  // should subtract the min from the max .
  if(arr.every((num) => typeof num === 'number')) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return  max - min;
  }else {
    return arr;
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
//  needs to iterate through a string replacing each letter with it's morse code equivalent.
// spaces need to be replaced with a slash
const words = message.split(' ')
// looking at each word 
const morse = words.map((word) => 
word 
.split('')
.map((char) => dictionary[char.toUpperCase()])
.join(' ')
);
  return morse.join(' ');
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
