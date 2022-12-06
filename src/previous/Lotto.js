const { ERROR_MESSAGE } = require('../constants');
const { checkInRange, checkDuplicates } = require('./utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }



  sortAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  get numbers() {
    const sorted = this.sortAscending(this.#numbers);
    return sorted;
  }

  checkResult(winning_number, bonus_number) {
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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
