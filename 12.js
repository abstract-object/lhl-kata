const makeCase = function(input, style) {
  var styles = [];
  var vowels = ["a", "e", "i", "o", "u"];
  var capitalize;
  var prioritizedCasingStyles = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
  var output = "";

  //the function must work with an array to look at styles, so here if the style is a string, it is added to an array
  if (typeof style === "string") {
    styles.push(style);
  }
  else {
    styles = style;
  }

  //first loop goes through all of the possible styles, by order of precedence
  for (var i = 0; i < prioritizedCasingStyles.length; i++) {
    //second loop goes through all of the styles that need to be applied
    for (var j = 0; j < styles.length; j++) {
      //when a matching style to be applied is found (in order of precedence), start third loop through the input
      if (styles[j] === prioritizedCasingStyles[i]) {
        for (var k = 0; k < input.length; k++) {
          //this is for checking if the first letter needs to be capitalized
          if (k === 0) {
            if ((styles[j] === "pascal" || styles[j] === "title" || styles[j] === "upper") && input.charCodeAt(k) >= 97 && input.charCodeAt(k) <= 122) {
              output += String.fromCharCode(input.charCodeAt(k) - 32);
            }
            else {
              output += input[k];
            }
            //don't forget to count up here, because the first letter has already been handled
            k++;
          }
          //vowel, consonant, and upper deal with capitalization without doing anything to spaces, so they go together
          if (styles[j] === "vowel" || styles[j] === "consonant" || styles[j] === "upper") {
            if (input.charCodeAt(k) >= 97 && input.charCodeAt(k) <= 122) {
              capitalize = true;
              if (styles[j] === "vowel") {
                capitalize = false;
              }
              for (var l = 0; l < vowels.length; l++) {
                if (input[k] === vowels[l]) {
                  if (styles[j] === "vowel") {
                    capitalize = true;
                  }
                  else if (styles[j] === "consonant") {
                    capitalize = false;
                  }
                }
              }
              if (capitalize) {
                output += String.fromCharCode(input.charCodeAt(k) - 32);
              }
              else {
                output += input[k];
              }
            }
            else {
              output += input[k];
            }
          }
          //lower needs to check for capital letters
          else if (styles[j] === "lower") {
            if (input.charCodeAt(k) >= 65 && input.charCodeAt(k) <= 90) {
              output += String.fromCharCode(input.charCodeAt(k) + 32);
            }
            else {
              output += input[k];
            }
          }
          //the other styles deal with spaces
          else if (input[k] === " ") {
            //camel and pascal omit spaces, so the counter skips one without adding anything
            if (styles[j] === "camel" || styles[j] === "pascal") {
              k++;
              if (input.charCodeAt(k) >= 97 && input.charCodeAt(k) <= 122) {
                output += String.fromCharCode(input.charCodeAt(k) - 32);
              }
              else {
                output += input[k];
              }
            }
            else if (styles[j] === "snake") {
              output += "_";
            }
            else if (styles[j] === "kebab") {
              output += "-";
            }
            //title handles the letter after the space, so again the counter must be incremented an additional time to find the next character
            else if (styles[j] === "title") {
              output += " ";
              k++;
              if (input.charCodeAt(k) >= 97 && input.charCodeAt(k) <= 122) {
                output += String.fromCharCode(input.charCodeAt(k) - 32);
              }
              else {
                output += input[k];
              }
            }
          }
          else {
            output += input[k];
          }
        }
        //after completing a style, remove it, and if there are styles remaining, take the output and run it through the function again
        styles.splice(j, 1);
        if (styles.length > 0) {
          return makeCase(output, styles);
        }
      }
    }
  }
  return output;
};
//added console.log to keep consistency with previous exercises
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));