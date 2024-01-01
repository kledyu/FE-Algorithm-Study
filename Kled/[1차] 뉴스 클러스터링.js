function solution(str1, str2) {
    // 소문자 및 대문자 알파벳 허용, + 를 통해 연속적인 알파벳만 허용
    const rString = /^[a-zA-Z]+$/;
    const THRESHOLD = 65536;
    
    const clustering = (str) => {
        const arr = [];
        const lower = str.toLowerCase();
        
        for (let i = 0; i < lower.length - 1; i += 1) {
            const value = lower.slice(i, i + 2);

            // 영문자로 된 글자 쌍만 허용
            if (rString.test(value)) arr.push(value);
        }
        
        return arr
    }
    
    const cluster1 = clustering(str1)
    const cluster2 = clustering(str2)
    
    const union = cluster1.length + cluster2.length
    const intersection = cluster1.filter(value => {
        const index = cluster2.indexOf(value);
      
        if (index !== -1) {
            cluster2.splice(index, 1);
            return true; 
        }
    }).length;
  
    // 두 문자열 모두 유효하지 않을 때
    if (!union) return THRESHOLD;
    
    return Math.trunc(intersection * THRESHOLD / (union - intersection))
}
