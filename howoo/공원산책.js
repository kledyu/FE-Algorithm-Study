function solution(park, routes) {
  // 방향 정보
  const directions = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  // 좌표
  let [x, y] = [0, 0];

  // 시작점 좌표 알기 위해
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        [x, y] = [i, j];
        break; // 찾았으면 반복문을 다 돌 필요가 없음
      }
    }
  }

  routes.forEach((route) => {
    const [direction, moves] = route.split(' ');
    let [tempX, tempY] = [x, y]; // 임시 좌표
    let count = 0;

    while (count < moves) {
      [tempX, tempY] = [
        tempX + directions[direction][0],
        tempY + directions[direction][1],
      ];

      if (
        !park[tempX] || // x좌표를 초과하거나
        !park[tempX][tempY] || // y좌표를 초과하거나
        park[tempX][tempY] === 'X' // "X"를 만나면
      ) {
        break; // 탈출
      }

      count++; // if문에 걸리지 않으면 카운트 증가
    }

    if (count == moves) {
      // 카운트와 움직임 횟수가 같으면 임시좌표를 현좌표로 저장
      [x, y] = [tempX, tempY];
    }
  });
  return [x, y];
}

