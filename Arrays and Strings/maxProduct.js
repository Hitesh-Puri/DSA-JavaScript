/**
 * Find the Maximum Product of Three Numbers
  - Approach:
  -> Sort the array.
  -> The maximum product can be obtained by either:
    - Multiplying the three largest numbers.
    - Multiplying the two smallest numbers (if they are negative) with the largest number.
 */

function maximumProduct(arr) {
    arr.sort((a,b) => a-b); // In the ascending order

    const n = arr.length;
    return Math.max(arr[0] * arr[1] * arr[n-1], arr[n-1] * arr[n-2] * arr[n-3])
}

console.log(maximumProduct([-10, -5, 2, 6, -3, 5])); //output: 300