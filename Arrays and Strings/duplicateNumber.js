/**
 * Find the Duplicate Number
  - Problem: Given an array of integers containing n + 1 integers where each integer is in the range [1, n] inclusive, prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
  Example:
  Input: [1,3,4,2,2]
  Output: 2
  - Concepts: Floyd's Tortoise and Hare (Cycle Detection), Binary Search.
 */

function findDuplicate(arr) {
  // Step 1: Initialize slow and fast pointers
  let slow = arr[0];
  let fast = arr[0];

  // Step 2: Find the intersection point of the two pointers
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[arr[fast]];
  }

  // Step 3: Find the duplicate number by resetting slow pointer to the beginning and moving it at the same speed as fast pointer
  slow = arr[0];
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  // Step 4: Return the duplicate number
  return slow;
}

const input = [1, 3, 4, 2, 2, 3, 4];

console.log(findDuplicate(input)); // Output: 2

// Explanation: The problem is solved using Floyd's Tortoise and Hare algorithm. We detect a cycle, then find the entry point of the cycle, which is the duplicate number.

// Write a program to find all the duplicate numbers in an array

function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const index = Math.abs(arr[i]) - 1;

    if (arr[index] < 0) {
      duplicates.push(Math.abs(arr[i]));
    } else {
      arr[index] = -arr[index];
    }
  }

  return duplicates;
}

console.log(findDuplicates([1,2,4,1,5,2,7,5])) // Output: [1,2,5]


function duplicateNums(arr){
  let duplicate = [];

  const arrSort = arr.sort((a,b) => a-b);
  for(let i = 0; i < arrSort.length; i++){
    if(arrSort[i] === arrSort[i-1]){
      duplicate.push(arrSort[i]);
    }
  }
  return duplicate;
}

console.log(duplicateNums([1,2,4,1,5,2,7,5])) // Output: [1,2,5]
