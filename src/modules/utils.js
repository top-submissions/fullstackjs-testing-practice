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

  // Check if it's lowercase
  if (char >= 'a' && char <= 'z') {
    // For lowercase: 'a' = 97, 'z' = 122
    const baseCode = 97; // ASCII for 'a'
    const position = charCode - baseCode; // 0-25 where 0='a'
    const newPosition = (position + shift) % 26; // Wrap around 26 letters
    const newCharCode = baseCode + newPosition;
    return String.fromCharCode(newCharCode);
  }

  // For now, just shift uppercase letters without wrapping
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
