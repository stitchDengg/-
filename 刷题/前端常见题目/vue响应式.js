


let obj = {
  a:1,
  b:2
}

let obj1 = {
  a:1,
  b:2
}


Object.defineProperty(obj,'a', {
  set(value) {
    console.log('set',value)
    obj1.a = value
  },
  get () {
    return obj
  }
})


console.log(obj.a)
