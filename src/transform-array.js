const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let transformArray = [...arr];
    transformArray.map((t, index, array) => {
        switch (t) {
            case "--discard-prev":
                array[index] = "delete";
                array[index - 1] = "delete";
                break;
            case "--discard-next":
                array[index] = "delete";
                array[index + 1] = "delete";
                break;
            case "--double-next":
                if (array[index + 1]) {
                    array[index] = array[index + 1];
                } else {
                    array[index] = "delete";
                }
                break;
            case "--double-prev":
                if (array[index - 1]) {
                    array[index] = array[index - 1];
                } else {
                    array[index] = "delete";
                }
                break;
            default:
                return t;
        }
    });
    return transformArray.filter((t) => t !== "delete");
}


module.exports = {
    transform
};
