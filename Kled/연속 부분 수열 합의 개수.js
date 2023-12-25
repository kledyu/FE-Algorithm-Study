function solution(elements) {
    // 원본 배열의 길이
    const len = elements.length;
    
    // 배열 복제
    const duplicatedArray = [...elements, ...elements]

    // 주어진 elements를 Set으로 선언 (길이가 1인 연속 부분 포함)
    const answer = new Set(elements);
    
    // 배열 내 합을 구하는 함수
    const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0);
    
    // 배열 내 길이만큼 반복
    for (let i = 0; i < len; i += 1) {
        let firstIdx = i;
        
        for (let j = 2; j <= len; j += 1) {
            let amount = j;
            const slicedArray = duplicatedArray.slice(firstIdx, amount + firstIdx)
            
            answer.add(getSum(slicedArray))
        }
    }
    
    return answer.size;
}
