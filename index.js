const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */

// create a parameter (arr) in order to use .sort() method to filter out individual strings inside the array 
function sortByStringLength(arr) {

// next we will iterate over the array, in order to find the length of each word, this will be followed by the arrow function which will include .length method 
//this will all be returned at once, since the sort() method will organize the data appropriately to our conditions 

  return arr.sort((a,b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller() {
  
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes() {}

/**

 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */


// we want to accept a parameter in morsecode, and return the translation
// to do this we'll need to match the values given with the keys that correspond to those values in the dictionary object 
// afterwards we'll recreate the message with those key strings and return the decrypted message 

function morseCodeTranslator(decryptedMessage, morseCodeDictionary) {
  // initialize a variable for encrypted message 
  let encryptedMessage = "";

  // initialize a variable called (splitWords)) and we'll use split() method to break apart each element of the message string 
  let splitWords = decryptedMessage.split(" "); 

  // create a for-of loop to iterate through each element of the splitWords array 
    for (const word of splitWords) {
      //create another for-of loop to iterate through each element of word
      for (const letter of word) {
        //
        let morseCharacter = morseCodeDictionary[letter];
        if (morseCharacter) {
          encryptedMessage += morseCharacter
        }
      }
    }

  return encryptedMessage; 
}
// console.log(morseCodeDictionary); 

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
