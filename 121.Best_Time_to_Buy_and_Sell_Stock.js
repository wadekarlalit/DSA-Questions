
// Q. 121. Best Time to Buy and Sell Stock
// ---------------------------------------//

var maxProfit = function(prices) {
// I track the minimum price seen so far while iterating through the array. 
// At each step, I calculate the potential profit by selling at the current price and update the maximum profit if it’s higher. 
// This ensures we always buy before we sell and runs in linear time with constant space.

    let maxProfit = 0;
    let cheapestPrice = Infinity;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < cheapestPrice){
            cheapestPrice = prices[i];
        }
        if((prices[i] - cheapestPrice) > maxProfit){
            maxProfit = prices[i] - cheapestPrice;
        }
    }
    return maxProfit;
    // time - O(n) space - O(1)

    //........................................................

    // let buyPrice = prices[0];
    // let profit = 0;

    // for (let i = 1; i < prices.length; i++) {
    //     if (buyPrice > prices[i]) {
    //         buyPrice = prices[i];
    //     }

    //     profit = Math.max(profit, prices[i] - buyPrice);
    // }

    // return profit;  
};