let sumLargestNumbers = function(data) {
  var largest = data[0];
  for (var i = 1; i < data.length; i++) {
    if (data[i] > largest) {
      largest = data[i];
    }
  }
  data.splice(data.indexOf(largest), 1);
  var secondLargest = data[0];
  for (var j = 1; j < data.length; j++) {
    if (data[j] > secondLargest) {
      secondLargest = data[j];
    }
  }
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));