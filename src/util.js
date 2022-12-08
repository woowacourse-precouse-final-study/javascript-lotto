const { Random } = require("@woowacourse/mission-utils");
const START_INCLUSIVE = 1,
  END_INCLUSIVE = 45,
  COUNT = 6,
  ERROR = "[ERROR]";

const throwError = (conditions, errorMsg) => {
  if (conditions) throw new Error(`${ERROR} ${errorMsg}`);
};

const getSortedSixRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(
    START_INCLUSIVE,
    END_INCLUSIVE,
    COUNT
  ).sort((a, b) => a - b);
};

const findIntersection = (setA, setB) => {
  return new Set([...setA].filter((item) => setB.has(item))).size;
};

const isOutOfRange = (number) => {
  return number < 1 || number > 45;
};

module.exports = {
  throwError,
  getSortedSixRandomNumber,
  findIntersection,
  isOutOfRange,
};
