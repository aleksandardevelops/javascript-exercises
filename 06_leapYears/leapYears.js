// const leapYears = function (arg1) {
//   if (arg1 % 4 === 0 && arg1 % 100 === 0 && arg1 % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const leapYears = function (arg1) {
  let divisibleByFour = arg1 % 4 === 0;
  let isCentury = arg1 % 100 === 0;
  let isYearDivisibleByFourIsCentury = arg1 % 400 === 0;

  if (divisibleByFour && !isCentury) {
    return true;
  } else if (isYearDivisibleByFourIsCentury) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

// npm test leapYears.spec.js
