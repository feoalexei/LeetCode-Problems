////////// 905. Sort Array By Parity //////////


/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
    let sorted = [];
    A.forEach(num => num % 2 ? sorted.push(num) : sorted.unshift(num))
    return sorted;
};

// const sortArrayByParity = function (A) {
//     return A.reduce((acc, cur) => {
//       cur % 2 ? acc.push(cur) : acc.unshift(cur);
//       return acc;
//     }, []);
//   };

console.log(sortArrayByParity([3,1,2,4]));


















