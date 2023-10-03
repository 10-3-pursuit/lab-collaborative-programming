const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Sorts an array of strings by their length in ascending order.
 * @param {String[]} arr - An array of strings.
 * @returns {String[]} An array of strings sorted by length.
 */
function sortByStringLength(arr) {
  // Use the sort method with a custom comparison function
  // to sort the array in ascending order of string length.
  return arr.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} str - A string.
 * @returns {String[]} An array of strings representing scrolled words.
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  let result = [];

  // Iterate through the string to create scrolled words.
  for (let i = 1; i <= str.length; i++) {
    let slicedWord = str.slice(i) + str.slice(0, i);
    result.push(slicedWord);
  }

  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array.
 * @param {Number[]} num - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(num) {
  if (num.length === 0) {
    return [];
  }

  // Check if all elements in the array are numbers.
  for (let n of num) {
    if (typeof n !== 'number') {
      return num;
    }
  }

  // Find the largest and smallest numbers in the array
  const largest = Math.max(...num);
  const smallest = Math.min(...num);

  // Calculate the difference between the largest and smallest numbers.
  return largest - smallest;
}

/**
 * Returns the message translated into Morse code.
 * @param {String} msg - A string to translate.
 * @param {Object} obj - A Morse code dictionary.
 * @returns {String} The message in Morse code.
 * Example: "A new month"
 * ".- / -. . .-- / -- --- -. - ...."
 */
function morseCodeTranslator(msg, obj) {
  let result = "";

  // Split the message into words.
  const words = msg.split(" ");

  // Iterate through each word.
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toUpperCase();

    // Iterate through each letter in the word.
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      // Look up the Morse code for the character in the dictionary,
      // or keep the character as is if not found.
      const morseCode = obj[char] || char;
      result += morseCode;

      // Add a space between characters within a word.
      if (j < word.length - 1) {
        result += " ";
      }
    }

    // Add a " / " between words.
    if (i < words.length - 1) {
      result += " / ";
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
