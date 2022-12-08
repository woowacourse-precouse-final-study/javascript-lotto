const { Console } = require("@woowacourse/mission-utils");
const {
  readBuyLottoMoney,
  readJackpotNumber,
  readBonusNumber,
} = require("./Views/InputView");
const {
  printLottoTicketCount,
  printLottoRevenuePercent,
  printRandomLottoNumber,
} = require("./Views/OutputView");
const Lotto = require("./Lotto"); 
const LottoRandomNumberGenerator = require("./LottoRandomNumberGenerator");

class App {
  constructor(){
    this.lottoTicketCount = 0;
    this.lottoInfo = [];
    this.jackpotNumber = "";
    this.BonusNumber = '';
    this.totalLottoMoney = 0;
  };

  play() {
    this.lottoTicketCount = readBuyLottoMoney();
    printLottoTicketCount(this.lottoTicketCount);
    this.lottoInfo = LottoRandomNumberGenerator(this.lottoTicketCount);
    printRandomLottoNumber(this.lottoInfo);
    this.jackpotNumber = readJackpotNumber();
    this.BonusNumber = readBonusNumber();
    const lottoCheck = new Lotto(this.jackpotNumber);
    lottoCheck.checkJackpotLotto(this.lottoInfo, this.BonusNumber);
    this.totalLottoMoney = lottoCheck.lottoResultCalc();
    printLottoRevenuePercent(this.totalLottoMoney, this.lottoTicketCount);
    Console.close();
  }
}

module.exports = App;
