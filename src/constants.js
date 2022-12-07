const INPUT_MESSAGE = {
  GET_PAYMENT: '구입금액을 입력해 주세요.\n',
  GET_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  GET_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGE = {
  LOTTO_QUANTITY(quantity) {
    return `\n${quantity}개를 구매했습니다.`;
  },
  LOTTO_TICKET(lotto) {
    return `[${lotto.join(', ')}]`;
  },
  LOTTO_TICKETS(lottos) {
    return this.LOTTO_QUANTITY(lottos.length) + '\n' + lottos.map(lotto => this.LOTTO_TICKET(lotto)).join('\n');
  },
  RESULT(results) {
    const resultStr = Object.entries(LOTTO_WINNER_PLACES)
      .map(([place, cnt]) => {
        const correctNumberStr = cnt === 'bonus' ? '5개 일치, 보너스 볼 일치' : `${cnt}개 일치`;
        const prize = LOTTO_PRIZE[place].toLocaleString();
        const count = results[cnt];
        return `${correctNumberStr} (${prize}원) - ${count}개`;
      })
      .join('\n');

    return '\n당첨 통계\n---\n' + resultStr;
  },
  PROFIT(profit) {
    return `\n총 수익률은 ${profit}%입니다.`;
  },
};

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

const LOTTO = {
  PRICE: 1000,
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
  PROFIT_RATE: {
    PERCENT: 100,
    FIXED: 1,
  },
};

const LOTTO_WINNER_PLACES = {
  FIFTH: 3,
  FOURTH: 4,
  THIRD: 5,
  SECOND: 'bonus',
  FIRST: 6,
};

const LOTTO_PRIZE = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  LOTTO,
  LOTTO_PRIZE,
  LOTTO_WINNER_PLACES,
};
