window.name = 'ByteDance';
function A (){
  this.name = 123;
}
A.prototype.getA = function(){
  console.log(this.name);
  return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();
