function solution(a, b) {
       // 콜백 함수를 통해 이전 합과 a[i] * b[i]의 값을 더해서 새로운 합을 반환
       // 여기서 _는 일종의 placeholder로 실제로 사용되지 않는다.
    return a.reduce((acc, cur, i) => acc += a[i] * b[i], 0);
}
