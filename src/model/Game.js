const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../model/Lotto');
const { validatePayment, validateWinningNumber, validateBonusNumber } = require('../validation');
const {
  LOTTO: { PRICE, RANGE, LENGTH, PROFIT_RATE },
  LOTTO_WINNER_PLACES: { FIRST, SECOND, THIRD, FOURTH, FIFTH },
  LOTTO_PRIZE,
  LOTTO_WINNER_PLACES,
} = require('../constants');

class LotteryGame {
  #payment;
  #lottoTickets = [];
  #winningNumber;
  #bonusNumber;
  #results = {
    [FIFTH]: 0,
    [FOURTH]: 0,
    [THIRD]: 0,
    [SECOND]: 0,
    [FIRST]: 0,
  };

  setPayment(paymentStr) {
    const payment = validatePayment(paymentStr);
    this.#payment = payment;
  }

  setWinningNumber(winningNumberStr) {
    const winningNumber = validateWinningNumber(winningNumberStr);
    this.#winningNumber = winningNumber;
  }

  setBonusNumber(bonusNumberStr) {
    const bonusNumber = validateBonusNumber(bonusNumberStr, this.#winningNumber);
    this.#bonusNumber = bonusNumber;
  }

  calculateQuantity() {
    return this.#payment / PRICE;
  }

  generateLottoTickets() {
    const quantity = this.calculateQuantity();
    Array(quantity)
      .fill(0)
      .map(_ => {
        const numbers = Random.pickUniqueNumbersInRange(RANGE.MIN, RANGE.MAX, LENGTH);
        const lottoTicket = new Lotto(numbers);
        this.#lottoTickets.push(lottoTicket);
      });

    return this.#lottoTickets.map(ticket => ticket.getLottoNumbers());
  }

  generateResult() {
    this.#lottoTickets.map(ticket => {
      const result = ticket.checkLottoResult(this.#winningNumber, this.#bonusNumber);
      if (result < FIFTH) return;
      this.#results[result] += 1;
    });

    return this.#results;
  }

  generateProfitRate() {
    const totalPrize = Object.entries(LOTTO_WINNER_PLACES).reduce((acc, currVal) => {
      const [place, cnt] = currVal;
      const prize = LOTTO_PRIZE[place];
      return acc + this.#results[cnt] * prize;
    }, 0);

    const profit = ((totalPrize / this.#payment) * PROFIT_RATE.PERCENT).toFixed(PROFIT_RATE.FIXED);
    return profit;
  }
}

module.exports = LotteryGame;
