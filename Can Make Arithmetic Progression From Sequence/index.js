////////// 1502. Can Make Arithmetic Progression From Sequence //////////


/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function(arr) {
    const sort = arr.sort((a,b) => a - b);
    const step = sort[0] - sort[1];
    for (let i = 1; i < sort.length - 1; i++) {
        if (sort[i] - sort[i+1] !== step) return false
    }
    return true;
};

console.log(canMakeArithmeticProgression([3, 1, 5]));




















