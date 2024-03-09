
function fn(min, max) {
  // (min,max)
  // return Math.floor(Math.random() * (max - min - 2) + min + 1)
  // [min.max]
  return Math.floor(Math.random() * (max - min) + min)
} 


console.log(fn(1,3))