function solution(maps) {
  const mapsY = maps.length;
  const mapsX = maps[0].length;
  // 상하좌우 이동을 위한 배열
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // y좌표, x좌표, 이동 거리
  const queue = [[0, 0, 1]];

  // 큐에서 가장 처음 요소를 꺼내 상하좌우로 이동
  // 이동할 수 있으면 이동하고, map에 이동 위치를 0으로 표시해 방문 처리
  // 이동 후, 현재 좌표와 이동거리를 큐에 추가
  while (queue.length > 0) {
    const [y, x, answer] = queue.shift();

    if (y === mapsY - 1 && x === mapsX - 1) {
      return answer;
    }

    for (const [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;

      if (
        nextX >= 0 &&
        nextX < mapsX &&
        nextY >= 0 &&
        nextY < mapsY &&
        maps[nextY][nextX] === 1
      ) {
        maps[nextY][nextX] = 0;
        queue.push([nextY, nextX, answer + 1]);
      }
    }
  }

  return -1;
}
