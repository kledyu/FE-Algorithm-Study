const speakableWords = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
  // 연속으로 발음하는 경우 필터링
  // 정규표현식 몰라서 이렇게 함
  let copy = [...babbling]
    .filter((el) => !el.includes('ayaaya'))
    .filter((el) => !el.includes('yeye'))
    .filter((el) => !el.includes('woowoo'))
    .filter((el) => !el.includes('mama'));

  // word => ' '로 바꿈
  // ''로 할경우 'yayae'와 같은 경우가 발음 가능하다고 판정될 수 있음
  speakableWords.forEach((word) => {
    copy = copy.map((el) => el.replaceAll(word, ' '));
  });

  // 발음 가능 할 경우 결과 값이 '   ' 처럼 나타남 
  const trim = copy.map((el) => el.trim());
  const filterEmpty = trim.filter((el) => el === '');
  return filterEmpty.length;
}

console.log(
  solution(['ayayeayaye', 'yeye', 'yyeayayee', 'yemawoo', 'ayaayaa'])
);
