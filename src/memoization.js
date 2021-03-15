/**
 
 * Memoization is an optimization technique used primarily to speed up computer programs 
   by storing the results of expensive function calls and returning the cached result 
   when the same inputs occur again.

 * Memoizing in simple terms means memorizing or storing in memory. 
   A memoized function is usually faster because if the function is called subsequently 
   with the previous value(s), then instead of executing the function, we would be fetching
   the result from the cache.

 * Memoize can be a special Higher Order Function

*/


// Let’s write a memoize utility function to keep track of our results:
const memoizeUtil = (func) => {
  let cache = {};
  return (input) => {
    if (cache[input]) {
      console.log('Fetching the result from the cache');
      return cache[input];
    } else {
      return cache[input] = func(input)
    }
  }
}


// 1) a simple pure function to get a value adding 10
const sum = n => n + 10;
const memoizeAdd = memoizeUtil(sum);
console.log(memoizeAdd(2));
console.log(memoizeAdd(3));
console.log(memoizeAdd(2));



// 2) creating memoized version of recursive function

const memoizeFactorial = memoizeUtil(factorial);

function factorial(n) {
  // termination case
  if (n < 0)
    throw new Error('Negative values not allowed');
  // base case
  if (n === 0 || n === 1)
    return 1;
  // recursive case
  return n * memoizeFactorial(n - 1); // this point to be noted
}

console.log(memoizeFactorial(2));
console.log(memoizeFactorial(3));
console.log(memoizeFactorial(4));


// Test Memoization by Performance
// We can run a timer by utilizing console.time() and console.timeEnd() and wrapping the desired function call between the two.Let’s take a look:

console.time('factorial test no memo');
factorial(6) // 720
console.timeEnd('factorial test no memo');
// factorial test no memo: 0.300ms

console.time('factorial test with memo');
memoizeFactorial(6) // 720
console.timeEnd('factorial test with memo');
// factorial test with memo: 0.191ms

console.time('factorial test no memo');
factorial(10) // 9.33262154439441e+157
console.timeEnd('factorial test no memo');
// factorial test no memo: 0.455ms

console.time('factorial test with memo');
memoizeFactorial(10) // 9.33262154439441e+157
console.timeEnd('factorial test with memo');
// factorial test with memo: 0.258ms