function rot13(str) {
  // Create an empty string to store the decoded result
  let decoded = '';

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char.toUpperCase())) {
      // Get the character code for 'A' (the starting point)
      const char1 = "a";
      const charCodeA = char1.toUpperCase().charCodeAt(0);
      // Calculate the decoded character code
      // const decodedCharCode = ((char.charCodeAt(0) - charCodeA - 13 + 26) % 26) + charCodeA;
      let decodedCharCode = (char.toUpperCase().charCodeAt(0))+13;

      if (decodedCharCode > 90 ) {
        decodedCharCode = decodedCharCode - 90;
        decodedCharCode = charCodeA + decodedCharCode - 1;
      }
      else {
        decodedCharCode = decodedCharCode;
      }

      // Convert the decoded character code back to a character
      const decodedChar = String.fromCharCode(decodedCharCode);

      // Add the decoded character to the result
      decoded += decodedChar;
    } else {
      // If the character is not an uppercase letter, leave it unchanged
      decoded += char;
    }
  }

  return decoded;
}

// Example usage:
const encodedText = "SERR PBQR PNZC";
const decodedText = rot13(encodedText);
console.log(decodedText); 


// R, S, T, U, V, W, X, Y, Z, A, B, C, D, E

