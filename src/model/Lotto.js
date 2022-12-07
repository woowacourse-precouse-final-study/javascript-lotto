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
    let cnt = 0;
    let isBonus = false;

    this.#numbers.map(num => {
      if (winning_number.includes(num)) {
        cnt += 1;
      }
    });

    if (cnt === 5 && this.#numbers.includes(bonus_number)) {
      isBonus = true;
    }

    return isBonus ? 'bonus' : cnt;
  }
}

module.exports = Lotto;
