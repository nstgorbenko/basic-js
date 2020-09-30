const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const FACTOR = 0.693;
const RATE = FACTOR / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (
    arguments.length === 0 ||
    typeof sampleActivity !== 'string' ||
    isNaN(parseInt(sampleActivity)) ||
    sampleActivity <= 0 ||
    sampleActivity > 15) {
      return false;
  }

  const activityValue = parseInt(sampleActivity);
  const age = Math.log(MODERN_ACTIVITY / activityValue) / RATE;

  return Math.ceil(age);
};
