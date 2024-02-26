// 효율성 테스트 통과 못함
function solution(participants, completions) {
  for (const completion of completions) {
    const completionIndex = participants.indexOf(completion); // participants에서 완료자의 index값
    participants.splice(completionIndex, 1); // 해당 인덱스값을 삭제함
  }
  const answer = participants[0]; 마지막 남은 배열 요소
  return answer;
}
// 시간복잡도 O(n * m) : 외부 completions 배열 순회, 내부 participants 순회


// 헤시맵 사용
// solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
function solution(participants, completions) {
  const hashMap = new Map();
  let answer;

  for (const participant of participants) {
    if (!hashMap.has(participant)) {
      hashMap.set(participant, 1);
    } else {
      hashMap.set(participant, hashMap.get(participant) + 1);
    }
  }
  console.log(hashMap);
  // {'mislav' => 2, 'stanko' => 1, 'ana' => 1}

  for (const completion of completions) {
    if (hashMap.get(completion)) {
      hashMap.set(completion, hashMap.get(completion) - 1);
    }
  }
  console.log(hashMap);
  // {'mislav' => 1, 'stanko' => 0, 'ana' => 0}

  for (const participant of participants) {
    if (hashMap.get(participant) === 1) {
      answer = participant;
    }
  }
  return answer;
}


// 다른 정답
function solution(participants, completions) {
  participants.sort();
  completions.sort();
  // 정렬 후 일치하지 않는 순간 해당 participants return
  for (var i = 0; i < participants.length; i++) {
    if (participants[i] !== completions[i]) {
      return participants[i];
    }
  }
}
