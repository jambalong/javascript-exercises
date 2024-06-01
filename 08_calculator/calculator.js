const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, number) => {
    return product * number;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num == 0) return 1;
  
  let factorial = 1;
  let factors = num;

  for (let i = 0; i < num; i++) {
    factorial *= factors;
    factors--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
