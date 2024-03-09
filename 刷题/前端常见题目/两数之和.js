

let nums = [2, 7, 11, 5];
let target = 9;

function twoSum(arr,target) {
  let helpHash = new Map();
  let resIndex = -1;
  let resArr = [];
  arr.forEach((item, index) => {
    resIndex = helpHash.get(target - item);
    if (resIndex !== undefined) {
      resArr.push(resIndex,index);
    }
    helpHash.set(item, index);
  })
  return resArr;
}

console.log(twoSum(nums, target))

