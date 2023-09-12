const addDays = require("date-fns/addDays");
const getDaysAfterXDays = (days) => {
  const result = addDays(new Date(2020, 8, 22), days);
  return `${result.getDate()} * ${
    result.getMonth() + 1
  } * ${result.getFullYear()}`;
};
module.exports = getDaysAfterXDays;
