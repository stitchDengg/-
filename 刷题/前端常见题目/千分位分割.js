
// 手写算法
function thousandSplit(n) {
  const parts = n.toString().split('.');
  let numPart = parts[0];
  let decimaPart = parts[1] ? parts[1] + '.' : '';
  let result = '', count = 0;
  for (i = numPart.length - 1; i >= 0; i--) {
    //!注意不是 +=
    result = numPart[i] + result;
    count++;
    if (count % 3 === 0 && i != 0) {
      //!注意不是 +=
      result = ',' + result;
    }
  }
  return result;
}


console.log(thousandSplit(1234567))