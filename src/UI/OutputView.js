const { Console } = require("@woowacourse/mission-utils")
const MESSAGE = Object.freeze({
  purchaseAmount: (lottoAmount) => `${lottoAmount}개를 구매했습니다.`,
  
})

const OutputView = {
  printUserLotto(lottoAmount, totalUserLotto) {
    Console.print(MESSAGE.purchaseAmount(lottoAmount)),
    totalUserLotto.map((eachUserLotto) => {
      Console.print(eachUserLotto);
    })
  }
}

module.exports = OutputView;