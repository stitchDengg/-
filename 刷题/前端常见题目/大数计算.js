let a = '9012312321312312'
let b = '1231241234141412499999'

// !需要进位
function bigNumberCompute(a, b) {
  let maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let t = 0;
  let f = 0; //进位
  let sum = '';
  for (let i = maxLength - 1; i >= 0; i --) {
    t = parseInt(a[i]) + parseInt(b[i]) + f;
    f = Math.floor(t / 10);
    console.log(t % 10,f)
    sum += t % 10;
  }
  // 考虑结尾情况
  if (f === 1) {
    sum = '1' + sum;
  }
  return sum;
}

console.log(bigNumberCompute(a, b));