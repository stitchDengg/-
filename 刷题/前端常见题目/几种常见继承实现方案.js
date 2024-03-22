// 原型链继承
function Parent1 () {

}


Parent1.prototype.getName = () => {
  console.log('name')
}

function Children1 () {

}

Children1.prototype = new Parent1();
const child1 = new Children1();
child1.getName();


// 构造函数继承
function Parent2 () {

}


Parent2.prototype.getName = () => {
  console.log('name')
}

function Children2 () {
  Parent2.call(this);
}
const child2 = new Children1();
child2.getName();


// 组合继承 上面两种方法和起来


// 寄生组合式继承(最优)

function Parent3 () {

}

Parent3.prototype.getName = () => {
  console.log('name')
}

function create(parent) {
  function Fn () {};
  Fn.prototype = parent;
  return new Fn();
}

Children3.prototype = create(Parent1.prototype);
Children3.prototype.constroctor = Children3;

function Children3 () {
  Parent3.call(this);
}
const child3 = new Children1();
child3.getName();

