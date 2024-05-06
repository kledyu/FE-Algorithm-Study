// 소수 확인하는 함수
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function solution(n, k) {
  // k진수의 string으로 변환
  const convertedNumber = n.toString(k);

  // 0기준 split
  const splitted = convertedNumber.split('0');

  // 소수인 숫자만 필터링
  const primeNumbers = splitted.filter((number) => isPrime(number));

  return primeNumbers.length;
}

console.log(solution(110011, 10));
