function solution(str, num) {
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';
    
    for (let i = 0; i < str.length; i++) {
        // 공백
        if (str[i] === ' ') {
            answer += ' '
            continue
        }
        // 대문자 소문자 배열 정하기
        let arr = upperCases.includes(str[i]) ? upperCases : lowerCases
        
        // 인덱스 추출
        let idx = arr.indexOf(str[i]) + num
        
        // 3
        idx >= arr.length ? idx -= arr.length : idx
        
        // 빈 문자열에 하나씩 더해간다
        answer += arr[idx]
    }
    
    return answer;
}
