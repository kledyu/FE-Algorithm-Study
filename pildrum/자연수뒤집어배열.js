function solution(n) {
  // 자연수 n을 문자열로 변환
  // split으로 각각을 원소로 가지는 배열로 변환
  // reverse로 정렬 순서 반대로 바꿈
  // map으로 돌면서 원소들을 숫자로 변환
  return String(n).split('').reverse().map(Number)
}