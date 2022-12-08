const { Console } = require("@woowacourse/mission-utils");
const {
  LOTTO_PRINT_MENTION
} = require('../constant');
const {
  calcRevenuePercent,
} = require('../Controllers/CalcLotto');

const OutputView = {
  printLottoTicketCount(lottoTicketCount) {
    Console.print(`${lottoTicketCount}개를 구매했습니다.`)
  },

  printRandomLottoNumber(lottoInfo) {
    lottoInfo.forEach((randomLottoNumber) => {
      let randomLottoNumberString = String(randomLottoNumber).split(',').join(', ');
      Console.print(`[${randomLottoNumberString}]`);
    })
  },

  printLottoRevenuePercent(lottoRevenue, lottoTicketCount) {
    let RevenuePercent = calcRevenuePercent(lottoRevenue, lottoTicketCount);
    Console.print(`총 수익률은 ${(RevenuePercent).toLocaleString('en')}%입니다.`)
  },

  printResultHeader() {
    Console.print(LOTTO_PRINT_MENTION.result_header);
  },

  printLottoCountResult(index, count) {
    Console.print(LOTTO_PRINT_MENTION.lotto_reward[index] +` ${count}개`);
  }
};

module.exports = OutputView;
