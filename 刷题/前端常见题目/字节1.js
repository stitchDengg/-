/* 
实现一个定时器函数myTimer(fn, a, b)，
让fn执行，
第一次执行是a毫秒后，
第二次执行是a+b毫秒后，
第三次是a+2b毫秒，
第N次执行是a+Nb毫秒后

要求：
1、白板手撕
2、myTimer要有返回值，并且返回值是一个函数，调用该函数，可以让myTimer停掉
*/


function myTimer(fn, a, b) {
  let count = 0;
  let timerId;

  function startTimer() {
    count++;
    const delay = a + (count - 1) * b;
    console.log(delay + 's');
    timerId = setTimeout(() => {
      fn();
      startTimer();
    }, delay);
  }

  function stopTimer() {
    clearTimeout(timerId);
  }

  startTimer();

  return stopTimer;
}


function sayHello() {
  console.log('Hello');
}

const stop = myTimer(sayHello, 1000, 500);


