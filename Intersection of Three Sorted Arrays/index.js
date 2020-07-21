////////// 1213. Intersection of Three Sorted Arrays //////////

/**
 * @param {number[]} nums
 * @return {number}
 */

// const intersection = function(arr1, arr2, arr3) {
//   return arr1.filter(e => arr2.includes(e) && arr3.includes(e));
// }

const intersection = function(arr1, arr2, arr3) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set(arr3);

  console.log(set1);
  console.log([...set1]);

  const result = new Set([...set1].filter(e => set2.has(e) && set3.has(e)));
  return Array.from(result);

}


console.log(intersection([1,5,10,20,40,80], [6,7,20,80,100], [3,4,15,20,30,70,80,120]));


// arr1 = [1,5,10,20,40,80,100];
// arr2 = [6,7,20,80,100];
// arr3 = [3,4,15,20,30,70,80,120];

// console.log(arr1.filter(e => arr2.includes(e) && arr3.includes(e)));











