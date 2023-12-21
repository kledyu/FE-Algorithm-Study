function solution(people, limit) {
  let answer = 0;
  let first = 0;
  let last = people.length - 1;
  people.sort((a, b) => a - b);

  // 몸무게가 가장 무거운 사람이 가장 가벼운 사람과 같이 탈 수 있는지 확인
  // 보트에 태울 때마다 가벼운 쪽의 인덱스는 증가시키고 무거운쪽의 인덱스는 감소시킴
  while (first <= last) {
    if (people[first] + people[last] <= limit) {
      first += 1;
    }
    last -= 1;
    answer += 1;
  }

  return answer;
}
