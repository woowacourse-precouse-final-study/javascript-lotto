const { PRINT_MESSAGE } = require('../constants');
const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoTickets(lottos) {
    Console.print(PRINT_MESSAGE.LOTTO_TICKETS(lottos));
  },
  printResult(results) {
    Console.print(PRINT_MESSAGE.RESULT(results));
  },
  printProfitRate(profit) {
    Console.print(PRINT_MESSAGE.PROFIT(profit));
  },
};

module.exports = OutputView;
