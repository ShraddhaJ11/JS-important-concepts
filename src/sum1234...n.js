// sum(1)(2)(3)....(n)()

const sum = a => {
  return b => {
    if (b) return sum(a + b);
    return a;
  };
};

// optimized version
const sum1 = a => b => (b ? sum(a + b) : a);

console.log(sum(1)(2)(3)(4)(5)(6)());
console.log(sum1(3)(7)(8)(1)(2)(4)());
