////////// 121. Best Time to Buy and Sell Stock
 //////////

var maxProfit = function(prices) {
  let bestProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min;
    bestProfit = Math.max(profit, bestProfit)
    if (prices[i] < min) {
      min = prices[i]
    } 
  }
  return bestProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));













