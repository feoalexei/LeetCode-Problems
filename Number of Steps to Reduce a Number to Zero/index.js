////////// 1342. Number of Steps to Reduce a Number to Zero //////////

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps  = function(num) {
    let counter = 0;
    while (num) {
        num % 2 ? num-- 
                : num /= 2;         
        counter++;
    }
    return counter;
};

console.log(numberOfSteps(8));

