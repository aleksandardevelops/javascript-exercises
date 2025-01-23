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
  if (arg1 < 0 || arg2 < 0) {
    return 'ERROR';
  }
  if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) {
    return 'ERROR';
  }
  if (isNaN(arg1) || isNaN(arg2)) {
    return 'ERROR';
  }
  return agregator;
};

// Do not edit below this line
module.exports = sumAll;
