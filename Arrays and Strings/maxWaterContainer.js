/**
 * 3. Container With Most Water
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
    const area = Math.min(height[left], height[right]) * (right - left);
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