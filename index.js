const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  const a = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
  return a;
};

module.exports = getDateAfterXDays;
