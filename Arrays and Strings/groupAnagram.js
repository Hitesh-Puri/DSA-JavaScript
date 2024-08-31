/**
 * Group Anagrams
  - Approach:

  -> Use a hashmap to group strings by their sorted version.
 */

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // console.log('map :>> ', map);
    const sortedStr = str.split('').sort().join('');
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


// Write a function to check for anagrams?

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const str1NoSpaces = str1.replace(/\s/g, '').toLowerCase();
  const str2NoSpaces = str2.replace(/\s/g, '').toLowerCase();

  // Sort the characters in both strings
  const sortedStr1 = str1NoSpaces.split('').sort().join('');
  const sortedStr2 = str2NoSpaces.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}