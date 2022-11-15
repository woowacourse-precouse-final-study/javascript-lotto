const ERROR_MESSAGE = {
	VALID_NUMBER: '[ERROR] 유효한 숫자를 입력해주세요.',
	VALID_PAYMENT: {
		AMOUNT: '[ERROR] 1000원 이상의 금액을 입력해주세요',
		UNIT: '[ERROR] 1000원 단위로 금액을 입력해주세요.',
	},
	VALID_LOTTO: {
		LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
		RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
		DUPLICATE: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
	},
	VALID_BONUS: {
		DUPLICATE: '[ERROR] 당첨번호에 없는 숫자를 입력해주세요.',
	},
};

module.exports = {
	ERROR_MESSAGE,
};
