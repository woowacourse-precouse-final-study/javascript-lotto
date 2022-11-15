const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { numberValidation } = require('./utils');

class App {
	#payment;
	#lottos;
	#winning_number;
	#bonus_number;
	#result;

	play() {
		this.getPayment();
	}

	getPayment() {
		Console.readLine('구입금액을 입력해 주세요.\n', moneyStr => {
			this.validateAmount(moneyStr);

			this.printPurchaseQuantity();
		});
	}

	printPurchaseQuantity() {
		const quantity = this.#payment / 1000;
		Console.print(`\n${quantity}개를 구매했습니다.`);

		this.generateLottos(quantity);
	}

	generateLottos(cnt) {
		const lottos = [];

		Array(cnt)
			.fill(0)
			.map(() => {
				const random_number = Random.pickUniqueNumbersInRange(1, 45, 6);
				const sorted_random_number = random_number.sort((a, b) => a - b);
				const lotto = new Lotto(sorted_random_number);
				Console.print(`[${lotto.numbers.join(', ')}]`);
				lottos.push(lotto);
			});

		this.#lottos = lottos;

		this.getWinningNumber();
	}

	getWinningNumber() {
		Console.readLine('\n당첨 번호를 입력해 주세요.\n', numbersStr => {
			this.validateWinningNumber(numbersStr);
			this.getBonusNumber();
		});
	}

	getBonusNumber() {
		Console.readLine('\n보너스 번호를 입력해 주세요.\n', numberStr => {
			this.#bonus_number = this.validateBonusNumber(numberStr);
			this.generateResult();
		});
	}

	generateResult() {
		const answerCountArr = this.#lottos.map(lotto => lotto.checkResult(this.#winning_number, this.#bonus_number));
		const result = [0, 0, 0, 0, 0];

		answerCountArr.map(cnt => {
			switch (cnt) {
				case 3:
					result[0] += 1;
					break;
				case 4:
					result[1] += 1;
					break;
				case 5:
					result[2] += 1;
					break;
				case 'bonus':
					result[3] += 1;
					break;
				case 6:
					result[4] += 1;
					break;
			}
		});

		this.#result = result;

		this.printResult();
	}

	printResult() {
		const [place5, place4, place3, place2, place1] = this.#result;
		const resultMessage = `3개 일치 (5,000원) - ${place5}개\n4개 일치 (50,000원) - ${place4}개\n5개 일치 (1,500,000원) - ${place3}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${place2}개\n6개 일치 (2,000,000,000원) - ${place1}개
    `;

		Console.print(resultMessage);

		this.printProfitRate();
	}

	printProfitRate() {
		const prize = [5000, 50000, 1500000, 3000000, 2000000000];
		let totalPrize = 0;

		for (let i = 0; i < this.#result.length; i++) {
			totalPrize += this.#result[i] * prize[i];
		}

		const profit = ((totalPrize / this.#payment) * 100).toFixed(1);

		Console.print(`총 수익률은 ${profit}%입니다.`);
		this.close();
	}

	close() {
		Console.close();
	}

	validateAmount(moneyStr) {
		const money = numberValidation(moneyStr);

		if (money < 1000) {
			throw Error('[ERROR] 1000원 이상의 금액을 입력해주세요');
		}
		if (money % 1000 !== 0) {
			throw Error('[ERROR] 1000원 단위로 금액을 입력해주세요.');
		}

		this.#payment = money;
	}

	validateWinningNumber(numbersStr) {
		const numbers = numbersStr
			.replace(/\s/gi, '')
			.split(',')
			.map(str => numberValidation(str));

		const winning_lotto = new Lotto(numbers);

		this.#winning_number = winning_lotto.numbers;
		Console.print(this.#winning_number);
	}

	validateBonusNumber(numberStr) {
		const number = numberValidation(numberStr);

		if (number < 1 && number > 45) {
			throw Error('[ERROR] 1부터 45 사이의 번호를 입력해주세요.');
		}

		if (this.#winning_number.includes(number)) {
			throw Error('[ERROR] 당첨번호 6개에 없는 숫자를 입력해주세요.');
		}

		this.#bonus_number = number;
	}
}

module.exports = App;
