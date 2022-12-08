const { throwError, isOutOfRange, findIntersection } = require("../util");
const ERROR = Object.freeze({
  not_number: "보너스 번호는 한 자리 숫자여야 합니다.",
  duplicate: "보너스 번호가 로또 번호와 중복됩니다.",
  out_of_range: "보너스 번호는 1~45까지의 숫자여야 합니다.",
});

class Bonus {
  #bonus;
  #winningLotto;

  constructor(bonus, winningLotto) {
    this.#winningLotto = winningLotto;
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    throwError(isNaN(bonus), ERROR.not_number);
    throwError(this.#winningLotto.includes(bonus), ERROR.duplicate);
    throwError(isOutOfRange(bonus), ERROR.out_of_range);
  }

  findFiveMatchLotto(totalUserLotto) {
    this.fiveMatchLotto = [];
    totalUserLotto.map((eachUserLotto) => {
      if (findIntersection(
          new Set(eachUserLotto),
          new Set(this.#winningLotto)
          ) === 5
      ) {
        this.fiveMatchLotto.push(eachUserLotto);
      }
    });
  }

  checkBonusInFiveMatchLotto(prizeCount) {
    this.fiveMatchLotto.forEach((eachUserLotto) => {
      if (eachUserLotto.includes(this.#bonus)) {
        return (prizeCount.second += 1);
      }
      return (prizeCount.third += 1);
    });
  }
}

module.exports = Bonus;
