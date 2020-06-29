////////// 1431. Kids With the Greatest Number of Candies //////////

var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(elem => elem + extraCandies >= Math.max(...candies))
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
