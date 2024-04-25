// 1. [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']] 형태 만들기
// 2. [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']] 의 요소에서 배열의 길이가 1인 요소 ['2']를 찾아 내부요소('2')를 정답에 push
// 3. [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']] 의 요소에서 배열의 길이가 2인 요소 ['2', '1']를 찾아 내부요소를 돌면서 정답에 없는 요소('1')을 찾아 push
// 4. [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']] 의 요소에서 배열의 길이가 3인 요소 ['1', '2', '3']를 찾아 내부요소를 돌면서 정답에 없는 요소('3')을 찾아 push
// .. 반복

function solution(s) {
  // 문자열을 배열로 바꾸는 과정

  // '1,2,3},{2,1},{1,2,4,3},{2'
  const trimmedString = s.slice(2, -2);

  // ['1,2,3', '2,1', '1,2,4,3', '2']
  const splitted = trimmedString.split('},{');

  // [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']]
  const mapped = splitted.map((element) => element.split(','));

  const answer = [];
  // i가 1부터 4까지 증가
  for (let i = 1; i <= mapped.length; i++) {
    for (let j = 0; j < mapped.length; j++) {
      // 해당 요소의 길이가 i와 같은 순간의 요소
      if (mapped[j].length === i) {
        // 해당 요소(배열)을 돌면서 내부 요소가 answer배열에 포함되지 않은 경우 push
        for (let k = 0; k < mapped[j].length; k++) {
          if (!answer.includes(mapped[j][k])) {
            answer.push(mapped[j][k]);
          }
        }
      }
    }
  }

  // 숫자로 변환
  return answer.map(Number);
}



// 중간에 요소 길이순으로 sorting하며 3중 for문 (O(n^3)을 2중 for문 (O(n^2)으로 바꿀 수 있네요.
function solution(s) {
  // 문자열을 배열로 바꾸는 과정

  // '1,2,3},{2,1},{1,2,4,3},{2'
  const trimmedString = s.slice(2, -2);

  // ['1,2,3', '2,1', '1,2,4,3', '2']
  const splitted = trimmedString.split('},{');

  // [['1', '2', '3'],['2', '1'], ['1', '2', '3', '4'], ['2']]
  const mapped = splitted.map((element) => element.split(','));

  // *추가 [['2'], ['1', '2'], ['1', '2', '3'], ['1', '2', '3', '4'], ]
  const sorted = mapped.sort((a, b) => a.length - b.length);

  const answer = [];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted[i].length; j++) {
      if (!answer.includes(sorted[i][j])) {
        answer.push(sorted[i][j]);
      }
    }
  }

  return answer.map(Number);
}
