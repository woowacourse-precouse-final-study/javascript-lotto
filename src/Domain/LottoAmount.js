const throwError = require("../util");
const ERROR = Object.freeze({
  not_number: '1000원 단위의 숫자를 입력해주세요.',
  under_one_thousand: '1000원 이상의 금액을 입력해주세요.',
  thousand_unit: '1000원 단위로 입력해주세요'
})

class LottoAmount {
  #lottoAmount

  constructor(amount) {
    this.validate(amount);
    this.#lottoAmount = amount;
  }

  validate(amount) {
    throwError(isNaN(amount), ERROR.not_number);
    throwError(amount < 1000, ERROR.under_one_thousand);
    throwError(amount % 1000 !== 0, ERROR.thousand_unit)
  }

  
}

module.exports = LottoAmount;