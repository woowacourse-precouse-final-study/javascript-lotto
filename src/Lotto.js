class Lotto {
	#numbers;

	constructor(numbers) {
		this.validate(numbers);
		this.#numbers = numbers;
	}

	validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
	}

	get numbers() {
		return this.#numbers;
	}

	checkResult(winning_number, bonus_number) {
		let cnt = 0;
		let isBonus = false;

		this.#numbers.map(num => {
			if (winning_number.includes(num)) {
				cnt += 1;
			}
		});

		if (cnt === 5 && this.#numbers.includes(bonus_number)) {
			isBonus = true;
		}

		return isBonus ? 'bonus' : cnt;
	}

	// TODO: 추가 기능 구현
}

module.exports = Lotto;
