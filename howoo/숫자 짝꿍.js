// 시간초과 방법

function solution(X, Y) {
  const xSplit = X.split(''); 
  const ySplit = Y.split(''); 

  const includes = [];

  for (let i = 0; i < xSplit.length; i++) {
    if (ySplit.includes(xSplit[i])) {
      includes.push(xSplit[i]);
      
      const index = ySplit.indexOf(xSplit[i]);
      ySplit[index] = '';
    }
  }
  if (includes.length === 0) {
    return '-1';
  }

  const maxNumber = includes.sort((a, b) => b - a).join('');

  if (maxNumber[0] === '0') {
    return '0';
  }

  return maxNumber;
}

// 통과 방법
function solution(X, Y) {
  const xArr = new Array(10).fill(0); 
  const yArr = new Array(10).fill(0);

  const xSplit = X.split('');
  const ySplit = Y.split('');

  const includes = [];

  for (let i = 0; i < xSplit.length; i++) {
    xArr[xSplit[i]]++;
  }
  for (let i = 0; i < ySplit.length; i++) {
    yArr[ySplit[i]]++;
  }

// xArr : [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]
// yArr : [0, 1, 1, 0, 0, 2, 0, 0, 0, 0]

  // 최댓값이 되어야 하므로 역순으로 반복문 시작
  for (let i = 9; i >= 0; i--) {
    if (xArr[i] !== 0 && yArr[i] !== 0) {
      includes.push(String(i).repeat(Math.min(xArr[i], yArr[i])));
    }
  }

  const answer = includes.join('');
  if (answer === '') return '-1';
  if (answer[0] === '0') return '0';
  return answer;
}
