const { throwError, isOutOfRange, findIntersection } = require("../util");
const ERROR = Object.freeze({
  not_number: "보너스 번호는 한 자리 숫자여야 합니다.",
  duplicate: "보너스 번호가 로또 번호와 중복됩니다.",
  out_of_range: "보너스 번호는 1~45까지의 숫자여야 합니다.",
});

class Bonus {
  #bonus;

  constructor(bonus) {
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    throwError(isNaN(bonus), ERROR.not_number);
    throwError(isOutOfRange(bonus), ERROR.out_of_range);
  }

  checkBonusInLotto (winningLotto) {
    throwError(winningLotto.includes(this.#bonus), ERROR.duplicate);
  }

  checkBonusInFiveMatchLotto(prizeCount, fiveMatchLotto) {
    fiveMatchLotto.forEach((eachUserLotto) => {
      if (eachUserLotto.includes(this.#bonus)) {
        return (prizeCount.second += 1);
      }
      return (prizeCount.third += 1);
    });
  }
}

module.exports = Bonus;
