// 사실상 정규표현식을 물어본 문제라고 볼 수 있네요.
// chat gpt도움으로 풀었습니다.
// chat gpt가 있는데 더이상 정규표현식을 외워야 할지는 의문입니다.

function solution(new_id) {
  let id = new_id;
  console.log(0, id);

  // 1단계 : 소문자 >> 대문자
  id = id.toLowerCase();
  console.log(1, id);

  // 2단계 : 소문자, 숫자, -, _, . 제외 삭제
  id = id.replace(/[^a-z0-9\-_.\s]/g, '');
  console.log(2, id);

  //  3단계 : 연속된 .. >> .
  id = id.replace(/\.{2,}/g, '.');
  console.log(3, id);

  // 4단계 : 처음과 끝에 있는 .삭제
  if (id.startsWith('.')) {
    id = id.slice(1);
  }
  if (id.endsWith('.')) {
    id = id.slice(0, -1);
  }
  console.log(4, id);

  // 5단계 : 빈문자열 있으면 a대입
  id = id.replace(/ /g, 'a');
  console.log(5, id);

  // 6-1단계 : 16자 이상이면 15자만
  id = id.slice(0, 15);
  //6-2단계 : 15번째가 .이면 삭제
  if (id.endsWith('.')) {
    id = id.slice(0, -1);
  }
  console.log(6, id);

  // 7단계 : 2자 이하면 마지막 글자 반복해서 3자로
  if (id.length === 0) {
    id = 'aaa';
  }
  if (id.length === 1) {
    id = id[0] + id[0] + id[0];
  }
  if (id.length === 2) {
    id = id[0] + id[1] + id[1];
  }
  console.log(7, id);

  return id;
}
