/**
 * Rotate Image
  - Approach:

  -> First, transpose the matrix by swapping matrix[i][j] with matrix[j][i].
  -> Then, reverse each row.
 */

function rotateImage(matrix) {
  const n = matrix.length;

//   console.log('original matrix :>> ', matrix);

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

//   console.log('transposed matrix :>> ', matrix);

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

console.log(rotateImage([[1,2,3], [7,8,6], [9,10,5]]))

// What is the time and space complexity?
// Time complexity: O(n^2) - We have nested loops to traverse the matrix.