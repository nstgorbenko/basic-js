const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {repeatTimes,
         separator = '+',
         addition,
         additionRepeatTimes = addition ? 1 : 0,
         additionSeparator = '|'} = options;

  const extra = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

  return Array(repeatTimes).fill(`${String(str)}${extra}`).join(separator);
};
  