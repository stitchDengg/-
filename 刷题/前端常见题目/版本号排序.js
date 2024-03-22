



function compareVersion(arr) {
  return arr.sort((a, b) => {
    const aArr = a.split('.');
    const bArr = b.split('.');
    let i = 0;
    let length = Math.max(aArr.length, bArr.length);

    while (i < length) {
      let s1 = parseInt(aArr[i]);
      let s2 = parseInt(bArr[i]);
      if (s1 === s2) {
        i++;
        continue;
      }
      if (s1 === undefined || s2 === undefined) {
        return bArr.length - aArr.length;
      }
      return s2 - s1;
    }
  })
}

const arr = ['2.3.1', '2.3.2', '2.4.3', '2.3.1.2'];
console.log(compareVersion(arr));
