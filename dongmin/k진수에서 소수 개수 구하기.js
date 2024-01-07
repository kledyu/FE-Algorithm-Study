function solution(n, k) {
  let answer = 0;

  // 2부터 소수가 존재하므로 1보다 큰 수 남기기
  const numbers = n
    .toString(k)
    .split("0")
    .filter((v) => v && Number(v) > 1);

  numbers.forEach((num) => {
    num = Number(num);
    let flag = true;

    // 소수 여부 판별
    for (let i = 2; i * i <= num; i += 1) {
      if (!(num % i)) {
        flag = false;
        break;
      }
    }

    // 소수이면 answer + 1
    answer += flag ? 1 : 0;
  });

  return answer;
}
