function capitalize(str = 'odin') {
  let capitalizedStr = [...str].reduce((sumStr, letter, index) => {
    if (index === 0) {
      return (sumStr += letter.toUpperCase());
    }

    return (sumStr += letter.toLowerCase());
  }, '');

  return capitalizedStr;
}

export { capitalize };
