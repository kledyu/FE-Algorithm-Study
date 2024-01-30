// 기사단원의 무기
function countDivisors(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) { // Math.squrt(n)말고 n 했더니 시간초과 나와서 수정함.
    if (n % i === 0) {
      count++;

      if (i !== n / i) {
        count++;
      }
    }
  }

  return divisorCount;
}

function solution(number, limit, power) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(countDivisors(i + 1));
  }

  const answer = array
    .map((element) => (element > limit ? power : element))
    .reduce((acc, curr) => acc + curr, 0);

  return answer;
}

// 소수 찾기
// 에라토스 뭐시기 사용해야 되더라고요.
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}
