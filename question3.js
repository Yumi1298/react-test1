let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];
// output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6]

// 方法一
function getUniqueNumber(items) {
  let result = [];
  items.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

// 方法二
// function getUniqueNumber(items) {
//   // 使用 Set 來去除重複的數字
//   return [...new Set(items)];
// }
// console.log(getUniqueNumber(items));
