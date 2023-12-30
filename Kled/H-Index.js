function solution(citations) {
    let answer = 0;
    
    for (let i = citations.length; i >= 1; i -= 1) {
        const over = [];
        
        citations.forEach(citation => {
            if (citation >= i) over.push(citation);
        })
      
        if (over.length >= i && i > answer) answer = i
    }
    
    return answer;
}
