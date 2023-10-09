const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
  return arr.slice().sort((a,b) => a.length - b.length)
     const words = [`apple`,`banana`, `pear`, `wow`]
      const sorted = sortByStringLength(words)
       
    console.log(sorted)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const scrollingPositions = [];
  const len = word.length;

  for (let i = 0; i < len; i++) {
    const rotatedWord = word.slice(i) + word.slice(0, i);
    scrollingPositions.push(rotatedWord);
  }

  return scrollingPositions;
}

const word = "Hello";
const scrollingPositions = textScroller(word);
console.log(scrollingPositions);
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers.length === 0) {
    
    return 0;
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max - min;
}

const numbers = [3, 9, 2, 7, 5];
const difference = betweenExtremes(numbers);
console.log(difference); 


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  if(typeof dictionary === `object` && Array.isArray(dictionary.numbers)){
  const numbersArray = dictionary.numbers

if(numbersArray.length === 0){
  return null
}

const min = Math.min(...numbersArray)
const max = Math.max(...numbersArray)

return max - min

}else{
  return null
}
}

const message = "Calculating difference hold the fuck on"
const result = morseCodeTranslator(message, morseCodeDictionary)
if(result!== null){
  console.log(`${message}: ${result}`)
}else{
  console.log("Invalid data/empty array")
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
