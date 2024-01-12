function solution(fees, records) {
  const answer = [];
  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;

  // { 차량 번호 : 시간 } 의 형태로 해시 생성
  const hash = records.reduce((acc, cur) => {
    const [time, number, _] = cur.split(" ");
    const carNumber = Number(number);
    acc[carNumber] = [...(acc[carNumber] || []), time];
    return acc;
  }, {});

  // 시간을 모두 분으로 환산하는 함수
  const getMinutes = (string) => {
    const [hour, minute] = string.split(":");
    return Number(hour) * 60 + Number(minute);
  };

  // 각 해시의 키가 차량 번호이므로 사전순으로 정렬됨
  Object.keys(hash).forEach((number) => {
    let used = 0;

    // 차량의 출입 기록이 홀수면 23:59 출차기록을 추가함
    if (hash[number].length % 2) {
      hash[number] = [...hash[number], "23:59"];
    }

    // 출차 시간(홀수 인덱스)에서 입차 시간(짝수 인덱스)를 뺀 수를 used에 합산
    for (let i = 0; i < hash[number].length; i += 1) {
      if (i % 2) {
        used += getMinutes(hash[number][i]) - getMinutes(hash[number][i - 1]);
      }
    }

    // used를 기준으로 요금을 계산
    const fee =
      used <= 기본시간
        ? 기본요금
        : 기본요금 + Math.ceil((used - 기본시간) / 단위시간) * 단위요금;

    answer.push(fee);
  });

  return answer;
}
