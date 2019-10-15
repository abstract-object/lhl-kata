let camelCase = function(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      i += 1;
      output += String.fromCharCode(input.charCodeAt(i) - 32);
    }
    else {
      output += input[i];
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));