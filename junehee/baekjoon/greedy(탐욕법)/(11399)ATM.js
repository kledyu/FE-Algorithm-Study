let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);   // ATM 이용하는 사람의 수
let num = input[1].split(" ");    // ATM 이용에 걸리는 시간을 담는 배열
let p = num.map(v => Number(v)).sort((a, b) => a - b);    // 시간을 오름차순으로 정렬

let time = 0;   // 한 사람이 기다리는 시간
let total = 0;  // 모든 사람이 기다리는 시간 총합

for (let i = 0; i < n; i++) {
  time += p[i];
  total += time;
}

console.log(total);