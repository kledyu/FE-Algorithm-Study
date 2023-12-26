function solution(want, number, discount) {
  let count = 0;
  const DISCOUNT_DAYS = 10;

  // 첫 날부터 하루씩 증가시키며 10일치 할인 품목 검증
  for (let i = 0; i <= discount.length - DISCOUNT_DAYS; i += 1) {
    let flag = true;
    const newDiscount = discount.slice(i, i + DISCOUNT_DAYS);
    const hash = {};

    // 원하는 품목이 하나라도 10일동안 할인하지 않으면 다음날로 이동
    if (!want.every((item) => newDiscount.includes(item))) {
      continue;
    }

    // 10일동안의 할인 품목에 대한 hash 구성
    newDiscount.forEach((item) => {
      hash[item] ? (hash[item] += 1) : (hash[item] = 1);
    });

    // 10일동안 할인하는 각 품목별 수가 원하는 수보다 적은 경우가 있으면
    // flag를 false로 만들고 검증 종료
    for (let j = 0; j < want.length; j += 1) {
      const wantItem = want[j];
      const wantNum = number[j];

      if (wantNum > hash[wantItem]) {
        flag = false;
        break;
      }
    }

    // 모든 검증이 통과되어 flag가 true인 경우 count + 1
    if (flag) count += 1;
  }

  return count;
}
