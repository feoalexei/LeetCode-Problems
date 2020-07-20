////////// 1464. Maximum Product of Two Elements in an Array //////////

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = function(nums) {
  const sorted = nums.slice(0).sort((a,b) => b - a);
 
  const firstInd = nums.findIndex(e => e === sorted[0]);
  const secondInd = nums.findIndex(e => e === sorted[1]);

  return (nums[firstInd]-1)*(nums[secondInd]-1);

  
}

console.log(maxProduct([3,4,5,2]));

// const nums = [3,4,5,2];
// const sorted = nums.slice(0).sort((a,b) => b - a);

// const firstInd = nums.findIndex(e => e === sorted[0]);
// const secondInd = nums.findIndex(e => e === sorted[1]);

// console.log(nums);
// console.log(sorted);

// console.log(firstInd);
// console.log(secondInd);












