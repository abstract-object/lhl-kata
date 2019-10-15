let numberOfVowels = function(data) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;

  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (data[i] === vowels[j]) {
        number++;
      }
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));