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
    });
  }
}

module.exports = Controller;
