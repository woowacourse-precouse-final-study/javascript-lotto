const InputView = require("./UI/InputView");

class App {
  play() {
    InputView.readLottoAmount();
  }
}

const app = new App()
app.play();

module.exports = App;
