const LotteryGame = require('../model/Game');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputVIew');

class Controller {
  constructor() {
    this.model = new LotteryGame();
    this.view = {
      input: InputView,
      output: OutputView,
    };
  }

  pay() {
    this.view.input.readPayment(payment => {
      this.model.setPayment(payment);
      this.purchase();
    });
  }

  purchase() {
    const purchase_quantity = this.model.generatePurchaseQuantity();
    this.view.output.printPurchaseQuantity(purchase_quantity);
  }
}

module.exports = Controller;
