const squareCode = function(message) {
  var onlyLetters = "";
  var coded = [];
  var line = 0;

  for (var i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      i++;
    }
    onlyLetters += message[i];
  }

  for (var j = 0; j < Math.ceil(Math.sqrt(onlyLetters.length)); j++) {
    coded.push("");
  }

  for (var k = 0; k < onlyLetters.length; k++) {
    coded[line] += onlyLetters[k];
    if (line === Math.ceil(Math.sqrt(onlyLetters.length)) - 1) {
      line = 0;
    }
    else {
      line++;
    }
  }
  return coded.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));