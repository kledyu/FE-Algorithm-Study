function solution(scoville, K) {
    let answer = 0;
    
    // 1. 오름차순 정렬
    scoville.sort((a, b) => a - b);

    // 2. 가장 낮은 스코빌 지수가 K 값보다 작다면 반복
    while (scoville[0] < K) {
        let index = 0;
        // 3. 가장 낮은 두 개의 음식
        const mixed = scoville.shift() + scoville.shift() * 2;
        
        // 4. scoville 배열에 삽입하기 위에 인덱스 찾기
        while (scoville[index] < mixed) index += 1
        
        // 5. 배열에 삽입
        scoville.splice(index, 0, mixed)
        
        // 6. 횟수 추가
        answer += 1;
        
        // 7. 모든 음식을 섞을 때까지 조건을 만족하지 못한다면 -1 리턴
        if (scoville.length < 2 && scoville[0] < K) return -1;
    }

    return answer;
}

