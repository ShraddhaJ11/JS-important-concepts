/**
 * In layman’s terms, one can imagine a polyfill as a common paste which can be used to fill 
   holes and cracks to smooth out any defects in a wall.

 * For the web, a polyfill does the same thing. There might be some functionality missing in 
   the browser that needs to be added or filled in.

 * A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality 
   on older browsers that do not natively support it.

 * A polyfill (or polyfiller) is a piece of code (or plugin) that provides the technology that 
   we, the developers, expect the browser to provide natively.

 * For example, a polyfill could be used to mimic the functionality of an HTML Canvas element 
   on Microsoft Internet Explorer 7 using a Silverlight plugin, or mimic support for CSS rem 
   units, or text-shadow, or whatever you want. The reason why polyfills are not used exclusively 
   is for better functionality and better performance. Native implementations of APIs can do more 
   and are faster than polyfills.

*/


// Polyfill for bind method
let name = {
  first: "mini",
  last: "jain"
};

const printFullName = function (hometown, state) {
  console.log(this.first + " " + this.last + " " + hometown + " " + state);
};

const print = printFullName.bind(name, "Lucknow");
print("UP");

// mybind function implementation that will behave the same way as bind does
Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.call(args[0], ...params, ...args2);
  };
};

const print1 = printFullName.myBind(name, "Lucknow");
print1("UP");
