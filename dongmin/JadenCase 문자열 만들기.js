function solution(s) {
  const strArr = s.split(' ');
  const answer = strArr.map((string) => {
      // 빈 문자면 바로 반환
      if (!string) {
        return string;
      }

      // 첫 글자와 나머지 글자를 분리
      // 첫 글자는 대문자로, 나머지 글자는 소문자로 변환
      const [first, ...rest] = string;
      string = [
        first.toUpperCase(),
        ...rest.map((text) => text.toLowerCase()),
      ].join('');
    
      return string;
    }).join(' ');

  return answer;
}
