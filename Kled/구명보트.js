function solution(people, limit) {
    let answer = 0;

    // 가장 가벼운 사람의 인덱스
    let lightIdx = 0;

    // 가장 무거운 사람의 인덱스
    let heavyIdx = people.length - 1

    // 오름차순 정렬
    people.sort((a, b) => a - b);

    // 모든 탐색을 끝마칠 때까지
    while (lightIdx <= heavyIdx) {
        if (people[lightIdx] + people[heavyIdx] <= limit) {
            lightIdx += 1
            heavyIdx -= 1
        } else heavyIdx -= 1
        
        answer += 1
    }
    
    return answer;
}
