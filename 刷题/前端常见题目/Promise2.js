const statusEnum = {
  pending: "PENDING",
  fufiled: "FUFILED",
  rejected: "REJECTED",
};

class Mypromise {
  value = null;
  status = statusEnum.pending;
  resloveFunArr = [];
  rejectFunArr = [];
  constructor(executeor) {
    if (typeof executeor !== "function") {
      throw new Error();
    }
    executeor(this._reslove.bind(this), this._reject.bind(this));
  }

  _reslove(data) {
    if (this.status !== statusEnum.pending) return;
    const run = () => {
      this.value = data;
      this.status = statusEnum.fufiled;
      let func;
      while(func = this.resloveFunArr.shift()) {
        func(data)
      }
    };

    setTimeout(run,0)
  }

  _reject(err) {
    if (this.status !== statusEnum.pending) return;
    this.value = err;
    this.status = statusEnum.rejected;
  }

  then(onReslove, onReject) {
    const { status, value } = this;
    return new Mypromise((nextResolve, nextReject) => {
      const resolve = (value) => {
        try {
          const res = onReslove(value);
          // 此时还得需要改变状态才行
          if (res instanceof Mypromise) {
            res.then(nextResolve, nextReject);
          } else {
            nextResolve(res);
          }
        } catch (e) {
          nextReject(e);
        }
      };

      const reject = (value) => {
        try {
          const res = onReject(value);
          // 此时还得需要改变状态才行
          if (res instanceof Mypromise) {
            res.then(nextResolve, nextReject);
          } else {
            nextReject(res);
          }
        } catch (e) {
          nextReject(e);
        }
      };

      switch (status) {
        case statusEnum.pending:
          this.rejectFunArr.push(onReject);
          this.resloveFunArr.push(onReslove);
          break;
        case statusEnum.fufiled:
          resolve(value);
          break;
        case statusEnum.rejected:
          reject(value);
          break;
      }
    });
  }
}

let res = new Mypromise((reslove, reject) => {
  reject(1);
});

console.log(res);
