const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
// Return an array of all words sorted by length
// Condensed into one code using .sort and .length in the same line.
//  ✕ should sort the strings by size from smallest to largest (2 ms)
//  ✕ should return the original array if any element is not a string
   return words.sort((a, b) => a.length - b.length)
}

// It will compare the first two vaules and if a is shorter then b it will come out first.
// It will check which one is the longest, after .sort will sort it out.
// .Sort method is used to sort out the array based on the length in each string.

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
 // Should have all the combinations
 // Should scroll in order
 // Should return an empty array if the input is an empty string
 
  const scrolledWords = []
  const wordLength = word.length;

// .Slice returns a shallow copy of the whole array into a new array.
// Generate all combinations of scrolled words.
   for (let i = 0; i < wordLength; i++) {
    // create a scrolled word by slicing the word and reordering its parts.
     const scrolledWord = word.slice(i) + word.slice(0, i);
     //Add the scrolled word to the array
     scrolledWords.push(scrolledWord)
   }

//.shift removes the first element from an array and returns that removed element
//.push adds new items to the end of an array
// Removes the first element from array, then stores it in 'words' variable
   let words = scrolledWords.shift()
// push the removed element back to the end of the array
   scrolledWords.push(words)

   return scrolledWords;
 }

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
// ✕ Should return an empty array if the input is an empty string (1 ms)
// ✕ Should return the original array if all the elements are not all numbers
if (!Array.isArray(numbers) || numbers.length === 0 || numbers.some(num => typeof num !== 'number')) {
  return numbers;
}
// The some() method checks if any array elements pass a test (provided as a callback function).
// The isArray() method returns true if an object is an array, otherwise false.
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
// Use .min and .max to get largest and smallest.
  return maxNumber - minNumber;
}



/**
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

function morseCodeTranslator(message, dictionary) {

  // CHECK IF MESSAGE IS A STRING AND THE DICTIONARY IS A OBJECT
  if (typeof message !== 'string' || typeof dictionary !== 'object' || dictionary === null) {
    
   return '';
  }
  // INITIALIZE A EMPTY ARRAY TO STORE TRANSLATED LETTERS
  let resultLetters = [];

  // CONVERT THE MESSAGE TO UPPERCASE
  message = message.toUpperCase();

  // SPLIT THE MESSAGE INTO AN ARRAY OF WORDS
  let words = message.split(' ');

  // ITERATE OVER EACH WORD IN THE ARRAY
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // ITERATE OVER EACH CHARACTER IN THE WORD
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      
      // ADD THE TRANSLATED LETTER TO THE RESULTLETTERS ARRAY BY MATCHING THE LETTER WITH THE DICTIONARY
      resultLetters.push(dictionary[letter] || letter);
    }
  }

  // JOIN THE ARRAY OF TRANSLATED LETTERS INTO A STRING SEPARATED BY A SPACE
  return resultLetters.join(' ');
}




module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
