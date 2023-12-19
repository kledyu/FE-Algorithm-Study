function solution(n, words) {
  const arr = [];
  let person = 0;
  let count = 0;

  for (let i = 0; i < words.length; i += 1) {
    if (arr.length === 0) {
      arr.push(words[i]);
      continue;
    }
    // arr에 이미 있는 단어이거나
    // arr의 마지막 요소의 마지막 글자와 현재 단어의 첫 글자가 일치하지 않으면
    // 해당 차례를 count에 담고 반복문 종료
    if (arr.includes(words[i]) || arr.at(-1).slice(-1) !== words[i].charAt(0)) {
      person = (i + 1) % n === 0 ? n : (i + 1) % n;
      count = Math.ceil((i + 1) / n);
      break;
    }

    arr.push(words[i]);
  }
  return [person, count];
}
