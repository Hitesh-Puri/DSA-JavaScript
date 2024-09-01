/**
 * Find the maximum sum of a subarray using Kadane’s Algorithm
 */

function maxSubSumArray(arr) {
    let maxSum = arr[0]
    let currSum = arr[0];

    for(let i=1;i<arr.length;i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

const arr = [5, -3, 7, 8, -9, 10, -11, 12, 13, -14, 15]

console.log(maxSubSumArray(arr)) // Output: 33