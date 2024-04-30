function solution(str1, str2) { 
    let arr1 = multiset(str1.toLowerCase());
    let arr2 = multiset(str2.toLowerCase());
    
    let intersect = 0;
    let union = 0;
    
    let set = new Set([...arr1, ...arr2]);
    
    set.forEach(char => {
        const countArr1 = arr1.filter(el => el === char).length;
        const countArr2 = arr2.filter(el => el === char).length;
        union += Math.max(countArr1, countArr2)
        intersect += Math.min(countArr1, countArr2)
    })
    
    const J = Math.floor((intersect / union) * 65536);
    
    if (!union) return 65536;
    else return J;
}

// 다중집합 구하는 함수
function multiset(str) {
    const multiset = [];
    const regexp = new RegExp(/^[a-z]*$/);
    
    let char;
    
    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) break;
        char = str.slice(i, i + 2);
        if (regexp.test(char)) multiset.push(char)
    }
    
    return multiset;
}
