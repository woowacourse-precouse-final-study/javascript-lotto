const { Console, Random } = require('@woowacourse/mission-utils');

const numberValidation = stringInput => {
	if (isNaN(stringInput) || isNaN(parseInt(stringInput))) {
		throw new Error('[ERROR] 유효한 숫자를 입력해주세요.');
	}

	return +stringInput;
};

const checkInRange = (startNum, endNum, numbersArr) => {
	let isInRange = true;

	numbersArr.map(num => {
		if (num < startNum || num > endNum) {
			isInRange = false;
		}
	});

	return isInRange;
};

const checkDuplicates = numbersArr => {
	let isDuplicate = false;

	numbersArr.map((num, idx) => {
		if (numbersArr.slice(idx + 1).includes(num)) {
			isDuplicate = true;
		}
	});

	return isDuplicate;
};

module.exports = {
	numberValidation,
	checkInRange,
	checkDuplicates,
};
