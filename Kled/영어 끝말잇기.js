function solution(n, words) {
    let stack = [];
    let order = 0;

    for (let i = 0; i < words.length; i += 1) {
        stack.push(words[i]);
      
        // 1. ❌ 이전에 등장했던 단어일 때
        if (stack.length !== new Set(stack).size) break;
        
        // 2. ❌ 앞사람이 말한 단어의 마지막 문자로 시작하는 단어가 아닐 떼
        if (i > 0 && [...words[i - 1]].reverse()[0] !== [...words][i][0]) break;
         
        // 3. ✅ 올바른 끝말잇기 단어일 때
        order += 1
    }
    
    // 탈락자가 발생 안했을 때
    if (words.length === order) return [0, 0]

    return [order % n + 1, Math.floor(order / n) + 1];
}
