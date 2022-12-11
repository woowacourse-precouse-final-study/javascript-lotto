const {Random} = require("@woowacourse/mission-utils");
const {RANDOM_RANGE_NUM : {minInclusive,maxInclusive,numberCount}} = require('./Constant');

const LottoRandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(minInclusive,maxInclusive,numberCount);
  }
};

module.exports = LottoRandomNumberGenerator;