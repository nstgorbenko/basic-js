const CustomError = require("../extensions/custom-error");

const SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns * SECONDS_IN_HOUR / turnsSpeed);

  return ({turns, seconds});
};
 