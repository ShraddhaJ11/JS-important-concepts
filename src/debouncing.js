// debouncing for serach optimization 
// can also use in window scrollling n resizing

let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++)
};
const ele = document.querySelector('input');

const debounce = (fn,delay) => {
  let timer;
  return function(){
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context,args);
    }, delay);
  }
}

const betterFunction = debounce(getData,300);

ele.addEventListener('keyup',betterFunction);


