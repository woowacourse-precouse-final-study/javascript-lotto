const { 
  isDuplicateNumber,
  isNumberLengthCheck,
} = require('./Controllers/Validate');
const { 
  compareLottoNumber,
  calcLottoResultMoney,
} = require('./Controllers/CalcLotto');
const { 
  printResultHeader,
  printLottoCountResult,
} = require('./Views/OutputView');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = String(numbers);
    this.lottoResult = [0,0,0,0,0];
  }

  getLottoNumber() {
    return this.lottoResult;
  }

  lottoResultCalc() {
    printResultHeader();
    printLottoCountResult(this.lottoResult);
    return calcLottoResultMoney(this.lottoResult);
  }

  checkJackpotLotto(lottoInfo, BonusNumber) {
    lottoInfo.forEach((lotto) => {
      let correctCount = compareLottoNumber(String(lotto).split(','), this.#numbers.split(','));
      if (correctCount === '0') return;
      this.calcLottoResultCount(correctCount, lotto, this.lottoResult, BonusNumber);
    });
  }

  calcLottoResultCount(correctCount, lotto, lottoResult, BonusNumber) {
    switch(true){
      case correctCount === 5:
        if (lotto.includes(Number(BonusNumber))) {
          lottoResult[3]++;
          break;
        }
        lottoResult[2]++;
        break;
      case correctCount === 6:
        lottoResult[4]++;
        break;
      default:
        lottoResult[correctCount - 3]++;
        break;
    }
  }
  validate(numbers) {
    isDuplicateNumber(numbers);
    isNumberLengthCheck(numbers);    
  }
}

module.exports = Lotto;
