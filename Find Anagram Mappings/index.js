////////// 760. Find Anagram Mappings //////////

/**
 * @param A: lists A
 * @param B: lists B
 * @return: the index mapping
 */
const anagramMappings = function (A, B) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                result.push(j);
            }      
        }  
    }
    return result;
}

// const anagramMappings = (A, B) => A.map(e => B.indexOf(e))

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]));













