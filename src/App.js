const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
	play() {
		Console.readLine('구입금액을 입력해 주세요.\n', received_money => {
			this.validateAmount(+received_money);

			const lotto_cnt = received_money / 1000;
			Console.print(`\n${lotto_cnt}개를 구매했습니다.\n`);

			const lottos = this.generateLottos(lotto_cnt);
      lottos.map(loto => Console.print(loto));
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

	generateLottos(cnt) {
		const lottos = [];

		Array(cnt)
			.fill(0)
			.map(() => {
				const random_number = Random.pickUniqueNumbersInRange(1, 45, 6);
				const sorted_random_number = random_number.sort((a, b) => a - b);
				const lotto = new Lotto(sorted_random_number);
				lottos.push(lotto.numbers);
			});

		return lottos;
	}
}

module.exports = App;
