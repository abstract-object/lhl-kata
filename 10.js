let calculateChange = function(total, cash) {
  var changeAmount = cash - total;
  var change = {};

  var denominations = [["twenty", 2000], ["ten", 1000], ["five", 500], ["twoDollar", 200], ["dollar", 100], ["quarter", 25], ["dime", 10], ["nickel", 5], ["penny", 1]];

  for (var i = 0; i < denominations.length; i++) {
    if (changeAmount >= denominations[i][1]) {
      change[denominations[i][0]] = Math.trunc(changeAmount / denominations[i][1]);
      changeAmount -= change[denominations[i][0]] * denominations[i][1];
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));