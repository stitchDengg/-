function baseLength(n) {
  n = n.toString();
  let index = n.indexOf('.');
  return index === -1 ? 0 : n.length - index - 1;
}

function bigNumberSum(a, b) {
  const baseLen = Math.max(baseLength(a), baseLength(b));
  const pow = Math.pow(10, baseLen);
  const res = a * pow + b * pow;
  return Number(res / pow);
}


console.log(bigNumberSum(1.22333,1.0323))