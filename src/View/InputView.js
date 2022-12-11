const {Console} = require("@woowacourse/mission-utils");
const {INPUT_MESSAGE : {buyLottoMessage, winningNumbersMessage, bonusNumberMessage}} = require('../util/Constant')

/** 사용자로부터 입력을 받는 역할을 한다 */

const InputView = {
  readLottoPurchaseAmount(purchaseAmount) {
    Console.readLine(buyLottoMessage, (amount) => {
      purchaseAmount(parseInt(amount,10))
    })
  },

  readWinningNumbers(winningNumbers) {
    Console.readLine(winningNumbersMessage, (numbers) => {
      winningNumbers(numbers.split(',').map((num) => parseInt(num,10)).sort((a,b) => a-b))
    })
  },

  readBonusNumber(bonusNumber) {
    Console.readLine(bonusNumberMessage, (number) => {
      bonusNumber(parseInt(number,10))
    })
  }

}


module.exports = InputView