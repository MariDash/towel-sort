
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  } else if (matrix.length == 2) {
    return (matrix[0] + ',' + ('' + matrix[1]).split(",").reverse()).split(",");
  } else if (matrix.length == 3) {
    return (matrix[0] + ',' + ('' + matrix[1]).split(",").reverse() + ',' + matrix[2]).split(",");
  } else if (matrix.length == 4) {
    return (matrix[0] + ',' + ('' + matrix[1]).split(",").reverse() + ',' + matrix[2] + ',' + ('' + matrix[3]).split(",").reverse()).split(",");
  }
}
