const encrypt = function(plaintext, key) {
  const shifted = [];
  for (let letter in plaintext) {
    if (plaintext[letter].toLowerCase() >= 'a' && plaintext[letter].toLowerCase() <= 'z') {
      let shiftedLetter = String.fromCharCode(plaintext.charCodeAt(letter) + key);
      if (shiftedLetter.toLowerCase() > 'z') {
        shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) - 26);
      } else if (shiftedLetter.toLowerCase() < 'a') {
        shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) + 26);
      }
      shifted.push(shiftedLetter);
    } else {
      shifted.push(plaintext[letter]);
    }
  }
  return shifted.join('');
};

module.exports = { encrypt };
