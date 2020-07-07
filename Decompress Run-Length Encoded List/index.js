////////// 1313. Decompress Run-Length Encoded List //////////

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
    let output = [];

    for (let i = 0; i < nums.length; i+=2) {
        for (let j = 0; j < nums[i]; j++) {
            output.push(nums[i + 1]);        
        }   
    }
    return output;
};

console.log(decompressRLElist([1,2,3,4]));

// const input = [1,2,3,4];

// let output = [];

// for (let i = 0; i < input.length; i+=2) {
//     for (let j = 0; j < input[i]; j++) {
//         output.push(input[i + 1]);        
//     }   
// }

// console.log(output);






