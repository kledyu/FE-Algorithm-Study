  function solution(board, moves) {
    let answer = 0;
    const moved = [];
    const filteredBoard = Array.from({ length: board.length }).map(() => []);
    const removeDup = (arr) => {
      let idx = 0;
      while (idx < arr.length - 1) {
        if (arr[idx] === arr[idx + 1]) {
          arr.splice(idx, 2);
          answer += 2;
          idx = 0;
        } else {
          idx++;
        }
      }
    };
    board.forEach((row) => {
      row.forEach((i, idx) => {
        i && filteredBoard[idx].push(i);
      });
    });
    moves.forEach((v) => {
      const shifted = filteredBoard[v - 1].shift();
      shifted && moved.push(shifted);
    });
    removeDup(moved);
    return answer;
  }
