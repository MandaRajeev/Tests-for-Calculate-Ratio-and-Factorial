const factorialOfNumbers = require("../factorial/index.js");
const ratioOfNumbers = require("../ratio/index.js");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfNumbers(a, b);
  const factorial = factorialOfNumbers(c);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
