// 첫번째 해답
function solution1(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

// 두번째 해답
function solution2(num) {
  let answer = "";
  answer = num % 2 === 0 ? "Even" : "Odd";
  return answer;
}
