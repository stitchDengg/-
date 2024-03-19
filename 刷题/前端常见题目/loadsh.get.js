/* 
lodash.get
const obj = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(get(obj, 'a[0].b.c')); // 3
console.log(get(obj, ['a', '0', 'b', 'c'])); // 3
console.log(get(obj, 'a.b.c', 'default')); // 'default'
*/


function get(obj,path,defalut = undefined) {
  const newPath = Array.isArray(path) ? path : path.replace(/\[/g,'.').replace(/\]/g,'').split('.');
  console.log(newPath);
  return newPath.reduce((pre,cur) => {
    return (pre || {})[cur];
  },obj) || defalut
}

const obj = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(get(obj, 'a[0].b.c')); // 3
console.log(get(obj, ['a', '0', 'b', 'c'])); // 3
// console.log(get(obj, 'a.b.c', 'default')); // 'default'
