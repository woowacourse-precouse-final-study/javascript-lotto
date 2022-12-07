const {throwError, getSortedSixRandomNumber} = require("../util");
const ERROR = Object.freeze({
  minimum_amount: 1000,
  not_number: '1000원 단위의 숫자를 입력해주세요.',
  not_upper_one_thousand: '1000원 이상의 금액을 입력해주세요.',
  not_thousand_unit: '1000원 단위로 입력해주세요'
})

class LottoAmount {
  #lottoAmount

  constructor(amount) {
    this.validate(amount);
    this.#lottoAmount = amount;
  }

  validate(amount) {
    throwError(isNaN(amount), ERROR.not_number);
    throwError(amount < ERROR.minimum_amount, ERROR.not_upper_one_thousand);
    throwError(amount % ERROR.minimum_amount !== 0, ERROR.not_thousand_unit)
  }

  getLottoCount() {
    return this.#lottoAmount / ERROR.minimum_amount;
  }

  publishLotto() {
    const lottoCount = this.getLottoCount();
    const totalUserLotto = [];

    for(let i=0; i<lottoCount; i++){
      totalUserLotto[i] = getSortedSixRandomNumber();
    }

    return totalUserLotto;
  }
}

module.exports = LottoAmount;