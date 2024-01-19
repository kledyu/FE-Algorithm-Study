function solution(m, n, board) {
  let answer = 0;
  let process = true;

  // 2차원 배열로 변경
  board = board.map((string) => [...string]);

  // 2x2 정사각형인지 확인하는 함수
  const isSquare = (x, y) => {
    return (
      board[x][y] === board[x + 1][y] &&
      board[x][y] === board[x][y + 1] &&
      board[x][y] === board[x + 1][y + 1]
    );
  };

  // 빈칸이 아닌 칸을 빈칸으로 만들고 answer + 1 하는 함수
  const remove = (y, x) => {
    if (board[y][x] !== " ") {
      board[y][x] = " ";
      answer += 1;
    }
    if (board[y + 1][x] !== " ") {
      board[y + 1][x] = " ";
      answer += 1;
    }
    if (board[y][x + 1] !== " ") {
      board[y][x + 1] = " ";
      answer += 1;
    }
    if (board[y + 1][x + 1] !== " ") {
      board[y + 1][x + 1] = " ";
      answer += 1;
    }
  };

  // 빈 칸을 찾으면 y축 방향으로 빈 칸이 얼마나 있는지 간격 계산 후
  // 해당 간격만큼 끌어내리는 함수
  const drop = () => {
    for (let i = m - 1; i > 0; i -= 1) {
      for (let j = 0; j < n; j += 1) {
        if (board[i][j] === " ") {
          let k = i;
          while (k > 1 && board[k - 1][j] === " ") {
            k -= 1;
          }
          board[i][j] = board[k - 1][j];
          board[k - 1][j] = " ";
        }
      }
    }
  };

  // 탐색하다가 isSquare가 참인 경우를 만나면 locations 배열에 좌표를 담음
  // (미리 지우면 답이 달라짐)
  while (process) {
    const locations = [];
    for (let i = 0; i < m - 1; i += 1) {
      for (let j = 0; j < n - 1; j += 1) {
        if (board[i][j] !== " " && isSquare(i, j)) {
          locations.push([i, j]);
        }
      }
    }

    // isSquare인 경우가 없으면 while문 종료
    if (!locations.length) {
      process = false;
    }

    // 각 좌표에 대해 칸을 비우고 칸 채우기
    locations.forEach((location) => {
      remove(...location);
    });
    drop();
  }

  return answer;
}
