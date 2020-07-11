////////// 1295. Find Numbers with Even Number of Digits //////////

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
    let counter = 0;
    nums.forEach(element => {
        if (!(String(element).length % 2)) counter++;
    });
    return counter;
}; 

console.log(findNumbers([12,345,2,6,7896]));










