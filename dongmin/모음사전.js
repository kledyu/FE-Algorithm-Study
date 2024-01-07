function solution(word) {
  const arr = ['A', 'E', 'I', 'O', 'U'];

  // arr 배열에 있는 각 요소마다 AEIOU를 하나씩 붙여 모든 단어를 만듬
  for (let n = 0; n < 4; n += 1) {
    arr.forEach((alp) => {
      for (let i = 0; i < 5; i += 1) {
        arr.push(alp + 'AEIOU'[i]);
      }
    });
  }

  // 중복을 제거한 arr 배열을 사전순 정렬해 인덱스를 구함
  return [...new Set(arr)].sort().indexOf(word) + 1;
}
