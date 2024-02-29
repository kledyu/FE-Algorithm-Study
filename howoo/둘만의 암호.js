const alpabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function solution(secret, skip, skipIndex) {
  // 알파벳에서 skip에 포함된 문자들을 제거
  const skippedAlpabet = alpabet.filter(
    (letter) => !skip.split('').includes(letter)
  );

  const answerArr = [];
  const secretArr = secret.split('');

  secretArr.forEach((element) => {
    // 스킵을 제거한 알파벳 배열에서 secret의 인덱스를 구함
    const index = skippedAlpabet.indexOf(element);
    
    // 인덱스에 스킵할 만큼의 인덱스를 더함, 이 때 배열의 길이보다 클 수 있으므로 나머지 연산
    const skippedIndex = (index + skipIndex) % skippedAlpabet.length;
    
    // 해당 인덱스의 값을 push
    answerArr.push(skippedAlpabet[skippedIndex]);
  });
  
  return answerArr.join('');
}
