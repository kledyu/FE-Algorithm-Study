// Today I learned
// 1. 숫자.toString(2); >> 2진수 문자열로 변환
// 2. (parseInt(2진수문자열, 2) >> 10진 숫자로 변환
// 3. 2진수 숫자의 사칙연산을 하려면 10진수로 바꾸고 계산해야함

function solution(n) {
  // n을 2진수로 변환
  // 78 >> 1001110
  const binary = n.toString(2);

  // n의 2진수에서 1 카운트
  // 1001110 >> 4
  const oneCount = binary.match(/1/g).length;

  // n에 1 더하고 2진수로 만듬
  // 79 >> 1001111
  // 1의 개수가 5개임
  let bi = (n + 1).toString(2);

  // 이 수에 1씩 더해가면서 1의 개수가 4가 되는 순간의 수를 return
  while (bi.match(/1/g).length !== oneCount) {
    bi = (parseInt(bi, 2) + 1).toString(2);
  }
  return parseInt(bi, 2);
}
