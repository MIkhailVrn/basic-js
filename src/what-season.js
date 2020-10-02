const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!';

  // мы передаем date как this. Если у него не переписан toString то вызовется
  // toString от Object. Как то так
  if (Object.prototype.toString.call(date) !== '[object Date]')
    throw 'Error'


  const month = date.getMonth()

  switch (true) {
    case (month >= 0 && month <= 1) || month === 11 : 
      return 'winter';
      break;
    case month >= 2 && month <= 4 :
      return 'spring';
      break;
    case month >= 5 && month <= 7 :
      return 'summer';
      break;
    default: 
      return 'autumn';
   }
};
