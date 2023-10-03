const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(string) {
   //rearrange the strings in the array by their length
   return string.sort((a,b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
    //Establish an array 
   let arr = []
    //Iterate over the word
    for(let i = 1; i <= word.length; i++) {
      //were taking out the start of each word using the index and adding it to the end using the index to take more of the word to add to the end
      //push to arr
      arr.push(word.slice(i) + word.slice(0, i))
    }
    //return arr
    return arr
  
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //check if the array is empty, if it is return an empty array
  if(numbers.length === 0 || numbers === '') {
    return []
  }
  //iterate over numbers array and checks if it is a string, if so returns the original array
  for(let num of numbers) {
    if(typeof num === 'string') {
      return numbers
    }
  }
  //return the difference between the max an min of the numbers array
  return Math.max(...numbers) - Math.min(...numbers)
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
  //created newStr variable to hold our morse code message
  let newStr = '';
  // Iterate through each character of the message 
  for (let char of message.toUpperCase()) {
    // create a morse variable that holds the morse translation for that char
    const morse = dictionary[char];
    // If a matching Morse code is found, add it to the translated string
    if (morse) {

      newStr += morse + ' ';

    } 
  }
  // Remove the whitespaces
  return newStr.trim();
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
