function capitalize(str = 'odin') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export { capitalize };
