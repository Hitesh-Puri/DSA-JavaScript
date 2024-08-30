/**
 * 1. Longest Substring Without Repeating Characters
  - Problem: Given a string, find the length of the longest substring without repeating characters.
  Example:
  Input: "abcabcbb"
  Output: 3 (The answer is "abc", with the length of 3.)
  - Concepts: Sliding window, Hash map.
 */

function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }
    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

const Substring = "abcabcbbabc";

console.log(lengthOfLongestSubstring(Substring)); // Output: 3

// We use a sliding window approach, with a map to track the last index of each character. When a repeated character is found, we adjust the start position of the window.