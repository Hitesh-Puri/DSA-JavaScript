/**
 * Find Length of last word in a string
 */

function lastWordLength(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Remove any leading or trailing spaces from the array

    words = words.filter(word => word.trim() !== '');

    // If the array is empty, return 0

    if (words.length === 0) {
        return 0;
    }

    // If the array has only one word, return its length
    if (words.length === 1) {
        return words[0].length;
    }
    
    // Return the length of the last word
    return words[words.length - 1].length;
}

let str = "   fly me   to     the   moonnnnnn      ";

console.log(lastWordLength(str));