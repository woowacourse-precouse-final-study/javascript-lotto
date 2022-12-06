const { Console } = require('@woowacourse/mission-utils');
const {
  INPUT_MESSAGE: { GET_PAYMENT },
} = require('../constants');
const { validatePayment } = require('../validation');

const InputView = {
  readPayment(paymentController) {
    Console.readLine(GET_PAYMENT, paymentInput => {
      const payment = validatePayment(paymentInput);
      paymentController(payment);
    });
  },
};

module.exports = InputView;
