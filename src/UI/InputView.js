const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../Domain/Lotto');
const LottoAmount = require('../Domain/LottoAmount');

const InputView = {
  readLottoAmount() { 
    Console.readLine('구입금액을 입력해 주세요.', (amount) => {
      const lottoAmount = new LottoAmount(amount);
    })
  },
  
  readLottoNumber() {
    
  },

  readBonusNumber() {
  },
}

module.exports = InputView;