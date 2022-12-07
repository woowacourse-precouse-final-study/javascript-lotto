const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../model/Lotto');

class LotteryGame {
  #payment;
  #lottoTickets = [];
  #winningNumber;
  #bonusNumber;

  setPayment(payment) {
    this.#payment = payment;
  }

  setWinningNumber(winningNumber) {
    this.#winningNumber = winningNumber;
  }

  setBonusNumber(bonusNumber) {
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
}

module.exports = LotteryGame;
