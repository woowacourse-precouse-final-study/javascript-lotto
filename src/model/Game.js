const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../model/Lotto');

class LotteryGame {
  #payment;
  #lottoTickets = [];
  #winningNumber;
  #bonusNumber;
  #results;

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

  generateResult() {
    const answerCountArr = this.#lottoTickets.map(ticket =>
      ticket.checkLottoResult(this.#winningNumber, this.#bonusNumber),
    );
    const results = [0, 0, 0, 0, 0];

    answerCountArr.map(cnt => {
      switch (cnt) {
        case 3:
          results[0] += 1;
          break;
        case 4:
          results[1] += 1;
          break;
        case 5:
          results[2] += 1;
          break;
        case 'bonus':
          results[3] += 1;
          break;
        case 6:
          results[4] += 1;
          break;
      }
    });

    this.#results = results;
    return this.#results;
  }

  generateProfitRate() {
    const prize = [5000, 50000, 1500000, 3000000, 2000000000];
    let totalPrize = 0;

    for (let i = 0; i < this.#results.length; i++) {
      totalPrize += this.#results[i] * prize[i];
    }

    const profit = ((totalPrize / this.#payment) * 100).toFixed(1);
    return profit;
  }
}

module.exports = LotteryGame;
