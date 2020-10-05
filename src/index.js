
// You should implement your task here.

module.exports = function towelSort (matrix) {
        if (arguments.length === 0) {
            return []
        } else {
            let newArr = matrix;
            for (let i = 0; i < newArr.length; i++) {
            if (i % 2 !== 0) {
                newArr[i].sort((a , b) => b - a);
            }
            }
            return newArr.flat();
        }
}
