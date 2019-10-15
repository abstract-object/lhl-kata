const urlDecode = function(text) {
  output = {};
  key = "";
  value = "";

  for (var i = 0; i < text.length; i++) {
    if (value.length === 0 && text[i] !== "=") {
      if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0"){
        key += " ";
        i += 2;
      }
      else {
        key += text[i];
      }
    }
    else if (text[i] === "=") {
      output[key] = "";
      i++;
      value += text[i];
    }
    else if (value.length !== 0 && text[i] !== "&") {
      if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0"){
        value += " ";
        i += 2;
      }
      else {
        value += text[i];
      }
    }
    else if (text[i] === "&") {
      output[key] = value;
      key = "";
      value = "";
      i++;
      key += text[i];
    }
  }
  output[key] = value;
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);