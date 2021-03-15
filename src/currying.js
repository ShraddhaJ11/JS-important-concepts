/**
 * Currying refers to the process of transforming a function with multiple arity
   into the same function with less arity. The curried effect is achieved by binding some of the
   arguments to the first function invoke, so that those values are fixed for the next invocation.
   Here’s an example of what a curried function looks like:

 * Currying is not a pattern that is native to javascript, so it is often handy to write a
   (currier) utility function that can transform any given function into a curried version of itself.

 * Currying doesn’t call a function. It just transforms it.

 * More advanced implementations of currying, such as _.curry  from lodash library,
   return a wrapper that allows a function to be called both normally and partially:

 * Fixed-length functions only
   The currying requires the function to have a fixed number of arguments.
   A function that uses rest parameters, such as f(...args), can’t be curried this way.

*/

function curry(f) { // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3


// using lodash library

function sum1(a, b) {
  return a + b;
}

// const curriedSum1 = _.curry(sum1); // using _.curry from lodash library 

// console.log(curriedSum1(1, 2)); // 3, still callable normally
// console.log(curriedSum1(1)(2)); // 3, called partially


// advance usage of currying
// In case you’d like to get in to the details, here’s the “advanced” curry implementation for multi - argument functions that we could use above.

function curry2(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum2(a, b, c) {
  return a + b + c;
}

let curriedSum2 = curry2(sum2);

console.log(curriedSum2(1, 2, 3)); // 6, still callable normally
console.log(curriedSum2(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum2(1)(2)(3)); // 6, full currying