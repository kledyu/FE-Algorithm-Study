// numberFormat : 진수
// time : 말해야 하는 숫자 수
// members : 인원수
// orderOfTube : 튜브의 순서

function solution(numberFormat, time, members, orderOfTube) {
  // 진수변환 후 한 숫자씩 담을 배열
  const numberArray = [];

  // numberArray의 길이를 대략적으로 잡음 >> 더 좋은 방법이 있을 것 같음.
  const numberArrayLength = time * members;

  for (let i = 0; i < numberArrayLength; i++) {
    numberArray.push(...i.toString(numberFormat).split(''));
  }
  // 2진수의 경우 ['0', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1', ...],
  // 16진수의 경우 ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', '1', '0', '1', '1', '1', '2', '1', '3', ...]

  let finalAnswer = '';
  // 말해야 하는 횟수만큼 반목문
  for (let j = 0; j < time; j++) {
    // 튜브가 처음으로 말해야 할 항목은 numberArray[0 * members + (orderOfTube - 1)]
    // 튜브가 두번째로 말해야 할 항목은 numberArray[1 * members + (orderOfTube - 1)] ...
    finalAnswer += numberArray[j * members + (orderOfTube - 1)];
  }

  // uppercase
  return finalAnswer.toUpperCase();
}
