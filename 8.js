const multiplicationTable = function(maxValue) {
  output = "";
  for (var i = 1; i <= maxValue; i++) {
    var row = [];
    for (var j = 1; j <= maxValue; j++) {
      row.push(i * j);
    }
  output += row.join(" ") + "\n";
  }
  return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));