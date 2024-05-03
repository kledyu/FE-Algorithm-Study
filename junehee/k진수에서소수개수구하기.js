function solution(n, k) {
    let count = 0;
    
    const N = n.toString(k).split('0').map(el => Number(el));
    
    for (let i = 0; i < N.length; i++) {
        if (isPrime(N[i])) count++;
    }
    
    return count;
}

// 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}
