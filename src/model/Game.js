class LotteryGame {
  #payment;

  setPayment(payment) {
    this.#payment = payment;
  }

  generatePurchaseQuantity() {
    return this.#payment / 1000;
  }
}

module.exports = LotteryGame;
