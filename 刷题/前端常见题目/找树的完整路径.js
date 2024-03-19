const data = {
  label: "北京市",
  children: [
    {
      label: "朝阳区",
      children: [{ label: "建外街道" }, { label: "三里屯街道" }],
    },
    {
      label: "东城区",
      children: [
        { label: "东直门街道" },
        {
          label: "东华门街道",
          children: [{ label: "胡家园社区" }, { label: "新中街社区" }],
        },
      ],
    },
  ],
};


const findRoad = (data,keyword) => {
  const resArr = [];
  // 执行一个节点的函数
  const fn = (data, path = []) => {
    const curPath = path.concat(data.label);
    if (data.label.includes(keyword)) {
      // 递归出口
      resArr.push(curPath);
    }
    // 递归体
    if (data.hasOwnProperty('children')) {
      const children = data.children;
      children.forEach(item => {
        fn(item,curPath);
      })
    }
  }
  fn(data);

  return resArr;
}

console.log(findRoad(data, '社区'))
