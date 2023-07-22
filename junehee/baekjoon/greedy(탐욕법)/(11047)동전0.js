let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input === ["10 4790", "1", "5", "10", "50", "100", "500", "1000", "5000", "10000", "50000"];

let n = Number(input[0].split(" ")[0]);     // 10
let k = Number(input[0].split(" ")[1]);     // 4790

let coin = [];    // 동전을 넣을 배열
let count = 0;    // 동전의 최종 개수

// 동전 배열에 값이 큰 순서대로 push
for (let i = n; i >= 1; i--) {
  coin.push(Number(input[i]));
}

// 만들어야 할 값 K를 동전으로 나누어 떨어지는 만큼 count 추가
// k를 동전으로 나눈 뒤 나머지 값으로 재할당
for (let i = 0; i < coin.length; i++) {
  count += ~~(k / coin[i]);
  k %= coin[i];
}

console.log(count);