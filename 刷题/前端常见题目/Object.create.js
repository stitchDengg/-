
function create(obj) {
  let Fn = function () {};
  Fn.prototype = obj;
  return new Fn();
}

const obj = {
  name:'denghao',
  value:12312
}


const newObj = create(obj);
console.log(newObj.name,'----------',newObj.value)
