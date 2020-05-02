// memoization

const sum = n => n + 10;

const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("fetching from cache");
      return cache[n];
    } else {
      console.log("calling the actual function");
      const res = fn(n);
      cache[n] = res;
      return res;
    }
  };
};

const memoizedfn = memoize(sum);
console.log(memoizedfn(2));
console.log(memoizedfn(3));
console.log(memoizedfn(2));
