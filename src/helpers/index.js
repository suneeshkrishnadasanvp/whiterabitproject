export const generateRandomKey = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
export const capitalize = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return '';
  }
};
