const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = Object.freeze({
  lotto_amount: "구입금액을 입력해 주세요.\n",
  lotto_number: "\n당첨 번호를 입력해 주세요.\n",
  bonus_number: "\n보너스 번호를 입력해 주세요.\n",
});

const InputView = {
  readLottoAmount(lottoAmountCallback) {
    Console.readLine(INPUT_QUERY.lotto_amount, (amount) => {
      lottoAmountCallback(amount);
    });
  },

  readLottoNumber(lottoNumberCallback) {
    Console.readLine(INPUT_QUERY.lotto_number, (numbers) => {
      lottoNumberCallback(numbers.split(",").map((number) => Number(number)));
    });
  },

  readBonusNumber(bonusNumberCallback) {
    Console.readLine(INPUT_QUERY.bonus_number, (bonus) => {
      bonusNumberCallback(Number(bonus));
    });
  },
};

module.exports = InputView;
