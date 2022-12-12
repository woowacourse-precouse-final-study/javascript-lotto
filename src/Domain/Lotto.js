const { throwError, findIntersection, isOutOfRange } = require("../util");
const ERROR = Object.freeze({
  not_six_digits: "로또 번호는 6개여야 합니다.",
  duplicate: "로또 번호에 중복된 숫자가 있습니다.",
  out_of_range: "로또 번호는 1부터 45까지의 숫자여야 합니다.",
  not_number: "로또 번호는 숫자여야 합니다.",
});

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.fiveMatchLotto = [];
    this.matchedLottoNumber = [];
  }

  validate(numbers) {
    throwError(numbers.length !== 6, ERROR.not_six_digits);
    throwError(new Set(numbers).size !== 6, ERROR.duplicate);
    throwError(
      numbers.some((number) => isNaN(number)),
      ERROR.not_number
    );
    throwError(
      numbers.some((number) => isOutOfRange(number)),
      ERROR.out_of_range
    );
  }

  compareUserAndWinningNumber(totalUserLotto) {
    let intersection;
    totalUserLotto.forEach((eachUserLotto) => {
      intersection = findIntersection(
        new Set(eachUserLotto),
        new Set(this.#numbers)
      );
      if (intersection === 5) return this.fiveMatchLotto.push(eachUserLotto);
      return this.matchedLottoNumber.push(intersection)
    });
  }

  getFiveMatchLotto () {
    return this.fiveMatchLotto;
  }

  countPrizeCount(prizeCount) {
    this.matchedLottoNumber.forEach((number) => {
      switch (number) {
        case 6:
          prizeCount.first += 1;
          break;
        case 4:
          prizeCount.fourth += 1;
          break;
        case 3:
          prizeCount.fifth += 1;
          break;
      }
    });
  }
}

module.exports = Lotto;
