function solution(progresses, speeds) {
  // 기능별 완료까지의 날
  const daysToComplete = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  ); // [5, 10, 1, 1, 20, 1]

  // 배포를 막고 있는 기능의 남은 날짜
  let blockingTask = daysToComplete[0];

  // 정답 배열
  const answer = [];

  // 배포 갯수
  let releaseCount = 0;

  daysToComplete.forEach((element) => {
    // 배포를 믹는 기능의 남은 일자가 현재 요소보다 크거나 같은 경우
    if (blockingTask >= element) {
      releaseCount++;

      // 배포를 막는 기능의 남은 일자가 현재 요소보다 작은 경우
    } else {
      // 새롭게 기능 막는 요소를 설정
      blockingTask = element;

      // 정답에 지금까지 배포 카운트 push
      answer.push(releaseCount);

      // 배포 숫자 1로 초기화
      releaseCount = 1;
    }
  });

  // 반복문이 종료 된 후 남아있는 배포 수 정답에 push
  answer.push(releaseCount);

  return answer;
}
