// solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);

function solution(keymap, targets) {
  const map = {}; // {A : 1, B : 1 ... 이 될 예정 }

  for (const key of keymap) {
    key // "ABACD"
      .split('') // ["A", "B", "A", "C" ,"D"]
      .forEach(
        (letter, index) =>
          (map[letter] = map[letter] < index + 1 ? map[letter] : index + 1)
      );
  }

  // map = {A: 1, B: 1, C: 2, D: 5, E: 3, F: 4}

  const answer = [];
  for (const target of targets) {
    let count = 0;
    target
      .split('') // ["A", "B", "C", "D"]
      .forEach((elemenet) =>
        // "A" 가 map 객체의 키값으로 이다면 count값에 해당 키갑의 value를 더함
        // 없다면 -1
        map[elemenet] ? (count += map[elemenet]) : (count = -1)
      );
    answer.push(count);
  }

  return answer;
}
