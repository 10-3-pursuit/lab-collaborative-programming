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
    //push it to array
    arr.push(word.slice(i) + word.slice(0, i))
  }
  //return the new array
  return arr
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  // check if the array is empty and returns empty array if it is
  if(numbers.length=== 0){
    return [];
  }
  // iterate through array numbers and checks if it is a string if so returns the original array
  for(let num of numbers){
    if(typeof num === "string"){
      return numbers;
    }
  }
// if it is array of numbers and pass. then finds the max and min of the munbers array and subtracks them
return Math.max(...numbers)- Math.min(...numbers);
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
  // declare empty string to add the morse code to
  let morseMessage = '';
  // go through each character of message uppercased to match the dictionary later
  for (const char of message.toUpperCase()) {
    const morse =dictionary[char];
    // if the character is in the dictionary add the translated character to the morese message
    if(morse){
      morseMessage += morse+ " " ;
    }
  }
  // takes off the last space of the morse message to stop errors
  morseMessage = morseMessage.trim();
  return morseMessage;
  }

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
