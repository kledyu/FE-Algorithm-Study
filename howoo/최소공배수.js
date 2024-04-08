// 두 수의 최대공약수를 계산하는 함수
// 유클리드의 호제법 사용
function calculateGDC(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 재귀 사용하여 최대공약수 구하기
function recursionGDC(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// 두수의 최소공배수를 구하는 함수
function calculateLCM(a, b) {
  return (a * b) / calculateGDC(a, b);
}

// 배열의 모든 수의 최소공배수
function findLCM(arr) {
  let lcm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lcm = calculateLCM(lcm, arr[i]);
  }
  return lcm;
}
