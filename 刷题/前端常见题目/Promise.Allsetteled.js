
Promise.myAllSettled = function (promises) {
  return Promise.all(promises.map(promise => {
    return promise.then(res => {
      return {
        value: res,
        staues:'fulfilled'
      }
    }).catch(err => {
      return {
        value: err,
        reason:'rejected'
      }
    })
  }))
}

const delay = n => new Promise(resolve => setTimeout(resolve, n));
const promises = [
  delay(100).then(() => 1),
  delay(200).then(() => 2),
  Promise.reject(3)
]



const res = Promise.allSettled(promises).then(res => console.log(res))



