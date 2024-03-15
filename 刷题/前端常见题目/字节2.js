/* 
写一个构造函数Foo，该函数每个实例为一个对象，形如{id:N},其中N表示第N次调用得到的。
要求：
1、不能使用全局变量
2、直接调用Foo()也会返回实例化的对象
3、实例化的对象必须是Foo的实例
*/


const Foo = (function () {
  let count = 0;
  return function () {
    count += 1;
    return {
      id:count
    }
  }
})();

console.log(new Foo())
console.log(new Foo())
console.log(new Foo())
console.log(new Foo())
console.log(Foo())
