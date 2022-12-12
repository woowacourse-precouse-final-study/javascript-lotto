const UserLotto = require("./Domain/UserLotto");
const Lotto = require("./Domain/Lotto");
const Bonus = require("./Domain/Bonus");
const InputView = require("./UI/InputView");
const OutputView = require("./UI/OutputView");

class LottoGame {
  #prizeCount;
  #userLotto;
  #lotto;
  #bonus;

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
      this.#userLotto = new UserLotto(amount);
      OutputView.printUserLotto(
        this.#userLotto.getLottoCount(),
        this.#userLotto.userLotto
      );
      this.handleLottoNumber();
    });
  }

  handleLottoNumber() {
    InputView.readLottoNumber((number) => {
      this.#lotto = new Lotto(number);
      this.#lotto.compareUserAndWinningNumber(this.#userLotto.userLotto);
      this.#lotto.countPrizeCount(this.#prizeCount);
      this.handleBonusNumber(number);
    });
  }

  handleBonusNumber(winningLotto) {
    InputView.readBonusNumber((bonus) => {
      this.#bonus = new Bonus(bonus);
      this.#bonus.checkBonusInLotto(winningLotto);
      this.#bonus.checkBonusInFiveMatchLotto(
        this.#prizeCount,
        this.#lotto.getFiveMatchLotto()
      );
      this.generateResult();
    });
  }
  generateResult() {
    OutputView.printResult(this.#prizeCount);
    OutputView.printProfit(this.#userLotto.calculateProfit(this.#prizeCount));
  }
}

module.exports = LottoGame;
