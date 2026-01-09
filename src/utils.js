function capitalize(str = 'odin') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str = 'odin') {
  return str.split('').reverse().join('');
}

export { capitalize, reverseString };
