const morseCodeDictionary = require("./morse-code-dictionary.json");

const numbers = [3, 8, 44, -33, 20, 400, 6, 16, 2, 2, 2, 200];
console.log(betweenExtremes(numbers));

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return 0;
    }
  });
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  // Make an array of each version of the word in all scrolling positions
  // Example: "Apple" -> [ 'eAppl', 'leApp' ]
  // Map -> ()
  // .slice(0), .slice(0, length of word - 1), .slice(0, length of word - 2), ... , .slice(0, 1)
    // let counter = 0;
  
  // substring(0), substring(0, word.length - 1)
  let wordsArr = word.split(""); // 'A', 'p', ..., 'l', 'e'
  // console.log(wordsArr);
  let counter = 0;
  const words = wordsArr.map((arg) => {
    word.slice(counter); // 1. gets a portion of the word
    // 2. get the converse
    // substring(start, counter)
  });
  // word.substring(0)
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  const reducedVal = numbers.reduce((acc, curr) => acc + curr, 0);
  // console.log(typeof reducedVal);
  // get Math.max and Math.min results

  if (numbers.length === 0 && typeof numbers == 'string') { // empty string
    return [];
  } else if (typeof reducedVal == 'number') {
    const maxVal = Math.max(...numbers);
    const minVal = Math.min(...numbers);
    console.log("numbers: " + numbers);
    console.log("difference: " + (maxVal - minVal));
    return [maxVal - minVal];
  } else {
    console.log(numbers);
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
  outArr = [];
  const wordsArr = message.split(" ");
  console.log(wordsArr);

  for (let word of wordsArr) {
    const outCode = morseCodeDictionary.find((element) => element == word);
    outArr.push(outCode);
  }

  return outArr.join(" / ");
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
