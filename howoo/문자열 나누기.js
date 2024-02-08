function solution(s) {
  const stringArray = s.split('');

  let firstLetter = s[0];

  let sameCount = 0;
  let notSameCount = 0;

  const splitIndexMarker = [];

  for (let i = 0; i < stringArray.length; i++) {
    // 첫번째 글자와 현재 선택된 글자가 같으면
    if (stringArray[i] === firstLetter) {
      sameCount++;

    // 첫번째 글자와 현재 선택된 글자가 다르면  
    } else {
      notSameCount++;

      if (sameCount === notSameCount) {
        // 현재의 인덱스를 푸시
        splitIndexMarker.push(i);

        // 처음 글자를 다음 글자로 초기화
        firstLetter = s[i + 1];
        // sameCount, notSameCount 초기화
        sameCount = 0;
        notSameCount = 0;
      }
    }

    // 만약 마지막 글자인데
    if (i === stringArray.length - 1) {
      // 카운트가 다른 경우, 예) 'ab   ra   ca   da   br   a'
      if (sameCount !== notSameCount) {
        splitIndexMarker.push(i);
      }
    }
  }

  return splitIndexMarker.length;
}
