// 정규표현식 공부가 필요한거같아요.
// .match() 메소드랑 정규표현식 사용하면 간단하게 원하는 배열 만들 수 있네요.
// 시간 초과해서 정답 중에 가장 직관적인거 최적화 시켰어요.

function solution(dartResult) {
  const reg = /[\d]+[SDT][*#]?/g;
  // [\d]+ : 1개 이상 연속된 숫자, [\d{1,}]과 동일
  // [SDT] : S or D or T 일치하는 1개의 문자
  // [*#]? : * or # 일치하는 1개의 문자, 있어도 되고 없어도 된다.

  const round = dartResult.match(reg);
  // '1S*2T3S#'.match(reg) => ['1S*', '2T', '3S#']

  const result = [];
  // 각 라운드마다의 점수가 담길 배열

  for (let i = 0; i < round.length; i++) {
    const number = Number(round[i].match(/[\d]+/g)[0]);
    // '1S*'.match(/[\d]+/g) => ['1']

    const bonus = round[i].match(/[SDT]/g)[0];
    // '1S*'.match(/[SDT]/g) => ['S']

    const option = round[i].match(/[*#]/g) ? round[i].match(/[*#]/g)[0] : null;
    // option이 있는 경우 옵션값을 넣고 없다면 null

    let bonusedNumber;
    // 보너스 점수(number와 보너스를 계산한 값) 변수 선언

    switch (bonus) {
      case 'S':
        bonusedNumber = number;
        break;
      case 'D':
        bonusedNumber = number ** 2;
        break;
      case 'T':
        bonusedNumber = number ** 3;
        break;
    }

    result.push(bonusedNumber);
    // 보너스계산된 점수를 일단 result배열에 넣는다.

    switch (option) {
      case '*':
        if (i > 0) {
          // i === 0인 경우 [i - 1] 이 [-1]이여서 해당 조건이 필요함
          result[i - 1] *= 2;
        }
        result[i] *= 2;
        break;
      case '#':
        result[i] *= -1;
        break;
    }
  }

  return result.reduce((acc, cur) => acc + cur, 0);
}
