const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let countSteps = Math.pow(2,disksNumber) - 1;

  let oneStepTime = turnsSpeed / 3600
  return {
    turns: countSteps,
    seconds: Math.floor(countSteps / oneStepTime)
  };
};
