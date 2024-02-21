function MyInstanseOf(obj,cls) {
  let proto = Object.getPrototypeOf(obj);
  let prototype = cls.prototype;
  while(true) {
    if(!proto) return false;
    if(proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}


class Name {
  constructor() {

  }
}

let name = new Name();
console.log(MyInstanseOf(name,Name))
