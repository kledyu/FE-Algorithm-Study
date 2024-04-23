// e.g.
// clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]

// Object 활용
function solution(clothes) {
    let hash = {};
    
    for (let [_, category] of clothes) {
        hash[category] = hash[category] ? hash[category] + 1 : 2
    }
    
    let answer = Object.values(hash).reduce((acc, cur) => acc * cur)
    
    return answer - 1;
}

// Map 활용
function solution(clothes) {
    let hash = new Map();

    // 옷의 종류만 사용 [_, "headgear"] [_, "eyewear"] [_, "headgear"]
    for (const [_, cloth] of clothes) {
        // 해시에 해당하는 종류의 옷이 있는지 확인
        if (hash.has(cloth)) {
            // 있으면 기존 값에 +1
            hash.set(cloth, hash.get(cloth) + 1)
        } else {
            // 없으면 새로운 값 1 생성
            hash.set(cloth, 1)
        }
    }

    // 총 가진 옷의 개수만 가져옴 [2, 1]
    // 하나의 옷에서 해당 옷을 입은 경우와 해당 옷을 입지 않은 2가지 경우의 수가 존재
    // 현재 값(cur)에 경우의 수를 추가하여(+1) 총 조합할 수 있는 수 계산 (acc * (cur + 1))
    // 아무것도 입지 않은 경우의 수 삭제 (-1)
    return [...hash.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;    
}
