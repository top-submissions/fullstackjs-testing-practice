function capitalize(str = 'odin') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str = 'odin') {
  return str.split('').reverse().join('');
}

function isLetter(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isUpperCase(char) {
  const code = char.charCodeAt(0);
  return code >= 65 && code <= 90;
}

function getBaseCode(char) {
  return isUpperCase(char) ? 65 : 97; // 'A' or 'a'
}

function shiftLetter(char, shift) {
  const charCode = char.charCodeAt(0);
  const baseCode = getBaseCode(char);
  const position = charCode - baseCode;
  const newPosition = (position + shift) % 26;
  const newCharCode = baseCode + newPosition;
  return String.fromCharCode(newCharCode);
}

function caesarCipher(str, shift) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isLetter(char)) {
      result += char;
    } else {
      result += shiftLetter(char, shift);
    }
  }

  return result;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, caesarCipher, analyzeArray };
