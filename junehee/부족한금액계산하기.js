function solution(price, money, count) {
  let answer = -1;
  let arr = [];

  for(let i = 1; i <= count; i++) {
    answer = price * i
    arr.push(answer)
  }

  let need = money - arr.reduce((acc, cur) => acc + cur)

  return need > 0 ? 0 : Math.abs(need)

}