const urlEncode = function(text) {
  newString = "";
  for (var i = 0; i < text.length; i++) {
    if (i > 0 && i < text.length - 1 && text[i] === " " && text[i + 1] !== " " && text[i - 1] !== " ") {
      newString += "%20";
    }
    else if (text[i] !== " ") {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));