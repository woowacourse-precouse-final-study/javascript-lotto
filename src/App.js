const Controller = require('./controller/Controller');

class App {
  play() {
    const controller = new Controller();
    controller.getMoney();
  }
}

module.exports = App;

const app = new App();
app.play();
