////////// 7. Reverse Integer //////////

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let output = parseInt(Array.from(x.toString()).reverse().join(''));
    if (output <= Math.pow(2,31)-1) {
        return x > 0 ? output : output * Math.sign(x);
    } else return 0;
      
};

console.log(reverse(-1230));

