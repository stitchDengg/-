/**
 * @param1
 */
function myNew() {
  let result = null;
  // 拿到需要new的函数
  const constructor = Array.prototype.shift.call(arguments);
  // 判断传的参数是否合法
  if(typeof constructor !== 'function') {
    throw new Error();
  }
  // 创造一个新对象
  const newObj = Object.create(constructor.prototype);
  // 执行函数得到结果,并且修改this指向
  result = constructor.apply(newObj,arguments);
  const flag = result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}


function Fn(a,b) {
  this.a = a;
  this.b = b;
}
let obj = myNew(Fn,1,3)

console.log(obj)