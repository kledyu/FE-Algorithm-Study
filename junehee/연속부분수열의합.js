// 실패 코드
function solution(elements) {
    let set = new Set();
    const length = elements.length;
    
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = i; j < i + length; j++) {
            sum += elements[(i+j) % length];
            set.add(sum);
        }
    }
    
    return set.size;
}

// 참고 풀이
function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
  
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            set.add(sum);
        }
    }
  
    return set.size;
}
