function solution(x, y, n) {
  const visited = new Set();
  const queue = [[y, 0]];

  // queue에서 순서대로 값을 꺼내며 진행
  while (queue.length > 0) {
    const [current, count] = queue.shift();

    // 현재의 값이 x와 같아지면 count를 return
    if (current === x) {
      return count;
    }

    // current가 visited에 없는 값이면 visited에 추가
    // queue에 각각 current - n, current / 2, current / 3 을 한 값을 담음
    // 단, x보다 값이 작아지거나 나누어 떨어지지 않는 경우 제외
    if (current > x && !visited.has(current)) {
      visited.add(current);

      if (current - n >= x) {
        queue.push([current - n, count + 1]);
      }
      if (current % 2 === 0) {
        queue.push([current / 2, count + 1]);
      }
      if (current % 3 === 0) {
        queue.push([current / 3, count + 1]);
      }
    }

    // if문으로 걸러지지 못한 경우 shift()만 진행하고 다음 단계로 진행
    continue;
  }
  return -1;
}
