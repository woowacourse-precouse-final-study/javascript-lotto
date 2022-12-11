/** 상수를 관리하는 역할을 한다 */
const LOTTO_PRICE_UNIT = 1000;
const RANDOM_RANGE_NUM = {
  minInclusive : 1,
  maxInclusive : 45,
  numberCount : 6
};

const INPUT_MESSAGE = {
  buyLottoMessage : "구입금액을 입력해 주세요.\n",
  winningNumbersMessage : "\n당첨 번호를 입력해 주세요.\n",
  bonusNumberMessage : "\n보너스 번호를 입력해 주세요.\n",
};


const OUTPUT_MESSAGE = {
  purchaseQuantityMessage : (num) => `\n${num}개를 구매했습니다.`,

}

module.exports = {INPUT_MESSAGE, RANDOM_RANGE_NUM, LOTTO_PRICE_UNIT,OUTPUT_MESSAGE}