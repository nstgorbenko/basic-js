const CustomError = require("../extensions/custom-error");

const SEASONS = ['winter', 'spring', 'summer', 'autumn'];

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Unknown date type');
  }

  const monthOrdinal = date.getMonth();
  
  return SEASONS[Math.floor((monthOrdinal + 1) % 12 / 3)];
};
 