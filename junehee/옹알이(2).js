function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (let b of babbling) {
        for (const w of word) {
            let repeat = w.repeat(2);
            if (b.includes(repeat)) continue;   // 두 번 반복되는 것은 발음할 수 없으므로 패스
            b = b.split(w).join(' ');           // 발음 가능한 부분을 ' '으로 치환하여 재할당 - 단어 재조합 방지
        }
        
        if (!b.split(' ').join('').length) count += 1;   // 발음 가능한 부분을 공백으로 지워 길이가 0이면 발음 가능한 조합이므로 카운팅
    }
    
    return count;
}
