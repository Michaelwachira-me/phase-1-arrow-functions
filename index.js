const returnFive = () => 5;

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const modulo = (a, b) => a % b;

const isOdd = (num) => num % 2 !== 0;

const isEven = (num) => num % 2 === 0;

const isGreaterThan = (a, b) => a > b;

const isLessThan = (a, b) => a < b;

const isEqual = (a, b) => a === b;

const isTruthy = (value) => !!value;

const isFalsy = (value) => !value;

const isVowel = (char) => 'aeiouAEIOU'.includes(char);

const isConsonant = (char) => !'aeiouAEIOU'.includes(char) && char.match(/[a-z]/i);

const square = (num) => num * num;

const add = (a, b) => a + b;

module.exports = {
  returnFive,
  sum,
  subtract,
  multiply,
  divide,
  modulo,
  isOdd,
  isEven,
  isGreaterThan,
  isLessThan,
  isEqual,
  isTruthy,
  isFalsy,
  isVowel,
  isConsonant,
  square,
  add,
};