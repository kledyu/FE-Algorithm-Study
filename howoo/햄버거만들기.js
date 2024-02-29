// 쉬운 문제인줄 알았는데 어려운 문제였네요 ㅋㅋ

// 시간초과 풀이 

function solution(ingredient) {
  const hamburger = '1231';

  // 현재까지 남은 재료를 string으로
  let leftIngredient = ingredient.join('');

  // 변화발생 flag
  let isChanged = true;
  let count = 0;

  // replace의 실행이 발생하지 않을 때까지 while문
  while (isChanged) {
    // 1231을 ''로 바꿈
    const replaced = leftIngredient.replace(hamburger, '');

    // replace가 발생했으면
    if (replaced !== leftIngredient) {
      count++;

      // 남은 재료를 replaced로 바꿈
      leftIngredient = replaced;
    } else {
      // 변화가 없는 경우 flag 변경
      isChanged = false;
    }
  }

  return count;
}

// Stack 사용방법
function solution(ingredient) {
  let count = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    // 가장 마지막의 4개의 원소의 조인값이 1231인경우
    if (stack.slice(-4).join('') === '1231') {
      // 없에버리고 카운트 증가
      stack.splice(-4);
      count++;
    }
  }
  return count;
}

