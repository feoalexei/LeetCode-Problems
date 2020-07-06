////////// 771. Jewels and Stones //////////

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    let counter = 0;
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < J.length; j++) {
            if (J[j] === S[i]) counter++;            
        }
    }
    return counter;
};

console.log(numJewelsInStones("aA","aAAbbbb"));

