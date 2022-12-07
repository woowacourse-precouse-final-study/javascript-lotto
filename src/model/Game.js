const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../model/Lotto');
const { validatePayment, validateWinningNumber, validateBonusNumber } = require('../validation');
const {
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
    return this.#payment / 1000;
  }

  generateLottoTickets() {
    const quantity = this.calculateQuantity();
    Array(quantity)
      .fill(0)
      .map(_ => {
        const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        const lottoTicket = new Lotto(numbers);
        this.#lottoTickets.push(lottoTicket);
      });

    return this.#lottoTickets.map(ticket => ticket.getLottoNumbers());
  }

  generateResult() {
    this.#lottoTickets.map(ticket => {
      const result = ticket.checkLottoResult(this.#winningNumber, this.#bonusNumber);
      if (result < 3) return;
      this.#results[result] += 1;
    });

    return this.#results;
  }

  generateProfitRate() {
    let totalPrize = 0;

    Object.keys(LOTTO_WINNER_PLACES).map(place => {
      const correctNumberCount = LOTTO_WINNER_PLACES[place];
      const prize = LOTTO_PRIZE[place];
      totalPrize += this.#results[correctNumberCount] * prize;
    });
    
    const profit = ((totalPrize / this.#payment) * 100).toFixed(1);
    return profit;
  }
}

module.exports = LotteryGame;
