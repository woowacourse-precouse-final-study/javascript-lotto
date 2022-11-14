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

			Console.readLine('\n당첨 번호를 입력해 주세요.\n', numbers => {
				const winning_number = this.validateWinningNumber(numbers);

				Console.readLine('\n보너스 번호를 입력해 주세요.\n', number => {
					const bonus_number = this.validateBonusNumber(number, winning_number);
				});
			});
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

	validateWinningNumber(numbers) {
		if (numbers.split(',').length !== 6) {
			throw Error('[ERROR] , 로 구분 6개의 숫자를 입력해주세요.');
		}
		const numberList = numbers.split(',').map(str => +str);

		numberList.map((number, idx) => {
			if (typeof number !== 'number') {
				throw Error('[ERROR] 숫자를 입력해주세요.');
			}
			if (number < 1 && number > 45) {
				throw Error('[ERROR] 1부터 45 사이의 번호를 입력해주세요.');
			}
			if (numberList.slice(idx + 1).includes(number)) {
				throw Error('[ERROR] 중복된 숫자가 있습니다.');
			}
		});

		return numberList;
	}

	validateBonusNumber(number, winning) {
		if (typeof +number !== 'number' || isNaN(+number)) {
			throw Error('[ERROR] 숫자를 입력해주세요.');
		}
		if (number < 1 && number > 45) {
			throw Error('[ERROR] 1부터 45 사이의 번호를 입력해주세요.');
		}

		if (winning.includes(number)) {
			throw Error('[ERROR] 당첨번호 6개에 없는 숫자를 입력해주세요.');
		}

		return +number;
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
