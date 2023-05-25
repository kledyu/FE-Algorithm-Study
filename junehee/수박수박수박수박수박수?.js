function solution(n) {
    let answer = '수박'.repeat(Math.ceil(n / 2))
    return n % 2 ? answer.slice(0, -1) : answer
}