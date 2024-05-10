function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    let count = 0;
    let flag = false;
    
    function DFS(char) {
        if (char.length > 5 || flag) return;
        if (char === word) {
            flag = true;
            return;
        }
       
        count++;
       
        for (let i = 0; i < vowels.length; i++) {
            DFS(char + vowels[i]);
        }
    }
    
    DFS('');
    
    return count;
}
