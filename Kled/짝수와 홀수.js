const solution = (num) => {
  // 삼항연산자 사용
  // 조건 값이 Truthy면 물음표 뒤 표현식 실행 / Fasly(0)면 콜론 뒤 표현식 실행
  return num % 2 ? "Odd" : "Even";
};
