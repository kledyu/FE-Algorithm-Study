function solution(clothes) {
  // hash map 생성
  const hash = new Map();

  // 배열을 돌면서 해당 부위에 몇가지 착용물들이 있는지를 카운팅
  clothes.forEach((element) => {
    const [wear, part] = element;
    if (hash.has(part)) {
      hash.set(part, hash.get(part) + 1);
    } else {
      hash.set(part, 1);
    }
  });

  // 모든 경우의 수는 각 부위의 경우의수 + 1 을 모두 곱한 수
  let answer = 1;
  for (const [key, value] of hash) {
    answer *= value + 1;
  }

  // 아무것도 입지 않은 경우 -1
  return answer - 1;
}
