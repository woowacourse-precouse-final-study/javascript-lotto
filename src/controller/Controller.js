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
    this.view.input.readPayment(paymentInput => {
      this.model.setPayment(paymentInput);
      this.purchaseLotteryTickets();
    });
  }

  purchaseLotteryTickets() {
    const lottos = this.model.generateLottoTickets();
    this.view.output.printLottoTickets(lottos);
    this.drawWinningNumber();
  }

  drawWinningNumber() {
    this.view.input.readWinningNumber(winningNumberInput => {
      this.model.setWinningNumber(winningNumberInput);
      this.drawBonusNumber();
    });
  }

  drawBonusNumber() {
    this.view.input.readBonusNumber(bonusNumberInput => {
      this.model.setBonusNumber(bonusNumberInput);
      this.announceResult();
    });
  }

  announceResult() {
    const results = this.model.generateResult();
    this.view.output.printResult(results);
    this.announceProfitRate();
  }

  announceProfitRate() {
    const profit = this.model.generateProfitRate();
    this.view.output.printProfitRate(profit);
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = Controller;
