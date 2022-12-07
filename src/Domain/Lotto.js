const { throwError } = require("../util");
const ERROR = Object.freeze({
  not_six_digits: '로또 번호는 6개여야 합니다.',
  duplicate: '로또 번호에 중복된 숫자가 있습니다.',
  out_of_range: '로또 번호는 1부터 45까지의 숫자여야 합니다.',
  not_number: '로또 번호는 숫자여야 합니다.'
})

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    throwError(numbers.length !== 6, ERROR.not_six_digits);
    throwError(new Set(numbers).size !== 6, ERROR.duplicate);
    throwError(numbers.some((number) => isNaN(number)), ERROR.not_number)
    throwError(numbers.some((number) => number < 1 || number > 45), ERROR.out_of_range);
  }
}

module.exports = Lotto;
