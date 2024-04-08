function solution(people, limit) {
  people.sort((a, b) => a - b);

  let boatCount = 0;

  // 가장 가벼운 사람과 가장 무거운 사람을 가리킬 인덱스를 초기화
  let light = 0;
  let heavy = people.length - 1;

  // 가장 가벼운 사람부터 탐색하며 최소한의 구명보트 개수를 계산
  while (light <= heavy) {
    // 가장 가벼운 사람과 가장 무거운 사람을 더했을 때 구명보트의 무게 제한 이내에 들어올 경우 함께 태음
    if (people[light] + people[heavy] <= limit) {
      light++;
    }
    // 가장 무거운 사람은 무조건 구명보트에 태움
    heavy--;
    // 구명보트 개수를 증가
    boatCount++;
  }

  return boatCount;
}
