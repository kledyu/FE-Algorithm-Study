function solution(word) {
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let flag = false

    function DFS(target) {
        // 입력값이 찾고자하는 word와 같거나 flag가 true라면 DFS 종료 
        if (target === word || flag) {
           flag = true;
           return;
       }

       // 만약 target의 길이가 5를 초과한다면 종료
       if (target.length > 5) return;
       
        count += 1;

        // A AA AAA AAAA AAAAA / AAAAE AAAAI ...
        for (let i = 0; i < alphabet.length; i++) {
            DFS(target + alphabet[i]);
        }
    }
    
   DFS('');
    
   return count;
}
