function solution(k, tangerine) {
    let answer = 0;

    // 빈 객체에 귤 크기별 개수 담기
    const tangerine_size = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    // 동일한 크기가 많은 순서로 정렬
    // [ 2, 2, 2, 1, 1 ]
    const sorted_tangerine = Object.values(tangerine_size).sort((a, b) => b - a);

    let sum = 0;
    while (sum < k) {
        sum += sorted_tangerine[answer]
        answer += 1;
    }
    
    return answer;
}
