const { throwError, getSortedSixRandomNumber } = require("../util");
const THOUSAND_WON = 1000;
const PRIZE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];
const ERROR = Object.freeze({
  minimum_amount: 1000,
  not_number: "1000원 단위의 숫자를 입력해주세요.",
  not_upper_one_thousand: "1000원 이상의 금액을 입력해주세요.",
  not_thousand_unit: "1000원 단위로 입력해주세요",
});

class LottoAmount {
  #lottoAmount;

  constructor(amount) {
    this.validate(amount);
    this.#lottoAmount = amount;
    this.totalUserLotto = this.publishLotto();
  }

  validate(amount) {
    throwError(isNaN(amount), ERROR.not_number);
    throwError(amount < ERROR.minimum_amount, ERROR.not_upper_one_thousand);
    throwError(amount % THOUSAND_WON !== 0, ERROR.not_thousand_unit);
  }

  getLottoCount() {
    return this.#lottoAmount / THOUSAND_WON;
  }

  publishLotto() {
    const lottoCount = this.getLottoCount();
    const totalUserLotto = [];

    for (let i = 0; i < lottoCount; i++) {
      totalUserLotto[i] = getSortedSixRandomNumber();
    }

    return totalUserLotto;
  }

  get TotalUserLotto() {
    return this.totalUserLotto;
  }

  calculateProfit(prizeCount) {
    const outputMoney = Object.values(prizeCount).reduce(
      (accumulator, currentValue, index) =>
        currentValue * PRIZE_MONEY[index] + accumulator,
      0
    );
    return ((outputMoney / this.#lottoAmount) * 100).toFixed(1);
  }
}

module.exports = LottoAmount;
