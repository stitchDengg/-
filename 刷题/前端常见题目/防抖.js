

function debounce(fn,delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const that = this;
    timer = setTimeout(() => {
      fn.apply(that, args);
    },delay)
  }
}



