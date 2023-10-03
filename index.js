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
// Add the parameter "word" as indicated above
function textScroller(word) {

  // for each loop, we want to remove the last character and place it in the front which we will then push into the array
  // initialize an empty array to store our iterations called "scrolledList"
  let scrolledList = []
  
  // Based on the length of the string that's going to indicate the amount of scrolling positions 
  // create a for-loop and iterate over each index of the given string
  for (let i = 0; i < word.length ; i++){
    // we want to use the slice method in order to remove the last element 
    // initialize a variable that stores an array of all string elements, we need this to use array mutation later on
    let newWord = word.slice(i) + word.slice(0, i)
    scrolledList.push(newWord)
  }
  // the code was not giving us the expected outcome in the end so we must change the last element to move it to the front
  // initialize another variable that will allow us to use .shift()
  let final = scrolledList.shift()
  // we must add that change to the array in order to get the expected outcome we desire
  scrolledList.push(final)

  // return the scrolledList in the end
  return scrolledList
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  //initialize a min and max variable...in order to to keep track of the smallest and largest number in the loop.
  let max = numbers[0];
  let min = numbers[0];
  
  //iterate the array of numbers and check if we have any non-integers. we can do this by looping through the numbers array and using "typeof".
  for(let num of numbers){
    if(typeof num != "number"){
      return numbers;
    }
  // we create a conditional for min and max variables, so that our current min is greater than numbers @ num. Our min will update to that num. The same is done with our max but reverse. 
    if(min > num){
      min = num;
    }
    if(max < num){
      max = num;
    }
  }
  // then we subtract the min from max to get the difference, then return the output.
return max - min;

};

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

function morseCodeTranslator(message, dictionary) {
  //break the message into individual words first
  const morseWords = []
  // split the message into words using spaces as separators
  const words = message.split(' ')
  //time to loop through each word in our message
  for (const word of words) {
    // now, we'll store the Morse code for each character in this word
    const morseChars = []
    //time to check each character in the word
    for (const char of word) {
      //we'll use the dictionary to get the Morse code in uppercase
      const morseCode = dictionary[char.toUpperCase()]
      //if there's a Morse code for the character, let's add it
      if (morseCode) {
        morseChars.push(morseCode)
      }
    }
    //join all the Morse code characters for this word with spaces
    const morseWord = morseChars.join(' ')
    // add our Morse code word to the result array
    morseWords.push(morseWord)
  }
  // join all the morse code words with spaces and return the result
  return morseWords.join(' ')
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
