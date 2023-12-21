function solution(numbers, hand) {
  const keypad = [
    ['*', 7, 4, 1],
    [0, 8, 5, 2],
    ['#', 9, 6, 3],
  ];
  let left = [0, 0];
  let right = [2, 0];
  const answer = [];

  function getIndex(a) {
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (keypad[i][j] === a) {
          return [i, j];
        }
      }
    }
  }

  numbers.forEach((i) => {
    if (keypad[0].includes(i)) {
      answer.push('L');
      left = getIndex(i);
    } else if (keypad[2].includes(i)) {
      answer.push('R');
      right = getIndex(i);
    } else if (keypad[1].includes(i)) {
      const leftDistance =
        Math.abs(getIndex(i)[0] - left[0]) + Math.abs(getIndex(i)[1] - left[1]);
      const rightDistance =
        Math.abs(getIndex(i)[0] - right[0]) +
        Math.abs(getIndex(i)[1] - right[1]);

      if (leftDistance > rightDistance) {
        answer.push('R');
        right = getIndex(i);
      } else if (leftDistance < rightDistance) {
        answer.push('L');
        left = getIndex(i);
      } else if (leftDistance === rightDistance) {
        if (hand === 'right') {
          answer.push('R');
          right = getIndex(i);
        } else if (hand === 'left') {
          answer.push('L');
          left = getIndex(i);
        }
      }
    }
  });
  return answer.join('');
}
