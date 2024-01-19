function solution(files) {
  // head와 number를 추출하는 함수
  const getHeadAndNumber = (string) => {
    let startIndex = 0;
    let endIndex = string.length;

    // 숫자를 처음 만난 시점의 index 기록
    // isNaN은 공백을 숫자로 인식하므로 추가 조건 입력
    for (let i = 0; i < string.length; i += 1) {
      if (!isNaN(string[i]) && string[i] !== " ") {
        startIndex = i;

        // 최대 number가 5자리 이하일 때까지 탐색
        // 공백이나 숫자가 아닌 문자를 만나면 종료
        for (let j = i; j < i + 5 && j < string.length; j += 1) {
          if (isNaN(string[j]) || string[j] === " ") {
            endIndex = j;
            break;
          }
        }

        break;
      }
    }

    const head = string.slice(0, startIndex).toLowerCase();
    const number = parseInt(string.slice(startIndex, endIndex));
    return [head, number];
  };

  // 재정렬
  files.sort((a, b) => {
    const [aHead, aNumber] = getHeadAndNumber(a);
    const [bHead, bNumber] = getHeadAndNumber(b);

    // head끼리 사전순 정렬
    if (aHead !== bHead) {
      return aHead.localeCompare(bHead);
    }

    // number순 정렬
    if (aNumber !== bNumber) {
      return aNumber - bNumber;
    }

    // 원본 순서에 맞게 정렬
    return files.indexOf(a) - files.indexOf(b);
  });

  return files;
}
