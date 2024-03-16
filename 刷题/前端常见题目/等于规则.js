

console.log(undefined == null);
/* 特殊情况 */
console.log(undefined === undefined);
console.log(null === null);


// === 和 Object.is的区别
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));