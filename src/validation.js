const { ERROR_MESSAGE } = require('./constants');
const { checkInRange, checkDuplicates } = require('./utils');

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

const validateLottoNumber = (lottoNumbers) => {
  if (lottoNumbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.LENGTH);
  }
  if (checkInRange(1, 45, lottoNumbers)) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.RANGE);
  }
  if (checkDuplicates(lottoNumbers)) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.DUPLICATE);
  }
};

const validateWinningNumber = winningNumberStr => {
  const winning_number = winningNumberStr
    .replace(/\s/gi, '')
    .split(',')
    .map(str => numberValidation(str));

  validateLottoNumber(winning_number);

  return winning_number;
};

const validateBonusNumber = (bonusNumberStr, winningNumber) => {
  const bonus_number = numberValidation(bonusNumberStr);

  if (bonus_number < 1 && bonus_number > 45) {
    throw Error(ERROR_MESSAGE.VALID_LOTTO.RANGE);
  }

  if (winningNumber.includes(bonus_number)) {
    throw Error(ERROR_MESSAGE.VALID_BONUS.DUPLICATE);
  }

  return bonus_number;
};

module.exports = {
  validatePayment,
  validateLottoNumber,
  validateBonusNumber,
  validateWinningNumber,
};
