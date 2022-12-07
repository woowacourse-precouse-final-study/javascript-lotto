const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../Domain/Lotto');
const LottoAmount = require('../Domain/LottoAmount');
const { printUserLotto } = require('./OutputView');

const INPUT_QUERY = Object.freeze({
  lottoAmount: '구입금액을 입력해 주세요.'
})

const InputView = {
  readLottoAmount() { 
    Console.readLine(INPUT_QUERY.lottoAmount, (amount) => {
      const lottoAmount = new LottoAmount(amount);
      printUserLotto(lottoAmount.getLottoCount(), lottoAmount.publishLotto());
      this.readLottoNumber();
    })
  },
  
  readLottoNumber() {
    
  },

  readBonusNumber() {
  },
}

module.exports = InputView;