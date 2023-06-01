const solution = (n, m) => {
    let answer = [];
    
    let min = Math.min(n, m)
    let max = Math.max(n, m)
    
    // 1. min을 하나씩 줄여가며 `최대` 공약수를 찾는다.
    for (let i = min; i > 0; i--) {
        // 2. 최대 공약수를 찾았다면, 두 수의 곱을 최대 공약수로 나눈다!
        if (max % i === 0 && min % i === 0) {
            answer.push(i)
            answer.push(n * m / i)
            // 3. 반복문 종료
            break
        }
    }
    
    return answer;
}
