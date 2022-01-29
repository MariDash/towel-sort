// You should implement your task here.

const { re } = require("semver");

module.exports = function towelSort(matrix) {
    let result = [];

    if (!matrix || !matrix.length) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let ind;
            for (let j = 0; j < matrix[i].length; j++) {
                if (i % 2 === 0) {
                    ind = j;
                    result.push(matrix[i][ind]);
                } else {
                    ind = matrix[i].length - 1 - j;
                    result.push(matrix[i][ind]);
                }
            }
        }
        return result;
    }
};
