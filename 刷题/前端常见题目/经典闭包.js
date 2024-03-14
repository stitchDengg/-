for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

/* 

使用闭包实现一个counter函数，全局下每次调用返回值 +1

console.log(counter()); // 1

console.log(counter()); // 2

console.log(counter());​​ // 3
*/
let counter = (
  function () {
    var count = 0;
    return function () {
      return ++count;
    };
  }
)()


console.log(counter()); // 1
console.log(counter()); // 2
