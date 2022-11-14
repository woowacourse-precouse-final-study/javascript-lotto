const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
	#payment;

	play() {
		this.getPayment();
	}

	playRest(lotto_cnt) {
		const lottos = this.generateLottos(lotto_cnt);
		lottos.map(loto => Console.print(loto));

		Console.readLine('\n당첨 번호를 입력해 주세요.\n', numbers => {
			const winning_number = this.validateWinningNumber(numbers);

			Console.readLine('\n보너스 번호를 입력해 주세요.\n', number => {
				const bonus_number = this.validateBonusNumber(number, winning_number);
				const answerCountArr = [];

				lottos.map(lotto => {
					const answerCnt = this.countAnswers(lotto, winning_number, bonus_number);
					answerCountArr.push(answerCnt);
				});

				const result = this.generateAnswer(answerCountArr);
				this.printResult(result);

				this.printProfit(result, this.#payment);
				Console.close();
			});
		});
	}

	getPayment() {
		Console.readLine('구입금액을 입력해 주세요.\n', received_money => {
			this.validateAmount(+received_money);
			this.#payment = received_money;

			this.printPurchaseQuantity();
		});
	}

	printPurchaseQuantity() {
		const quantity = this.#payment / 1000;
		Console.print(`\n${quantity}개를 구매했습니다.\n`);

		this.playRest(quantity);
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

	countAnswers(lotto, winning, bonus) {
		let cnt = 0;
		let isBonus = false;

		lotto.map(num => {
			if (winning.includes(num)) {
				cnt += 1;
			}
		});

		if (cnt === 5 && lotto.includes(bonus)) {
			isBonus = true;
		}

		return isBonus ? 'bonus' : cnt;
	}

	generateAnswer(arr) {
		const result = [0, 0, 0, 0, 0];

		arr.map(cnt => {
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

		return result;
	}

	printResult(result) {
		const [place5, place4, place3, place2, place1] = result;
		const resultMessage = `3개 일치 (5,000원) - ${place5}개\n4개 일치 (50,000원) - ${place4}개\n5개 일치 (1,500,000원) - ${place3}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${place2}개\n6개 일치 (2,000,000,000원) - ${place1}개
    `;

		Console.print(resultMessage);
	}

	printProfit(result, money) {
		const prize = [5000, 50000, 1500000, 3000000, 2000000000];
		let totalPrize = 0;

		for (let i = 0; i < result.length; i++) {
			totalPrize += result[i] * prize[i];
		}

		const profit = ((totalPrize / money) * 100).toFixed(1);

		Console.print(`총 수익률은 ${profit}%입니다.`);
	}
}

module.exports = App;
