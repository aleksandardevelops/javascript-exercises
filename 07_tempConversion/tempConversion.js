const convertToCelsius = function (arg) {
  let temperature = ((arg - 32) * 5) / 9;
  temperature.toFixed(1);
  return Number(temperature.toFixed(1));
};

const convertToFahrenheit = function () {};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// npm test tempConversion.spec.js
