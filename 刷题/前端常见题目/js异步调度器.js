

/* 
字节面试题
*/
class Scheduler {
  max = 2;
  // 等待队列
  queue = [];
  running = 0;
  constructor(max) {
    this.max = max;
  }


  add(task) {
    return new Promise(resolve => {
      task.resolve = resolve;
      if (this.running < 2) {
        this.run(task)
      }else {
        this.queue.push(task);
      }
    })
  }

  async run(task) {
    if (task && typeof task === 'function') {
      this.running++;
      await task();
      task.resolve();
      this.running--;
      // !核心，执行完立刻执行队列其他任务
      const fn = this.queue.shift();
      fn && this.run(fn);
    }
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
});
const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(1000, 4);
