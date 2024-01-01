function solution(k, dungeons) {
  let answer = 0;
  const visited = new Array(dungeons.length).fill(false);

  const dfs = (remain, count, visited) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];

      // 방문한 적 없고, 남은 피로도가 요구 피로도보다 많으면 방문.
      if (!visited[i] && remain >= req) {
        visited[i] = true;
        // 다음 던전부터 더이상 방문할 던전이 없을 때 까지 방문
        dfs(remain - use, count + 1, visited);
        // 다음 i에 대한 방문을 위해 초기화
        visited[i] = false;
      }
    }
  };

  dfs(k, 0, visited);

  return answer;
}
