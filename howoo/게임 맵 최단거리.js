function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우

  // BFS를 위한 큐 초기화
  const queue = [];
  queue.push([0, 0]); // 시작 지점

  const distance = Array.from(Array(n), () => Array(m).fill(-1)); // 시작 지점으로부터의 거리를 저장하는 배열
  // Array(4) 하면 [undefined, undefined, undefined, undefined]가 생성
  // Array.from([1, 2, 3], (x) => 2x) 하면 [2, 4, 6]가 생성
  //  Array.from(Array(n), () => Array(m).fill(-1)) 은
  //  Array.from([undefined, undefined, undefined... ], () => Array(m).fill(-1));
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]

  distance[0][0] = 1; // 시작 지점의 거리는 1
  // [ 1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]
  // [-1, -1, -1, -1, -1]

  // BFS 수행
  while (queue.length > 0) {
    const [x, y] = queue.shift(); // 맨 앞에 요소
    console.log(queue);

    // 현재 위치에서 네 방향으로 이동
    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;

      // 맵을 벗어나는 경우 무시
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;

      // 이동할 수 있는 곳이고 아직 방문하지 않은 곳인 경우
      if (maps[nextX][nextY] === 1 && distance[nextX][nextY] === -1) {
        queue.push([nextX, nextY]);
        distance[nextX][nextY] = distance[x][y] + 1;
      }
    }
  }

  return distance[n - 1][m - 1]; // 상대 팀 진영까지의 최단 거리 반환
}
