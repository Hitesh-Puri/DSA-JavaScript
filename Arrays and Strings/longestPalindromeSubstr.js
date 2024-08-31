/**
 * Longest Palindromic Substring
  - Approach:

  -> Expand around the center for each possible center in the string.
 */

function longestPalindrome(s) {  
  let start = 0;
  let end = 0;
  let n = s.length;

  const expandAroundCenter = (s, left, right) => {
    // console.log('left :>> ', left);
    // console.log('right :>> ', right);
    // console.log('string :>> ', s);
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    // console.log('right - left - 1 :>> ', right - left - 1);
    return right - left - 1;
  };

  for (let i = 0; i < n; i++) {
    // console.log('start :>> ', start);
    // console.log('end :>> ', end);
    let len1 = expandAroundCenter(s, i, i); // odd length palindrome
    let len2 = expandAroundCenter(s, i, i + 1); // even length palindrome

    let maxLength = Math.max(len1, len2);
    console.log('maxLength :>> ', maxLength);

    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return s.slice(start, end + 1);
}

console.log(longestPalindrome("golo")); // Output: olo

// Explaination:

/*
1.The function longestPalindrome takes a string s as input.

2.It initializes two variables, start and end, to keep track of the starting and ending indices of the longest palindromic substring found so far.

3.It defines an inner function expandAroundCenter that takes a string s, a left index left, and a right index right. This function expands around the center of the potential palindrome and returns the length of the palindrome.

4.The main loop iterates over each character in the input string s.

5.For each character, it calculates the lengths of potential palindromes with odd and even lengths by calling the expandAroundCenter function.

6.It then compares the lengths and updates the start and end indices if a longer palindrome is found.

7.After iterating through all characters, the function returns the longest palindromic substring using s.slice(start, end + 1).
*/

/********************************/
// Palindrome are those strings which when read from front side or from back side, their meaning wording remains the same.
// Find if the string is Palindrome or not

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

console.log(isPalindrome("anana")); // Output: true

// How to check from Array of strings?
const arr = ["level", "hello", "world", "anana"];
console.log(arr.filter(isPalindrome)); // Output: ["level", "anana"]
