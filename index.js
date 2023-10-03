const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
  return arr.sort((a,b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  // Initialize a variable that will collect the result
  let result = [];

  // Loop through the string
  for(let i = 1; i <= str.length; i++){
    let slicedWord = str.slice(i) + str.slice(0,i);
    //Push what we get into the result
    result.push(slicedWord);
  }

  //return the array
  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(num) {

  // Checking to see if there is an array of numbers 
  if(num.length === 0){
    return [];
  }
  // Iterating through numbers to make sure its an actual number
  for(let n of num){
    if(typeof n !== 'number'){
      return num;
    }
  }

  // Check for largest number in the array
  const largest = Math.max(...num)

  //Check for the smallest number in the array
  const smallest = Math.min(...num);

  // Subtract the largest and the smallest and return the number

  return largest - smallest;
}




/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

function morseCodeTranslator(msg, obj) {
  // Declare empty string
  let result = "";

  // Split words by space
  const words = msg.split(" ");

  // Iterate through each word
  for (let i = 0; i < words.length; i++) {
    // Convert to upper case
    const word = words[i].toUpperCase(); 
    // Iterate through each letter
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      // Check if the letter exists inside the object and returning it to morseCode
      const morseCode = obj[char] || char; 
      // Appending each translation into the result
      result += morseCode;

      // Adding a space between each letter
      if (j < word.length - 1) {
        result += " "; 
      }
    }
    // Adding a dash between each word
    if (i < words.length - 1) {
      result += " "; 
    }
  }
  return result;
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
