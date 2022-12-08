const { Console } = require("@woowacourse/mission-utils");
const {
  isValidateBonusNumber,
  isValidateInputMoney,
} = require('../Controllers/Validate');
const {
  LOTTO_PRINT_MENTION
} = require('../constant');


const InputView = {
  readBuyLottoMoney(){
    let lottoTicketCount;
    Console.readLine(LOTTO_PRINT_MENTION.input_money,(money) => {
      isValidateInputMoney(money);
      lottoTicketCount = Number(money) / 1000;
    });
    return lottoTicketCount;
  },

  readJackpotNumber() {
    let inputJackpotNumber;
    Console.readLine(LOTTO_PRINT_MENTION.input_jackpot_number,(jackpotNumber) => {
      inputJackpotNumber = jackpotNumber.split(',');
    })
    return inputJackpotNumber;
  },

  readBonusNumber() {
    let bonusNumber;
    Console.readLine(LOTTO_PRINT_MENTION.input_bonus_number,(Bonus) => {
      isValidateBonusNumber(Bonus);
      bonusNumber = Bonus;
    })
    return bonusNumber;
  }
};

module.exports = InputView;
