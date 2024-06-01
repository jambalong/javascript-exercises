const fibonacci = function(iteration) {
  iteration = parseInt(iteration);

  if (iteration === 0) {
    return 0;
  }
  if (iteration === 1) {
    return 1;
  }
  if (iteration < 0) {
    return 'OOPS';
  }
  
  let fibonacciFirst = 0;
  let fibonacciSecond = 1;

  for (let i = 2; i <= iteration; i++) {
    let fibonacciTotal = fibonacciFirst + fibonacciSecond;
    fibonacciFirst = fibonacciSecond;
    fibonacciSecond = fibonacciTotal;
  }

  return fibonacciSecond;
};

// Do not edit below this line
module.exports = fibonacci;
