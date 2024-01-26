  function solution(strings, n) {
    const result = strings
      .sort() // 알파벳정렬
      .map((string) => ({ string: string, nThLetter: string[n] })) // 원래 단어와 단어의 n번째 알파벳을 객채의 배열로 맵핑
      .sort((a, b) => {
        if (a.nThLetter < b.nThLetter) {
          return -1;
        }
        if (a.nThLetter > b.nThLetter) {
          return 1;
        }
        return 0;
      }) // nThLetter 알파벳순으로 정렬
      .map((obj) => obj.string); // 원래 단어만 매핑
    return result;
  }
