Function.prototype.myBind = function (context) {
  if(typeof context !== 'function') {
    console.log('context is not a function')
  }
  // 获取参数
  let args = [...arguments].slice(1),
  fn = this;
  return function Fn () {
    return fn.apply(
      // 判断是否是new调用, 如果是new调用, this指向实例, 否则指向context
      this instanceof Fn ? this : context,
      // 参数合并
      args.concat(...arguments)
    )
  }
}
