function solution(priorities, location) {
    let count = 1;
    let index = 0;
    let isFind = false;
    const LENGTH = priorities.length;
    // priorities 복사 후 내림차순 정렬 
    const sorted = [...priorities].sort((a, b) => b - a);
    
    while (!isFind) {
        // 프로세스
        const target = priorities[index % LENGTH];

        // 가장 높은 우선 순위의 프로세스일 때
        if (target === sorted[0]) {
            // 찾고자하는 location의 프로세스라면 반복문 종료
            if (index % LENGTH === location) isFind = true
              
            // 찾고자하는 프로세스가 아니라면
            else {
                sorted.shift();
                index += 1
                count += 1
            }
        } else index += 1
    }
    
    return count;
}
