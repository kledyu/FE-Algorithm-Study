function solution(citations) {
  let answer = 0;
  const sortedCitations = citations.sort((a, b) => a - b);
  const n = sortedCitations.length;

  // 논문의 H-index인 h는 n보다 클 수 없음
  // h의 크기를 키워가며 h회 이상 인용된 논문이 h개 이상인 경우 answer + 1
  for (let h = 1; h <= n; h += 1) {
    const filteredCitations = sortedCitations.filter((v) => v >= h);
    if (filteredCitations.length < h) {
      break;
    }
    answer += 1;
  }
  return answer;
}
