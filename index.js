const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */

/**
 we want to compare the words length to see which word is shorter and sort the
  shorter word before the longer */
function sortByStringLength(String) {
  return String.sort((a, b) => a.length - b.length) 
}

/**
 * Returns an array of the word in all scrolling positions. 
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 *///we want to iterate over the word to cycle each element to the end of the word to get each version of the word into the array.
 function textScroller(word) {
  const arr = [];
  for (let i = 0; i < word.length; i++){
   arr.push(word.slice(i + 1) + word.slice(0, i + 1))
  }
return arr
}


//we need make a comparison to get diffence between small of bigger and return
/** check if small num array is empty is so return, then check if all elements are      numbers. find the minimum and max values then calculate it and return it                                                                         
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 *//**The function is named betweenExtremes and takes an array of numbers
(numbers) as a parameter. */
function betweenExtremes(numbers) {
  /**check for empty array */
  if (numbers.length === 0) {
    /** It returns either a number representing the difference between the
largest and smallest numbers or the original array
This checks if the array is empty. If it is, the function returns the
original empty array.Check if All Elements are Numbers:*/ 
    return numbers;
  }
  /**
This checks if the array is empty. If it is, the function returns the
original empty array.Check if All Elements are Numbers:*/
  const allNumbers = numbers.every((num) => typeof num === 'number');
  if (!allNumbers) {
    return numbers;
  }
/**The spread (...) operator is used to pass the elements of the array as
arguments to Math.max and Math.min functions, finding the maximum and
minimum values. */
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
/**Calculate the Difference:
The difference between the maximum and minimum values is calculated.
The function returns the calculated difference.Return the Result: */
const difference = maxNumber - minNumber;
return difference;
}
 

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
//we want to transform message to all Capitals 
//convert message to fit into what it needs or what we want to reference it to. refrence to current character. make comparison, keep if it fits into whats needed keep it there. if not keep separated.  combine results and return them
function morseCodeTranslator(message, dictionary) {
/**Uppercase the Message:
const uppercasedMessage = message.toUpperCase();: Converts the input
message to uppercase to ensure that the Morse code lookup is
case-insensitive.*/
  const uppercasedMessage = message.toUpperCase();
  /**Translate to Morse Code:
const morseCodeArray = Array.from(uppercasedMessage, (char) =>
{...});: Converts each character in the message to its Morse code
representation using the provided dictionary.
The Array.from method is used to iterate over each character in the
uppercasedMessage, and a callback function is applied to each
character.*/
    const morseCodeArray = Array.from(uppercasedMessage, (char) => {
      const morseCode = dictionary[char];
      /**Filter out Spaces:
.filter(char => char !== ' ');: Removes spaces from the Morse code
array. This is done to ensure that only valid Morse code
representations are included.
 */return morseCode !== undefined ? morseCode : char;
  }).filter(char => char !== ' ');
  /**Join Morse Code Elements:
const morseCodeResult = morseCodeArray.join(' ');: Joins the Morse
code representations into a single string, separating each Morse code
with a space.
 */
    const morseCodeResult = morseCodeArray.join(' ');
 /**Return Result:
return morseCodeResult;: Returns the final Morse code representation
of the input message. */
return morseCodeResult;
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
