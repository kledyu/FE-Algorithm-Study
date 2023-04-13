function solution(num) {
  var answer = ["Even", "Odd"];

  if (num % 2 === 0 || num === 0) {
    return answer[0];
  } else {
    return answer[1];
  }
}

solution();


// 다른 사람 풀이

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

function evenOrOdd(num) {
  return (num % 2 == 0)? "Even" : "Odd";
}
