// 가운데 숫자(1,5,8,0)으루부터 거리
// 처음에 1,5가의 대각선 길이를 1.5 (1보다는 크고 2보다는 작은 값)로 했었는데 그러면 13~20번 케이스 에러가 뜨더라고요.
// 유클리드 거리, 멘하트 거리 개념 처음 알았습니다.
const distanceLookup = {
  2: {
    1: 1,
    2: 0,
    3: 1,
    4: 2,
    5: 1,
    6: 2,
    7: 3,
    8: 2,
    9: 3,
    0: 3,
    '*': 4,
    '#': 4,
  },
  5: {
    1: 2,
    2: 1,
    3: 2,
    4: 1,
    5: 0,
    6: 1,
    7: 2,
    8: 1,
    9: 2,
    0: 2,
    '*': 3,
    '#': 3,
  },
  8: {
    1: 3,
    2: 2,
    3: 3,
    4: 2,
    5: 1,
    6: 2,
    7: 1,
    8: 0,
    9: 1,
    0: 1,
    '*': 2,
    '#': 2,
  },
  0: {
    1: 4,
    2: 3,
    3: 4,
    4: 3,
    5: 2,
    6: 3,
    7: 2,
    8: 1,
    9: 2,
    0: 0,
    '*': 1,
    '#': 1,
  },
};

// 눌러야 할 손을 알려주는 함수 (number: 입력해야할 수, leftIndex: 왼손 현재 위치, rightIndex: 오른손 현재위치, hand: 오른손 or 왼손잡이
function handToClick(number, letfIndex, rightIndex, hand) {
  // 오른손이 가까운 경우
  if (distanceLookup[number][letfIndex] > distanceLookup[number][rightIndex]) {
    return 'right';
  }
  // 왼손이 가까운 경우
  if (distanceLookup[number][letfIndex] < distanceLookup[number][rightIndex]) {
    return 'left';
  }
  // 거리가 같다면 손잡이에 따라
  return hand;
}

function solution(numbers, hand) {
  let answer = '';
  let letfIndex = '*';
  let rightIndex = '#';

  numbers.forEach((number) => {
    // 1, 4, 7은 왼손
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      letfIndex = number;

    // 3, 6, 9은 오른손
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightIndex = number;

    // 중간 숫자  
    } else {
      // 오른손
      if (handToClick(number, letfIndex, rightIndex, hand) === 'right') {
        answer += 'R';
        rightIndex = number;
        
      // 왼손 
      } else {
        answer += 'L';
        letfIndex = number;
      }
    }
  });

  return answer;
}
