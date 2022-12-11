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

  LottoSetting() {
    this.lottoTicketCount = readBuyLottoMoney();
    printLottoTicketCount(this.lottoTicketCount);
    this.lottoInfo = LottoRandomNumberGenerator(this.lottoTicketCount);
    printRandomLottoNumber(this.lottoInfo);
  }

  LottoJackpotCheck() {
    this.jackpotNumber = readJackpotNumber();
    this.BonusNumber = readBonusNumber();
    const lottoCheck = new Lotto(this.jackpotNumber);
    lottoCheck.checkJackpotLotto(this.lottoInfo, this.BonusNumber);
    this.totalLottoMoney = lottoCheck.lottoResultCalc();
  }

  LottoResultPrint() {
    printLottoRevenuePercent(this.totalLottoMoney, this.lottoTicketCount);
  }

  play() {
    this.LottoSetting();
    this.LottoJackpotCheck();
    this.LottoResultPrint();
    Console.close();
  }
}

module.exports = App;
