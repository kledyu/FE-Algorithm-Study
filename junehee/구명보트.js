function solution(people, limit) {
  let boat = 0;
  let i = 0;
  let j = people.length - 1;
  
  // 무거운 순서대로 정렬
  people.sort((a, b) => b - a);
  
  // 배열의 가장 왼쪽과 가장 오른쪽을 합한 것부터 계산
  // 두 요소가 같을 때까지 반복
  while (i <= j) {
      let sum = people[i] + people[j];
      
      if (sum > limit) {
          boat += 1; // 두 요소의 합이 제한보다 크면 한 사람만 태우므로 보트 1개 추가
          i += 1;    // 한 사람만 태우므로 i만 증가
      } else {
          boat += 1; // 제한보다 작거나 같으면 두 사람을 태우므로 보트 1개 추가
          i += 1;    // 두사람을 태우므로 i 증가, j 감소
          j -= 1;
      }
  }
  
  return boat;
}
