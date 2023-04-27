function solution(n) {
  // 만약 n이 121이라면 121의 제곱근을 sqrt로 구하고,
  // floor로 만든 정수를 pow 함수로 제곱을 한 값이 n과 일치하면
  if (n === Math.pow(Math.floor(Math.sqrt(n)), 2)) {
    // 121의 제곱근에 1을 더한 값의 정수를 구하고 pow 함수로 제곱을 한 값을 반환
    return Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
  } else {
    // 저 조건에 부합하지 않으면 -1 반환
    return -1;
  }
}
