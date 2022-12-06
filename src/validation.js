const numberValidation = stringInput => {
  if (isNaN(stringInput) || isNaN(parseInt(stringInput))) {
    throw new Error(ERROR_MESSAGE.VALID_NUMBER);
  }

  return +stringInput;
};

const validatePayment = paymentStr => {
  const payment = numberValidation(paymentStr);

  if (payment < 1000) {
    throw Error(ERROR_MESSAGE.VALID_PAYMENT.AMOUNT);
  }
  if (payment % 1000 !== 0) {
    throw Error(ERROR_MESSAGE.VALID_PAYMENT.UNIT);
  }

  return payment;
};

const validateLottoNumber = numbers => {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.LENGTH);
  }
  if (!checkInRange(1, 45, numbers)) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.RANGE);
  }
  if (checkDuplicates(numbers)) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.DUPLICATE);
  }
};

const validateWinningNumber = numbersStr => {
  const winning_number = numbersStr
    .replace(/\s/gi, '')
    .split(',')
    .map(str => numberValidation(str));

  validateLotto(winning_number);

  return winning_number;
};

// const validateBonusNumber = numberStr => {
//   const bonus_number = numberValidation(numberStr);

//   if (number < 1 && number > 45) {
//     throw Error(ERROR_MESSAGE.VALID_LOTTO.RANGE);
//   }

//   if (this.#winning_number.includes(number)) {
//     throw Error(ERROR_MESSAGE.VALID_BONUS.DUPLICATE);
//   }

//   return bonus_number;
// };

module.exports = {
  validatePayment,
  validateLottoNumber,
  // validateBonusNumber,
  validateWinningNumber,
};
