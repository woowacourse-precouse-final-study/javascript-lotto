const { Random } = require("@woowacourse/mission-utils");
const START_INCLUSIVE = 1,
  END_INCLUSIVE = 45,
  COUNT = 6;

const throwError = (conditions, errorMsg) => {
  if (conditions) throw new Error(errorMsg);
};

const getSortedSixRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(START_INCLUSIVE, END_INCLUSIVE, COUNT);
};

module.exports = { throwError, getSortedSixRandomNumber };
