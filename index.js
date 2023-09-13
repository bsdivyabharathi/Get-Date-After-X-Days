const addDays = require("date-fns/addDays");
const getDaysAfterXDays = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  const a= `${result, getDate()} - ${result,getMonth() + 1} - ${result,getFullYear()}`;
  return a;
 
};
module.exports = getDaysAfterXDays;
