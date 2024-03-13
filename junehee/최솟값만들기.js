// for 반복문 사용
function solution(A, B) {
    let answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i += 1) {
        answer += A[i] * B[i]
    }

    return answer;
}


// reduce 사용
function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    return A.reduce((acc, cur, idx) => acc + (cur * B[idx]), 0);
}
