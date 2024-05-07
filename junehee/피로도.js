function solution(k, dungeons) {
    let count = [];
    let visited = new Array(dungeons.length).fill(false);
    
    function DFS(K, L) {
        count.push(L);
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= K) {
                visited[i] = true;
                DFS(K - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }
    }
    
    DFS(k, 0)
    
    return Math.max(...count);
}
