const { Console } = require("@woowacourse/mission-utils");

const PRINT_MESSAGE = Object.freeze({
  purchaseAmount: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
  winning_statistics: "\n당첨 통계\n---",
  profit: (profit) => `총 수익률은 ${profit}%입니다.`,
});

const RANKING = {
  fifth: (fifth) => `3개 일치 (5,000원) - ${fifth}개`,
  fourth: (fourth) => `4개 일치 (50,000원) - ${fourth}개`,
  third: (third) => `5개 일치 (1,500,000원) - ${third}개`,
  second: (second) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
  first: (first) => `6개 일치 (2,000,000,000원) - ${first}개`,
};

const OutputView = {
  printUserLotto(lottoCount, totalUserLotto) {
    Console.print(PRINT_MESSAGE.purchaseAmount(lottoCount)),
      totalUserLotto.map((eachUserLotto) => {
        Console.print(`[${eachUserLotto.join(', ')}]`);
      });
  },

  printResult(prizeCount) {
    Console.print(PRINT_MESSAGE.winning_statistics);
    const prizeCountList = Object.values(prizeCount);
    Object.values(RANKING).forEach((ranking, index) => {
      Console.print(ranking(prizeCountList[index]));
    });
  },

  printProfit(calculateProfit) {
    Console.print(PRINT_MESSAGE.profit(calculateProfit));
    Console.close();
  },
};

module.exports = OutputView;
