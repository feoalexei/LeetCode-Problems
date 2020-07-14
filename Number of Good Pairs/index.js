////////// 1512. Number of Good Pairs //////////

/**
 * @param {number[]} nums
 * @return {number}
 */
// const numIdenticalPairs = function(nums) {
//     let counter = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) counter++;
//         }
//     }
//     return counter;
// };


const numIdenticalPairs = function(nums) {
    let counter = 0;
    const map = new Array(100).fill(0);

    nums.forEach(num => {
        counter += map[num];
        map[num]++;        
    });

    return counter;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));











