const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_ERROR_MENTION } = require('../constant');

const Validate = {

  isValidateInputJackpotNumber(numbers) {
    this.isDuplicateNumber(numbers);
    this.isNumberLengthCheck(numbers);
  },

  isValidateInputMoney(money) {
    if (money % 1000 !== 0) {
      Console.close()
      throw new Error(LOTTO_ERROR_MENTION.money_size_thousand);
    }
  },
  
  isValidateBonusNumber(number) {
    if (0 > number || number > 45) {
      throw new Error(LOTTO_ERROR_MENTION.bonus_number_range);
    }
    if (number.length !== 1) {
      throw new Error(LOTTO_ERROR_MENTION.bonus_number_length);
    }
  },

  isDuplicateNumber(numbers) {
    const duplicateSet = new Set(numbers);
    if (numbers.length !== duplicateSet.size) {
      throw new Error(LOTTO_ERROR_MENTION.duplicate_lotto_number);
    }
  },

  isNumberLengthCheck(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MENTION.lotto_number_length);
    }
  },
}

module.exports = Validate;
