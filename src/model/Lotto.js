const { validateLottoNumber } = require('../validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    const sorted = this.sortAscending(this.#numbers);
    return sorted;
  }

  validate(numbers) {
    validateLottoNumber(numbers);
  }

  checkLottoResult(winning_number, bonus_number) {
    const cnt = this.#numbers.filter(num => winning_number.includes(num)).length;

    if (cnt === 5 && this.#numbers.includes(bonus_number)) {
      return 'bonus';
    }

    return cnt;
  }
}

module.exports = Lotto;
