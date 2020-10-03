
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) {return [];}
  let i = 0, matrixSort = [];
  while (i < matrix.length) {
    if (i % 2 === 0) {
      matrixSort = matrixSort.concat(matrix[i])
    } else {
      matrixSort = matrixSort.concat(matrix[i].reverse())
    }
    i++;
  }
  return matrixSort;
}
