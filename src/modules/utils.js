function capitalize(str = 'odin') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str = 'odin') {
  return str.split('').reverse().join('');
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function shiftChar(char, shift) {
  // Get character code
  const charCode = char.charCodeAt(0);

  const shiftedCode = charCode + shift;

  return String.fromCharCode(shiftedCode);
}

function caesarCipher(str, shift) {
  // Process the string
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isLetter(char)) {
      result += char;
    } else {
      result += shiftChar(char, shift);
    }
  }

  return result;
}

export { capitalize, reverseString, caesarCipher };
