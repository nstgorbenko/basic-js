const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  let finalArray = [...arr];

  for (let i = 0; i < finalArray.length; i++) {
    switch (finalArray[i]) {
      case ('--discard-next'):
        delete finalArray[i];
        delete finalArray[i + 1];
        continue;
      case ('--discard-prev'):
        delete finalArray[i];
        delete finalArray[i - 1];
        continue;
      case ('--double-next'):
        delete finalArray[i];
        finalArray.splice(i + 1, 0, finalArray[i + 1]);
        continue;
      case ('--double-prev'):
        delete finalArray[i];
        finalArray.splice(i, 0, finalArray[i - 1]);
        continue;
    }
  } 
  return finalArray.filter((item) => item !== undefined);
};