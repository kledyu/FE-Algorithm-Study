function solution(today, terms, privacies) {
  const result = [];
  privacies.forEach((file, index) => {
    const [startDate, thisType] = file.split(' ');
    const [startYear, startMonth, startDay] = startDate.split('.');
    const [todayYear, todayMonth, todayDay] = today.split('.');
    let range = 0;

    // 해당 개인정보의 약관종류에 따른 유효기간 구하기
    for (let i = 0; i < terms.length; ) {
      const [type, monthRange] = terms[i].split(' ');
      if (thisType === type) {
        range = monthRange;
        break;
      }
      i += 1;
    }

    // 개인정보 유효기간 종료 날짜
    const endDate = new Date(
      startYear,
      Number(startMonth) + Number(range) - 1,
      startDay,
    );

    // 오늘 날짜
    const todayDate = new Date(
      todayYear,
      Number(todayMonth) - 1,
      Number(todayDay) + 1,
    );

    // 오늘 날짜가 유효기간 종료 날짜보다 큰 경우 폐기
    if (todayDate > endDate) {
      result.push(index + 1);
    }
  });

  return result;
}
