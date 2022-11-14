## 로직분리

- App
  - state
    - ✅ 구입금액 : payment
    - ✅ 로또번호들 : lottos
    - ✅ 당첨번호 : winning_number
    - ✅ 보너스번호 : bonus_number
    - ✅ 당첨결과 : result
    - 수익률 : profit_rate
  - method
    - ✅ 시작 : play
    - ✅ 금액 입력받기 : getPayment
    - ✅ 로또 구매개수 출력 : printPurchaseQuantity
    - ✅ 로또 발행 : generateLottos
    - ✅ 당첨번호 입력받기 : getWinningNumeber
    - ✅ 보너스번호 입력받기 : getBonusNumber
    - ✅ 당첨결과 도출 : generateResult
    - ✅ 당첨결과 출력 : printResult
    - ✅ 수익률 출력 : printProfitRate
    - ✅ 종료 : close

- Lotto 
  - state : 
    - numbers (로또 1장의 6자리 번호 : instance 생성시 인자로 넘어옴) -> private
    - result
  - method
    - 번호 유효성 체크 : validate(numbers)
    - ✅ 번호 출력 : get(numbers)
    - ✅ 당첨내역 확인 : checkResult(numbers, winning)

- constants
  - 에러 메세지
  - 입력 메세지


- utils
  - console.readline
  - 개행
  - string to number
  - validation 
    - number
