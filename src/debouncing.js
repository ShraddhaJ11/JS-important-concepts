/**
 * debouncing and throttling techniques are used not only enhance the performance of your website, 
   but also prevent unnecessary API calls and load on the server.

 * Debouncing and throttling techniques are used to limit the number of times a function can execute. 
   Generally, how many times or when a function will be executed is decided by the developer. 
   But in some cases, developers give this ability to the users. Now, it is up to the user to 
   decide when and how many times to execute that function.

 * Throttling is a technique in which, no matter how many times the user fires the event, 
   the attached function will be executed only once in a given time interval.

 * For instance, when a user clicks on a button, a helloWorld function is executed which prints Hello, world 
   on the console. Now, when throttling is applied with 1000 milliseconds to this helloWorld function, 
   no matter how many times the user clicks on the button, Hello, world will be printed only once in 
   1000 milliseconds. Throttling ensures that the function executes at a regular interval.

 * Debouncing is a technique in which, no matter how many times the user fires the event, the attached 
   function will be executed only after the specified time once the user stops firing the event.

 * For instance, suppose a user is clicking a button 5 times in 100 milliseconds. Debouncing will not 
   let any of these clicks execute the attached function. Once the user has stopped clicking, 
   if debouncing time is 100 milliseconds, the attached function will be executed after 100 milliseconds. 
   Thus, to a naked eye, debouncing behaves like grouping multiple events into one single event.

 * When You’ll Need Them :

   Debouncing and throttling are recommended to use on events that a user can fire more often than you 
   need them to.

   Examples include window resizing and scrolling. The main difference between throttling and debouncing 
   is that throttling executes the function at a regular interval, while debouncing executes the function 
   only after some cooling period.

   Debouncing and throttling are not something provided by JavaScript itself. They’re just concepts we 
   can implement using the setTimeout web API. Some libraries like underscore.js and loadash provide 
   these methods out of the box.

   Both throttling and debouncing can be implemented with the help of the setTimeout function. 
   So, let’s try to understand the setTimeout function.

https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript
https://css-tricks.com/debouncing-throttling-explained-examples/
https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

*/


// call the handler when time difference between
// two events is greater than or equal to given limit
// serach optimization in e-commerce website : debouncing is better in this case
// can also use in window scrollling n resizing : both are good in these case
// game shooting or button - throttling is better to use in this case

let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++);
};
const ele = document.querySelector("input");

const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

ele.addEventListener("keyup", betterFunction);
