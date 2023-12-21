function solution(new_id) {
  const alp = 'abcdefghijklmnopqrstuvwxyz';
  const arr = [];

  // 1단계
  // 소문자로 변환
  new_id = new_id.toLowerCase();

  // 2단계
  // 알파벳, 숫자, 해당 3가지 기호만 필터링
  new_id = [...new_id]
    .filter(
      (text) =>
        alp.includes(text) ||
        !Number.isNaN(Number(text)) ||
        text === '-' ||
        text === '.' ||
        text === '_',
    )
    .join('');

  // 3단계
  // arr 배열에 문자를 담되 arr의 마지막 문자와
  // 순회중인 배열의 현재 문자가 모두 마침표면 담지 않기
  for (let i = 0; i < new_id.length; i += 1) {
    if ([...new_id][i] === '.' && arr[arr.length - 1] === '.') {
      continue;
    }
    arr.push([...new_id][i]);
  }
  new_id = arr.join('');

  // 4단계
  // 첫 글자 또는 마지막 글자가 마침표면 slice로 잘라내기
  if (new_id[0] === '.') {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] === '.') {
    new_id = new_id.slice(0, -1);
  }

  // 5단계
  // new_id가 빈 문자면 a 입력
  if (!new_id.length) {
    new_id = 'a';
  }

  // 6단계
  // 16자리 이상이면 15자리까지 slice 후 마지막 마침표 제거
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.slice(0, -1);
    }
  }

  // 7단계
  // 2자리 이하면 3자리가 될 때가지 padEnd로 마지막 문자 채우기
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }

  return new_id;
}
