////////// 1395. Count Number of Teams //////////

/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
    let counter = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]
                    || rating[i] > rating[j] && rating[j] > rating[k]) counter++;
            }
        
        }
    }
    return counter;
};

console.log(numTeams([1,2,3,4]));










