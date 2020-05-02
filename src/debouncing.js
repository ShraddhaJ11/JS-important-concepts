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
  return function() {
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
