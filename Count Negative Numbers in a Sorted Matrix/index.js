////////// 1351. Count Negative Numbers in a Sorted Matrix //////////

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    return grid.flat().filter(n => n < 0).length;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));



















