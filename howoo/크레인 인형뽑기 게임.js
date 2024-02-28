function solution(board, moves) {
  const n = board.length;

  // 행위가 lane에서 이뤄지기 때문에 90도 회전시킴

  const rotatedBoard = [];
  for (let i = 0; i < n; i++) {
    rotatedBoard.push([]);
    for (let j = 0; j < n; j++) {
      rotatedBoard[i].push(board[n - j - 1][i]);
    }
  }

  // [0, 0, 0, 0, 0],
  // [0, 0, 1, 0, 3],
  // [0, 2, 5, 0, 1],
  // [4, 2, 4, 4, 2],
  // [3, 5, 1, 3, 1],

  // 90도 회전

  // [3, 4, 0, 0, 0]
  // [5, 2, 2, 0, 0]
  // [1, 4, 5, 1, 0]
  // [3, 4, 0, 0, 0]
  // [1, 2, 1, 3, 0]

  const stack = [];
  let count = 0;

  moves.forEach((move) => {
    let lane = rotatedBoard[move - 1]; // move에 해당하는 lane, move가 1인 경우 [3, 4, 0, 0, 0]
    const trimmedLane = lane.filter((move) => move !== 0); // 0 제외, [3, 4]
    const lastElement = trimmedLane[trimmedLane.length - 1]; // 마지막 요소 4
    stack.push(lastElement); // stack에 쌓음
    trimmedLane.pop(); // [3, 4]에서 4 없엠
    rotatedBoard[move - 1] = trimmedLane; // 해당 레인을 최신화

    if (
      stack[stack.length - 1] && // lane에 공이 없는 경우 stack에는 undefined를 넣게 되므로
      stack[stack.length - 2] &&
      stack[stack.length - 1] === stack[stack.length - 2] // 스택의 마지막 두 요소가 같으면
    ) {
      stack.pop(); // 마지막 두개 없엠
      stack.pop(); // 마지막 두개 없엠
      count = count + 2; // 카운트 2개 증가
    }
  });

  return count;
}
