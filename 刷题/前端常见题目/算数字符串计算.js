function computeStr(str) {
  let sign = '+';
  const stack = [];
  let sum = 0;
  for(let i = 0; i < str.length;i ++) {
    let num = str[i];
    // 如果是数字
    if(!isNaN(num)) {
      sum = sum * 10 + num;
    }

    // 如果不是数字
    if(isNaN(num) || i === str.length - 1) {
      if(sign === '+') {
        stack.push(num);
      }else if(sign === '-') {
        stack.push(-num);
      }else if(sign === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }else if(sign === '*') {
        stack.push(stack.pop * num);
      }

      sign = num;
      sum = 0;
    }
  }
  console.log(stack)
  return stack.reduce((pre,cur) => pre + cur,0)
}

console.log(computeStr('1+25-32+100-92'))
