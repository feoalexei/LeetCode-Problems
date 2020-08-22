////////// 961. N-Repeated Element in Size 2N Array //////////


/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
    let obj = {};
    for (const num of A) {
        if (!obj[num]) obj[num] = 0; 
        obj[num]++;
        if (obj[num] > 1) return num;
    } 
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));

















