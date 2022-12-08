const { Random } = require("@woowacourse/mission-utils");

const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const LOTTO_NUMBER_SIZE = 6;

function LottoRandomNumberGenerator(lottoCount) {
  let randomLotto = [];
    
  for (let i = 0; i < lottoCount; i++) {
    let lottoNumber = Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_NUMBER_SIZE);
    randomLotto.push(lottoNumber);
  }
  return randomLotto;
}

module.exports = LottoRandomNumberGenerator;
