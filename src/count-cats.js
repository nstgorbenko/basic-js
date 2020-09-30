const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((totalCats, currentPlace) => {
    const currentPlaceCats = currentPlace.filter((item) => item === '^^').length;
    
    return totalCats + currentPlaceCats;
  }, 0);
};
