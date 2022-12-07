const { ERROR_MESSAGE } = require('./constants');
const { checkInRange, checkDuplicates } = require('./utils');
const {
  LOTTO: { PRICE, LENGTH, RANGE },
} = require('./constants');

const numberValidation = stringInput => {
  if (isNaN(stringInput) || isNaN(parseInt(stringInput))) {
    throw new Error(ERROR_MESSAGE.VALID_NUMBER);
  }

  return +stringInput;
};

const validatePayment = paymentStr => {
  const payment = numberValidation(paymentStr);

  if (payment < PRICE) {
    throw Error(ERROR_MESSAGE.VALID_PAYMENT.AMOUNT);
  }
  if (payment % PRICE !== 0) {
    throw Error(ERROR_MESSAGE.VALID_PAYMENT.UNIT);
  }

  return payment;
};

const validateLottoNumber = lottoNumbers => {
  if (lottoNumbers.length !== LENGTH) {
    throw new Error(ERROR_MESSAGE.VALID_LOTTO.LENGTH);
  }
  if (checkInRange(RANGE.MIN, RANGE.MAX, lottoNumbers)) {
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

  if (bonus_number < RANGE.MIN && bonus_number > RANGE.MAX) {
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
