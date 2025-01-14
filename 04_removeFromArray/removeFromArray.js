const removeFromArray = function (array, ...num) {
  for (const arg of num) {
    const index = array.indexOf(arg);
    array.splice(index, 1);
  }
  return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
