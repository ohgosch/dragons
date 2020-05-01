const setTwoDecimalPlaces = (number) => {
  if (number < 10) return `0${number}`;
  return number;
}

export const format = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const formated = `${setTwoDecimalPlaces(day)}/${setTwoDecimalPlaces(month)}/${year}`;

  return formated
};
