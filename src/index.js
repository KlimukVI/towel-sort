
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) {return [];}
  return matrix.reduce((sum, current, index) => index % 2 === 0 ? sum.concat(current) : sum.concat(current.reverse()) );
}
