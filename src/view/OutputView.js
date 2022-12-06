const {
  PRINT_MESSAGE: { QUANTITY },
} = require('../constants');
const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(QUANTITY(purchaseQuantity));
  },
};

module.exports = OutputView;
