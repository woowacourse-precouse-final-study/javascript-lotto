const checkInRange = (startNum, endNum, numbersArr) => {
  return numbersArr.some(num => num < startNum || num > endNum);
};

const checkDuplicates = numbersArr => {
  return numbersArr.some((num, idx) => numbersArr.slice(idx + 1).includes(num));
};

module.exports = {
  checkInRange,
  checkDuplicates,
};
