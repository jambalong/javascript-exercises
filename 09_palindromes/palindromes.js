const palindromes = function (string) {

  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890'

  const cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumeric.includes(character))
    .join('');

  const reverseString = cleanString.split('').reverse().join('');

  return reverseString == cleanString;
};

// Do not edit below this line
module.exports = palindromes;
