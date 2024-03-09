const arr = [1, [2, 3], [4, [5, [6]], 7]];

Array.prototype.myFlat = function (deep = 1) {
  let arr = this;
  if (deep <= 0) return arr;
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? cur.myFlat(deep - 1) : cur), []);
}

console.log(arr.myFlat());
