const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../model/Lotto');

class LotteryGame {
  #payment;
  #lottoTickets = [];

  setPayment(payment) {
    this.#payment = payment;
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

    return this.#lottoTickets.map(tickets => tickets.getLottoNumbers());
  }
}

module.exports = LotteryGame;
