const speakableWords = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {

  let copy = [...babbling]
    .filter((el) => !el.includes('ayaaya'))
    .filter((el) => !el.includes('yeye'))
    .filter((el) => !el.includes('woowoo'))
    .filter((el) => !el.includes('mama'));


  speakableWords.forEach((word) => {
    copy = copy.map((el) => el.replaceAll(word, ' '));
  });


  const filterEmpty = trim.filter((el) => el === '');
  return filterEmpty.length;
}

