function solution(k, tangerine) {
    let answer = 0;
    let tangerines = 0;
    let frequency = new Map();

    // 귤의 크기(key)와 개수(value)를 Map에 저장
    tangerine.forEach(value => {
        frequency.set(value, frequency.get(value) ? frequency.get(value) + 1 : 1)
    })

    // 저장한 Map의 value만 배열로 변환 후, 내림차순 정렬 
    // ex) [6, 3, 2, 1]
    const sortedArray = [...frequency.values()].sort((a, b) => b - a);

    // 담으려는 귤의 개수(k)를 만족할 때까지 반복
    for (let i = 0; i < sortedArray.length; i += 1) {
        tangerines += sortedArray[i];
        answer += 1;
        
        if (tangerines >= k) break;
    }
    
    return answer;
}
