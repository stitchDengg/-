function sum(a, b, c) {
  return a + b + c;
}


/*
  无论如何需要返回一个新的函数
  如果函数的参数 >= 传入的函数的参数，直接返回结果，如果不是则返回一个函数
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...newArgs) {
        return fn.apply(this, newArgs.concat(args));
      }
    }
  }
}

let curried = curry(sum);
console.log(curried(1, 2)(3));