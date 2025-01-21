const sumAll = function (arg1, arg2) {
  let agregator = 0;
  if (arg1 < arg2) {
    for (let i = arg1; i <= arg2; i++) {
      agregator += i;
    }
  } else {
    for (let i = arg1; i >= arg2; i--) {
      agregator += i;
    }
  }

  return agregator;
};

// Do not edit below this line
module.exports = sumAll;
