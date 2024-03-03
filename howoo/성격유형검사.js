// scoreTable의 인덱스 값
const TABLE_INDEX_LOOK_UP = {
  R: 0,
  T: 0,
  C: 1,
  F: 1,
  J: 2,
  M: 2,
  A: 3,
  N: 3,
};

function solution(survey, choices) {
  let answer = '';

  let scoreTable = [
    {
      R: 0,
      T: 0,
    },
    {
      C: 0,
      F: 0,
    },
    {
      J: 0,
      M: 0,
    },
    {
      A: 0,
      N: 0,
    },
  ];

  for (let i = 0; i < survey.length; i++) {
    const front = survey[i][0]; // "RT"인 경우 "R"
    const hind = survey[i][1]; // "RT"인 경우 "T"
    const choice = choices[i];

    if (choice === 1 || choice === 2 || choice === 3) {
      // "RT"인 경우
      // TABLE_INDEX_LOOK_UP[front] 는 0임
      // choice가 1,2,3인 경우 front 값에 점수를 추가해줘야함
      scoreTable[TABLE_INDEX_LOOK_UP[front]][front] += 4 - choice; // 1 >> 3, 2 >> 2, 3 >> 1
    }
    if (choice === 5 || choice === 6 || choice === 7) {
      scoreTable[TABLE_INDEX_LOOK_UP[front]][hind] += choice - 4;
    }
  }

  // 각 항목의 점수
  const R = scoreTable[0].R;
  const T = scoreTable[0].T;
  const C = scoreTable[1].C;
  const F = scoreTable[1].F;
  const J = scoreTable[2].J;
  const M = scoreTable[2].M;
  const A = scoreTable[3].A;
  const N = scoreTable[3].N;

  // 조건문
  if (R >= T) {
    answer += 'R';
  } else {
    answer += 'T';
  }

  if (C >= F) {
    answer += 'C';
  } else {
    answer += 'F';
  }
  if (J >= M) {
    answer += 'J';
  } else {
    answer += 'M';
  }
  if (A >= N) {
    answer += 'A';
  } else {
    answer += 'N';
  }

  return answer;
}
