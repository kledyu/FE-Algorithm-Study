// k: 현재 피로도, dungeons: 던전
function solution(k, dungeons) {
  let answer = 0;
    
  const dfs = (k, dungeons, visited) => {
    for (let i = 0; i < dungeons.length; i += 1) {
      // [require: 최소 필요 피로도, consume: 소모 피로도]
      const [require, consume] = dungeons[i];
        
      // 이미 방문한 던전이거나, 현재 피로도로 방문할 수 없는 던전일 경우 for 실행문 종료
      if (!require || require > k) continue;
        
      const copy = [...dungeons]
    
      // 현재 던전 방문 처리
      copy[i] = [null, null];
        
      dfs(k - consume, copy, visited + 1);
    }
      
     answer = Math.max(visited, answer);
  };
    
  dfs(k, dungeons, 0);
    
  return answer;
}
