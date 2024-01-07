function solution(msg) {
  const answer = [];
  const alp = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  let word = '';

  for (let i = 0; i < msg.length; i += 1) {
    // 현재 글자를 word에 담기
    word += msg[i];

    // 만약 word가 alp 배열에 이미 있고, 마지막 글자가 아니라면 계속 word에 현재 글자 추가
    // 마지막 글자면 word의 인덱스에 1을 더한 수를 answer에 push
    if (alp.includes(word)) {
      if (i !== msg.length - 1) {
        continue;
      }

      answer.push(alp.indexOf(word) + 1);
      break;
    }

    // alp 배열에 word가 없다면 alp에 word를 push
    // word에서 맨뒤 글자를 잘라낸 문자열의 인덱스를 alp에서 찾아 1을 더함
    // 해당 값을 answer에 push후, word 초기화
    // i는 alp 배열에 없는 값을 만들기 위해 앞으로 1 더 움직였으므로 i - 1
    alp.push(word);
    const index = alp.indexOf(word.slice(0, word.length - 1)) + 1;
    answer.push(index);
    word = '';
    i -= 1;
  }

  return answer;
}
