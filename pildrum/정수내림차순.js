function solution(n) {
  let answer = 0;
  answer = Number(n.toString().split('').sort((a, b) => b - a).join(""));
  return answer;
}

// n을 문자열로 바꾸고, split으로 배열로 만들어준 뒤 sort로 내림차순으로 순서를
// 바꿔줌. 그 배열을 다시 join으로 문자열로 바꾸고, Number 생성자로 숫자로 변환