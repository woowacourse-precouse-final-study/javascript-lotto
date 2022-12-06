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

  getMoney() {
    this.view.input.readPayment(payment => {
      this.model.setPayment(payment);
      this.purchaseLotteryTickets();
    });
  }

  purchaseLotteryTickets() {
    const lottos = this.model.generateLottoTickets();
    this.view.output.printLottoTickets(lottos);
  }
}

module.exports = Controller;
