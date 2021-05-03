// Challenge can be found here: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  const matchingIntegers = Array.from({length: integer - 2}, (_, i) => i + 2)
    .filter(possibleNumber => (integer / possibleNumber) % 1 === 0);
  return matchingIntegers.length === 0 ? `${integer} is prime` : matchingIntegers;
};