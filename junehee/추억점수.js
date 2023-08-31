function solution(name, yearning, photo) {
  let answer = [];
  const memory = {};
  
  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
  }
  
  photo.forEach(list => {
    let sum = 0;
    list.forEach(name => {
        if (memory[name]) {
            sum += memory[name]
        }
    })
    answer.push(sum)
  })
  
  return answer;
}

- 정답을 출력할 배열 `answer` , 그리운 사람의 이름과 점수를 담은 객체 `memory` 선언
- 반복문을 돌면서 그리운 사람 이름 `name` , 점수 `yearning` 에 접근하여 `key: value` 형태로 만들어준다
- `forEach` 메서드를 통해 photo 배열 안에 있는 각각의 `list` 에 접근 (사진에 등장하는 사람)
- `name` (사진에 등장하는 사람의 이름)이 `memory`에 있을 경우 (점수가 있는 경우) `sum` 에 점수를 더함
- `push` 메서드를 통해 총 합계 점수를 `answer` 에 넣어준다
