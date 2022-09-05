const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let repeatingString = "";
    if (options.separator === undefined) {
        options.separator = "+";
    } else if (typeof options.separator !== "string") {
        options.separator = `${options.separator}`.toUpperCase();
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = "|";
    } else if (typeof options.additionSeparator !== "string") {
        options.additionSeparator = `${options.additionSeparator}`;
    }
    if (!options.repeatTimes) {
        return str + options.addition;
    }
    for (let i = 1; i <= options.repeatTimes; i++) {
        repeatingString += str;
        if (!options.additionRepeatTimes && options.addition !== undefined) {
            repeatingString += options.addition;
        }
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
            repeatingString += options.addition;
            if (j !== options.additionRepeatTimes) {
                repeatingString += options.additionSeparator;
            }
        }
        if (i !== options.repeatTimes) {
            repeatingString += options.separator;
        }
    }
    return repeatingString;
}


module.exports = {
    repeater
};
