/*
 * Notes:
 * If no profits is possible, return -1
 * A max profit of 0 is treated the same as anyother max profit value
 * Try to O(n) - linear time complexity
 * Example. [32, 46, 26, 38, 40, 48, 42]
 * Result: 22 (buy when price is 26 -> sell when price is 48)
 */
function maxStockProfit(priceArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0 ; i < priceArr.length; i += 1) {
    if (changeBuyPrice) {
      buyPrice = priceArr[i];
    }
    sellPrice = priceArr[i + 1]

    if (sellPrice > buyPrice) {
      changeBuyPrice = false
      let tempMaxProfit = sellPrice - buyPrice;
      if (tempMaxProfit > maxProfit) maxProfit = tempMaxProfit
    } else {
      // keep finding better buyPrice
      changeBuyPrice = true
    }
  }

  return maxProfit
}

const output = maxStockProfit([32, 31, 46, 26, 38, 40, 42])
output