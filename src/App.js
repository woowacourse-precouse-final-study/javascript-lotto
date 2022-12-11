const MissionUtils = require("@woowacourse/mission-utils");
const Controller = require('../src/Controller')


class App {
  constructor () {
    this.controller = new Controller();
  }
  play () {
    this.controller.askLottoPurchaseAmount();
  }
}
const app = new App()
app.play()
    
module.exports = App;
