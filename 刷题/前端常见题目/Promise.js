class MyPromise {
  status = "PENDING";
  value = undefined;
  fufiledCallBackArr = [];
  rejectedCallBackArr = [];
  constructor(handle) {
    if (typeof handle !== "function") {
      throw new Error("请传入正确的回调函数");
    }

    try {
      // 将定义的好的函数传给回调函数
      handle(this._resolve.bind(this), this._resolve.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  _resolve(data) {
    if (this.status !== "PENDING") return;
    const run = () => {
      this.status = "FULFILLED";
      this.value = data;
      let fn;
      while ((fn = this.fufiledCallBackArr.shift())) {
        fn(data);
      }
    };
    // ? 没懂
    setTimeout(run,0)
  }

  _reject(err) {
    if (this.status !== "PENDING") return;
    const run = () => {
      this.status = "REJECTED";
      this.value = err;
      let fn;
      while ((fn = this.fufiledCallBackArr.shift())) {
        fn(err);
      }
    };
    // ! 是一个执行顺序问题，如果有Promise里面的实例直接执行的case，这个时候状态会被直接改变，不会触发then函数里把函数加入数组的逻辑
    // ! 但是如果是用settmieout，.then()会先执行 再执行这个run()
    setTimeout(run, 0);
  }

  // !then方法比较复杂
  then(onFulfiled, onRejected) {
    const { status, value } = this;
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一下
      const fulifled = (value) => {
        try {
          if (typeof onFulfiled !== "function") {
            onFulfilledNext(value);
          } else {
            let res = onFulfiled(value);
            // 如果then的回掉函数返回的是Promise实例,必须等待状态改变才能再去执行
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onFulfilledNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res);
            }
          }
        } catch (e) {
          console.log(e);
          onRejectedNext(e);
        }
      };

      // 封装一个失败时执行的函数
      const rejected = (error) => {
        try {
          if (typeof onRejected !== "function") {
            onRejectedNext(error);
          } else {
            let res = onRejected(error);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onRejectedNext(res);
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err);
        }
      };

      switch (status) {
        // 如果现在状态还没有改变，直接放进会调函数
        case "PENDING":
          this.fufiledCallBackArr.push(fulifled);
          this.rejectedCallBackArr.push(rejected);
          break;
        // 状态改变立即调取对应函数
        case "FULFILLED":
          fulifled(value);
          break;
        case "REJECTED":
          rejected(value);
          break;
      }
    });
  }
}

let res = new MyPromise((reslove, rejcet) => {
  // reslove(1);
  setTimeout(() => {
    reslove(1213);
  }, 1000);
});

res.then(
  (res) => {
    console.log(res);
  },
  (e) => {
    console.log(e);
  }
);
