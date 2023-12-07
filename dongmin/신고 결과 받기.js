function solution(id_list, report, k) {
  const data = {};
  const count = {};
  const stopped = [];

  // data -> 신고자 : [신고 목록(중복 제외)]
  // count -> 피신고자 : 신고 횟수
  id_list.forEach((name) => {
    data[name] = [];
    count[name] = 0;
  });

  // report를 순회 돌면서 data와 count를 채움
  // 한 신고자는 피신고자를 중복해서 할당하지 못하도록 설정
  report.forEach((item) => {
    const [reporter, reported] = item.split(' ');
    if (!data[reporter].includes(reported)) {
      data[reporter].push(reported);
      count[reported] += 1;
    }
  });

  // 신고 횟수가 k회 이상인 피신고자는 stopped 배열에 담음
  Object.values(count).forEach((num, index) => {
    if (num >= k) {
      stopped.push(Object.keys(count)[index]);
    }
  });

  // 신고 목록에 있는 사람이 stopped에 포함되어 있으면
  // 포함된 사람당 메일을 1개씩 담음
  const result = Object.values(data).map((reported) => {
    let mails = 0;
    for (let i = 0; i < reported.length; i += 1) {
      if (stopped.includes(reported[i])) {
        mails += 1;
      }
    }
    return mails;
  });

  return result;
}
