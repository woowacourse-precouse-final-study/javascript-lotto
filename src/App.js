const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
	play() {
		Console.readLine('구입금액을 입력해 주세요.\n', received_money => {
			this.validateAmount(+received_money);
		});
	}
	validateAmount(money) {
		if (typeof money !== 'number' || isNaN(money)) {
			throw Error('[ERROR] 유효한 숫자를 입력해주세요.');
		}
		if (money < 1000) {
			throw Error('[ERROR] 1000원 이상의 금액을 입력해주세요');
		}
		if (money % 1000 !== 0) {
			throw Error('[ERROR] 1000원 단위로 금액을 입력해주세요.');
		}
	}
}

module.exports = App;
