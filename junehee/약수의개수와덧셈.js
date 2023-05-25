function solution(left, right) {
  let sum = 0;

  for(let i = left; i <= right; i++) {
    let divisor = [];

    for (let j = 1 ; j <= i; j++) {
      if (i % j === 0) {
        divisor.push(j)
      }
    }

    divisor.length % 2 === 0 
      ? sum += i 
      : sum -= i
  }

  return sum;
}