const form = document.querySelector('#add-comment');

const capitalize = (text = '') => {
  const lowercase = text.toLowerCase();
  return text.charAt(0).toUpperCase() + lowercase.slice(1);
};

const blankInputs = () => {
  form[0].value = '';
  form[1].value = '';
};

export { capitalize, blankInputs };
