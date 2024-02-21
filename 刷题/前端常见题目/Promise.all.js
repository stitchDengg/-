

Promise.Myall = function (promises) {
  if(!Array.isArray(promises)) {
    return;
  }
  let resArr = [];
  const size = promises.length;
  let count = 0;
  return new Promise((reslove,reject) => {
    for(let i = 0;i < size; i ++) {
      promises[i].then(res => {
        resArr[i] = res;
        count ++;
        if(count === size) reslove(resArr);
      },err => {
        reject(err);
      })
    }
  })
}


const p1 = new Promise((res) => {
  setTimeout(() => {
    console.log(1)
    throw new Error(123123)
  },1000)
})


const p2 = new Promise((res) => {
  setTimeout(() => {
    console.log(2)
    res(2)
  },2000)
})


const p3 = new Promise((res) => {
  setTimeout(() => {
    console.log(3)
    res(3)
  },3000)
})


const promises = Promise.Myall([p3,p1,p2]).then(res => {
  console.log(res)
});
