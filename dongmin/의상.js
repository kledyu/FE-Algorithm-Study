function solution(clothes) {
  let answer = 1;
  const map = new Map();

  // 해쉬 생성
  clothes.forEach((cloth) => {
    const [_, category] = cloth;
    map.set(category, (map.get(category) || 0) + 1);
  });

  // 해당 카테고리를 고르지 않는 경우가 있으므로
  // 각 카테고리별 수량에 1을 더한 수를 answer에 곱함
  for (let num of Array.from(map.values())) {
    answer *= num + 1;
  }

  // 모든 카테고리에서 아무것도 고르지 않은 경우의 수인 1을 빼고 answer 반환
  return answer - 1;
}
