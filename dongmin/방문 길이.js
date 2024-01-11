function solution(dirs) {
  let x = 0;
  let y = 0;
  const visited = new Map();

  // visited에 방문한 위치를 저장 => { x : [y1, y2, y3] }
  // 방문한 각 경로에 해당하는 축의 중간지점을 저장
  // ex) (0,0) -> (0,1) => { 0 : [0.5] }
  for (let i = 0; i < dirs.length; i += 1) {
    // Up
    if (dirs[i] === "U" && y <= 4) {
      y += 1;
      if (!visited.has(x) || !visited.get(x).includes(y - 0.5)) {
        visited.set(x, [...(visited.get(x) || []), y - 0.5]);
        continue;
      }
    }

    // Down
    if (dirs[i] === "D" && y >= -4) {
      y -= 1;
      if (!visited.has(x) || !visited.get(x).includes(y + 0.5)) {
        visited.set(x, [...(visited.get(x) || []), y + 0.5]);
        continue;
      }
    }

    // Right
    if (dirs[i] === "R" && x <= 4) {
      x += 1;
      if (!visited.has(x - 0.5) || !visited.get(x - 0.5).includes(y)) {
        visited.set(x - 0.5, [...(visited.get(x - 0.5) || []), y]);
        continue;
      }
    }

    // Left
    if (dirs[i] === "L" && x >= -4) {
      x -= 1;
      if (!visited.has(x + 0.5) || !visited.get(x + 0.5).includes(y)) {
        visited.set(x + 0.5, [...(visited.get(x + 0.5) || []), y]);
        continue;
      }
    }
  }

  const obj = Object.fromEntries(visited);
  const values = Object.values(obj).map((v) => v.length);
  return values.reduce((a, b) => a + b, 0);
}
