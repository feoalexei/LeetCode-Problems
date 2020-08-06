////////// 1085. Sum of Digits in the Minimum Number //////////


const sumOfMin = function(arr) {
    let sum = Math.min(...arr)
        .toString()
        .split('')
        .map(Number)
        .reduce((a,b) => a + b);
    return 1 - sum % 2;
};

console.log(sumOfMin([99,77,33,66,55]));





















