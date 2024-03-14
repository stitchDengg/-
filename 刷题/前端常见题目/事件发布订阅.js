class EventBus {
  eventArr = {};
  constructor() {}
  subscribe(eventName, fn) {
    if (!this.eventArr.hasOwnProperty(eventName)) {
      this.eventArr[eventName] = [];
    }
    if (this.eventArr.hasOwnProperty(eventName)) {
      this.eventArr[eventName].push(fn);
    }
  }

  unSubscribe(eventName, fn) {
    if (this.eventArr.hasOwnProperty(eventName)) {
      this.eventArr[eventName].filter((item) => item !== fn);
    } else {
      console.log("没有该事件");
    }
  }

  // 事件发布
  publish(eventName, data) {
    if (this.eventArr.hasOwnProperty(eventName)) {
      this.eventArr[eventName].forEach((item) => {
        item(data);
      });
    }
  }

  // 指执行一次然后销毁
  once(eventName,fn) {
    const onceFn = () => {
      fn();
      delete this.eventArr[eventName];
    }

    this.subscribe(eventName,onceFn);
  }
}

// 创建全局事件总线对象
const eventBus = new EventBus();

const callback1 = (data) => {
  console.log("Callback 1:", data);
};

const callback2 = (data) => {
  console.log("Callback 2:", data);
};

// 订阅事件
eventBus.subscribe("event1", callback1);
eventBus.subscribe("event1", callback2);

eventBus.once("event2", () => {
  console.log("Callback 3");
} );

// 发布事件
eventBus.publish("event1", "Hello, world!");
