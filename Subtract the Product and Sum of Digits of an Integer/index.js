////////// 1281. Subtract the Product and Sum of Digits of an Integer //////////

/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    const arr = [...n.toString()].map(n => parseInt(n));
    return arr.reduce((a,c) => a * c) - arr.reduce((a,c) => a + c);
};
   

console.log(subtractProductAndSum(234));

// const num = 234;

// console.log([...num.toString()].map(n => parseInt(n)).reduce((a,c) => a * c));

// const arr = [2,3,4]

// console.log(arr.reduce((a,c) => a + c));








