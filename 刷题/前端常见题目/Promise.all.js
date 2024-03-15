

Promise.Myall = function (promises) {
  return new Promise((reslove,reject) => {
    if(!Array.isArray(promises)) {
      throw new Error('promises must be an array');
    }
    const size = promises.length;
    let resArr = [];
    let count = 0;  
    for(let i =0;i < promises.length;i++) {
      // 需要把每个promise数组的元素的转化为promise对象
      Promise.resolve(promises[i]).then(res => {
        console.log(res);
        resArr[i] = res;
        count++;
        if(count === size) {
          return reslove(resArr);
        }
      },err => {
        return reject(err);
      })
    }
  })
}


const p1 = new Promise((res) => {
  setTimeout(() => {
    res(1)
  },1000)
})


const p2 = new Promise((res) => {
  setTimeout(() => {
    res(2)
  },2000)
})


const p3 = new Promise((res) => {
  setTimeout(() => {
    res(3)
  },3000)
})


const promises = Promise.Myall([p3,p1,p2]).then(res => {
  console.log(res)
});
