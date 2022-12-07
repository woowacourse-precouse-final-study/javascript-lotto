const LotteryGame = require('../model/Game');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputVIew');
const { Console } = require('@woowacourse/mission-utils');

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
    this.drawWinningNumber();
  }

  drawWinningNumber() {
    this.view.input.readWinningNumber(winningNumber => {
      this.model.setWinningNumber(winningNumber);
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    this.view.input.readBonusNumber(bonusNumber => {
      this.model.setBonusNumber(bonusNumber);
    });
  }
}

module.exports = Controller;
