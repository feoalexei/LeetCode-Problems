////////// 1370. Increasing Decreasing String //////////

/**
 * @param {string} s
 * @return {string}
 */

const sortString = function(str) {
    let arr = str.split('').sort();
    const obj = {};
    const output = [];
    let inserted = true;

    arr.forEach(char => {
        if (!obj[char]) obj[char] = 0;
        obj[char]++;
    });

    const set = new Set(arr);
    let setValues = [...set];

    while (inserted) {
        inserted = false;
        for (let char of setValues) {
            if(obj[char]) {
                output.push(char);
                obj[char]--;
                inserted = true;
            }
        }
        setValues.reverse();
    }

    return output.join('');
};

console.log(sortString("aaaabbbbcccc"));





















