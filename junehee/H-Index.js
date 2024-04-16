function solution(citations) {
    let H_Index = 0;
    
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) H_Index++;
        else break;
    }
    
    return H_Index;
}
