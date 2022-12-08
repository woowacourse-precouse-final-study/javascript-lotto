const LottoAmount = require("./Domain/LottoAmount");
const Lotto = require("./Domain/Lotto");
const Bonus = require("./Domain/Bonus");
const InputView = require("./UI/InputView");
const OutputView = require("./UI/OutputView");

class LottoGame {
  #prizeCount;

  constructor() {
    this.#prizeCount = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  handleLottoAmount() {
    InputView.readLottoAmount((amount) => {
      this.lottoAmount = new LottoAmount(amount);
      OutputView.printUserLotto(
        this.lottoAmount.getLottoCount(),
        this.lottoAmount.totalUserLotto
      );
      this.handleLottoNumber();
    });
  }

  handleLottoNumber() {
    InputView.readLottoNumber((number) => {
      this.lotto = new Lotto(number);
      this.lotto.compareUserAndWinningNumber(this.lottoAmount.totalUserLotto);
      this.lotto.countPrizeCount(this.#prizeCount);
      this.handleBonusNumber(number);
    });
  }

  handleBonusNumber(winningLotto) {
    InputView.readBonusNumber((bonus) => {
      this.bonus = new Bonus(bonus, winningLotto);
      this.bonus.findFiveMatchLotto(this.lottoAmount.TotalUserLotto);
      this.bonus.checkBonusInFiveMatchLotto(this.#prizeCount);
      this.generateResult();
    });
  }
  generateResult() {
    OutputView.printResult(this.#prizeCount);
    OutputView.printProfit(this.lottoAmount.calculateProfit(this.#prizeCount));
  }
}

module.exports = LottoGame;
