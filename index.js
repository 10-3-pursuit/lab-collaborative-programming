const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 1. reiterate the problem words
2. ask clarifying questions
3. create examples starting with the simplest case (ex: if the function takes a string as a param, simplest case would be an empty string
4. write the function signature
5. write pseudoCode inside the function
   - one line of pseudo code for one line of actual code 
6. write your code 

7. write a test (tests are the examples we used in step 3)

8. repeat 6 and 7 until done
 */

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
  //Add the parameter to the function declaration because it indicates that there is a paramater with the value of an array of strings
  //Return a sorted array of strings based on the length of the string
  //check if every element in the array is a string
  //Use the native array sort method to sort out the length of the strings in the array

  return array.sort((a, b) => a.length - b.length);
}

// sortByStringLength([
//   "a",
//   5,
//   "brand",
//   "new",
//   "month",
//   "to",
//   "celebrate",
//   "the",
//   "passage",
//   "of",
//   "time",
// ]);
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  //Add a parameter to the function declaration
  //Because a string is immutable, turn the string into an array using the .split() method in order to manipulate the string
  //eventually use the join method to turn the array back into a string?
  //maybe start with an empty array to push the final scrambled string into

  const wordArray = word.split(""); // Convert the word to an array of characters
  const scrolledWords = [];

  for (let i = 0; i < wordArray.length; i++) {
    const scrolledArray = [...wordArray]; // Create a copy of the original array
    for (let j = 0; j <= i; j++) {
      const char = scrolledArray.shift(); // Remove the first character
      scrolledArray.push(char); // Append it to the end
    }
    const scrolledWord = scrolledArray.join(""); // Join the array back into a string
    scrolledWords.push(scrolledWord); // Push the scrolled word into the result array
  }

  return scrolledWords;
}

// textScroller("Hello");

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //Add the parameter to the function declaration
  //grab the largest and smallest number in the array
  //subtract the 2 from each other and return that number
  //Math.max() and Math.min() or we could use the .sort() method

  if (numbers.every((num) => typeof num === "number")) {
    const minNum = Math.min(...numbers);
    const maxNum = Math.max(...numbers);
    return maxNum - minNum;
  } else {
    return numbers;
  }
}

// betweenExtremes([1, "clock", 5, 10]);

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
// Define a function called morseCodeTranslator that takes two parameters:
// message (the input text to be translated) and dictionary (a mapping of characters to Morse code).
function morseCodeTranslator(message, dictionary) {
  // Create a variable 'result' to store the final translated message.
  let result = "";

  // Split the input message into an array of words using spaces as separators.
  const messageArray = message.split(" ");

  // Iterate through each word in the messageArray.
  for (let i = 0; i < messageArray.length; i++) {
    // Get the current word in the iteration.
    const word = messageArray[i];

    // Split the current word into an array of characters.
    const characters = word.split("");

    // Create an array called 'code' to store the Morse code for each character in the word.
    const code = characters.map(
      (character) =>
        // Convert the current character to uppercase and look up its Morse code
        // in the provided 'dictionary'.
        dictionary[character.toUpperCase()]
    );

    // Join the Morse code for the characters in the word with spaces to form a word in Morse code.
    const wordInMorse = code.join(" ");

    // Add the translated word to the 'result' with a space to separate words.
    result += wordInMorse + " ";
  }

  // Remove the trailing space and return the final translated message.
  return result.trim();
}

morseCodeTranslator("Hello", morseCodeDictionary);

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
