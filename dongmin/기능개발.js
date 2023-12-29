function solution(progresses, speeds) {
  const answer = [];
  const MAX_PERCENTAGE = 100;
  const remainDays = progresses.map((day, idx) =>
    Math.ceil((MAX_PERCENTAGE - day) / speeds[idx])
  );

  while (remainDays.length) {
    let first = remainDays[0];
    let count = 1;

    // count : 가장 앞에 있는 기능이 완료 될 때 까지 배포가 지연되는 기능의 수
    while (first >= remainDays[count]) {
      count += 1;
    }

    // count 만큼 데이터를 앞에서부터 제거
    for (let i = 0; i < count; i += 1) {
      remainDays.shift();
    }

    answer.push(count);
  }

  return answer;
}
