function solution(s) {
    const answer = [];
    
    s.split(' ').forEach(word => {
        let temp = '';
        
        Array.from(word).forEach((spelling, index) => {
            // 첫 번째 이외의 글자
            if (index) return temp += Array.from(word)[index].toLowerCase();

            // 첫 번째 글자
            temp += Array.from(word)[index].toUpperCase();
        })
        answer.push(temp);
    })
    
    return answer.join(' ');
}
