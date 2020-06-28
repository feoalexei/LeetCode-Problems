////////// 1470. Shuffle the Array //////////

var shuffle = function(nums, n) {
    const output = [];
    for (let i = 0; i < n; i++) {
        output.push(nums[i],nums[i + n])
    }
    return output;
};

console.log(shuffle([2,5,1,3,4,7], 3));
