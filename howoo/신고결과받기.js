function solution(id_list, report, k) {
  // 중복신고 제거
  const reportSet = [...new Set(report)];

  // reportCount = { muzi: 0, frodo: 0, apeach: 0, neo: 0 } 초기화
  const reportCount = {};
  id_list.forEach((user) => (reportCount[user] = 0));

  // 신고받은 유저 카운트 증가
  // reportCount = { muzi: 1, frodo: 2, apeach: 0, neo: 2 }
  reportSet.forEach((element) => {
    const [from, to] = element.split(' ');
    reportCount[to]++;
  });

  // mailSent = { muzi: 0, frodo: 0, apeach: 0, neo: 0 } 초기화
  const mailSent = {};
  id_list.forEach((id) => (mailSent[id] = 0));

  // 신고 횟수 초과시 메일 수 증가
  // mailSent = { muzi: 2, frodo: 1, apeach: 1, neo: 0 }
  reportSet.forEach((repoert) => {
    const [from, to] = repoert.split(' ');
    if (reportCount[to] >= k) {
      mailSent[from]++;
    }
  });

  // 객체의 value값 배열로
  return Object.values(mailSent);
}
