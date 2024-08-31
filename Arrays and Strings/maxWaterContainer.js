/**
 * Container With Most Water
  - Problem: Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.
  Example:
  Input: [1,8,6,2,5,4,8,3,7]
  Output: 49
  - Concepts: Two pointers.
 */

function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // console.log('left heights :>> ', height[left]);
    // console.log('right height :>> ', height[right]);
    // console.log('left :>> ', left);
    // console.log('right :>> ', right);
    const area = Math.min(height[left], height[right]) * (right - left);
    // console.log('area :>> ', area);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(input)); // Output: 49


// Visualize the codw with me by the following solution.

// Solution:

// 1. Initialize two pointers, left and right, at the start and end of the array, respectively.

// 2. Calculate the area of the current pair of lines (left and right) using the minimum height of the two.

// 3. Update the maximum area if the calculated area is greater than the current maximum area.

// 4. If the height of the left line is less than the height of the right line, increment the left pointer. Otherwise, decrement the right pointer.

// 5. Repeat steps 2-4 until the left pointer is less than or equal to the right pointer.

// The time complexity of this solution is O(n), where n is the length of the input array. This is because we iterate through the array once. The space complexity is O(1), as we only use a constant amount of additional space to store the maximum area and the two pointers.