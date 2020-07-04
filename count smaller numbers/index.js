////////// 1365. How Many Numbers Are Smaller Than the Current Number //////////

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    const output = [];
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[j] < nums[i]) counter++;
        }
        output.push(counter);
        counter = 0;
    }
    return output;
};

console.log(smallerNumbersThanCurrent([6,5,4,8]));
