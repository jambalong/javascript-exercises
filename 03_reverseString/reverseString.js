const reverseString = function(string) {
  let splitString = string.split("");
  let reversedSplitString = splitString.reverse();
  return reversedSplitString.join('');
};

// Do not edit below this line
module.exports = reverseString;

