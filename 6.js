let repeatNumbers = function(data) {
  var result = "";
  for (var i = 0; i < data[0][1]; i++) {
    result += data[0][0];
  }
  if (data.length > 1) {
    for (var j = 1; j < data.length; j++) {
      result += ", ";
      for (var k = 0; k < data[j][1]; k++) {
        result += data[j][0];
      }
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));