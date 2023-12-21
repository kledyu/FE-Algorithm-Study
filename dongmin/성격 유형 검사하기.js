function solution(survey, choices) {
  const obj = { A: 0, N: 0, C: 0, F: 0, M: 0, J: 0, R: 0, T: 0 };
  const arr = ['RT', 'CF', 'JM', 'AN'];

  // 각 테스트에서 앞글자는 n(negative), 뒷글자는 p(positive)로 할당
  // 1~7점인 점수에서 4를 빼 -3~3점이 되도록 만들고 양수, 음수로 구분
  survey.forEach((test, idx) => {
    const [n, p] = test;
    const score = choices[idx] - 4;
    if (score > 0) {
      obj[p] += score;
    } else if (score < 0) {
      obj[n] -= score;
    }
  });

  // arr 배열에 미리 각 유형을 사전순으로 담아 인덱싱 과정을 생략
  // 두 유형의 점수가 같으면 앞 유형을 선택하고 그 외에는 큰 점수의 유형 선택
  const answer = arr
    .map((text) => {
      const [first, second] = text;
      if (obj[first] === obj[second]) {
        return first;
      } else {
        return obj[first] > obj[second] ? first : second;
      }
    })
    .join('');

  return answer;
}
