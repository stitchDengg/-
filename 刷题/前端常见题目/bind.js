

Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('');
  }

  let args = [...arguments].slice(1),
    fn = this;
  return function Fn () {
    return fn.apply(context instanceof Fn ? this : context,args.concat(...arguments));
  }
}