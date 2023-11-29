function solution(numbers, hand) {
  const result = [];
  const left = [0, 0];
  const right = [2, 0];
  const keypad = [
    ['*', 7, 4, 1],
    [0, 8, 5, 2],
    ['#', 9, 6, 3],
  ];
  const [leftKey, _, rightKey] = keypad;

  // 해당 숫자의 인덱스를 반환하는 함수
  const getIndex = (num) => {
    for (let i = 0; i < keypad.length; i += 1) {
      for (let j = 0; j < keypad[i].length; j += 1) {
        if (num === keypad[i][j]) {
          return [i, j];
        }
      }
    }
  };

  // 두 좌표간의 거리를 반환하는 함수
  const getDistance = (start, end) => {
    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  };

  // 양손중 거리가 가까운 손을 반환하는 함수
  const compareDistance = (left, right, thisIndex) => {
    const comparedResult =
      getDistance(left, thisIndex) - getDistance(right, thisIndex);
    if (comparedResult < 0) {
      return 'L';
    } else if (comparedResult > 0) {
      return 'R';
    } else {
      return hand[0].toUpperCase();
    }
  };

  numbers.forEach((num) => {
    const [x, y] = getIndex(num);

    // 왼쪽 키패드의 경우
    if (leftKey.includes(num)) {
      result.push('L');
      left[0] = x;
      left[1] = y;

    // 오른쪽 키패드의 경우 
    } else if (rightKey.includes(num)) {
      result.push('R');
      right[0] = x;
      right[1] = y;

    // 가운데 키패드의 경우
    } else {
      const hand = compareDistance(left, right, [x, y]);
      result.push(hand);
      if (hand === 'R') {
        right[0] = x;
        right[1] = y;
      } else {
        left[0] = x;
        left[1] = y;
      }
    }
  });
  return result.join('');
}
