
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  } else {
    return (matrix[0] + ',' + ('' + matrix[1]).split(",").reverse() + ',' + matrix[2]).split(",");
  }
}
