function allSort(arr) {
  const result = [];
  if (arr.length === 1) {
    return [arr];
  } else {
    for (let i = 0; i < arr.length; i ++) {
      let node = arr[i];
      let rest = arr.filter(item => item != arr[i]);
      let subResult = allSort(rest);
      for (let i = 0; i < subResult.length; i++) {
        let res = [node].concat(subResult[i]);
        result.push(res);
      }
    }
  }
  return result;
}

console.log(allSort([1, 2, 3]));