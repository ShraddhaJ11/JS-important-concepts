// call the event handler on first event
// after call the handler next time when time difference between
// two function call is greater than or equal to given limit
// serach optimization in e-commerce website : debouncing is better in this case
// can also use in window scrollling n resizing : both are good in these case
// game shooting or button - throttling is better to use in this case
const expensive = () => {
  console.log("resize");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function() {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterExpensive = throttle(expensive, 1000);

window.addEventListener("resize", betterExpensive);
