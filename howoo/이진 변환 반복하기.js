function solution(s) {
  let zeroCount = 0;
  let procedures = 0;

  while (s !== '1') {
    // 0의 갯수
    zeroCount += (s.match(/0/g) || []).length;

    // 0삭제, 길이를 2진수로 변경
    s = s.replace(/0/g, '').length.toString(2);

    // while문 실행 횟수 증가
    procedures++;
  }
  return [procedures, zeroCount];
}
