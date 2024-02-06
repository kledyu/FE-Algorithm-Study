function solution(n) {
    let answer = 0;

    // 1은 소수가 아니므로 2부터 시작, 소수로 판별됐을 때 카운트
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) answer++;
    }
    
    return answer;
}

// 소수 판별 함수
function isPrime(n) {
    // 1은 소수가 아니므로 false 리턴
    if (n === 1) return false;

    // 반복 횟수를 줄이기 위해 n의 제곱근으로 리미트 설정
    // n이 2로 나누어 떨어지고, n * i가 n이 아니면 소수가 아니므로 false 리턴
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n * i !== n) return false;
    }
    
    return true;
}
