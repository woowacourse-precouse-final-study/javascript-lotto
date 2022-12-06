const Controller = require('./controller/Controller');

class App {
  play() {
    const controller = new Controller();
    controller.pay();
  }
}

module.exports = App;

const app = new App();
app.play();
