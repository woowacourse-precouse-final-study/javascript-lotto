const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGE: { GET_PAYMENT, GET_WINNING_NUMBER, GET_BONUS_NUMBER },
} = require('../constants');

const InputView = {
  readPayment(paymentController) {
    Console.readLine(GET_PAYMENT, paymentInput => {
      paymentController(paymentInput);
    });
  },
  readWinningNumber(winningNumberController) {
    Console.readLine(GET_WINNING_NUMBER, winningNumberInput => {
      winningNumberController(winningNumberInput);
    });
  },
  readBonusNumber(bonusNumberController) {
    Console.readLine(GET_BONUS_NUMBER, bonusNumberInput => {
      bonusNumberController(bonusNumberInput);
    });
  },
};

module.exports = InputView;
