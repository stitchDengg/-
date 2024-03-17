


function retryPromise(func,max = 5) {
  return new Promise((reslove,reject) => {
    const run = (n) => {
      func.then(reslove).cathc(e => {
        if (n === 0) {
          reject(e);
        }
        else {
          run(n - 1);
        }
      })
    }
    run(max);
  })
}


const timeout = function () {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  })
}

retryPromise()