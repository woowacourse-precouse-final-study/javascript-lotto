const { PRINT_MESSAGE } = require('../constants');
const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoTickets(lottos) {
    Console.print(PRINT_MESSAGE.LOTTO_TICKETS(lottos));
  },
};

module.exports = OutputView;
