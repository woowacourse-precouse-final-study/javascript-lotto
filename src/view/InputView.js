const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGE: { GET_PAYMENT, GET_WINNING_NUMBER, GET_BONUS_NUMBER },
} = require('../constants');
const { validatePayment, validateWinningNumber, validateBonusNumber } = require('../validation');

const InputView = {
  readPayment(paymentController) {
    Console.readLine(GET_PAYMENT, paymentInput => {
      const payment = validatePayment(paymentInput);
      paymentController(payment);
    });
  },
  readWinningNumber(winningNumberController) {
    Console.readLine(GET_WINNING_NUMBER, winningNumberInput => {
      const winningNumber = validateWinningNumber(winningNumberInput);
      winningNumberController(winningNumber);
    });
  },
  readBonusNumber(bonusNumberController) {
    Console.readLine(GET_BONUS_NUMBER, bonusNumberInput => {
      const bonusNumber = validateBonusNumber(bonusNumberInput);
      bonusNumberController(bonusNumber);
    });
  },
};

module.exports = InputView;
