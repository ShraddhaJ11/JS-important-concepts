// Polyfill for bind method
let name = {
  first: "mini",
  last: "jain"
};

const printFullName = function(hometown, state) {
  console.log(this.first + " " + this.last + " " + hometown + " " + state);
};

const print = printFullName.bind(name, "Lucknow");
print("UP");

// mybind function implementation that will behave the same way as bind does
Function.prototype.myBind = function(...args) {
  const obj = this;
  const params = args.slice(1);
  return function(...args2) {
    obj.call(args[0], ...params, ...args2);
  };
};

const print1 = printFullName.myBind(name, "Lucknow");
print1("UP");
