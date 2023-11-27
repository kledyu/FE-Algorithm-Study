function solution(s, skip, index) {
    let answer = '';
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i', 'j', 'k', 'l', 'm',
                       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const filteredAlphabets = alphabets.filter((alphabet) => !skip.includes(alphabet))
    
    Array.from(s).forEach(alphabet => {
        let targetIndex = filteredAlphabets.indexOf(alphabet) + index;
        
        while (!filteredAlphabets[targetIndex]) {
            targetIndex -= filteredAlphabets.length
        }
        
        answer += filteredAlphabets[targetIndex]
    })
    
    return answer;
}
