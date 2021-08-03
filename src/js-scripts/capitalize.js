const capitalize = (text = "") => {
  const lowercase = text.toLowerCase();
  return text.charAt(0).toUpperCase() + lowercase.slice(1);
};

export default capitalize;
