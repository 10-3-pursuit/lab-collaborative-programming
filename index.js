const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(stringArr) {
  //return an array of words sorted by length
  //initialize empty array
  //iterate through array of objects
  //check the length of each element
  //compare the lengths of each element
  //return an array of strings from shortest to longest
  let newArr 
  //sort converts whatever it looking at to a string 
 newArr = stringArr.sort((a,b) => {
  return a.length - b.length
  //.length is important here
 })
//  console.log(newArr)
 return newArr
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller() {}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numsArr) {
  //iterate through array
  //find largest number and smallest number in array
  //subtract smallest number from largest number
  //return difference
 for (let nums of numsArr){
  if(typeof nums !== 'number'){
  return numsArr
  } else if( typeof nums === 'number'){
    let max = Math.max(numsArr)
    let min = Math.min(numsArr)
    return max - min
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
function morseCodeTranslator() {}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
