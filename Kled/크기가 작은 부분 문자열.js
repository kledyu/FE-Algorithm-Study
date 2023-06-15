function solution(t, p) {
    // 1. count = 0
    let count = 0;
    
    // 2. 빈 배열 설정
    let arr = [];
    
    // 3. for문 
    for (let i = 0; i <= t.length - p.length; i++) {
        arr.push([...t].splice(i, p.length))
    }
    
    for (let j = 0; j < arr.length; j++) {
        let str = ''
        for (let k = 0; k < p.length; k++) {
            str += arr[j][k]            
        }
        str * 1 <= p * 1 ? count++ : count 

    }
    return count
}
