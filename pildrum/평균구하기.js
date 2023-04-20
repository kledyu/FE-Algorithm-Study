function solution(arr) {
  let answer = 0;
  const sum = arr.reduce((accom, currValue) => accom + currValue, 0);
  answer = sum / arr.length;
  return answer;
}

function sol(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

function solu(arr) {
  let answer = 0;
  arr.forEach(function (item) {
    answer += item;
  });
  return answer / arr.length;
}
