let tree = [
  {
    id: 2,
    parent_id: 0,
    name: "上海市",
    children: [
      { id: 21, parent_id: 2, name: "静安区" },
      { id: 22, parent_id: 2, name: "黄浦区" },
      {
        id: 24,
        parent_id: 2,
        name: "徐汇区",
        children: [
          { id: 241, parent_id: 24, name: "田林街道" },
          {
            id: 242,
            parent_id: 24,
            name: "漕河泾街道",
            children: [
              { id: 2421, parent_id: 242, name: "上海科技绿洲" },
              { id: 2422, parent_id: 242, name: "漕河泾开发区" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    parent_id: 0,
    name: "北京市",
    children: [
      { id: 12, parent_id: 1, name: "朝阳区" },
      { id: 13, parent_id: 1, name: "昌平区" },
      { id: 11, parent_id: 1, name: "顺义区" },
    ],
  },
  {
    id: 3,
    parent_id: 0,
    name: "广东省",
    children: [
      { id: 31, parent_id: 3, name: "广州市" },
      { id: 32, parent_id: 3, name: "深圳市" },
      { id: 33, parent_id: 3, name: "东莞市" },
    ],
  },
];

function treeToList(tree) {
  let arr = [];
  // 相当于深拷贝
  let a = [].concat(tree);
  while (a.length > 0) {
    let node = a.shift();
    if (node.children) {
      // !核心逻辑，每次遍历都去一层数组
      a = a.concat(node.children);
      delete node.children;
    }
    arr.push(node);
  }
  return arr;
}

console.log(treeToList(tree));
