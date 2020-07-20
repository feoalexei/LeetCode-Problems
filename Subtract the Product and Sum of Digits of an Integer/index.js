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










