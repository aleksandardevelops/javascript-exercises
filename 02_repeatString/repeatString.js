const repeatString = function (string, num) {
  let userSaying = '';
  if (num < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < num; i++) {
    userSaying += string;
  }
  return userSaying;
};

// Do not edit below this line
module.exports = repeatString;
