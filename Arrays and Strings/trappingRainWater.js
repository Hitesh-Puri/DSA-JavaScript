/**
 *  Trapping Rain Water
  - Problem: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
  - Example:
  - Input: [0,1,0,2,1,0,1,3,2,1,2,1]
  - Output: 6
  -> Concepts: Two pointers, Dynamic Programming.
 */

function trapWater (height) {
    let left = 0; 
    let right = height.length - 1; 
    let maxLeft = 0; 
    let maxRight = 0; 
    let water = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
            right--;
        }
    }
    return water;
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6

// Explanation: The idea is to use two pointers, left and right, to iterate through the array from both ends. If the left pointer element is smaller or equal to the right pointer element, it means the left side of the array is higher than the current position. If it's higher, we update the maximum height seen so far (maxLeft) and calculate the water trapped. If not, we add the difference between the current maximum height and the left pointer element to the water trap height.

// If the right pointer element is smaller or equal to the left pointer element, it means the right side of the array is higher than the current position. If it's higher, we update the maximum height seen so far (maxRight) and calculate the water trapped. If not, we add the difference between the current maximum height and the right pointer element to the water. Finally, we return the total water trapped.