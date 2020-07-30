////////// 1299. Replace Elements with Greatest Element on Right Side //////////

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    const output = [];
    for (let i = 1; i < arr.length + 1; i++) {
        output.push(i === arr.length ? -1 : Math.max(...arr.slice(i)));
    }

    return output;
};

console.log(replaceElements([17,18,5,4,6,1]));



















