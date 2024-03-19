/*
请把一下数据结构{1:222,2:123,5:888}处理成[122，123，null,null,588......]
 */

const obj = {1:222,2:123,5:888};


const fn = (obj) => {
  const arr = new Array(12).fill(null);
  return arr.map((_,index) => obj[index + 1] || null);
}


console.log(fn(obj))
