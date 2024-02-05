const speakableWords = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {

  // speakableWord가 연속적으로 나오면 안되기 때문에 미리 필터링함
  // 정규표현식 알면 쉬울 거 같은데 몰라서 이렇게 했어요.
  let copy = [...babbling]
    .filter((el) => !el.includes('ayaaya'))
    .filter((el) => !el.includes('yeye'))
    .filter((el) => !el.includes('woowoo'))
    .filter((el) => !el.includes('mama'));

  // speakableWord가 있는 경우 해당 단어를 한칸 비어있는 문자(' ') 변경
  // ('')로 할경우 'yayae' 에서 aya를 지울경우 'ye'가 되어서 다음 실행에서 'ye'가 지워질 수 있음.
  speakableWords.forEach((word) => {
    copy = copy.map((el) => el.replaceAll(word, ' '));
  });

  // 결과물은 ['  ', 'a   ', 't    ed'] 이런식으로 되는데 이중 '   ' 이런 애들이 말할 수 있는 단어임.
  // trim()을 통해서 '   ' 를  ''로 만들어주는 작업
  const trim = copy.map((el) => el.trim());

  // ''인 애들 필터링
  const filterEmpty = trim.filter((el) => el === '');
  return filterEmpty.length;
}

