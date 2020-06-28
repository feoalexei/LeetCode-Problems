////////// 1480. Running Sum of 1d Array //////////

const runningSum = function(nums) {
    const output = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        output.push(nums[i] + output[i - 1]);
   }
   return output;
};

console.log(runningSum([1,2,3,4]));
