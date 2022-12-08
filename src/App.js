const LottoGame = require("./LottoGame");

class App {
  play() {
    const lottoGame = new LottoGame();
    lottoGame.handleLottoAmount();
  }
}

const app = new App()
app.play();

module.exports = App;
