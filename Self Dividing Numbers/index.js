////////// 728. Self Dividing Numbers //////////


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let output = [];
    for (let i = left; i <= right; i++) {
        let elem = [...`${i}`];
       
        if (elem.map(n => i % +n == 0).every(i => i)) output.push(i)  
    }
    return output;
};

console.log(selfDividingNumbers(1, 22));





















